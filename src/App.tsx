/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { useScroll, useSpring, motion, useReducedMotion } from 'motion/react';
import { siteContent } from './content.ts';
import { AmbientSoundGenerator } from './utils/audio';
import { PlayfulCursor } from './components/ui/PlayfulCursor';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Capitulos } from './sections/Capitulos';
import { Servicos } from './sections/Servicos';
import { Galeria } from './sections/Galeria';
import { Visite } from './sections/Visite';
import { Faq } from './sections/Faq';
import { CtaFinal } from './sections/CtaFinal';
import { UiKit } from './sections/UiKit';
import { Rodape } from './sections/Rodape';

export default function App() {
  // Acessibilidade: Detecção de preferência de movimento reduzido + toggle manual do usuário
  const systemReducedMotion = useReducedMotion();
  const [userReducedMotion, setUserReducedMotion] = useState(false);
  const isReducedMotion = Boolean(systemReducedMotion || userReducedMotion);

  // Barra de progresso de leitura ligada ao movimento (scroll-linked)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  // Som sintetizado Web Audio
  const [isSoundActive, setIsSoundActive] = useState(false);
  const soundGenRef = useRef<AmbientSoundGenerator | null>(null);

  useEffect(() => {
    soundGenRef.current = new AmbientSoundGenerator();
    return () => {
      soundGenRef.current?.stop();
    };
  }, []);

  const handleToggleSound = async () => {
    if (!soundGenRef.current) return;
    if (isSoundActive) {
      soundGenRef.current.stop();
      setIsSoundActive(false);
    } else {
      await soundGenRef.current.start();
      setIsSoundActive(true);
    }
  };

  const handleToggleReducedMotion = () => {
    setUserReducedMotion((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[var(--tema-color-bg)] text-[var(--tema-color-text)] flex flex-col">
      {/* Cursor lúdico customizado (apenas dispositivos com mouse, nunca em toque nem em reduced motion) */}
      <PlayfulCursor reducedMotion={isReducedMotion} />

      {/* 1. Header fixo com navegação, ação principal e botão de som */}
      {siteContent.header.enabled && (
        <Header
          brand={siteContent.brand}
          nav={siteContent.header.nav}
          primaryAction={siteContent.header.primaryAction}
          soundConfig={siteContent.header.sound}
          isSoundActive={isSoundActive}
          onToggleSound={handleToggleSound}
          reducedMotion={isReducedMotion}
        />
      )}

      {/* Barra de progresso de rolagem ligada ao movimento (scroll-linked) */}
      {!isReducedMotion && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-20 left-0 right-0 z-40 h-1 origin-left bg-[var(--tema-color-accent-ink)]"
          aria-hidden="true"
        />
      )}

      {/* Conteúdo principal estruturado */}
      <main id="conteudo-principal" className="flex-1">
        {/* 2. Hero */}
        {siteContent.hero.enabled && (
          <Hero
            content={siteContent.hero}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 3. Capítulos: Blocos narrativos com rolagem ligada ao movimento */}
        {siteContent.capitulos.enabled && (
          <Capitulos
            content={siteContent.capitulos}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 4. Serviços: Grade de cards com 3D tilt */}
        {siteContent.servicos.enabled && (
          <Servicos
            content={siteContent.servicos}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 5. Galeria: Grade com lightbox e layoutId */}
        {siteContent.galeria.enabled && (
          <Galeria
            content={siteContent.galeria}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 6. Visite: Painel com endereço, horários e contato */}
        {siteContent.visite.enabled && (
          <Visite
            content={siteContent.visite}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 7. FAQ: Acordeão de dúvidas */}
        {siteContent.faq.enabled && (
          <Faq
            content={siteContent.faq}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 8. CTA Final */}
        {siteContent.ctaFinal.enabled && (
          <CtaFinal
            content={siteContent.ctaFinal}
            reducedMotion={isReducedMotion}
          />
        )}

        {/* 9. Laboratório de Componentes (UiKit completo) */}
        <UiKit reducedMotion={isReducedMotion} />
      </main>

      {/* 10. Rodapé com botão de redução de animações */}
      {siteContent.rodape.enabled && (
        <Rodape
          content={siteContent.rodape}
          isReducedMotion={isReducedMotion}
          onToggleReducedMotion={handleToggleReducedMotion}
        />
      )}
    </div>
  );
}
