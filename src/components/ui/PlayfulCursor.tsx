/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export interface PlayfulCursorProps {
  reducedMotion?: boolean;
}

export const PlayfulCursor: React.FC<PlayfulCursorProps> = ({
  reducedMotion = false,
}) => {
  const [hasMouse, setHasMouse] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detecta tela com mouse
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer || reducedMotion) return;

    setHasMouse(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest('button, a, input, select, textarea, [role="button"], [role="tab"]')
      );
      setIsHoveringClickable(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion, cursorX, cursorY]);

  if (!hasMouse || reducedMotion) {
    return null;
  }

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHoveringClickable ? 1.6 : 1,
        backgroundColor: isHoveringClickable
          ? 'var(--tema-color-deco-1)'
          : 'var(--tema-color-accent)',
        borderColor: 'var(--tema-color-text)',
      }}
      transition={{ duration: 0.15 }}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-5 w-5 rounded-full border-2 opacity-80 mix-blend-multiply"
    />
  );
};
