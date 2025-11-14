import React, { useRef, useState, useEffect } from "react";
import Wheel from './dial/Wheel';
import Notch from './dial/Notch';
import CenterCap from './dial/CenterCap';

type DialProps = {
  size?: number;
  notches?: number;
  initialIndex?: number;
  onChange?: (index: number) => void;
};

function clampAngle(a: number) {
  a = a % 360;
  if (a < 0) a += 360;
  return a;
}

function angleBetween(cx: number, cy: number, x: number, y: number) {
  const dx = x - cx;
  const dy = y - cy;
  const rad = Math.atan2(dy, dx);
  let deg = (rad * 180) / Math.PI;
  deg = deg + 90;
  return clampAngle(deg);
}

export default function Dial({
  size = 300,
  notches = 12,
  initialIndex = 0,
  onChange,
}: DialProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [angle, setAngle] = useState(() => {
    const notchAngle = 360 / notches;
    return clampAngle(initialIndex * notchAngle);
  });
  const dragging = useRef(false);
  const startPointerAngle = useRef(0);
  const startRotation = useRef(0);
  const [isSnapping, setIsSnapping] = useState(false);

  const notchAngle = 360 / notches;

  useEffect(() => {
    setAngle(clampAngle(initialIndex * notchAngle));
  }, [initialIndex, notchAngle]);

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging.current) return;
      e.preventDefault();

      const point =
        e instanceof TouchEvent
          ? e.touches[0] ?? (e.changedTouches[0] as Touch)
          : (e as MouseEvent);

      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const pointerAngle = angleBetween(cx, cy, point.clientX, point.clientY);

      const delta = pointerAngle - startPointerAngle.current;
      const newRotation = clampAngle(startRotation.current + delta);
      setAngle(newRotation);
    }

    function onUp() {
      if (!dragging.current) return;
      dragging.current = false;

      setIsSnapping(true);
      setAngle((current) => {
        const targetIndex = Math.round(current / notchAngle) % notches;
        const snapped = clampAngle(targetIndex * notchAngle);
        onChange?.(targetIndex < 0 ? targetIndex + notches : targetIndex);
        return snapped;
      });

      window.setTimeout(() => setIsSnapping(false), 220);
    }

    window.addEventListener("mousemove", onMove as any);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as any, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("touchend", onUp);
    };
  }, [notchAngle, notches, onChange]);

  function handlePointerStart(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    setIsSnapping(false);
    dragging.current = true;

    const point =
      "touches" in e ? (e.touches[0] ?? (e as React.TouchEvent).changedTouches[0]) : (e as React.MouseEvent);

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const pointerAngle = angleBetween(cx, cy, (point as any).clientX, (point as any).clientY);

    startPointerAngle.current = pointerAngle;
    startRotation.current = angle;
  }

  const currentIndex = Math.round(angle / notchAngle) % notches;

  const wheelStyle: React.CSSProperties = {
    transform: `rotate(${angle}deg)`,
    transition: isSnapping ? "transform 180ms cubic-bezier(.2,.9,.2,1)" : "none",
    background: "radial-gradient(circle at center, #fff 0 55%, rgba(0,0,0,0.03) 56%)",
    boxShadow: "inset 0 6px 18px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.08)",
  };

  const rimSize = Math.max(8, Math.round(size * 0.06));
  const centerSize = Math.round(size * 0.18);

  const notchMarks = new Array(notches).fill(0).map((_, i) => {
    const angleDeg = i * notchAngle;
    const isMajor = notches <= 12 ? i % Math.max(1, Math.floor(notches / 12)) === 0 : i % 3 === 0;
    return <Notch key={i} angleDeg={angleDeg} size={size} rimSize={rimSize} isMajor={isMajor} />;
  });

  return (
    <div
      role="slider"
      aria-valuemin={0}
      aria-valuemax={notches - 1}
      aria-valuenow={currentIndex}
      aria-label="Rotary dial"
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size + 20 }}
    >
      <Wheel ref={ref} size={size} style={wheelStyle} onMouseDown={handlePointerStart} onTouchStart={handlePointerStart}>
        {notchMarks}
        <div className="absolute rounded-full pointer-events-none" style={{ width: size - rimSize * 0.4, height: size - rimSize * 0.4, boxShadow: 'inset 0 -6px 10px rgba(0,0,0,0.05)' }} />
        <CenterCap size={centerSize}>{currentIndex}</CenterCap>
      </Wheel>
    </div>
  );
}