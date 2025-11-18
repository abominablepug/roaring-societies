import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface OverlayProps {
  visible: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
}

const TRANSITION_MS = 2000

export default function Overlay({ visible, onClose, children, className }: OverlayProps) {
  const [mounted, setMounted] = useState<boolean>(visible)
  const [isActive, setIsActive] = useState<boolean>(visible)

  useEffect(() => {
    let t: number | undefined

    if (visible) {
      setMounted(true)
      // enable active classes in the next frame so the entrance transition runs
      requestAnimationFrame(() => requestAnimationFrame(() => setIsActive(true)))
      return
    }

    // start hide animation
    setIsActive(false)
    // unmount after transition completes
    t = window.setTimeout(() => setMounted(false), TRANSITION_MS)

    return () => {
      if (t) clearTimeout(t)
    }
  }, [visible])

  if (!mounted) return null

  // keep pointer events enabled while mounted so overlay captures input
  const pointerEventsClass = mounted ? 'pointer-events-auto' : 'pointer-events-none'

  // root covers the viewport and captures input; content will animate and fill
  const rootBase = [
    'fixed',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'origin-center',
    'z-50',
    'motion-reduce:transition-none',
    pointerEventsClass,
  ].join(' ')

  // content fills viewport and animates (scale + opacity) from center
  const contentBase = [
    'absolute',
    'inset-0',
    'w-full',
    'h-full',
    'overflow-auto',
    'bg-white',
    'p-4',
    'shadow-[0_12px_40px_rgba(0,0,0,0.15)]',
    'transition-transform',
    'transition-opacity',
    'duration-300',
    'ease-out',
    'origin-center',
  ].join(' ')

  const contentState = isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'

  const closeBtn = `absolute top-4 right-4 bg-transparent border-0 text-3xl leading-none cursor-pointer text-gray-700 p-1 z-10`

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={`${rootBase} ${className ?? ''}`} role="dialog" aria-hidden={!visible}>
      <div className={`${contentBase} ${contentState}`} onMouseDown={(e) => e.stopPropagation()}>
        <button
          className={closeBtn}
          onClick={onClose}
          aria-label="Close overlay"
          title="Close"
        >
          ×
        </button>

        {children}
      </div>
    </div>,
    document.body,
  )
}
