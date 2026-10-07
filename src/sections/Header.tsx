/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { NavMenu } from '../components/ui/NavMenu';
import { Button } from '../components/ui/Button';
import { IconButton } from '../components/ui/IconButton';
import { NavItem, ActionItem, SoundConfig } from '../content';

export interface HeaderProps {
  brand: {
    name: string;
    subtitle: string;
    ariaLabel: string;
  };
  nav: NavItem[];
  primaryAction: ActionItem;
  soundConfig: SoundConfig;
  isSoundActive: boolean;
  onToggleSound: () => void;
  reducedMotion?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  brand,
  nav,
  primaryAction,
  soundConfig,
  isSoundActive,
  onToggleSound,
  reducedMotion = false,
}) => {
  const soundLabel = isSoundActive
    ? soundConfig.labelOff
    : soundConfig.labelOn;

  const soundButton = (
    <IconButton
      icon={
        isSoundActive ? (
          <Volume2 className="h-4 w-4 text-[var(--tema-color-accent-ink)]" />
        ) : (
          <VolumeX className="h-4 w-4 text-[var(--tema-color-text-muted)]" />
        )
      }
      aria-label={soundLabel}
      aria-pressed={isSoundActive}
      title={soundLabel}
      variant={isSoundActive ? 'primary' : 'secondary'}
      size="sm"
      onClick={onToggleSound}
      reducedMotion={reducedMotion}
    />
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark as required by Top Bar Contract) */}
        <a
          href="#hero"
          aria-label={brand.ariaLabel}
          className="group flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-[var(--tema-color-text)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 rounded-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-2xl font-extrabold leading-none text-[var(--tema-color-text)]">
              {brand.name}
            </span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <NavMenu
          items={nav}
          primaryAction={primaryAction}
          soundControl={soundButton}
          reducedMotion={reducedMotion}
        />

        {/* Zone 3: Primary Action + Sound Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {soundButton}
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              window.location.href = primaryAction.href;
            }}
            reducedMotion={reducedMotion}
          >
            {primaryAction.label}
          </Button>
        </div>
      </div>
    </header>
  );
};
