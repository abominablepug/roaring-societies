import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useMotionValue, 
  animate, 
  useVelocity
} from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import type { Topic } from '../types';

interface DialProps {
  topics: Topic[];
  onSelect: (topic: Topic) => void;
  dialImage?: string;
}

const Dial: React.FC<DialProps> = ({ topics, onSelect, dialImage }) => {
  const rotation = useMotionValue(0);
  const rotationVelocity = useVelocity(rotation);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  
  const sliceAngle = 360 / topics.length;

  // 1. Sync Rotation -> Active Index (Existing logic)
  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      const normalized = ((latest % 360) + 360) % 360;
      const index = Math.round((360 - normalized) / sliceAngle) % topics.length;
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [topics.length, sliceAngle, rotation]);

  // 2. Keydown Handler (UPDATED)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Get current rotation state
      const currentRotation = rotation.get();
      // Snap to the nearest perfect angle (handles cases where wheel is mid-spin)
      const snappedRotation = Math.round(currentRotation / sliceAngle) * sliceAngle;

      switch (e.key.toLowerCase()) {
        case 'enter':
        case 'e':
          onSelect(topics[activeIndex]);
          break;
        case "arrowleft":
        case "a":
          // Rotate Clockwise to show Previous Item
          animate(rotation, snappedRotation + sliceAngle, {
             type: "spring", stiffness: 50, damping: 20 
          });
          break;
        case "arrowright":
        case "d":
          // Rotate Counter-Clockwise to show Next Item
          animate(rotation, snappedRotation - sliceAngle, {
             type: "spring", stiffness: 50, damping: 20 
          });
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sliceAngle, activeIndex, onSelect, topics, rotation]); // Added dependencies

  const getCenter = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  };

  const getAngle = (point: { x: number; y: number }, center: { x: number; y: number }) => {
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const lastAngle = useRef(0);

  const onPanStart = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = true;
    rotation.stop();
    const center = getCenter();
    lastAngle.current = getAngle({ x: info.point.x, y: info.point.y }, center);
  };

  const onPan = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const center = getCenter();
    const currentAngle = getAngle({ x: info.point.x, y: info.point.y }, center);
    
    let delta = currentAngle - lastAngle.current;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    rotation.set(rotation.get() + delta);
    lastAngle.current = currentAngle;
  };

  const onPanEnd = () => {
    isDragging.current = false;
    
    const velocity = rotationVelocity.get();
    const currentRotation = rotation.get();
    
    const power = 0.4; 
    const estimatedEndRotation = currentRotation + (velocity * power);
    const snapAngle = Math.round(estimatedEndRotation / sliceAngle) * sliceAngle;

    animate(rotation, snapAngle, {
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 1,
      restDelta: 0.001 
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-deco-black bg-deco-pattern overflow-hidden">
      <div className="absolute top-10 z-10 text-center pointer-events-none">
        <h1 className="text-6xl font-serif text-deco-gold tracking-widest uppercase mb-2 drop-shadow-lg">
          The Roaring 20s
        </h1>
        <div className="h-1 w-64 bg-deco-gold mx-auto mb-4"></div>
      </div>

      <div 
        ref={containerRef} 
        className="relative mt-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px]"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            <div className="w-4 h-12 bg-red-700 border-2 border-deco-gold shadow-lg rounded-b-full" />
        </div>

        <motion.div
          className="w-full h-full rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] cursor-grab active:cursor-grabbing bg-[#1a1a1a] relative"
          style={{ rotate: rotation }}
          onPanStart={onPanStart}
          onPan={onPan}
          onPanEnd={onPanEnd}
          whileTap={{ scale: 0.98 }}
        >
           <div className="absolute inset-0 rounded-full border-12 border-deco-gold pointer-events-none z-10"></div>

          <img 
             src={dialImage || "https://images.unsplash.com/photo-1535332371349-a5d229f65fd5?auto=format&fit=crop&w=1000&q=80"} 
             className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none rounded-full"
             alt="Dial Texture"
          />

          {topics.map((topic, i) => {
             return (
              <div
                key={topic.id}
                className="absolute w-full h-full top-0 left-0 pointer-events-none"
                style={{ transform: `rotate(${i * sliceAngle}deg)` }}
              >
                <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-deco-gold/30 origin-bottom -translate-x-1/2" />
                
                <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-8">
                   <span className="bg-black/60 backdrop-blur-sm text-deco-gold font-serif font-bold text-md px-1 py-1 border border-deco-gold/50 rounded inline-block whitespace-nowrap h-min">
                     {topic.title}
                   </span>
                </div>
              </div>
             );
          })}
        </motion.div>
      </div>

      <div className="h-32 flex items-center justify-center mt-10 pointer-events-none z-10 px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-serif text-white drop-shadow-md transition-all duration-300">
              {topics[activeIndex]?.title}
           </h2>
      </div>

      <button
        onClick={() => onSelect(topics[activeIndex])}
        className="z-20 group relative px-10 py-4 bg-transparent border-2 border-deco-gold overflow-hidden text-deco-gold font-serif text-2xl uppercase tracking-widest hover:text-black transition-colors duration-300 cursor-pointer"
      >
        <span className="absolute inset-0 w-full h-full bg-deco-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10 font-bold">Enter Era</span>
      </button>
    </div>
  );
};

export default Dial;