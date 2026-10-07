/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  forceOpen?: boolean;
  reducedMotion?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  forceOpen = false,
  reducedMotion = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();

  const show = forceOpen || isOpen;

  const positionClass =
    position === 'top'
      ? 'bottom-full left-1/2 -translate-x-1/2 mb-2'
      : 'top-full left-1/2 -translate-x-1/2 mt-2';

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      aria-describedby={show ? tooltipId : undefined}
    >
      {children}

      <AnimatePresence>
        {show && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: position === 'top' ? 4 : -4 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: reducedMotion ? 0.01 : 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1 },
            }}
            className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-lg border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-text)] px-3 py-1.5 font-label text-[12px] font-bold tracking-wider text-[var(--tema-color-on-accent)] shadow-[2px_2px_0px_rgba(0,0,0,0.2)] ${positionClass}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
