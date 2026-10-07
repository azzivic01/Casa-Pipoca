/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DraggableSticker } from '../components/ui/DraggableSticker';
import { siteContent } from '../content';

export interface HeroProps {
  content: typeof siteContent.hero;
  reducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  content,
  reducedMotion = false,
}) => {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 600], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.7]);

  // Sequência cinematográfica orquestrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
        delayChildren: reducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const titleWords = `${content.title.leadingText} ${content.title.highlightedWord} ${content.title.trailingText}`.split(
    ' '
  );

  return (
    <section
      id="hero"
      aria-label="Apresentação do Ateliê Casa Pipoca"
      className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28"
    >
      {/* Adesivos Arrastáveis da Assinatura no Hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pointer-events-auto absolute top-6 left-[4%] sm:left-[8%]">
          <DraggableSticker
            shape="sun"
            color="var(--tema-color-deco-1)"
            size={76}
            initialRotate={-10}
            reducedMotion={reducedMotion}
          />
        </div>
        <div className="pointer-events-auto absolute top-28 right-[3%] sm:right-[6%]">
          <DraggableSticker
            shape="star"
            color="var(--tema-color-deco-3)"
            size={68}
            initialRotate={14}
            reducedMotion={reducedMotion}
          />
        </div>
        <div className="pointer-events-auto absolute bottom-12 left-[3%] hidden sm:block">
          <DraggableSticker
            shape="half-moon"
            color="var(--tema-color-accent)"
            size={62}
            initialRotate={-18}
            reducedMotion={reducedMotion}
          />
        </div>
        <div className="pointer-events-auto absolute bottom-20 right-[5%] hidden md:block">
          <DraggableSticker
            shape="blob"
            color="var(--tema-color-deco-2)"
            size={74}
            initialRotate={8}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto (Orquestrada) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Kicker */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-4 py-1.5 font-label text-[13px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                {content.kicker}
              </span>
            </motion.div>

            {/* O ÚNICO <h1> da página inteira */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--tema-color-text)] leading-[1.08] text-balance mb-6"
            >
              {titleWords.map((word, i) => {
                const isHighlight = word
                  .toLowerCase()
                  .includes(content.title.highlightedWord.toLowerCase());
                return (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {isHighlight ? (
                      <span className="relative inline-block text-[var(--tema-color-accent-ink)] font-black">
                        <span className="relative z-10">{word}</span>
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-1 left-0 right-0 h-3 bg-[var(--tema-color-deco-1)] -rotate-1 rounded-sm -z-0 opacity-80"
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                );
              })}
            </motion.h1>

            {/* Descrição */}
            <motion.p
              variants={itemVariants}
              className="font-body text-lg sm:text-xl text-[var(--tema-color-text-muted)] max-w-2xl leading-relaxed mb-8"
            >
              {content.description}
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Button
                variant="primary"
                size="lg"
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
                rightIcon={<ArrowDown className="w-4 h-4" />}
                onClick={() => {
                  window.location.href = content.secondaryAction.href;
                }}
                reducedMotion={reducedMotion}
              >
                {content.secondaryAction.label}
              </Button>
            </motion.div>

            {/* Nota de Metadados Unboxed */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 font-label text-[13px] font-bold text-[var(--tema-color-text-muted)] uppercase tracking-wider"
            >
              <span>{content.metadataNote}</span>
            </motion.div>
          </motion.div>

          {/* Coluna da Imagem com Moldura Lúdica e Respiração Contínua */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              style={{
                y: reducedMotion ? 0 : heroImageY,
                opacity: heroOpacity,
              }}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                delay: reducedMotion ? 0 : 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura de fundo offset colorida */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[var(--tema-radius-lg)] border-3 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)]"
              />

              {/* Container da imagem com sutil movimento lento e contínuo */}
              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        y: [-4, 4, -4],
                        rotate: [-0.6, 0.6, -0.6],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
                className="relative overflow-hidden rounded-[var(--tema-radius-lg)] border-3 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] shadow-[6px_6px_0px_var(--tema-color-text)]"
              >
                <div className="aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-[var(--tema-color-bg)]">
                  <img
                    src={content.image.src}
                    alt={content.image.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Legenda tátil interna */}
                <div className="flex items-center justify-between border-t-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] px-5 py-3">
                  <span className="font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)]">
                    Ateliê Casa Pipoca
                  </span>
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">
                    [faixa etária]
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
