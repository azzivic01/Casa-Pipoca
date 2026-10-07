/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export interface CardImageProps {
  src: string;
  alt: string;
  aspect?: 'video' | 'square' | '4/3' | '3/4';
}

export interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  tag?: string;
  image?: CardImageProps;
  footer?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
  accentBgColor?: string;
  className?: string;
  enableTilt?: boolean;
  reducedMotion?: boolean;
  forceHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  tag,
  image,
  footer,
  clickable = false,
  onClick,
  accentBgColor,
  className = '',
  enableTilt = false,
  reducedMotion = false,
  forceHover = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking (máximo 6 graus, tema Lúdico)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (reducedMotion || !enableTilt) return;
    x.set(0);
    y.set(0);
  };

  const aspectClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-4/3',
    '3/4': 'aspect-3/4',
  }[image?.aspect || '4/3'];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      style={{
        rotateX: enableTilt && !reducedMotion ? rotateX : 0,
        rotateY: enableTilt && !reducedMotion ? rotateY : 0,
        transformStyle: 'preserve-3d',
        backgroundColor: accentBgColor || 'var(--tema-color-surface)',
      }}
      whileHover={
        clickable && !reducedMotion && !forceHover
          ? {
              y: -4,
              boxShadow: '6px 6px 0px var(--tema-color-text)',
            }
          : undefined
      }
      className={`group relative flex flex-col overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] text-[var(--tema-color-text)] transition-shadow duration-[var(--motion-duration-base)] ${
        forceHover
          ? '-translate-y-1 shadow-[6px_6px_0px_var(--tema-color-text)]'
          : 'shadow-[4px_4px_0px_var(--tema-color-text)]'
      } ${
        clickable
          ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2'
          : ''
      } ${className}`}
    >
      {image && (
        <div className={`relative w-full overflow-hidden border-b-2 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] ${aspectClass}`}>
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-[var(--motion-duration-slow)] ease-[var(--motion-ease-cinematic)] group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {tag && (
            <span className="absolute top-3 left-3 rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] px-3 py-1 font-label text-[12px] font-bold tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]">
              {tag}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {!image && tag && (
          <div className="mb-3">
            <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-3 py-0.5 font-label text-[12px] font-bold tracking-wider text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
              {tag}
            </span>
          </div>
        )}

        {title && (
          <h3 className="font-display text-xl font-bold tracking-tight text-[var(--tema-color-text)] sm:text-2xl">
            {title}
          </h3>
        )}

        {subtitle && (
          <p className="mt-1 font-body text-sm font-medium text-[var(--tema-color-text-muted)]">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-[var(--tema-color-text)]">{children}</div>}

        {footer && <div className="mt-5 border-t border-[var(--tema-color-border)] pt-4">{footer}</div>}
      </div>
    </motion.div>
  );
};
