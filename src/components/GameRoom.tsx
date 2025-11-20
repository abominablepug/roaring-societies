import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Topic, Door } from '../types'; // Ensure path is correct
import SubArea from './SubArea';

// --- Constants for Physics & Tuning ---
const PLAYER_SIZE_PX = 64; 
const GROUND_LEVEL = 82; // % from top of screen where the floor is
const MOVEMENT_SPEED = 40; // % of screen width per second
const JUMP_FORCE = 90; // Upward force
const GRAVITY = 250; // Downward acceleration
const SPRINT_MULTIPLIER = 1.8;

interface GameRoomProps {
  topic: Topic;
  playerImage?: string;
  onExit: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ topic, playerImage, onExit }) => {
  // --- State for UI only ---
  const [activeDoor, setActiveDoor] = useState<Door | null>(null);
  const [alert, setAlert] = useState<string | null>(null);
  
  // --- Refs for Game Engine ---
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  
  // Physics State
  const physics = useRef({
    x: 50, // % Horizontal
    y: GROUND_LEVEL, // % Vertical
    vy: 0, // Vertical Velocity
    isGrounded: true
  });

  // Input State
  const keys = useRef<Record<string, boolean>>({});

  // --- Input Listeners ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keys.current[e.key.toLowerCase()] = true;
    const handleKeyUp = (e: KeyboardEvent) => keys.current[e.key.toLowerCase()] = false;
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // --- The Game Loop ---
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (time - previousTimeRef.current) / 1000;
      updatePhysics(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [topic]); 

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // --- Physics Logic ---
  const updatePhysics = (dt: number) => {
    if (!containerRef.current || !playerRef.current) return;
    
    const p = physics.current;
    const k = keys.current;

    // 1. Horizontal Movement
    let dx = 0;
    if (k['a'] || k['arrowleft']) dx -= 1;
    if (k['d'] || k['arrowright']) dx += 1;

    const speed = k['shift'] ? MOVEMENT_SPEED * SPRINT_MULTIPLIER : MOVEMENT_SPEED;
    p.x += dx * speed * dt;
    p.x = Math.max(2, Math.min(98, p.x)); // Clamp to screen edges

    // 2. Vertical Movement (Jump & Gravity)
    if (p.isGrounded && (k[' '] || k['w'] || k['arrowup'])) {
      p.vy = -JUMP_FORCE;
      p.isGrounded = false;
    }

    p.vy += GRAVITY * dt;
    const nextY = p.y + (p.vy * dt);
    
    // 3. Collision Detection
    let hasLanded = false;
    let landingY = GROUND_LEVEL;

    // A. Platform Collision
    // We only land if we were previously ABOVE the platform and are now falling onto it/through it
    // and we are within the X bounds of the platform.
    if (topic.platforms && p.vy > 0) { // Only check if falling down
        for (const plat of topic.platforms) {
            // Player width approximation in % (roughly 3-4%)
            const playerHalfWidth = 2; 
            
            // Check X bounds (is player within platform width?)
            if (p.x + playerHalfWidth > plat.x && p.x - playerHalfWidth < plat.x + plat.width) {
                // Check Y bounds (did we cross the platform line?)
                // Tolerance prevents tunneling at high speeds, though simple logic suffices here
                if (p.y <= plat.y && nextY >= plat.y) {
                    hasLanded = true;
                    landingY = plat.y;
                    break; // Stop checking other platforms if we hit one
                }
            }
        }
    }

    // B. Apply Movement or Landing
    if (hasLanded) {
        p.y = landingY;
        p.vy = 0;
        p.isGrounded = true;
    } else if (nextY >= GROUND_LEVEL) {
        // Floor Collision
        p.y = GROUND_LEVEL;
        p.vy = 0;
        p.isGrounded = true;
    } else {
        // Airborn
        p.y = nextY;
        p.isGrounded = false;
    }

    // 4. Interaction Check
    if (k['e'] || k['enter']) {
      checkInteraction(p.x, p.y);
      k['e'] = false; 
      k['enter'] = false;
    }

    // 5. Render Update
    playerRef.current.style.transform = `translate3d(calc(${p.x}vw - 50%), calc(${p.y}vh - 100%), 0)`;
  };

  const checkInteraction = (px: number, py: number) => {
    if (!topic.doors) return;
    
    // Distance check
    const xThreshold = 5; // Within 5% horizontal
    const yThreshold = 10; // Within 10% vertical (don't open doors on different floors)

    const found = topic.doors.find(d => 
        Math.abs(d.x - px) < xThreshold && 
        Math.abs(d.y - py) < yThreshold
    );

    if (found) {
      setActiveDoor(found);
    } else {
      setAlert("Nothing to interact with nearby.");
      setTimeout(() => setAlert(null), 2000);
    }
  };

  // Helper for Dynamic Icons
  const getIcon = (name?: string) => {
    if (!name) return <LucideIcons.DoorClosed className="text-yellow-200" />;
    // Safe cast for dynamic icon lookup
    const Icon = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
    return <Icon className="text-yellow-200" size={28} />;
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-stone-950 overflow-hidden font-sans"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div ref={containerRef} className="relative w-full h-full">
        
        {/* --- Background Layer --- */}
        <img 
          src={topic.backgroundImage || "/background.jpg"} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80"
        />
        
        {/* --- UI Overlay --- */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-yellow-100 p-4 rounded border border-yellow-600/50 shadow-xl z-20">
          <div className="text-sm font-bold mb-1 text-yellow-500">CONTROLS</div>
          <ul className="text-xs space-y-1 font-mono">
            <li>A / D : Move</li>
            <li>SPACE : Jump</li>
            <li>SHIFT : Sprint</li>
            <li>E     : Enter Door</li>
          </ul>
        </div>

        <button onClick={onExit} className="absolute top-4 right-4 z-20 p-2 bg-red-900/80 text-white rounded-full hover:bg-red-700 transition">
          <X size={20} />
        </button>

        {/* --- Game World Layer --- */}

        {/* Platforms */}
        {topic.platforms?.map((plat) => (
            <div
                key={plat.id}
                className="absolute bg-stone-800 border-t-4 border-yellow-700 shadow-lg"
                style={{
                    left: `${plat.x}%`,
                    top: `${plat.y}%`,
                    width: `${plat.width}%`,
                    height: '20px', // Visual thickness
                }}
            >
                {/* Optional decorative support beams */}
                <div className="absolute top-full left-2 w-2 h-4 bg-stone-900/50"></div>
                <div className="absolute top-full right-2 w-2 h-4 bg-stone-900/50"></div>
            </div>
        ))}
        
        {/* Doors */}
        {topic.doors?.map((door) => (
          <div 
            key={door.id}
            className="absolute flex flex-col items-center justify-end group"
            style={{
              left: `${door.x}%`,
              top: `${door.y}%`,
              transform: 'translate(-50%, -100%)', // Anchor bottom-center
              height: '15vh', // Visual height
              width: '100px'
            }}
          >
            {/* Floating Label */}
            <div className="mb-2 px-3 py-1 bg-black/80 text-yellow-100 text-xs rounded border border-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {door.label}
            </div>

            {/* Door Visual */}
            <div className="relative w-full h-full bg-amber-900/40 border-x-4 border-t-4 border-amber-950 rounded-t-xl flex items-center justify-center shadow-2xl hover:bg-amber-800/50 transition-colors cursor-pointer">
               <div className="absolute inset-2 border-2 border-dashed border-yellow-600/30 rounded-t-lg" />
               <div className="z-10 flex flex-col items-center gap-2">
                  {getIcon(door.image)}
               </div>
            </div>
          </div>
        ))}

        {/* Player Sprite */}
        <div 
          ref={playerRef}
          className="absolute z-10 pointer-events-none will-change-transform"
          style={{
            width: `${PLAYER_SIZE_PX}px`,
            height: `${PLAYER_SIZE_PX}px`,
            transform: `translate3d(calc(50vw - 50%), calc(${GROUND_LEVEL}vh - 100%), 0)`
          }}
        >
          {playerImage ? (
             <img src={playerImage} className="w-full h-full object-contain drop-shadow-xl" alt="Player" />
          ) : (
            <div className="w-full h-full bg-blue-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20" />
              <User className="text-white relative z-10" size={32} />
            </div>
          )}
        </div>

        {/* Alert Toast */}
        <AnimatePresence>
          {alert && (
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-red-900 text-white px-6 py-2 rounded shadow-lg border border-red-500 font-bold z-30"
            >
              {alert}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* SubArea Overlay */}
      <AnimatePresence>
        {activeDoor && (
           <SubArea door={activeDoor} onClose={() => setActiveDoor(null)} />
        )}
      </AnimatePresence>
      
    </motion.div>
  );
};

export default GameRoom;