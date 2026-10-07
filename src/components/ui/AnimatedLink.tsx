/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showIcon?: boolean;
  className?: string;
  forceHover?: boolean;
  forceFocus?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  external = false,
  showIcon = false,
  className = '',
  forceHover = false,
  forceFocus = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-1.5 py-1 text-[15px] font-medium text-[var(--tema-color-text)] transition-colors duration-[var(--motion-duration-fast)] hover:text-[var(--tema-color-accent-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 rounded-sm ${
        forceFocus ? 'ring-2 ring-[var(--tema-color-accent-ink)] ring-offset-2' : ''
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-[var(--tema-color-accent-ink)] transition-transform duration-[var(--motion-duration-base)] ease-[var(--motion-ease-base)] ${
            forceHover ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </span>
      {showIcon && (
        <ArrowUpRight
          className={`w-4 h-4 transition-transform duration-[var(--motion-duration-fast)] ${
            forceHover ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          }`}
          aria-hidden="true"
        />
      )}
    </a>
  );
};
