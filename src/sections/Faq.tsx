/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Accordion } from '../components/ui/Accordion';
import { WordReveal } from '../components/ui/WordReveal';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { siteContent } from '../content';

export interface FaqProps {
  content: typeof siteContent.faq;
  reducedMotion?: boolean;
}

export const Faq: React.FC<FaqProps> = ({
  content,
  reducedMotion = false,
}) => {
  const accordionItems = content.items.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--tema-color-surface)] border-y-2 border-[var(--tema-color-text)]"
    >
      {/* Adesivo decorativo da seção */}
      <div className="pointer-events-none absolute top-12 right-[8%] hidden sm:block">
        <div className="pointer-events-auto">
          <DraggableSticker
            shape="star"
            color="var(--tema-color-deco-1)"
            size={68}
            initialRotate={18}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-2)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            {content.kicker}
          </span>
          <WordReveal
            text={content.title}
            as="h2"
            id="faq-title"
            reducedMotion={reducedMotion}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          />
        </div>

        {/* Acordeão com AnimatePresence */}
        <Accordion
          items={accordionItems}
          defaultOpenId={accordionItems[0]?.id}
          reducedMotion={reducedMotion}
        />
      </div>
    </section>
  );
};
