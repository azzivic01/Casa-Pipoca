/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../../content';
import { IconButton } from './IconButton';

export interface GalleryGridProps {
  items: GalleryItem[];
  reducedMotion?: boolean;
  className?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  reducedMotion = false,
  className = '',
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Fecha com ESC e permite navegar com setas
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % items.length;
        setSelectedItem(items[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        setSelectedItem(items[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, items]);

  const currentIndex = selectedItem
    ? items.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0) {
      setSelectedItem(items[(currentIndex + 1) % items.length]);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= 0) {
      setSelectedItem(items[(currentIndex - 1 + items.length) % items.length]);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={reducedMotion ? undefined : `gallery-card-${item.id}`}
            onClick={() => setSelectedItem(item)}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalhes de ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedItem(item);
              }
            }}
            whileHover={
              !reducedMotion
                ? { y: -4, boxShadow: '6px 6px 0px var(--tema-color-text)' }
                : undefined
            }
            className="group relative cursor-pointer overflow-hidden rounded-[var(--tema-radius)] border-2 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] shadow-[4px_4px_0px_var(--tema-color-text)] transition-shadow duration-[var(--motion-duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tema-color-accent-ink)] focus-visible:ring-offset-2"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[var(--tema-color-bg)]">
              <motion.img
                layoutId={reducedMotion ? undefined : `gallery-img-${item.id}`}
                src={item.image.src}
                alt={item.image.alt}
                className="h-full w-full object-cover transition-transform duration-[var(--motion-duration-slow)] group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#2A2140]/0 transition-colors group-hover:bg-[#2A2140]/20 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--tema-color-surface)] text-[var(--tema-color-text)] p-2 rounded-full border-2 border-[var(--tema-color-text)] shadow-[2px_2px_0px_var(--tema-color-text)]">
                  <ZoomIn className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
              <span className="absolute top-3 left-3 rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-3 py-0.5 font-label text-[12px] font-bold tracking-wider text-[var(--tema-color-text)] shadow-[1px_1px_0px_var(--tema-color-text)]">
                {item.category}
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <h4 className="font-display text-lg font-bold text-[var(--tema-color-text)] group-hover:text-[var(--tema-color-accent-ink)] transition-colors">
                {item.title}
              </h4>
              <p className="mt-1 font-body text-sm text-[var(--tema-color-text-muted)] line-clamp-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal com Transição Compartilhada */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-[#2A2140]/80 backdrop-blur-xs"
            />

            {/* Lightbox Card com layoutId */}
            <motion.div
              layoutId={
                reducedMotion ? undefined : `gallery-card-${selectedItem.id}`
              }
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[var(--tema-radius-lg)] border-3 border-[var(--tema-color-text)] bg-[var(--tema-color-surface)] shadow-[8px_8px_0px_var(--tema-color-text)]"
            >
              {/* Imagem em alta no topo */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-[var(--tema-color-bg)]">
                <motion.img
                  layoutId={
                    reducedMotion ? undefined : `gallery-img-${selectedItem.id}`
                  }
                  src={selectedItem.image.src}
                  alt={selectedItem.image.alt}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 right-4 z-20">
                  <IconButton
                    icon={<X className="h-5 w-5" />}
                    aria-label="Fechar galeria"
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedItem(null)}
                  />
                </div>
              </div>

              {/* Informações e controles de navegação */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8">
                <div>
                  <span className="inline-block rounded-full border border-[var(--tema-color-text)] bg-[var(--tema-color-deco-1)] px-3 py-0.5 font-label text-[12px] font-bold uppercase tracking-wider text-[var(--tema-color-text)] mb-2 shadow-[1px_1px_0px_var(--tema-color-text)]">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--tema-color-text)]">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-1 font-body text-base text-[var(--tema-color-text-muted)] max-w-lg">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                  <IconButton
                    icon={<ChevronLeft className="h-5 w-5" />}
                    aria-label="Imagem anterior"
                    variant="secondary"
                    size="sm"
                    onClick={handlePrev}
                  />
                  <span className="font-mono text-xs px-2 text-[var(--tema-color-text-muted)]">
                    {currentIndex + 1} / {items.length}
                  </span>
                  <IconButton
                    icon={<ChevronRight className="h-5 w-5" />}
                    aria-label="Próxima imagem"
                    variant="secondary"
                    size="sm"
                    onClick={handleNext}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
