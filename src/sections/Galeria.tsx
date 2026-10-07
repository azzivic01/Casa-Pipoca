/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GalleryGrid } from '../components/ui/GalleryGrid';
import { WordReveal } from '../components/ui/WordReveal';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { siteContent } from '../content';

export interface GaleriaProps {
  content: typeof siteContent.galeria;
  reducedMotion?: boolean;
}

export const Galeria: React.FC<GaleriaProps> = ({
  content,
  reducedMotion = false,
}) => {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--tema-color-surface)] border-y-2 border-[var(--tema-color-text)]"
    >
      {/* Adesivo decorativo da seção */}
      <div className="pointer-events-none absolute top-12 left-[5%] hidden sm:block">
        <div className="pointer-events-auto">
          <DraggableSticker
            shape="sparkle"
            color="var(--tema-color-deco-1)"
            size={70}
            initialRotate={-12}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            {content.kicker}
          </span>
          <WordReveal
            text={content.title}
            as="h2"
            id="galeria-title"
            reducedMotion={reducedMotion}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          />
        </div>

        {/* Galeria interativa com lightbox e transição compartilhada */}
        <GalleryGrid items={content.items} reducedMotion={reducedMotion} />
      </div>
    </section>
  );
};
