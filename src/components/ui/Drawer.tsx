/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  position?: 'right' | 'left';
  reducedMotion?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  reducedMotion = false,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length > 0) {
          focusable[0].focus();
        } else {
          drawerRef.current?.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const slideInitial = position === 'right' ? { x: '100%' } : { x: '-100%' };
  const borderPositionClass =
    position === 'right'
      ? 'border-l-3 border-[var(--tema-color-text)] right-0'
      : 'border-r-3 border-[var(--tema-color-text)] left-0';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="presentation">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-[#2A2140]/60 backdrop-blur-xs"
          />

          {/* Drawer container */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            tabIndex={-1}
            initial={reducedMotion ? { opacity: 0 } : slideInitial}
            animate={
              reducedMotion
                ? { opacity: 1 }
                : {
                    x: 0,
                    transition: { type: 'spring', stiffness: 350, damping: 30 },
                  }
            }
            exit={
              reducedMotion
                ? { opacity: 0 }
                : {
                    x: position === 'right' ? '100%' : '-100%',
                    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                  }
            }
            className={`fixed top-0 bottom-0 z-10 flex w-full max-w-md flex-col bg-[var(--tema-color-surface)] p-6 shadow-2xl sm:p-8 ${borderPositionClass}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--tema-color-border)] pb-4">
              <h2
                id="drawer-title"
                className="font-display text-2xl font-bold tracking-tight text-[var(--tema-color-text)]"
              >
                {title}
              </h2>
              <IconButton
                icon={<X className="h-5 w-5" />}
                aria-label="Fechar painel lateral"
                variant="ghost"
                size="sm"
                onClick={onClose}
              />
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto py-6 font-body text-[15px] leading-relaxed text-[var(--tema-color-text)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
