/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { WordReveal } from '../components/ui/WordReveal';
import { ImageReveal } from '../components/ui/ImageReveal';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { ChapterItem, siteContent } from '../content';

export interface CapitulosProps {
  content: typeof siteContent.capitulos;
  reducedMotion?: boolean;
}

const CapituloBlock: React.FC<{
  item: ChapterItem;
  index: number;
  reducedMotion?: boolean;
}> = ({ item, index, reducedMotion = false }) => {
  const isEven = index % 2 === 1;
  const blockRef = useRef<HTMLDivElement>(null);

  // Rolagem ligada ao movimento (scroll-linked parallax)
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <div
      ref={blockRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 ${
        index !== 0 ? 'border-t-2 border-dashed border-[var(--tema-color-border)]' : ''
      }`}
    >
      {/* Imagem (alternando lados) */}
      <div
        className={`lg:col-span-6 ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        } relative`}
      >
        <motion.div
          style={{ y: reducedMotion ? 0 : parallaxY }}
          className="relative"
        >
          {/* Fundo decorativo deslocado */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] ${
              index % 3 === 0
                ? 'bg-[var(--tema-color-deco-1)]'
                : index % 3 === 1
                ? 'bg-[var(--tema-color-deco-2)]'
                : 'bg-[var(--tema-color-deco-3)]'
            }`}
          />

          <ImageReveal
            src={item.image.src}
            alt={item.image.alt}
            aspectClassName="aspect-4/3 sm:aspect-16/10"
            reducedMotion={reducedMotion}
          />
        </motion.div>
      </div>

      {/* Conteúdo textual */}
      <div
        className={`lg:col-span-6 ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        } flex flex-col items-start`}
      >
        {/* Número e Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xl sm:text-2xl font-black text-[var(--tema-color-accent-ink)]">
            {item.index}
          </span>
          <span className="h-1 w-6 bg-[var(--tema-color-text)] rounded-full" aria-hidden="true" />
          <span className="rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] px-3 py-0.5 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
            {item.tag}
          </span>
        </div>

        {/* Título do Capítulo com máscara de revelação */}
        <WordReveal
          text={item.title}
          as="h3"
          reducedMotion={reducedMotion}
          className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--tema-color-text)] mb-4"
        />

        {/* Descrição */}
        <p className="font-body text-base sm:text-lg text-[var(--tema-color-text-muted)] leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const Capitulos: React.FC<CapitulosProps> = ({
  content,
  reducedMotion = false,
}) => {
  return (
    <section
      id="capitulos"
      aria-labelledby="capitulos-title"
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--tema-color-surface)] border-y-2 border-[var(--tema-color-text)]"
    >
      {/* Adesivo decorativo da seção */}
      <div className="pointer-events-none absolute top-10 right-8 hidden sm:block">
        <div className="pointer-events-auto">
          <DraggableSticker
            shape="tape"
            color="var(--tema-color-deco-1)"
            size={90}
            initialRotate={-6}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-2)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            {content.kicker}
          </span>
          <WordReveal
            text={content.title}
            as="h2"
            id="capitulos-title"
            reducedMotion={reducedMotion}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          />
        </div>

        {/* Lista de Blocos Narrativos com Paralaxe */}
        <div className="flex flex-col">
          {content.items.map((item, idx) => (
            <CapituloBlock
              key={item.id}
              item={item}
              index={idx}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
