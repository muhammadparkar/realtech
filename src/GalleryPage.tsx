import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, GALLERY_CATEGORIES, type LayoutContext } from './App';

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
);
const ChevronLeftIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
);

function GalleryPage() {
  const { openModal } = useOutletContext<LayoutContext>();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryLabels = ['All', ...GALLERY_CATEGORIES.map((c) => c.label)];

  const images = useMemo(() => {
    if (activeCategory === 'All') return Array.from(new Set(GALLERY_CATEGORIES.flatMap((c) => c.images)));
    return GALLERY_CATEGORIES.find((c) => c.label === activeCategory)?.images ?? [];
  }, [activeCategory]);

  useEffect(() => {
    setActiveIdx(null);
  }, [activeCategory]);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') setActiveIdx((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === 'ArrowLeft') setActiveIdx((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIdx, images.length]);

  return (
    <div className="gallery-page">
      {/* INTRO */}
      <section className="value-prop-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">OUR WORK</span>
            <h1 className="section-heading">Project Gallery</h1>
            <p className="section-subtitle">
              Weighbridge installations, calibration work, civil works, fabrication, and our
              product range — real equipment, real projects across Qatar.
            </p>
          </div>

          <div className="products-brand-pills">
            {categoryLabels.map((label) => (
              <button
                key={label}
                type="button"
                className={`products-brand-pill ${activeCategory === label ? 'products-brand-pill--active' : ''}`}
                onClick={() => setActiveCategory(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="gallery-grid-section">
        <div className="container-width">
          <div className="gallery-page-grid">
            {images.map((imgUrl, idx) => (
              <button
                key={imgUrl}
                type="button"
                className="gallery-page-item"
                onClick={() => setActiveIdx(idx)}
                aria-label={`View image ${idx + 1} of ${images.length}`}
              >
                <img src={imgUrl} alt={`Real Technologies ${activeCategory} photo ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeIdx !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={() => setActiveIdx(null)}>
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveIdx(null)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i === null ? i : (i - 1 + images.length) % images.length)); }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </button>
          <img
            src={images[activeIdx]}
            alt={`Real Technologies ${activeCategory} photo ${activeIdx + 1}`}
            className="gallery-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i === null ? i : (i + 1) % images.length)); }}
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">START YOUR PROJECT</span>
            <h2 className="cta-title">Have a weighing or fabrication project?</h2>
            <p className="cta-desc">
              From 120 Ton weighbridges to custom batching plant control, our engineering teams in
              Doha and Dammam deliver turnkey solutions backed by 24x7 support.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Request a quote <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
