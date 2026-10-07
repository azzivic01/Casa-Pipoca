/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { WordReveal } from '../components/ui/WordReveal';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { siteContent } from '../content';

export interface VisiteProps {
  content: typeof siteContent.visite;
  reducedMotion?: boolean;
}

export const Visite: React.FC<VisiteProps> = ({
  content,
  reducedMotion = false,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [preferredShift, setPreferredShift] = useState('manha');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="visite"
      aria-labelledby="visite-title"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-3)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            {content.kicker}
          </span>
          <WordReveal
            text={content.title}
            as="h2"
            id="visite-title"
            reducedMotion={reducedMotion}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          />
          <p className="mt-4 font-body text-lg text-[var(--tema-color-text-muted)] max-w-2xl leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Painel Principal de Visita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna 1: Informações e Endereço */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
              <h3 className="font-display text-xl font-bold text-[var(--tema-color-text)] mb-6">
                Dados do Ateliê
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                      {content.locationLabel}
                    </span>
                    <p className="font-body text-[15px] font-medium text-[var(--tema-color-text)] mt-0.5">
                      {content.locationValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-2)] text-white shadow-[1px_1px_0px_var(--tema-color-text)]">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                      {content.hoursLabel}
                    </span>
                    <p className="font-body text-[15px] font-medium text-[var(--tema-color-text)] mt-0.5">
                      {content.hoursValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-3)] text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                      {content.phoneLabel}
                    </span>
                    <p className="font-body text-[15px] font-medium text-[var(--tema-color-text)] mt-0.5">
                      {content.phoneValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--tema-color-text)] bg-[var(--tema-color-border)] text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                      {content.emailLabel}
                    </span>
                    <p className="font-body text-[15px] font-medium text-[var(--tema-color-text)] mt-0.5">
                      {content.emailValue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[var(--tema-color-border)] pt-4">
                <p className="font-body text-xs text-[var(--tema-color-text-muted)] italic">
                  {content.notes}
                </p>
              </div>
            </div>

            {/* Imagem do espaço */}
            <ImageReveal
              src={content.image.src}
              alt={content.image.alt}
              aspectClassName="aspect-16/10"
              reducedMotion={reducedMotion}
            />
          </div>

          {/* Coluna 2: Formulário interativo de agendamento de visita */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-10 shadow-[6px_6px_0px_var(--tema-color-text)]">
              <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] px-3 py-0.5 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] mb-3">
                Agendamento de visita
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tema-color-text)] mb-2">
                Conheça o espaço com seu pequeno
              </h3>
              <p className="font-body text-base text-[var(--tema-color-text-muted)] mb-6">
                Preencha os campos abaixo para combinarmos o melhor dia. Respondemos por WhatsApp para confirmar.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[#2EC4B6]/15 p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--tema-color-deco-3)] border-2 border-[var(--tema-color-text)] text-[var(--tema-color-text)] mb-3 shadow-[2px_2px_0px_var(--tema-color-text)]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-[var(--tema-color-text)]">
                    Solicitação enviada!
                  </h4>
                  <p className="mt-2 font-body text-sm text-[var(--tema-color-text-muted)] max-w-md mx-auto">
                    Entraremos em contato em breve para confirmar seu horário no ateliê. Obrigado pelo interesse na Casa Pipoca.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-5"
                    onClick={() => setFormSubmitted(false)}
                    reducedMotion={reducedMotion}
                  >
                    Fazer novo agendamento
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Nome do responsável"
                    id="visite-parent-name"
                    required
                    placeholder="Seu nome completo"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Idade da criança"
                      id="visite-child-age"
                      placeholder="Ex.: [idade]"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                    />

                    <Select
                      label="Período de preferência"
                      id="visite-shift"
                      value={preferredShift}
                      onChange={(e) => setPreferredShift(e.target.value)}
                      options={[
                        { value: 'manha', label: 'Manhã' },
                        { value: 'tarde', label: 'Tarde' },
                        { value: 'sabado', label: 'Sábado pela manhã' },
                      ]}
                    />
                  </div>

                  <Input
                    label="WhatsApp para contato"
                    id="visite-whatsapp"
                    placeholder="[telefone / WhatsApp]"
                    helperText="Usamos apenas para confirmar o agendamento."
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      reducedMotion={reducedMotion}
                    >
                      Solicitar visita
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
