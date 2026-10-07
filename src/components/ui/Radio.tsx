/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id: string;
  name: string;
  description?: string;
  forceFocus?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      id,
      name,
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
            type="radio"
            id={id}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className="sr-only peer"
            {...rest}
          />
          <div
            className={`w-6 h-6 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] flex items-center justify-center transition-all duration-[var(--motion-duration-fast)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--tema-color-accent-ink)] peer-focus-visible:ring-offset-2 ${
              checked
                ? 'border-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]'
                : 'shadow-[1px_1px_0px_var(--tema-color-text)] group-hover:border-[var(--tema-color-accent-ink)]'
            } ${
              forceFocus
                ? 'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2'
                : ''
            }`}
          >
            {checked && (
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--tema-color-accent)]" />
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

Radio.displayName = 'Radio';
