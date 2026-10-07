/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface ProgressBarProps {
  value: number; // 0 a 100
  label?: string;
  showValue?: boolean;
  color?: string;
  reducedMotion?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showValue = true,
  color = 'var(--tema-color-accent)',
  reducedMotion = false,
  className = '',
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between font-label text-[13px] font-bold uppercase tracking-wider text-[var(--tema-color-text)]">
          {label && <span>{label}</span>}
          {showValue && <span className="font-mono">{clampedValue}%</span>}
        </div>
      )}

      <div
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progresso'}
        className="h-4 w-full overflow-hidden rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-0.5 shadow-[2px_2px_0px_var(--tema-color-text)]"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={
            reducedMotion
              ? { duration: 0.01 }
              : { type: 'spring', stiffness: 200, damping: 25 }
          }
          style={{ backgroundColor: color }}
          className="h-full rounded-full border border-[var(--tema-color-text)]"
        />
      </div>
    </div>
  );
};
