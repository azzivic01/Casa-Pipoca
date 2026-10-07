/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Heart, Bell, Eye } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { IconButton } from '../components/ui/IconButton';
import { AnimatedLink } from '../components/ui/AnimatedLink';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Accordion } from '../components/ui/Accordion';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { Drawer } from '../components/ui/Drawer';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio } from '../components/ui/Radio';
import { Toggle } from '../components/ui/Toggle';
import { Tooltip } from '../components/ui/Tooltip';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Marquee } from '../components/ui/Marquee';
import { SectionDivider } from '../components/ui/SectionDivider';
import { DraggableSticker } from '../components/ui/DraggableSticker';

export interface UiKitProps {
  reducedMotion?: boolean;
}

export const UiKit: React.FC<UiKitProps> = ({ reducedMotion = false }) => {
  // Estados para demonstrações interativas
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioState, setRadioState] = useState('opcao-1');
  const [progressVal, setProgressVal] = useState(68);

  return (
    <section
      id="uikit"
      aria-labelledby="uikit-title"
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--tema-color-bg)] border-t-2 border-[var(--tema-color-text)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-3.5 py-1 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)] mb-3">
            Design System & Vitrine
          </span>
          <h2
            id="uikit-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--tema-color-text)]"
          >
            Laboratório de Componentes
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[var(--tema-color-text-muted)] leading-relaxed">
            Catálogo completo dos componentes do kit de UI, construído estritamente sobre as variáveis CSS do tema Casa Pipoca. Todos os estados (normal, hover, foco, ativo e desativado) são apresentados com suporte a toque (&ge; 44x44px) e navegação por teclado.
          </p>
        </div>

        <div className="space-y-16">
          {/* ======================================================== */}
          {/* 1. BUTTONS & ICON BUTTONS */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              1. Button & IconButton
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Variações primária, secundária e fantasma com sombra sólida deslocada que afunda no clique. Cópias forçadas ilustram estados visuais sem necessidade de foco/hover de mouse.
            </p>

            <div className="space-y-8">
              {/* Botão Primário */}
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  Button / Primário (Estados)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" reducedMotion={reducedMotion}>
                      Normal
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">normal</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" forceState="hover" reducedMotion={reducedMotion}>
                      Hover forçado
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">hover</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" forceState="focus" reducedMotion={reducedMotion}>
                      Foco forçado
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">foco visível</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" forceState="active" reducedMotion={reducedMotion}>
                      Ativo forçado
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">active/press</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" disabled reducedMotion={reducedMotion}>
                      Desativado
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">disabled</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Button variant="primary" isLoading reducedMotion={reducedMotion}>
                      Carregando
                    </Button>
                    <span className="font-mono text-[11px] text-[var(--tema-color-text-muted)]">loading</span>
                  </div>
                </div>
              </div>

              {/* Botão Secundário & Fantasma */}
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  Button / Secundário & Fantasma
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="secondary" reducedMotion={reducedMotion}>
                    Secundário Normal
                  </Button>
                  <Button variant="secondary" forceState="hover" reducedMotion={reducedMotion}>
                    Secundário Hover
                  </Button>
                  <Button variant="ghost" reducedMotion={reducedMotion}>
                    Fantasma Normal
                  </Button>
                  <Button variant="ghost" forceState="hover" reducedMotion={reducedMotion}>
                    Fantasma Hover
                  </Button>
                </div>
              </div>

              {/* Tamanhos */}
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  Button / Tamanhos (P, M, G &ge; 44px de toque)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" reducedMotion={reducedMotion}>Tamanho Pequeno (P)</Button>
                  <Button size="md" reducedMotion={reducedMotion}>Tamanho Médio (M)</Button>
                  <Button size="lg" reducedMotion={reducedMotion}>Tamanho Grande (G)</Button>
                </div>
              </div>

              {/* IconButton */}
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  IconButton (com aria-label obrigatório e &ge; 44x44px)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <IconButton
                    icon={<Heart className="h-5 w-5" />}
                    aria-label="Curtir atividade"
                    variant="primary"
                    reducedMotion={reducedMotion}
                  />
                  <IconButton
                    icon={<Bell className="h-5 w-5" />}
                    aria-label="Notificações do ateliê"
                    variant="secondary"
                    reducedMotion={reducedMotion}
                  />
                  <IconButton
                    icon={<Sparkles className="h-5 w-5" />}
                    aria-label="Efeito mágico"
                    variant="ghost"
                    reducedMotion={reducedMotion}
                  />
                  <IconButton
                    icon={<Heart className="h-5 w-5" />}
                    aria-label="Curtir desativado"
                    variant="secondary"
                    disabled
                    reducedMotion={reducedMotion}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. BADGES, TAGS & ANIMATED LINKS */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              2. Badges, Tags & Link Animado
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Tags em formato de pílula nas cores do tema e links interativos com sublinhado animado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  Badge / Tag (Cores decorativas & acento)
                </h4>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="default">Padrão</Badge>
                  <Badge variant="accent">Acento</Badge>
                  <Badge variant="deco1">Deco 1 Amarelo</Badge>
                  <Badge variant="deco2">Deco 2 Azul</Badge>
                  <Badge variant="deco3">Deco 3 Verde</Badge>
                  <Badge variant="outline">Contorno</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  AnimatedLink (Sublinhado deslizante)
                </h4>
                <div className="flex flex-col gap-3">
                  <AnimatedLink href="#uikit">Link com sublinhado animado</AnimatedLink>
                  <AnimatedLink href="#uikit" showIcon>Link externo com ícone de seta</AnimatedLink>
                  <AnimatedLink href="#uikit" forceHover>Link com hover forçado</AnimatedLink>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. CARDS & SELETOR DE ABAS */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              3. Cards & Tabs
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Cards com borda de 2px e cantos arredondados (com imagem, sem imagem, clicável) e abas animadas com mola no layoutId.
            </p>

            <div className="space-y-8">
              {/* Amostra de Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  title="Card sem imagem"
                  subtitle="Com tag de acolhimento"
                  tag="Oficina"
                  footer={<span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Informação de rodapé</span>}
                >
                  Exemplo de card editorial sem imagem, com espaçamento equilibrado e tipografia do tema.
                </Card>

                <Card
                  title="Card clicável"
                  subtitle="Interação hover ativa"
                  tag="Interativo"
                  clickable
                  onClick={() => alert('Card clicado!')}
                  accentBgColor="var(--tema-color-bg)"
                >
                  Este card possui affordance de clique, foco por teclado e elevação suave ao passar o mouse.
                </Card>

                <Card
                  title="Card com inclinação 3D"
                  subtitle="Mova o mouse sobre ele"
                  tag="Tilt 3D"
                  enableTilt
                  reducedMotion={reducedMotion}
                >
                  Card com efeito de inclinação espacial máxima de 6 graus, respondendo à posição do cursor.
                </Card>
              </div>

              {/* Componente Tabs */}
              <div>
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                  Tabs (Transição de pílula elástica via layoutId)
                </h4>
                <Tabs
                  tabs={[
                    {
                      id: 'aba-guache',
                      label: 'Tinta Guache',
                      content: (
                        <p className="text-sm leading-relaxed">
                          Tintas com pigmentação pura à base de água, seguras para crianças e laváveis com água morna.
                        </p>
                      ),
                    },
                    {
                      id: 'aba-argila',
                      label: 'Argila Crua',
                      content: (
                        <p className="text-sm leading-relaxed">
                          Argila natural esterilizada para modelagem direta com as mãos e pequenas espátulas de madeira.
                        </p>
                      ),
                    },
                    {
                      id: 'aba-papeis',
                      label: 'Papéis Especiais',
                      content: (
                        <p className="text-sm leading-relaxed">
                          Gramaturas de 180g a 300g, adequadas para absorver água sem rasgar durante a pintura livre.
                        </p>
                      ),
                    },
                  ]}
                  reducedMotion={reducedMotion}
                />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. FORMULÁRIOS & CONTROLES */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              4. Formulários & Controles Interativos
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Todos os campos respeitam a área mínima de toque de 44px, foco com anel grosso em cor de acento e mensagens de erro acessíveis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs e Textarea */}
              <div className="space-y-4">
                <Input
                  label="Input / Normal"
                  id="uikit-input-normal"
                  placeholder="Digite aqui..."
                  helperText="Texto auxiliar descritivo"
                />

                <Input
                  label="Input / Foco forçado"
                  id="uikit-input-focus"
                  placeholder="Campo com anel de foco visível"
                  forceFocus
                />

                <Input
                  label="Input / Estado de erro"
                  id="uikit-input-error"
                  defaultValue="texto_invalido"
                  errorMessage="Por favor, insira um formato de texto válido."
                />

                <Input
                  label="Input / Desativado"
                  id="uikit-input-disabled"
                  defaultValue="Valor desativado"
                  disabled
                />

                <Textarea
                  label="Textarea / Multilinha"
                  id="uikit-textarea"
                  placeholder="Escreva uma mensagem longa..."
                  rows={3}
                />
              </div>

              {/* Select, Checkbox, Radio, Toggle */}
              <div className="space-y-6">
                <Select
                  label="Select / Seletor customizado"
                  id="uikit-select"
                  options={[
                    { value: 'op1', label: 'Opção 1 - Manhã' },
                    { value: 'op2', label: 'Opção 2 - Tarde' },
                    { value: 'op3', label: 'Opção 3 - Sábado' },
                  ]}
                />

                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-2">
                    Checkbox (Alvo &ge; 44px)
                  </h4>
                  <div className="flex flex-col gap-2">
                    <Checkbox
                      label="Checkbox marcado"
                      id="uikit-cb-checked"
                      checked={checkboxState}
                      onChange={(e) => setCheckboxState(e.target.checked)}
                      description="Clique para alternar o estado"
                    />
                    <Checkbox
                      label="Checkbox desativado"
                      id="uikit-cb-disabled"
                      checked={false}
                      disabled
                      description="Não pode ser alterado"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-2">
                    Radio (Seleção única)
                  </h4>
                  <div className="flex flex-col gap-2">
                    <Radio
                      label="Opção A (selecionada)"
                      id="uikit-radio-1"
                      name="uikit-radio-group"
                      value="opcao-1"
                      checked={radioState === 'opcao-1'}
                      onChange={() => setRadioState('opcao-1')}
                    />
                    <Radio
                      label="Opção B (alternativa)"
                      id="uikit-radio-2"
                      name="uikit-radio-group"
                      value="opcao-2"
                      checked={radioState === 'opcao-2'}
                      onChange={() => setRadioState('opcao-2')}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-2">
                    Toggle / Switch (role="switch")
                  </h4>
                  <Toggle
                    id="uikit-toggle"
                    label="Receber lembrete por mensagem"
                    description="Notificações sobre os encontros do ateliê"
                    checked={toggleState}
                    onChange={setToggleState}
                    reducedMotion={reducedMotion}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. MODAL, DRAWER, TOOLTIP & PROGRESS BAR */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              5. Modal, Drawer, Tooltip & ProgressBar
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Diálogos acessíveis com aprisionamento de foco (focus trap), tecla ESC e retorno ao gatilho, além de tooltips e indicadores de progresso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Gatilhos de Modal e Drawer */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)]">
                  Diálogos (Acessibilidade Completa)
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    onClick={() => setModalOpen(true)}
                    reducedMotion={reducedMotion}
                  >
                    Abrir Modal de Teste
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => setDrawerOpen(true)}
                    reducedMotion={reducedMotion}
                  >
                    Abrir Drawer Lateral
                  </Button>
                </div>
                <p className="font-body text-xs text-[var(--tema-color-text-muted)]">
                  Pressione ESC ou clique no backdrop para fechar. O foco volta automaticamente ao botão que abriu.
                </p>
              </div>

              {/* Tooltip & ProgressBar */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-3">
                    Tooltip & Tooltip Forçado
                  </h4>
                  <div className="flex items-center gap-6">
                    <Tooltip content="Tooltip com hover/foco">
                      <Button variant="secondary" size="sm" reducedMotion={reducedMotion}>
                        Passe o mouse
                      </Button>
                    </Tooltip>

                    <Tooltip content="Tooltip demonstrativo forçado" forceOpen>
                      <span className="font-mono text-xs text-[var(--tema-color-text)] underline cursor-help">
                        Elemento com dica ativa
                      </span>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-[var(--tema-color-text-muted)] mb-2">
                    ProgressBar (com controle de valor)
                  </h4>
                  <ProgressBar
                    value={progressVal}
                    label="Vagas preenchidas da turma"
                    reducedMotion={reducedMotion}
                  />
                  <div className="mt-3 flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setProgressVal((v) => Math.max(0, v - 20))}
                    >
                      -20%
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setProgressVal((v) => Math.min(100, v + 20))}
                    >
                      +20%
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Instanciado */}
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Diálogo do Kit de UI"
              description="Exemplo de diálogo modal com foco preso e fechamento por ESC"
              reducedMotion={reducedMotion}
            >
              <div className="space-y-4">
                <p>
                  Este modal possui acessibilidade nativa com <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-xs">role="dialog"</code> e trava de tabulação. Ao fechar com a tecla ESC ou no botão, o foco é devolvido perfeitamente ao botão gatilho.
                </p>
                <div className="flex justify-end gap-3 pt-4 border-t border-[var(--tema-color-border)]">
                  <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => setModalOpen(false)}>
                    Confirmar
                  </Button>
                </div>
              </div>
            </Modal>

            {/* Drawer Instanciado */}
            <Drawer
              isOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              title="Painel Lateral"
              reducedMotion={reducedMotion}
            >
              <div className="space-y-4">
                <p>
                  Painel deslizante lateral (drawer) animado com suporte completo a leitores de tela e bloqueio de rolagem da página ao fundo.
                </p>
                <Input label="Exemplo de campo no drawer" id="drawer-input" placeholder="Digite algo..." />
                <Button variant="primary" className="w-full mt-4" onClick={() => setDrawerOpen(false)}>
                  Fechar painel
                </Button>
              </div>
            </Drawer>
          </div>

          {/* ======================================================== */}
          {/* 6. MARQUEE & DIVISORES DE SEÇÃO */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              6. Marquee & Divisores de Seção (Recortes de Papel)
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Faixa de texto contínua deslizante e divisores SVG orgânicos inspirados em recortes de papel artesanal.
            </p>

            <div className="space-y-6">
              {/* Marquee */}
              <div className="overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)]">
                <Marquee
                  items={['PINTURA GUACHE', 'ARGILA NATURAL', 'RECORTES LIVRES', 'EXPERIMENTAÇÃO TÁTIL']}
                  reducedMotion={reducedMotion}
                />
              </div>

              {/* Divisores */}
              <div className="space-y-4 pt-4">
                <div>
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)] block mb-1">
                    Divisor / Onda (Wave)
                  </span>
                  <div className="border border-[var(--tema-color-border)] rounded-lg overflow-hidden bg-white">
                    <SectionDivider variant="wave" fillColor="var(--tema-color-bg)" />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)] block mb-1">
                    Divisor / Festonê (Scallop)
                  </span>
                  <div className="border border-[var(--tema-color-border)] rounded-lg overflow-hidden bg-white">
                    <SectionDivider variant="scallop" fillColor="var(--tema-color-deco-1)" />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)] block mb-1">
                    Divisor / Zigue-zague (Zigzag)
                  </span>
                  <div className="border border-[var(--tema-color-border)] rounded-lg overflow-hidden bg-white">
                    <SectionDivider variant="zigzag" fillColor="var(--tema-color-deco-3)" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 7. ASSINATURA: ADESIVOS ARRASTÁVEIS */}
          {/* ======================================================== */}
          <div className="rounded-[var(--tema-radius-lg)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] p-6 sm:p-8 shadow-[4px_4px_0px_var(--tema-color-text)]">
            <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)] mb-2">
              7. Assinatura do Tema: Adesivos Arrastáveis
            </h3>
            <p className="font-body text-sm text-[var(--tema-color-text-muted)] mb-6">
              Formas lúdicas decorativas SVG em cores de apoio e acento. Cada adesivo pode ser arrastado com o mouse/toque e retorna elasticamente à sua posição inicial.
            </p>

            <div className="rounded-[var(--tema-radius)] border-2 border-dashed border-[var(--tema-color-text)] bg-[var(--tema-color-bg)] p-8">
              <div className="flex flex-wrap items-center justify-around gap-6">
                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="sun"
                    color="var(--tema-color-deco-1)"
                    size={72}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Sol/Flor</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="star"
                    color="var(--tema-color-deco-2)"
                    size={68}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Estrela</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="blob"
                    color="var(--tema-color-deco-3)"
                    size={72}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Onda/Blob</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="half-moon"
                    color="var(--tema-color-accent)"
                    size={64}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Meia-lua</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="tape"
                    color="var(--tema-color-deco-1)"
                    size={80}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Fita crepe</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="sparkle"
                    color="var(--tema-color-accent)"
                    size={64}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Cintilação</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <DraggableSticker
                    shape="squiggle"
                    color="var(--tema-color-deco-2)"
                    size={74}
                    reducedMotion={reducedMotion}
                  />
                  <span className="font-mono text-xs text-[var(--tema-color-text-muted)]">Rabisco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
