/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { siteContent } from '../content';

export interface CtaFinalProps {
  content: typeof siteContent.ctaFinal;
  reducedMotion?: boolean;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({
  content,
  reducedMotion = false,
}) => {
  return (
    <section
      id="contato"
      aria-label="Chamada para inscrição"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[var(--tema-radius-lg)] border-3 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] p-8 sm:p-12 md:p-16 text-center shadow-[8px_8px_0px_var(--tema-color-text)]"
        >
          {/* Fundo decorativo sutil com formas geométricas */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] opacity-70 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-2)] opacity-70 pointer-events-none"
          />

          {/* Adesivos Arrastáveis no CTA */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="pointer-events-auto absolute top-6 left-6 hidden sm:block">
              <DraggableSticker
                shape="sun"
                color="var(--tema-color-deco-1)"
                size={64}
                initialRotate={12}
                reducedMotion={reducedMotion}
              />
            </div>
            <div className="pointer-events-auto absolute bottom-6 right-6 hidden sm:block">
              <DraggableSticker
                shape="star"
                color="var(--tema-color-deco-3)"
                size={58}
                initialRotate={-16}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Kicker */}
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] px-4 py-1.5 font-label text-[13px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] mb-6">
              <Sparkles className="w-4 h-4 text-[var(--tema-color-accent)]" aria-hidden="true" />
              {content.kicker}
            </span>

            {/* Título */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)] leading-tight mb-5">
              {content.title}
            </h2>

            {/* Descrição */}
            <p className="font-body text-base sm:text-lg text-[var(--tema-color-text-muted)] leading-relaxed mb-8">
              {content.description}
            </p>

            {/* Botões */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  window.location.href = content.primaryAction.href;
                }}
                reducedMotion={reducedMotion}
              >
                {content.primaryAction.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  window.location.href = content.secondaryAction.href;
                }}
                reducedMotion={reducedMotion}
              >
                {content.secondaryAction.label}
              </Button>
            </div>

            {/* Tagline */}
            <span className="font-label text-xs font-bold uppercase tracking-widest text-[var(--tema-color-text-muted)]">
              {content.tagline}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
