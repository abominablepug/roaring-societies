import { forwardRef } from 'react';

const Wheel = forwardRef<HTMLDivElement, any>(function Wheel({ children, size, style, onMouseDown, onTouchStart }, ref) {
  return (
    <div
      ref={ref}
      className="relative rounded-full flex items-center justify-center select-none touch-none cursor-grab"
      style={{ width: size, height: size, ...style }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
});

export default Wheel;
