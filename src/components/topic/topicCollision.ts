import type { RectLike } from './types';

// Simple AABB collision
export default function rectsOverlap(a: DOMRect | RectLike, b: DOMRect | RectLike) {
  const ax = (('x' in (a as any) ? (a as any).x : (a as any).left) || 0) as number;
  const ay = (('y' in (a as any) ? (a as any).y : (a as any).top) || 0) as number;
  const aw = (('w' in (a as any) ? (a as any).w : (a as any).width) || 0) as number;
  const ah = (('h' in (a as any) ? (a as any).h : (a as any).height) || 0) as number;
  const bx = (('x' in (b as any) ? (b as any).x : (b as any).left) || 0) as number;
  const by = (('y' in (b as any) ? (b as any).y : (b as any).top) || 0) as number;
  const bw = (('w' in (b as any) ? (b as any).w : (b as any).width) || 0) as number;
  const bh = (('h' in (b as any) ? (b as any).h : (b as any).height) || 0) as number;
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}