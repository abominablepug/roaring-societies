import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useMotionValue, 
  animate, 
  useVelocity
} from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import type { Topic } from '../data';

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

  // --- 1. Update Active Index based on rotation ---
  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      // Normalize rotation to 0-360
      const normalized = ((latest % 360) + 360) % 360;
      
      // Logic: The pointer is at 0deg (top). 
      // We calculate which index effectively sits at the top.
      const index = Math.round((360 - normalized) / sliceAngle) % topics.length;
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [topics.length, sliceAngle, rotation]);

  // --- 2. Rotational Math Helpers ---
  const getCenter = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  };

  const getAngle = (point: { x: number; y: number }, center: { x: number; y: number }) => {
    // Calculate angle in degrees
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  // State to track the angle when drag starts
  const lastAngle = useRef(0);

  const onPanStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = true;
    // Stop any currently running animation so the user catches the wheel
    rotation.stop();
    
    const center = getCenter();
    // Determine initial angle relative to center
    lastAngle.current = getAngle({ x: info.point.x, y: info.point.y }, center);
  };

  const onPan = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const center = getCenter();
    const currentAngle = getAngle({ x: info.point.x, y: info.point.y }, center);
    
    // Calculate delta (change in angle)
    let delta = currentAngle - lastAngle.current;

    // Fix the "jump" when crossing from 180 to -180 or vice versa
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    // Apply the rotation
    // We add 90 degrees offset because atan2 0 is at 3 o'clock, but our CSS 0 is 12 o'clock
    // (Though for relative movement "delta", the offset doesn't matter)
    rotation.set(rotation.get() + delta);
    
    lastAngle.current = currentAngle;
  };

  const onPanEnd = () => {
    isDragging.current = false;
    
    // --- 3. Momentum & Snapping ---
    const velocity = rotationVelocity.get(); // Current rotational speed
    const currentRotation = rotation.get();
    
    // "Power" determines how far it slides. 0.2 is short, 0.8 is long.
    const power = 0.4; 
    const estimatedEndRotation = currentRotation + (velocity * power);

    // Find the nearest snap point
    const snapAngle = Math.round(estimatedEndRotation / sliceAngle) * sliceAngle;

    animate(rotation, snapAngle, {
      type: "spring",
      stiffness: 40,   // Lower stiffness = heavier feel
      damping: 15,     // Critical damping prevents too much oscillation
      mass: 1.2,       // Adds "weight" to the wheel
      restDelta: 0.001 // Precision for when to stop
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-deco-black bg-deco-pattern overflow-hidden">
      <div className="absolute top-10 z-10 text-center pointer-events-none">
        <h1 className="text-6xl font-serif text-deco-gold tracking-widest uppercase mb-2 drop-shadow-lg">
          The Roaring 20s
        </h1>
        <div className="h-1 w-64 bg-deco-gold mx-auto mb-4"></div>
        <p className="text-deco-gold-light italic font-serif text-xl">Turn the dial to travel through time</p>
      </div>

      <div className="relative mt-10">
        {/* Decorative Pointer */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            <div className="w-4 h-12 bg-red-700 border-2 border-deco-gold shadow-lg rounded-b-full" />
        </div>

        {/* The Wheel Container - We attach handlers here */}
        <motion.div
          ref={containerRef}
          className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] cursor-grab active:cursor-grabbing bg-[#1a1a1a]"
          style={{ rotate: rotation }}
          onPanStart={onPanStart}
          onPan={onPan}
          onPanEnd={onPanEnd}
          whileTap={{ scale: 0.98 }}
        >
           {/* Border Ring (Separated so it doesn't rotate if you don't want it to, 
               but here it's inside the motion.div so it rotates) */}
           <div className="absolute inset-0 rounded-full border-[12px] border-deco-gold pointer-events-none z-10"></div>

          <img 
             src={dialImage || "https://images.unsplash.com/photo-1535332371349-a5d229f65fd5?auto=format&fit=crop&w=1000&q=80"} 
             className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none rounded-full"
             alt="Dial Texture"
          />

          {/* Slices */}
          {topics.map((topic, i) => {
             // Calculate position for text (circular layout)
             // i * sliceAngle places them around. -90 adjusts 0deg to be at the top.
             return (
              <div
                key={topic.id}
                className="absolute w-full h-full top-0 left-0 pointer-events-none"
                style={{ transform: `rotate(${i * sliceAngle}deg)` }}
              >
                {/* Separator Line */}
                <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-deco-gold/30 origin-bottom -translate-x-1/2" />
                
                {/* Label Container */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-8">
                   {/* We rotate the text back so it's readable if needed, 
                       or keep it radial. Here we keep it radial but styled nicely. */}
                   <span className="bg-black/60 backdrop-blur-sm text-deco-gold font-serif font-bold text-lg md:text-2xl px-3 py-1 border border-deco-gold/50 rounded inline-block whitespace-nowrap h-min">
                     {topic.title}
                   </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Active Topic Display at Bottom */}
        <div className="absolute -bottom-32 w-full flex flex-col items-center pointer-events-none">
             <h2 className="text-4xl font-serif text-white mb-4 drop-shadow-md transition-all duration-300">
                {topics[activeIndex]?.title}
             </h2>
        </div>
      </div>

      <button
        onClick={() => onSelect(topics[activeIndex])}
        className="mt-40 z-20 group relative px-10 py-4 bg-transparent border-2 border-deco-gold overflow-hidden text-deco-gold font-serif text-2xl uppercase tracking-widest hover:text-black transition-colors duration-300 cursor-pointer"
      >
        <span className="absolute inset-0 w-full h-full bg-deco-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10 font-bold">Enter Era</span>
      </button>
    </div>
  );
};

export default Dial;