import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Topic, Door } from '../types'; 
import SubArea from './SubArea';

// --- Constants for Physics & Tuning ---
const PLAYER_SIZE_PX = 64; 
const GROUND_LEVEL = 82; 
const MOVEMENT_SPEED = 40; 
const JUMP_FORCE = 90; 
const GRAVITY = 250; 
const SPRINT_MULTIPLIER = 1.8;

// Special ID to identify the exit/return door
const SYSTEM_DOOR_ID = 'system-exit-return';

interface GameRoomProps {
  topic: Topic;
  playerImage?: string;
  onExit: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ topic, playerImage, onExit }) => {
  // --- State ---
  // activeDoor is for the FINAL popup content
  const [activeDoor, setActiveDoor] = useState<Door | null>(null);
  // currentSubRoom handles the nested "room within a room"
  const [currentSubRoom, setCurrentSubRoom] = useState<any | null>(null);
  const [alert, setAlert] = useState<string | null>(null);
  
  // --- Refs for Game Engine ---
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  
  // Physics State
  const physics = useRef({
    x: 50, // Start in middle
    y: GROUND_LEVEL,
    vy: 0,
    isGrounded: true
  });

  // Input State
  const keys = useRef<Record<string, boolean>>({});

  // --- Determine Current Scene Data ---
  // If we are in a subroom, use that data. If not, use the main topic data.
  const currentScene = currentSubRoom || topic;

  // --- Dynamic Door Generation ---
  // We inject an "Exit" or "Return" door at the spawn point (x: 50)
  const visibleDoors = [
    ...(currentScene.doors || []),
    {
      id: SYSTEM_DOOR_ID,
      label: currentSubRoom ? "Return to Main Hall" : "Exit Level",
      x: 50,
      y: GROUND_LEVEL,
      image: currentSubRoom ? 'ArrowLeftCircle' : 'LogOut',
      isSystemDoor: true // Custom flag to handle logic
    }
  ];

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
  }, [currentScene]); // Re-bind when scene changes

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
    p.x = Math.max(2, Math.min(98, p.x));

    // 2. Vertical Movement
    if (p.isGrounded && (k[' '] || k['w'] || k['arrowup'])) {
      p.vy = -JUMP_FORCE;
      p.isGrounded = false;
    }

    p.vy += GRAVITY * dt;
    const nextY = p.y + (p.vy * dt);
    
    // 3. Collision Detection
    let hasLanded = false;
    let landingY = GROUND_LEVEL;

    if (currentScene.platforms && p.vy > 0) { 
        for (const plat of currentScene.platforms) {
            const playerHalfWidth = 2; 
            if (p.x + playerHalfWidth > plat.x && p.x - playerHalfWidth < plat.x + plat.width) {
                if (p.y <= plat.y && nextY >= plat.y) {
                    hasLanded = true;
                    landingY = plat.y;
                    break;
                }
            }
        }
    }

    if (hasLanded) {
        p.y = landingY;
        p.vy = 0;
        p.isGrounded = true;
    } else if (nextY >= GROUND_LEVEL) {
        p.y = GROUND_LEVEL;
        p.vy = 0;
        p.isGrounded = true;
    } else {
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

  const resetPhysicsToSpawn = () => {
    physics.current.x = 50;
    physics.current.y = GROUND_LEVEL;
    physics.current.vy = 0;
  };

  const checkInteraction = (px: number, py: number) => {
    const xThreshold = 5; 
    const yThreshold = 10;

    // Check against the visible doors (including the injected system door)
    const found = visibleDoors.find(d => 
        Math.abs(d.x - px) < xThreshold && 
        Math.abs(d.y - py) < yThreshold
    );

    if (found) {
      // Case 1: System Door (Exit or Return)
      if (found.id === SYSTEM_DOOR_ID) {
        if (currentSubRoom) {
           // Return to main room
           setCurrentSubRoom(null);
           resetPhysicsToSpawn();
        } else {
           // Exit the game entirely
           onExit();
        }
        return;
      }

      // Case 2: Entering a SubRoom (If we are currently in Main Room)
      // We check if this door acts as a portal (has a subRoom property)
      // Note: This requires your Data.ts to have 'subRoom' on doors
      if (!currentSubRoom && (found as any).subRoom) {
        setCurrentSubRoom((found as any).subRoom);
        resetPhysicsToSpawn();
        return;
      }

      // Case 3: Opening Content (If we are in a SubRoom OR it's a simple door)
      setActiveDoor(found);

    } else {
      setAlert("Nothing to interact with nearby.");
      setTimeout(() => setAlert(null), 2000);
    }
  };

  const getIcon = (name?: string) => {
    if (!name) return <LucideIcons.DoorClosed className="text-yellow-200" />;
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
          key={currentScene.id} // Key change triggers react-transition if desired
          src={currentScene.backgroundImage || "/background.jpg"} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-80"
        />
        
        {/* --- UI Overlay --- */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-yellow-100 p-4 rounded border border-yellow-600/50 shadow-xl z-20">
          <div className="text-sm font-bold mb-1 text-yellow-500">
            {currentSubRoom ? `LOCATION: ${currentSubRoom.title}` : "LOBBY"}
          </div>
          <ul className="text-xs space-y-1 font-mono">
            <li>A / D : Move</li>
            <li>SPACE : Jump</li>
            <li>E     : Interact</li>
          </ul>
        </div>

        {/* REMOVED TOP RIGHT EXIT BUTTON */}

        {/* --- Game World Layer --- */}

        {/* Platforms */}
        {currentScene.platforms?.map((plat: any) => (
            <div
                key={plat.id}
                className="absolute bg-stone-800 border-t-4 border-yellow-700 shadow-lg"
                style={{
                    left: `${plat.x}%`,
                    top: `${plat.y}%`,
                    width: `${plat.width}%`,
                    height: '20px',
                }}
            >
                <div className="absolute top-full left-2 w-2 h-4 bg-stone-900/50"></div>
                <div className="absolute top-full right-2 w-2 h-4 bg-stone-900/50"></div>
            </div>
        ))}
        
        {/* Doors */}
        {visibleDoors.map((door: any) => (
          <div 
            key={door.id}
            className="absolute flex flex-col items-center justify-end group"
            style={{
              left: `${door.x}%`,
              top: `${door.y}%`,
              transform: 'translate(-50%, -100%)',
              height: '15vh',
              width: '100px'
            }}
          >
            <div className="mb-2 px-3 py-1 bg-black/80 text-yellow-100 text-xs rounded border border-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {door.label}
            </div>

            {/* Door Visual - System doors get a different color style */}
            <div className={`relative w-full h-full ${door.isSystemDoor ? 'bg-red-900/40 border-red-950' : 'bg-amber-900/40 border-amber-950'} border-x-4 border-t-4 rounded-t-xl flex items-center justify-center shadow-2xl hover:opacity-80 transition-all cursor-pointer`}>
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

      {/* SubArea Overlay (Only triggers when we are in a SubRoom and click a content door) */}
      <AnimatePresence>
        {activeDoor && (
           <SubArea door={activeDoor} onClose={() => setActiveDoor(null)} />
        )}
      </AnimatePresence>
      
    </motion.div>
  );
};

export default GameRoom;