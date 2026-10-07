/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number; // segundos para ciclo
  bgColor?: string;
  textColor?: string;
  reducedMotion?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  separator = '✦',
  speed = 25,
  bgColor = 'var(--tema-color-deco-1)',
  textColor = 'var(--tema-color-text)',
  reducedMotion = false,
  className = '',
}) => {
  const content = items.join(`  ${separator}  `);

  if (reducedMotion) {
    return (
      <div
        className={`w-full overflow-hidden border-y-2 border-[var(--tema-color-text)] py-3 ${className}`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="flex items-center justify-center gap-6 px-4 font-display text-sm font-bold uppercase tracking-wider">
          <span>{content}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative w-full overflow-hidden border-y-2 border-[var(--tema-color-text)] py-3 select-none ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap font-display text-base font-extrabold uppercase tracking-wider group-hover:[animation-play-state:paused]"
        >
          <span>{content}</span>
          <span aria-hidden="true">{separator}</span>
          <span>{content}</span>
          <span aria-hidden="true">{separator}</span>
        </motion.div>
      </div>
    </div>
  );
};
