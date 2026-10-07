/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface ImageRevealProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  reducedMotion?: boolean;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectClassName = 'aspect-4/3',
  className = '',
  reducedMotion = false,
  priority = false,
}) => {
  if (reducedMotion) {
    return (
      <div
        className={`relative overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] ${aspectClassName} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ clipPath: 'inset(10% 0% 10% 0% round 24px)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 20px)', opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] ${aspectClassName} ${className}`}
    >
      <motion.img
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};
