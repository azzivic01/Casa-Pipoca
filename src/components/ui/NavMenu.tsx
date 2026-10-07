/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Button } from './Button';
import { AnimatedLink } from './AnimatedLink';
import { NavItem, ActionItem } from '../../content';

export interface NavMenuProps {
  items: NavItem[];
  primaryAction?: ActionItem;
  soundControl?: React.ReactNode;
  reducedMotion?: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  items,
  primaryAction,
  soundControl,
  reducedMotion = false,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fecha menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trava scroll quando menu mobile está aberto
  useEffect(() => {
    if (mobileOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        aria-label="Navegação principal"
        className="hidden md:flex items-center gap-6 lg:gap-8"
      >
        {items.map((item) => (
          <AnimatedLink key={item.id} href={item.href}>
            {item.label}
          </AnimatedLink>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <div className="flex md:hidden items-center gap-2">
        {soundControl}
        <IconButton
          icon={mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          variant="secondary"
          size="sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        />
      </div>

      {/* Mobile Navigation Drawer/Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            className="fixed inset-0 z-50 md:hidden flex flex-col bg-[var(--tema-color-bg)]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
          >
            {/* Mobile Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)]">
              <span className="font-display font-extrabold text-xl tracking-tight text-[var(--tema-color-text)]">
                Casa Pipoca
              </span>
              <IconButton
                icon={<X className="h-6 w-6" />}
                aria-label="Fechar menu"
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(false)}
              />
            </div>

            {/* Mobile Links */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              animate={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, transition: { duration: 0.25 } }
              }
              exit={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -20, transition: { duration: 0.2 } }
              }
              className="flex-1 flex flex-col justify-between p-6 overflow-y-auto"
            >
              <nav
                aria-label="Navegação móvel"
                className="flex flex-col gap-2 divide-y divide-[var(--tema-color-border)]"
              >
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center min-h-[52px] font-display text-2xl font-bold text-[var(--tema-color-text)] hover:text-[var(--tema-color-accent-ink)] transition-colors pt-3"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-6 space-y-4 border-t-2 border-[var(--tema-color-text)]">
                {primaryAction && (
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setMobileOpen(false);
                      window.location.href = primaryAction.href;
                    }}
                  >
                    {primaryAction.label}
                  </Button>
                )}
                <div className="flex items-center justify-between text-xs font-label uppercase tracking-wider text-[var(--tema-color-text-muted)] pt-2">
                  <span>Ateliê infantil de arte</span>
                  <span>São Paulo / Brasil</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
