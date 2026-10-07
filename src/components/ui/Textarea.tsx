/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  helperText?: string;
  errorMessage?: string;
  forceFocus?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      id,
      helperText,
      errorMessage,
      forceFocus = false,
      disabled = false,
      rows = 4,
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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          disabled={disabled}
          aria-invalid={isInvalid}
          aria-describedby={
            isInvalid ? errorId : helperText ? helperId : undefined
          }
          className={`w-full rounded-[var(--tema-radius)] border-2 px-4 py-3 font-body text-[15px] text-[var(--tema-color-text)] bg-[var(--tema-color-surface)] placeholder:text-[var(--tema-color-text-muted)] transition-all duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${
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
        />

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

Textarea.displayName = 'Textarea';
