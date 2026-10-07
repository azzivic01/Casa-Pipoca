/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/Card';
import { WordReveal } from '../components/ui/WordReveal';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { siteContent } from '../content';

export interface ServicosProps {
  content: typeof siteContent.servicos;
  reducedMotion?: boolean;
}

export const Servicos: React.FC<ServicosProps> = ({
  content,
  reducedMotion = false,
}) => {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Adesivo decorativo da seção */}
      <div className="pointer-events-none absolute bottom-12 right-[6%] hidden sm:block">
        <div className="pointer-events-auto">
          <DraggableSticker
            shape="squiggle"
            color="var(--tema-color-accent)"
            size={80}
            initialRotate={15}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-3)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            {content.kicker}
          </span>
          <WordReveal
            text={content.title}
            as="h2"
            id="servicos-title"
            reducedMotion={reducedMotion}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          />
        </div>

        {/* Grade de Cards com 3D Tilt nos Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.6,
                delay: reducedMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card
                title={servico.title}
                tag={servico.tag}
                image={{
                  src: servico.image.src,
                  alt: servico.image.alt,
                  aspect: '4/3',
                }}
                enableTilt={!reducedMotion}
                reducedMotion={reducedMotion}
                clickable={false}
                footer={
                  <div className="flex flex-col gap-1 font-mono text-xs text-[var(--tema-color-text-muted)]">
                    <span>{servico.details}</span>
                  </div>
                }
              >
                <p className="font-body text-[15px] leading-relaxed text-[var(--tema-color-text)]">
                  {servico.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
