import { useEffect, useRef, useState, useCallback } from 'react';
import img1 from '../images/image1.jpg';
import img2 from '../images/imagebg.jpg';
import type { Props, Door } from './topic/types';
import rectsOverlap from './topic/topicCollision';


export default function Topic({ topicNumber, characterSrc, doorSrc, doorCount = 3 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const charRef = useRef<HTMLDivElement | null>(null);

  const [pos, setPos] = useState({ x: 60, y: 60 });
  const speed = 250; // px per second
  const keys = useRef<Record<string, boolean>>({});

  // doors state
  const [doors, setDoors] = useState<Door[]>([]);

  // pick a background image per topic
  const bg = (() => {
    switch (topicNumber) {
      case 1:
        return img1;
      case 2:
        return img2;
      default:
        return img1;
    }
  })();

  const placeDoors = useCallback(() => {
    const cont = containerRef.current?.getBoundingClientRect();
    if (!cont) return;
    const w = cont.width;
    const h = cont.height;
    const created: Door[] = [];
    for (let i = 0; i < doorCount; i++) {
      const dw = 64; // increased size
      const dh = 88; // increased size
      const x = Math.max(10, Math.random() * (w - dw - 20));
      const y = Math.max(10, Math.random() * (h - dh - 20));
      created.push({ id: i + 1, x, y, w: dw, h: dh });
    }
    setDoors(created);
  }, [doorCount]);

  useEffect(() => {
    // generate doors after mount and when doorCount or topicNumber change
    let raf = 0;
    function generate() {
      placeDoors();
      // ensure layout settled
      raf = requestAnimationFrame(() => {});
    }
    generate();
    function onResize() {
      generate();
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, [placeDoors, topicNumber, doorCount]);

  useEffect(() => {
    function down(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        keys.current[k] = true;
        e.preventDefault();
        return;
      }
      if (['w', 'a', 's', 'd', 'e', 'enter', 'shift'].includes(k)) {
        keys.current[k] = true;
        e.preventDefault();
      }
    }
    function up(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      keys.current[k] = false;
    }
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // movement loop
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    function step(now: number) {
      const dt = (now - last) / 1000;
      last = now;
  let dx = 0;
  let dy = 0;
  const sprint = keys.current['shift'] ? 2 : 1;
      if (keys.current['w'] || keys.current['arrowup']) dy -= 1;
      if (keys.current['s'] || keys.current['arrowdown']) dy += 1;
      if (keys.current['a'] || keys.current['arrowleft']) dx -= 1;
      if (keys.current['d'] || keys.current['arrowright']) dx += 1;
      if (dx !== 0 || dy !== 0) {
        const len = Math.hypot(dx, dy) || 1;
  dx = (dx / len) * speed * dt * sprint;
  dy = (dy / len) * speed * dt * sprint;
        setPos((p) => {
          const cont = containerRef.current?.getBoundingClientRect();
          if (!cont) return p;
          const nx = Math.max(0, Math.min(cont.width - 40, p.x + dx));
          const ny = Math.max(0, Math.min(cont.height - 40, p.y + dy));
          return { x: nx, y: ny };
        });
      }

      // interact check: on key press e or enter
  if (keys.current['e'] || keys.current['enter']) {
        // check overlap with any door
        const charRect = charRef.current?.getBoundingClientRect();
        if (charRect) {
          let foundId: number | null = null;
          for (const d of doors) {
            const pad = 8;
            const doorRect = { x: d.x - pad, y: d.y - pad, w: d.w + pad * 2, h: d.h + pad * 2 } as any;
            if (rectsOverlap(charRect as DOMRect, doorRect as DOMRect)) {
              foundId = d.id;
              break;
            }
          }
          alert(foundId ? `You are on door #${foundId}` : 'You are NOT on a door');
          // consume the key
          keys.current['e'] = false;
          keys.current['enter'] = false;
        }
      }

      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [doors]);

  return (
    <div ref={containerRef} className="relative w-screen h-screen bg-gray-50 overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* doors */}
      {doors.map((d) => (
        <div key={d.id} className="absolute" style={{ left: d.x, top: d.y, width: d.w, height: d.h }}>
          <div className="w-full h-full rounded-md" style={{ backgroundImage: doorSrc ? `url(${doorSrc})` : undefined, backgroundColor: doorSrc ? undefined : '#8b5cf6', backgroundSize: 'cover' }} />
          <div className="absolute -bottom-5 left-0 text-xs font-semibold">#{d.id}</div>
        </div>
      ))}

      {/* character */}
      <div ref={charRef} className="absolute w-10 h-10 rounded-full bg-white shadow flex items-center justify-center" style={{ left: pos.x, top: pos.y }}>
        {characterSrc ? <img src={characterSrc} alt="char" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px' }} /> : <div className="text-sm font-bold">🙂</div>}
      </div>
    </div>
  );
}