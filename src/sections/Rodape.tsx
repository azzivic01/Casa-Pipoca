/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { siteContent } from '../content';

export interface RodapeProps {
  content: typeof siteContent.rodape;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Rodape: React.FC<RodapeProps> = ({
  content,
  isReducedMotion,
  onToggleReducedMotion,
}) => {
  return (
    <footer
      id="rodape"
      role="contentinfo"
      className="border-t-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] py-12 md:py-16 text-[var(--tema-color-text)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[var(--tema-color-border)]">
          {/* Marca e Descrição */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              className="flex items-center gap-2.5 font-display text-2xl font-black text-[var(--tema-color-text)] mb-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>Casa Pipoca</span>
            </a>
            <p className="font-body text-base text-[var(--tema-color-text)] font-medium max-w-sm mb-2">
              {content.brandText}
            </p>
            <p className="font-body text-xs text-[var(--tema-color-text-muted)] max-w-sm">
              {content.disclaimer}
            </p>
          </div>

          {/* Links do Site */}
          <div className="md:col-span-3">
            <h3 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[15px] font-medium text-[var(--tema-color-text)] hover:text-[var(--tema-color-accent-ink)] transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações de Contato / Localização */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-4">
                Informações
              </h3>
              <div className="font-body text-sm text-[var(--tema-color-text-muted)] space-y-1.5 mb-6">
                <p>Endereço: {content.contactInfo.address}</p>
                <p>Horários: {content.contactInfo.hours}</p>
                <p>Contato: {content.contactInfo.contact}</p>
              </div>
            </div>

            {/* Botão de Acessibilidade: Reduzir animações */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onToggleReducedMotion}
                aria-pressed={isReducedMotion}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] px-4 py-2 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] hover:bg-[var(--tema-color-surface)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_var(--tema-color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2 transition-all cursor-pointer"
              >
                {isReducedMotion ? (
                  <>
                    <EyeOff className="w-4 h-4 text-[var(--tema-color-accent-ink)]" aria-hidden="true" />
                    <span>{content.reducedMotionActiveLabel}</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-[var(--tema-color-text)]" aria-hidden="true" />
                    <span>{content.reducedMotionLabel}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[var(--tema-color-text-muted)]">
          <p>{content.copyright}</p>
          <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">
            Tema Lúdico · Claro, colorido, elástico
          </span>
        </div>
      </div>
    </footer>
  );
};
