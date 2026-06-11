import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, SECONDARY_SERVICES, type LayoutContext } from './App';

function IndustriesPage() {
  const { openModal } = useOutletContext<LayoutContext>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="industries-page">
      {/* HERO */}
      <section className="value-prop-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">WEIGHING THE WORLD</span>
            <h1 className="section-heading">Industries We Serve</h1>
            <p className="section-subtitle">
              RealTech scales can be found in almost every industry. No matter what industry you may
              be in, regardless of how challenging or unique, RealTech will have your answer.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="secondary-services-section" style={{ paddingTop: 0 }}>
        <div className="container-width relative-container">
          <div className="creative-watermark" aria-hidden="true">
            {SECONDARY_SERVICES.watermark}
          </div>

          <div className="secondary-6card-grid">
            {SECONDARY_SERVICES.cards.map((card, idx) => (
              <div key={idx} className="secondary-service-card">
                <div className="secondary-card-icon">{card.icon}</div>
                <h2 className="secondary-card-title">{card.title}</h2>
                <p className="secondary-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">FIND YOUR SOLUTION</span>
            <h2 className="cta-title">A weighing answer for every sector</h2>
            <p className="cta-desc">
              Tell us your industry and application — our team will recommend the right scales,
              calibration and automation for your operation across Qatar and KSA.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Talk to our team <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustriesPage;
