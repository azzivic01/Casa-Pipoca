/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface ToggleProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  disabled?: boolean;
  forceFocus?: boolean;
  reducedMotion?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  checked,
  onChange,
  description,
  disabled = false,
  forceFocus = false,
  reducedMotion = false,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 min-h-[44px] ${className}`}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-[var(--tema-color-text)] transition-colors duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${
          checked
            ? 'bg-[var(--tema-color-deco-3)] shadow-[2px_2px_0px_var(--tema-color-text)]'
            : 'bg-[var(--tema-color-border)] shadow-[1px_1px_0px_var(--tema-color-text)]'
        } ${
          forceFocus
            ? 'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2'
            : ''
        } ${
          disabled
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : ''
        }`}
      >
        <motion.span
          animate={{ x: checked ? 26 : 4 }}
          transition={
            reducedMotion
              ? { duration: 0.01 }
              : { type: 'spring', stiffness: 500, damping: 30 }
          }
          className="pointer-events-none inline-block h-5 w-5 rounded-full border border-[var(--tema-color-text)] bg-white shadow-[1px_1px_0px_var(--tema-color-text)]"
        />
      </button>

      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="font-body text-[15px] font-medium text-[var(--tema-color-text)] cursor-pointer select-none"
          onClick={() => !disabled && onChange(!checked)}
        >
          {label}
        </label>
        {description && (
          <span className="font-body text-[13px] text-[var(--tema-color-text-muted)]">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};
