/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: SelectOption[];
  helperText?: string;
  errorMessage?: string;
  forceFocus?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      id,
      options,
      helperText,
      errorMessage,
      forceFocus = false,
      disabled = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;
    const isInvalid = Boolean(errorMessage);

    return (
      <div className={`w-full flex flex-col gap-1.5 ${className}`}>
        <label
          htmlFor={id}
          className="font-label text-[13px] font-bold uppercase tracking-wider text-[var(--tema-color-text)]"
        >
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={isInvalid}
            aria-describedby={
              isInvalid ? errorId : helperText ? helperId : undefined
            }
            className={`w-full appearance-none min-h-[46px] rounded-[var(--tema-radius)] border-2 px-4 pr-10 py-2.5 font-body text-[15px] text-[var(--tema-color-text)] bg-[var(--tema-color-surface)] cursor-pointer transition-all duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${
              isInvalid
                ? 'border-[var(--tema-color-accent-ink)] bg-red-50/20'
                : 'border-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]'
            } ${
              forceFocus
                ? 'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2'
                : ''
            } ${
              disabled
                ? 'opacity-50 cursor-not-allowed bg-neutral-100 shadow-none'
                : ''
            }`}
            {...rest}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--tema-color-text)]">
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {errorMessage && (
          <p
            id={errorId}
            role="alert"
            className="flex items-center gap-1.5 font-body text-[13px] font-medium text-[var(--tema-color-accent-ink)]"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errorMessage}</span>
          </p>
        )}

        {!errorMessage && helperText && (
          <p
            id={helperId}
            className="font-body text-[13px] text-[var(--tema-color-text-muted)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
