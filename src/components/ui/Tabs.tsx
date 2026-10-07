/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (id: string) => void;
  reducedMotion?: boolean;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  onChange,
  reducedMotion = false,
  className = '',
}) => {
  const [activeId, setActiveId] = useState(defaultTabId || tabs[0]?.id);

  const handleSelect = (id: string) => {
    setActiveId(id);
    onChange?.(id);
  };

  const activeTab = tabs.find((t) => t.id === activeId) || tabs[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Tablist bar */}
      <div
        role="tablist"
        aria-label="Abas de conteúdo"
        className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-1.5 shadow-[3px_3px_0px_var(--tema-color-text)]"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleSelect(tab.id)}
              className={`relative z-10 flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2 font-label text-[13px] font-bold uppercase tracking-wider transition-colors duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 ${
                isActive
                  ? 'text-[var(--tema-color-on-accent)]'
                  : 'text-[var(--tema-color-text)] hover:text-[var(--tema-color-accent-ink)]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeTabBadge"
                  transition={
                    reducedMotion
                      ? { duration: 0.01 }
                      : { type: 'spring', stiffness: 450, damping: 30 }
                  }
                  className="absolute inset-0 -z-10 rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-accent)] shadow-[2px_2px_0px_var(--tema-color-text)]"
                />
              )}
              {tab.icon && <span aria-hidden="true">{tab.icon}</span>}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tabpanel */}
      <div
        id={`tabpanel-${activeTab?.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab?.id}`}
        className="mt-5 rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 shadow-[4px_4px_0px_var(--tema-color-text)] sm:p-7"
      >
        {activeTab?.content}
      </div>
    </div>
  );
};
