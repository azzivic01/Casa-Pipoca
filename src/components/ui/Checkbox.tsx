/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id: string;
  description?: string;
  forceFocus?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      id,
      description,
      checked,
      disabled = false,
      forceFocus = false,
      className = '',
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <label
        htmlFor={id}
        className={`inline-flex items-start gap-3 min-h-[44px] cursor-pointer select-none group ${
          disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
        } ${className}`}
      >
        <div className="relative flex items-center pt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className="sr-only peer"
            {...rest}
          />
          <div
            className={`w-6 h-6 rounded-md border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] flex items-center justify-center transition-all duration-[var(--motion-duration-fast)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--tema-color-accent-ink)] peer-focus-visible:ring-offset-2 ${
              checked
                ? 'bg-[var(--tema-color-accent)] text-[var(--tema-color-on-accent)] border-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]'
                : 'shadow-[1px_1px_0px_var(--tema-color-text)] group-hover:border-[var(--tema-color-accent-ink)]'
            } ${
              forceFocus
                ? 'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2'
                : ''
            }`}
          >
            {checked && (
              <Check className="w-4 h-4 stroke-[3px] text-white" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-body text-[15px] font-medium text-[var(--tema-color-text)] leading-tight pt-1">
            {label}
          </span>
          {description && (
            <span className="font-body text-[13px] text-[var(--tema-color-text-muted)] mt-0.5">
              {description}
            </span>
          )}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
