/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export type BadgeVariant = 'default' | 'accent' | 'deco1' | 'deco2' | 'deco3' | 'outline';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  icon,
  className = '',
  size = 'md',
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'text-[12px] px-2.5 py-0.5 tracking-wider'
      : 'text-[13px] px-3.5 py-1 tracking-wider';

  let variantClasses = '';
  switch (variant) {
    case 'accent':
      variantClasses =
        'bg-[var(--tema-color-accent)] text-[var(--tema-color-on-accent)] border border-[var(--tema-color-text)]';
      break;
    case 'deco1':
      variantClasses =
        'bg-[var(--tema-color-deco-1)] text-[var(--tema-color-text)] border border-[var(--tema-color-text)]';
      break;
    case 'deco2':
      variantClasses =
        'bg-[var(--tema-color-deco-2)] text-white border border-[var(--tema-color-text)]';
      break;
    case 'deco3':
      variantClasses =
        'bg-[var(--tema-color-deco-3)] text-[var(--tema-color-text)] border border-[var(--tema-color-text)]';
      break;
    case 'outline':
      variantClasses =
        'bg-transparent text-[var(--tema-color-text)] border-2 border-[var(--tema-color-text)]';
      break;
    default:
      variantClasses =
        'bg-[var(--tema-color-surface)] text-[var(--tema-color-text)] border border-[var(--tema-color-border)] shadow-[1px_1px_0px_var(--tema-color-text)]';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-label font-bold uppercase select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon && <span className="shrink-0 flex items-center" aria-hidden="true">{icon}</span>}
      <span className="truncate">{children}</span>
    </span>
  );
};
