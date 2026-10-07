/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { ButtonVariant, ForcedState } from './Button';

export interface IconButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  forceState?: ForcedState;
  reducedMotion?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      variant = 'secondary',
      size = 'md',
      forceState,
      disabled = false,
      reducedMotion = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Dimensões garantindo >= 44x44 px de alvo de toque
    const sizeClasses = {
      sm: 'w-11 h-11 text-base',
      md: 'w-12 h-12 text-lg',
      lg: 'w-14 h-14 text-xl',
    }[size];

    let baseVariantStyles = '';
    if (variant === 'primary') {
      baseVariantStyles =
        'bg-[var(--tema-color-accent)] text-[var(--tema-color-on-accent)] border-2 border-[var(--tema-color-text)] shadow-[3px_3px_0px_var(--tema-color-text)]';
    } else if (variant === 'secondary') {
      baseVariantStyles =
        'bg-[var(--tema-color-surface)] text-[var(--tema-color-text)] border-2 border-[var(--tema-color-text)] shadow-[3px_3px_0px_var(--tema-color-text)]';
    } else {
      baseVariantStyles =
        'bg-transparent text-[var(--tema-color-text)] border-2 border-transparent hover:border-[var(--tema-color-border)] hover:bg-[var(--tema-color-surface)]';
    }

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

    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none transform-none'
      : 'cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--tema-color-text)]';

    return (
      <motion.button
        ref={ref}
        aria-label={ariaLabel}
        disabled={disabled}
        whileHover={
          !reducedMotion && !disabled && !forceState
            ? { y: -2, boxShadow: '5px 5px 0px var(--tema-color-text)' }
            : undefined
        }
        whileTap={
          !reducedMotion && !disabled && !forceState
            ? { x: 2, y: 2, boxShadow: '1px 1px 0px var(--tema-color-text)' }
            : undefined
        }
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className={`inline-flex items-center justify-center rounded-full select-none transition-colors duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${sizeClasses} ${baseVariantStyles} ${forcedClass} ${disabledStyles} ${className}`}
        {...rest}
      >
        <span className="flex items-center justify-center">{icon}</span>
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
