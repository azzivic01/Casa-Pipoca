/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ForcedState = 'normal' | 'hover' | 'focus' | 'active';

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  forceState?: ForcedState;
  children?: React.ReactNode;
  reducedMotion?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      forceState,
      children,
      className = '',
      reducedMotion = false,
      ...rest
    },
    ref
  ) => {
    // Alvo de toque mínimo >= 44x44px garantido por min-h-[44px]
    const sizeClasses = {
      sm: 'text-[14px] px-4 py-2 min-h-[44px]',
      md: 'text-[15px] px-6 py-2.5 min-h-[46px]',
      lg: 'text-[16px] px-8 py-3.5 min-h-[52px]',
    }[size];

    let baseVariantStyles = '';
    if (variant === 'primary') {
      baseVariantStyles =
        'bg-[var(--tema-color-accent)] text-[var(--tema-color-on-accent)] font-semibold border-2 border-[var(--tema-color-text)] shadow-[3px_3px_0px_var(--tema-color-text)]';
    } else if (variant === 'secondary') {
      baseVariantStyles =
        'bg-[var(--tema-color-surface)] text-[var(--tema-color-text)] font-semibold border-2 border-[var(--tema-color-text)] shadow-[3px_3px_0px_var(--tema-color-text)]';
    } else {
      // ghost
      baseVariantStyles =
        'bg-transparent text-[var(--tema-color-text)] font-semibold border-2 border-transparent hover:border-[var(--tema-color-border)] hover:bg-[var(--tema-color-surface)]';
    }

    // Forçar estados visuais para o UI Kit
    let forcedClass = '';
    if (forceState === 'hover') {
      forcedClass =
        variant === 'ghost'
          ? 'border-[var(--tema-color-border)] bg-[var(--tema-color-surface)]'
          : '-translate-y-0.5 shadow-[5px_5px_0px_var(--tema-color-text)]';
    } else if (forceState === 'focus') {
      forcedClass =
        'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2 outline-none';
    } else if (forceState === 'active') {
      forcedClass =
        'translate-x-1 translate-y-1 shadow-[0px_0px_0px_var(--tema-color-text)]';
    }

    const disabledStyles = disabled || isLoading
      ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none transform-none'
      : 'cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--tema-color-text)]';

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={
          !reducedMotion && !disabled && !isLoading && !forceState
            ? { y: -2, boxShadow: '5px 5px 0px var(--tema-color-text)' }
            : undefined
        }
        whileTap={
          !reducedMotion && !disabled && !isLoading && !forceState
            ? { x: 2, y: 2, boxShadow: '1px 1px 0px var(--tema-color-text)' }
            : undefined
        }
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className={`inline-flex items-center justify-center gap-2.5 rounded-[var(--tema-radius)] font-body tracking-normal select-none transition-colors duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${sizeClasses} ${baseVariantStyles} ${forcedClass} ${disabledStyles} ${className}`}
        {...rest}
      >
        {isLoading && (
          <Loader2
            className="w-4 h-4 animate-spin text-current"
            aria-hidden="true"
          />
        )}
        {!isLoading && leftIcon && (
          <span className="shrink-0 flex items-center" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className="whitespace-nowrap truncate">{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 flex items-center" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
