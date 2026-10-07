/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface WordRevealProps {
  text: string;
  id?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  highlightWord?: string;
  className?: string;
  reducedMotion?: boolean;
  delay?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  id,
  as: Component = 'h2',
  highlightWord,
  className = '',
  reducedMotion = false,
  delay = 0,
}) => {
  const words = text.split(' ');

  if (reducedMotion) {
    return (
      <Component id={id} className={className}>
        {words.map((word, i) => {
          const isHighlight =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span key={i} className="inline-block mr-[0.28em]">
              <span
                className={
                  isHighlight
                    ? 'text-[var(--tema-color-accent-ink)] underline decoration-wavy decoration-[var(--tema-color-deco-1)]'
                    : ''
                }
              >
                {word}
              </span>
            </span>
          );
        })}
      </Component>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component id={id} className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline-block flex-wrap"
      >
        {words.map((word, i) => {
          const isHighlight =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-top mr-[0.28em] pb-1"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block ${
                  isHighlight
                    ? 'text-[var(--tema-color-accent-ink)] underline decoration-wavy decoration-[var(--tema-color-deco-1)]'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};
