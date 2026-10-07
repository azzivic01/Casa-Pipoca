/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface SectionDividerProps {
  variant?: 'wave' | 'scallop' | 'zigzag';
  fillColor?: string;
  strokeColor?: string;
  flip?: boolean;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  fillColor = 'var(--tema-color-bg)',
  strokeColor = 'var(--tema-color-text)',
  flip = false,
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      {variant === 'wave' && (
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="h-10 w-full"
        >
          <path
            d="M0,0 C150,38 350,44 500,24 C650,4 850,42 1000,20 C1100,5 1170,30 1200,16 L1200,48 L0,48 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
        </svg>
      )}

      {variant === 'scallop' && (
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="h-8 w-full"
        >
          <path
            d="M0,20 Q50,0 100,20 Q150,40 200,20 Q250,0 300,20 Q350,40 400,20 Q450,0 500,20 Q550,40 600,20 Q650,0 700,20 Q750,40 800,20 Q850,0 900,20 Q950,40 1000,20 Q1050,0 1100,20 Q1150,40 1200,20 L1200,40 L0,40 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
        </svg>
      )}

      {variant === 'zigzag' && (
        <svg
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className="h-6 w-full"
        >
          <path
            d="M0,15 L30,0 L60,15 L90,0 L120,15 L150,0 L180,15 L210,0 L240,15 L270,0 L300,15 L330,0 L360,15 L390,0 L420,15 L450,0 L480,15 L510,0 L540,15 L570,0 L600,15 L630,0 L660,15 L690,0 L720,15 L750,0 L780,15 L810,0 L840,15 L870,0 L900,15 L930,0 L960,15 L990,0 L1020,15 L1050,0 L1080,15 L1110,0 L1140,15 L1170,0 L1200,15 L1200,30 L0,30 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
};
