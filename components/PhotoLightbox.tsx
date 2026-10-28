'use client';

import { useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '@/lib/data';

type Props = {
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function PhotoLightbox({ index, onChange, onClose }: Props) {
  const touchStartX = useRef(0);
  const open = index !== null;
  const total = GALLERY_ITEMS.length;
  const current = open ? (index + total) % total : 0;
  const item = GALLERY_ITEMS[current];

  const next = () => onChange((current + 1) % total);
  const prev = () => onChange((current - 1 + total) % total);

  // Lock page scroll and enable keyboard navigation while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onChange((current + 1) % total);
      else if (e.key === 'ArrowLeft') onChange((current - 1 + total) % total);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, current, total, onChange, onClose]);

  return (
    <div
      className={`lightbox-modal${open ? ' active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Photo Gallery"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
      onTouchEnd={(e) => {
        const diffX = e.changedTouches[0].screenX - touchStartX.current;
        if (Math.abs(diffX) > 40) (diffX < 0 ? next : prev)();
      }}
    >
      {open && (
        <div className="lightbox-dialog">
          <div className="lightbox-top-bar">
            <div className="lightbox-meta-wrap">
              <span className="lightbox-suite-tag">{item.tag}</span>
              <span className="lightbox-counter">
                {current + 1} / {total}
              </span>
            </div>
            <button className="lightbox-close-btn" aria-label="Close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="lightbox-img-wrap">
            <img src={item.src} alt={item.title} className="lightbox-img" />
            <button className="lightbox-nav-btn lightbox-prev" aria-label="Previous photo" onClick={prev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="lightbox-nav-btn lightbox-next" aria-label="Next photo" onClick={next}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="lightbox-caption-bar">
            <h3 className="lightbox-title">{item.title}</h3>
            <p className="lightbox-desc">{item.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
