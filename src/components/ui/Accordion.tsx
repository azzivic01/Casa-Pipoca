/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  reducedMotion?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  reducedMotion = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] shadow-[3px_3px_0px_var(--tema-color-text)] transition-shadow duration-[var(--motion-duration-fast)]`}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 px-6 py-4 text-left font-display text-lg font-bold text-[var(--tema-color-text)] transition-colors hover:text-[var(--tema-color-accent-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 sm:text-xl"
              >
                <span>{item.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={
                    reducedMotion
                      ? { duration: 0.01 }
                      : { type: 'spring', stiffness: 350, damping: 25 }
                  }
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-bg)]"
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4 text-[var(--tema-color-text)]" />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={
                    reducedMotion
                      ? { opacity: 1, height: 'auto' }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: reducedMotion
                      ? { duration: 0.01 }
                      : {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05 },
                        },
                  }}
                  exit={
                    reducedMotion
                      ? { opacity: 0, height: 0 }
                      : {
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.15 },
                          },
                        }
                  }
                >
                  <div className="border-t border-[var(--tema-color-border)] px-6 pt-4 pb-6 font-body text-[15px] leading-relaxed text-[var(--tema-color-text-muted)]">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
