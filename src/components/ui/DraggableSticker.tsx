/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export type StickerShape =
  | 'star'
  | 'sun'
  | 'blob'
  | 'half-moon'
  | 'tape'
  | 'sparkle'
  | 'squiggle';

export interface DraggableStickerProps {
  shape: StickerShape;
  color?: string;
  size?: number;
  initialRotate?: number;
  className?: string;
  reducedMotion?: boolean;
}

export const DraggableSticker: React.FC<DraggableStickerProps> = ({
  shape,
  color = 'var(--tema-color-deco-1)',
  size = 64,
  initialRotate = 0,
  className = '',
  reducedMotion = false,
}) => {
  const renderShapeSvg = () => {
    switch (shape) {
      case 'star':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            <path
              d="M50 5 L61 38 L95 50 L61 62 L50 95 L39 62 L5 50 L39 38 Z"
              fill={color}
              stroke="var(--tema-color-text)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'sun':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            {/* Florzinha solar de 8 pétalas */}
            <circle cx="50" cy="50" r="22" fill={color} stroke="var(--tema-color-text)" strokeWidth="4" />
            <circle cx="50" cy="18" r="10" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="50" cy="82" r="10" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="18" cy="50" r="10" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="82" cy="50" r="10" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="28" cy="28" r="9" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="72" cy="72" r="9" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="28" cy="72" r="9" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="72" cy="28" r="9" fill={color} stroke="var(--tema-color-text)" strokeWidth="3" />
            <circle cx="50" cy="50" r="9" fill="var(--tema-color-surface)" stroke="var(--tema-color-text)" strokeWidth="2.5" />
          </svg>
        );

      case 'half-moon':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            <path
              d="M50 10 A40 40 0 0 0 50 90 A28 28 0 0 1 50 10 Z"
              fill={color}
              stroke="var(--tema-color-text)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'blob':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            <path
              d="M30 15 C60 5, 90 25, 85 55 C80 85, 55 95, 30 85 C5 75, 5 35, 30 15 Z"
              fill={color}
              stroke="var(--tema-color-text)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'tape':
        return (
          <svg viewBox="0 0 120 50" className="w-full h-full drop-shadow-[2px_2px_0px_rgba(42,33,64,0.3)]">
            {/* Fita crepe recortada */}
            <path
              d="M5 5 L115 5 L112 45 L2 45 Z"
              fill={color}
              opacity="0.9"
              stroke="var(--tema-color-text)"
              strokeWidth="2.5"
            />
          </svg>
        );

      case 'sparkle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            <path
              d="M50 10 Q50 50 10 50 Q50 50 50 90 Q50 50 90 50 Q50 50 50 10 Z"
              fill={color}
              stroke="var(--tema-color-text)"
              strokeWidth="3.5"
            />
          </svg>
        );

      case 'squiggle':
      default:
        return (
          <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-[2px_2px_0px_#2A2140]">
            <path
              d="M10 30 Q30 5 60 30 T110 30"
              fill="none"
              stroke={color}
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        );
    }
  };

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          transform: `rotate(${initialRotate}deg)`,
        }}
        className={`pointer-events-none select-none z-10 ${className}`}
      >
        {renderShapeSvg()}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      drag
      dragSnapToOrigin
      dragElastic={0.4}
      whileHover={{ scale: 1.08, rotate: initialRotate + 3 }}
      whileDrag={{
        scale: 1.2,
        rotate: initialRotate + 14,
        zIndex: 50,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 18,
      }}
      style={{
        width: size,
        height: size,
        rotate: initialRotate,
      }}
      className={`touch-none cursor-grab active:cursor-grabbing select-none z-10 transition-shadow ${className}`}
      title="Adesivo arrastável! Puxe e solte."
    >
      {renderShapeSvg()}
    </motion.div>
  );
};
