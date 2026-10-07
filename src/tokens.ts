/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const tokens = {
  colors: {
    bg: '#FFF7E8',
    surface: '#FFFFFF',
    border: '#E8DCC4',
    text: '#2A2140',
    textMuted: '#645A78',
    accent: '#BF3B20',
    accentInk: '#BF3B20',
    onAccent: '#FFF7E8',
    deco1: '#FFB703',
    deco2: '#3A86FF',
    deco3: '#2EC4B6',
  },
  radius: {
    base: '20px',
    lg: '36px',
  },
  fonts: {
    display: "'Bricolage Grotesque', sans-serif",
    body: "'DM Sans', sans-serif",
    label: "'DM Sans', sans-serif",
    mono: "'DM Mono', monospace",
  },
  motion: {
    durationFast: '150ms',
    durationBase: '300ms',
    durationSlow: '700ms',
    durationCinematic: '1000ms',
    easeBase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeCinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    stagger: '80ms',
    durationFastSec: 0.15,
    durationBaseSec: 0.3,
    durationSlowSec: 0.7,
    durationCinematicSec: 1.0,
    easeBaseBezier: [0.4, 0, 0.2, 1] as const,
    easeCinematicBezier: [0.16, 1, 0.3, 1] as const,
    springElastic: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 22,
    },
    springSticker: {
      type: 'spring' as const,
      stiffness: 280,
      damping: 18,
    },
  },
} as const;

export type Tokens = typeof tokens;
