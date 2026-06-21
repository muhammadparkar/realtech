import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, type LayoutContext } from './App';

// Trust/credential icons (SVG, 24x24 — no emoji)
const ExperienceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const AwardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const GaugeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
);
const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
);

const TRUST_SIGNALS = [
  { icon: <ExperienceIcon />, title: '60 Years Combined', desc: 'Decades of pooled engineering expertise across weighing, pneumatics, and sensor systems.' },
  { icon: <AwardIcon />, title: 'Sole Distributor in Qatar', desc: 'Authorised representation for Dini Argeo, Rice Lake, TScale, and Artec Italy.' },
  { icon: <GaugeIcon />, title: 'Highest-Standard Calibration', desc: 'Skilled technicians, advanced equipment, and stringent procedures for traceable accuracy.' },
  { icon: <LayersIcon />, title: 'Multi-Discipline Supply', desc: 'Weighing equipment, pneumatics, and sensors from globally trusted manufacturers.' }
];

const ABOUT_ROWS = [
  {
    tagline: 'SOLE DISTRIBUTOR IN QATAR',
    title: 'World-Class Weighing Equipment Brands',
    desc: 'As the sole distributor in Qatar, we are proud to offer a wide range of weighing equipment brands. Dini Argeo from Italy, Rice Lake from the USA, and TScale from Taiwan are renowned names in the industry, known for their precision, reliability, and innovative features. These brands provide a comprehensive selection of scales, load cells, indicators, and accessories to cater to diverse industrial needs.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    reversed: false
  },
  {
    tagline: 'PNEUMATIC SYSTEMS — ARTEC ITALY',
    title: 'High-Quality Pneumatic Solutions',
    desc: 'Real Technologies is more than just a distributor of weighing equipment. We also specialize in pneumatics, offering a range of high-quality products from Artec Italy. Our pneumatic solutions are designed to optimize processes, improve efficiency, and enhance automation in various industrial applications.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    reversed: true
  },
  {
    tagline: 'TRUSTED SENSOR MANUFACTURERS',
    title: 'Accurate & Reliable Sensors',
    desc: 'In addition, we offer sensors from trusted manufacturers such as Banner Engineering and Kempston Controls. These sensors are designed to provide accurate and reliable data for monitoring and control purposes, ensuring seamless operations and enhanced productivity.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    reversed: false
  },
  {
    tagline: 'CALIBRATION SERVICES',
    title: 'Precision You Can Trust',
    desc: 'As a company committed to precision and accuracy, we understand the criticality of calibrations. Real Technologies provides calibration services for a wide range of measuring instruments, including weighing scales, weighbridges, oven, thermometers, hygrometers, vernier calipers, compression machines, multimeters, micrometers, and more. Our skilled technicians use advanced equipment and follow stringent procedures to ensure that your instruments are calibrated to the highest standards.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=800&q=80',
    reversed: true
  }
];

function AboutPage() {
  const { openModal } = useOutletContext<LayoutContext>();

  // Routed page — start at top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container-width about-hero-grid">
          <div className="about-hero-text">
            <span className="about-hero-eyebrow">ABOUT REAL TECHNOLOGIES</span>
            <h1 className="about-hero-title">How We <em>Work</em></h1>
            <p className="about-hero-lead">
              At Real Technologies, our team brings together 60 years of combined experience in the
              industry. We have honed our skills and knowledge to deliver the highest standard of service
              to our valued clients. With our deep understanding of weighing equipment, pneumatics, and
              sensors, we have become a trusted partner for businesses across different sectors in Qatar.
            </p>

            <div className="about-hero-actions">
              <button className="btn btn-primary" onClick={openModal}>
                Talk to our team <ArrowIcon />
              </button>
              <a href="/#services" className="btn btn-secondary">
                View our solutions
              </a>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-frame">
              <span className="about-hero-hud"><span className="about-hero-hud-dot" /> PRECISION SYSTEMS · QATAR</span>
              <img
                className="about-hero-img"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                alt="Real Technologies engineer calibrating precision weighing equipment"
                loading="eager"
              />
            </div>
            <div className="about-hero-statcard">
              <div className="about-hero-statcard-num">60+</div>
              <div className="about-hero-statcard-label">Years combined experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / CREDENTIALS STRIP */}
      <section className="why-choose-section">
        <div className="container-width">
          <div className="why-choose-grid about-trust-grid">
            {TRUST_SIGNALS.map((card, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-icon">{card.icon}</div>
                <h2 className="why-card-title">{card.title}</h2>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATING CONTENT ROWS */}
      <section className="alternating-blocks-section">
        <div className="container-width">
          {ABOUT_ROWS.map((row, idx) => (
            <div key={idx} className={`alternating-row ${row.reversed ? 'row-reversed' : 'row-normal'}`}>
              <div className="row-image-col">
                <div className="row-image-frame">
                  <img src={row.img} alt={row.title} loading="lazy" />
                </div>
              </div>
              <div className="row-text-col">
                <span className="row-eyebrow">{row.tagline}</span>
                <h3 className="row-title">{row.title}</h3>
                <p className="row-desc">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER FOCUS BAND */}
      <section className="why-choose-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">CUSTOMER SATISFACTION FIRST</span>
            <h2 className="section-heading">Built Around Your Success</h2>
            <p className="section-subtitle">
              At Real Technologies, customer satisfaction is at the heart of everything we do. We prioritize
              building long-term relationships with our clients by providing personalized solutions, timely
              support, and exceptional customer service. Our knowledgeable team is always ready to assist you
              in selecting the right products, addressing your queries, and providing technical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">QATAR&apos;S LEADING PROVIDER</span>
            <h2 className="cta-title">Experience the Real Technologies Difference</h2>
            <p className="cta-desc">
              As Qatar&apos;s leading provider of weighing equipment, pneumatics, and sensors, Real Technologies
              is your reliable partner for all your industrial needs. With our extensive experience, premium
              product offerings, calibration services, and customer-centric approach, we strive to exceed your
              expectations. Whether you are in the manufacturing, logistics, or any other industry, we are here
              to support your growth and success. Contact us today to experience the Real Technologies difference.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Contact us today <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
