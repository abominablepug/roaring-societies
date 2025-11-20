import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Topic, Door } from '../data';
import { User, X } from 'lucide-react';
import SubArea from './SubArea';

interface GameRoomProps {
  topic: Topic;
  playerImage?: string;
  onExit: () => void;
}

const PLAYER_SIZE = 64; // px

const GameRoom: React.FC<GameRoomProps> = ({ topic, playerImage, onExit }) => {
  // State
  const [pos, setPos] = useState({ x: 50, y: 50 }); // Percentage for responsiveness
  const [activeDoor, setActiveDoor] = useState<Door | null>(null);
  const [alert, setAlert] = useState<string | null>(null);

  // Refs for Game Loop
  const containerRef = useRef<HTMLDivElement>(null);
  const keys = useRef<Record<string, boolean>>({});
  const loopRef = useRef<number>(null);
  const posRef = useRef({ x: 50, y: 50 }); // Keep ref for sync

  // Game Loop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keys.current[e.key.toLowerCase()] = true;
    const handleKeyUp = (e: KeyboardEvent) => keys.current[e.key.toLowerCase()] = false;
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const loop = () => {
        if (!containerRef.current) return;
        const { width, height } = containerRef.current.getBoundingClientRect();
        
        // Speed calculation (Pixels per frame)
        const baseSpeed = 3;
        const sprintMult = 2.5;
        const currentSpeed = keys.current['shift'] ? baseSpeed * sprintMult : baseSpeed;

        // Convert % position to pixels for math
        let pixelX = (posRef.current.x / 100) * width;
        let pixelY = (posRef.current.y / 100) * height;

        if (keys.current['w'] || keys.current['arrowup']) pixelY -= currentSpeed;
        if (keys.current['s'] || keys.current['arrowdown']) pixelY += currentSpeed;
        if (keys.current['a'] || keys.current['arrowleft']) pixelX -= currentSpeed;
        if (keys.current['d'] || keys.current['arrowright']) pixelX += currentSpeed;

        // Bounds Check
        pixelX = Math.max(0, Math.min(width - PLAYER_SIZE, pixelX));
        pixelY = Math.max(0, Math.min(height - PLAYER_SIZE, pixelY));

        // Convert back to %
        const newX = (pixelX / width) * 100;
        const newY = (pixelY / height) * 100;

        posRef.current = { x: newX, y: newY };
        setPos({ x: newX, y: newY });

        // Interact Interaction
        if (keys.current['e'] || keys.current['enter']) {
            checkInteractions(newX, newY, width, height);
            keys.current['e'] = false; // Debounce
            keys.current['enter'] = false;
        }

        loopRef.current = requestAnimationFrame(loop);
    };

    loopRef.current = requestAnimationFrame(loop);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        if(loopRef.current) cancelAnimationFrame(loopRef.current);
    };
  }, [topic]);

  const checkInteractions = (pxPct: number, pyPct: number, w: number, h: number) => {
      if (!topic.doors) return;
      
      const playerCx = (pxPct / 100) * w + (PLAYER_SIZE / 2);
      const playerCy = (pyPct / 100) * h + (PLAYER_SIZE / 2);

      const found = topic.doors.find(d => {
          const doorCx = (d.x / 100) * w + 40; // Approx door center (width 80)
          const doorCy = (d.y / 100) * h + 60; // Approx door center (height 120)
          const dist = Math.hypot(playerCx - doorCx, playerCy - doorCy);
          return dist < 100; // Interaction Radius
      });

      if (found) {
          setActiveDoor(found);
      } else {
          setAlert("There is nothing here to investigate.");
          setTimeout(() => setAlert(null), 2000);
      }
  };

  return (
    <motion.div 
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        exit={{ clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-black overflow-hidden"
    >
        {/* Room Background */}
        <div 
            ref={containerRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${topic.backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/40" /> {/* Dimmer */}
            
            {/* Controls UI */}
            <div className="absolute top-4 left-4 z-10 bg-deco-black/80 border border-deco-gold p-4 rounded text-deco-gold font-sans text-sm">
                <p><span className="font-bold text-white">WASD</span> Move</p>
                <p><span className="font-bold text-white">SHIFT</span> Sprint</p>
                <p><span className="font-bold text-white">E</span> Interact</p>
            </div>

            <button onClick={onExit} className="absolute top-4 right-4 z-20 bg-red-800 hover:bg-red-700 text-white p-2 rounded-full border-2 border-deco-gold">
                <X size={24} />
            </button>

            {/* Render Doors */}
            {topic.doors?.map(door => (
                <div 
                    key={door.id}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${door.x}%`, top: `${door.y}%` }}
                >
                    {/* Label */}
                    <div className="bg-deco-black border border-deco-gold text-white px-2 py-1 text-xs mb-1 font-serif whitespace-nowrap">
                        {door.label}
                    </div>
                    <img 
                        src={door.image} 
                        alt="door" 
                        className="w-20 h-32 object-contain drop-shadow-2xl" 
                    />
                </div>
            ))}

            {/* Render Player */}
            <div 
                className="absolute z-10 transition-transform"
                style={{ 
                    left: `${pos.x}%`, 
                    top: `${pos.y}%`, 
                    width: PLAYER_SIZE, 
                    height: PLAYER_SIZE 
                }}
            >
                {playerImage ? (
                    <img src={playerImage} className="w-full h-full object-contain" alt="Player" />
                ) : (
                    <div className="w-full h-full bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <User text-white />
                    </div>
                )}
            </div>

            {/* Alert Popup */}
            <AnimatePresence>
                {alert && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-red-900/90 border border-deco-gold text-white px-6 py-3 rounded font-serif text-lg"
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