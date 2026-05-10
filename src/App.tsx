import { useState } from 'react';
import './index.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reach Us', href: '#contact' },
];

const DIVISIONS = [
  {
    num: '01',
    title: 'Weighing Division',
    desc: 'Platform scales, floor scales, crane scales, vehicle weighbridges, and bench scales for every industrial environment.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    alt: 'Industrial platform scale on warehouse floor',
  },
  {
    num: '02',
    title: 'Calibration Division',
    desc: 'ISO-traceable calibration services for weighing instruments. On-site certification, compliance documentation, and scheduled maintenance contracts.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Technician operating calibration instrument on tablet display',
  },
  {
    num: '03',
    title: 'Fabrication Division',
    desc: 'Custom steel structures, load-bearing platforms, hoppers, vessels, and bespoke industrial fabrications engineered to exact tolerances.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    alt: 'Welder fabricating industrial steel structure',
  },
  {
    num: '04',
    title: 'Automation Division',
    desc: 'Automated weighing systems, data logging, real-time monitoring, and integration with ERP and MES platforms. Full turnkey delivery.',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80',
    alt: 'Automation control panel with sensors and indicators',
  },
];

const DEALERS = [
  'DINI ARGEO',
  'RICE LAKE',
  'PRECISION',
  'T-SCALE',
  'JADEVER',
  'KEMPSTON',
  'ASTREC',
];

const VALUES = [
  {
    title: 'We Are Teamwork',
    body: 'Coordinated expertise across every division. One team, one commitment to delivery.',
  },
  {
    title: 'Best for Customers',
    body: 'Customer satisfaction is the measure we never compromise. 24/7 support, every time.',
  },
  {
    title: 'Account the Future',
    body: 'We invest in systems built to last, with technology that scales as your operation grows.',
  },
  {
    title: 'Respect',
    body: 'For people, for environments, for the craft of precision. It drives everything we do.',
  },
];

const CLIENTS = [
  'Q Terminals',
  'Black Rock',
  'Nexans',
  'Doha Cables',
  'Qatar Steel',
  'QAPCO',
  'Woqod',
  'NAKILAT',
  'Milaha',
  'Mannai Corp',
  'Ashghal',
  'QatarEnergy',
];

const INDUSTRIES = [
  { title: 'Oil & Gas', icon: '🛢️', desc: 'Precision weighing for hazardous environments and offshore platforms.' },
  { title: 'Logistics & Ports', icon: '🚢', desc: 'High-capacity weighbridges and container weighing systems.' },
  { title: 'Construction', icon: '🏗️', desc: 'Durable scales for cement, steel, and heavy material management.' },
  { title: 'Food & Pharma', icon: '🧪', desc: 'Sanitary, high-precision scales for controlled laboratory settings.' },
];

const PROJECTS = [
  { title: 'Doha Port Weighbridge', category: 'Logistics', year: '2025', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
  { title: 'Riyadh Industrial Automation', category: 'Automation', year: '2024', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80' },
  { title: 'Qatar Steel Custom Scales', category: 'Weighing', year: '2024', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
];

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10"/>
    </svg>
  );
}

function ThumbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v12"/>
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar" role="banner">
        <div className="topbar-inner">
          <div className="topbar-left">
            <a href="tel:+97466257037" className="topbar-contact" aria-label="Qatar phone number">
              <PhoneIcon />
              <span>Qatar: +974 6625 7037</span>
            </a>
            <span className="topbar-divider" aria-hidden="true" />
            <a href="tel:+966531216181" className="topbar-contact" aria-label="KSA phone number">
              <PhoneIcon />
              <span>KSA: +966 5312 16181</span>
            </a>
            <span className="topbar-divider" aria-hidden="true" />
            <a href="mailto:info@realtechgulf.com" className="topbar-contact" aria-label="Email us">
              <MailIcon />
              <span>info@realtechgulf.com</span>
            </a>
          </div>
          <div className="topbar-social" aria-label="Social media links">
            <a href="#" aria-label="Facebook" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Instagram" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.erphorizon.com/company/realtechnologies137/index.php?r=site%2Flogin" aria-label="ERP Login" target="_blank" rel="noopener noreferrer" className="topbar-login-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 8.5l.5 1 2-2 1 2 2-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-brand" aria-label="Real Technologies home">
            <img src="/logo.png" alt="Real Technologies Logo" className="nav-brand-logo" />
          </a>
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <button
            className="mobile-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`} role="dialog" aria-label="Navigation menu" aria-modal="true">
        <div className="mobile-nav-overlay" onClick={closeMenu} aria-hidden="true" />
        <div className="mobile-nav-drawer">
          <button className="mobile-nav-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="mobile-nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-contact" aria-label="Contact information">
            <a href="tel:+97466257037"><PhoneIcon />Qatar: +974 6625 7037</a>
            <a href="tel:+966531216181"><PhoneIcon />KSA: +966 5312 16181</a>
            <a href="mailto:info@realtechgulf.com">
              <MailIcon />
              info@realtechgulf.com
            </a>
            <a href="https://www.erphorizon.com/company/realtechnologies137/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer" className="mobile-nav-login">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 8.5l.5 1 2-2 1 2 2-2" />
              </svg>
              ERP Login Portal
            </a>
          </div>
        </div>
      </div>

      <main>
        {/* HERO */}
        <section id="home" className="hero" aria-labelledby="hero-headline">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-eyebrow">
                <span className="hero-eyebrow-line" aria-hidden="true" />
                Precision Industrial Solutions — Qatar &amp; KSA
              </p>
              <h1 id="hero-headline" className="hero-headline">
                Platform<br />
                <em>Scales</em> &amp;<br />
                Weighing Systems
              </h1>
              <p className="hero-sub">
                40 years of engineered precision. Weighing, Calibration, Fabrication, and Automation for the Gulf's most demanding industrial environments.
              </p>
              <p className="hero-slogan">A Promise ....!</p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-primary" id="hero-cta-services">View Services</a>
                <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">Get in Touch</a>
              </div>
            </div>
            <div className="hero-images" aria-hidden="true">
              <div className="hero-img-large">
                <img
                  className="hero-img-frame"
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80"
                  alt="Large industrial platform scale in warehouse"
                  loading="eager"
                  width="700"
                  height="500"
                />
                <span className="hero-img-label">Platform Scale — Heavy Duty</span>
              </div>
              <div className="hero-img-small">
                <img
                  className="hero-img-frame"
                  src="https://images.unsplash.com/photo-1742163962100-0694339f2d57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Calibration equipment on bench"
                  loading="eager"
                  width="400"
                  height="240"
                />
                <span className="hero-img-label">Calibration Division</span>
              </div>
              <div className="hero-img-small">
                <img
                  className="hero-img-frame"
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80"
                  alt="Industrial automation control panel"
                  loading="eager"
                  width="400"
                  height="240"
                />
                <span className="hero-img-label">Automation Division</span>
              </div>
            </div>
          </div>
        </section>

        {/* DIVISIONS */}
        <section id="services" className="divisions" aria-labelledby="divisions-title">
          <div className="divisions-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Our Four Divisions
            </p>
            <h2 id="divisions-title" className="section-title">
              Engineered Solutions for <em>Industrial Precision</em>
            </h2>
            <div className="divisions-grid">
              {DIVISIONS.map((d) => (
                <a key={d.num} href="#contact" className="division-card" aria-label={`${d.title} — learn more`} id={`division-${d.num}`}>
                  <img
                    className="division-img"
                    src={d.img}
                    alt={d.alt}
                    loading="lazy"
                    width="900"
                    height="506"
                  />
                  <div className="division-overlay">
                    <p className="division-num">{d.num}</p>
                    <h3 className="division-title">{d.title}</h3>
                    <p className="division-desc">{d.desc}</p>
                  </div>
                  <span className="division-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WHY REAL TECHNOLOGY */}
        <section id="about" className="why" aria-labelledby="why-title">
          <div className="why-inner">
            <div className="why-image-grid" aria-hidden="true">
              <img
                className="why-img"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Engineer inspecting industrial weighing equipment"
                loading="lazy"
                width="800"
                height="450"
              />
              <img
                className="why-img"
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80"
                alt="Fabrication workshop with precision tools"
                loading="lazy"
                width="400"
                height="300"
              />
              <img
                className="why-img"
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80"
                alt="Automation and control systems"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <div className="why-content">
              <p className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                Why Real Technology?
              </p>
              <h2 id="why-title" className="why-headline">
                40 Years. Zero Compromises on <em>Precision</em>.
              </h2>
              <p className="why-text">
                Since our founding, Real Technologies has built its reputation on a single principle: in industrial measurement, accuracy is not negotiable. Our teams in Qatar and KSA deliver calibrated, certified, and compliant solutions for the Gulf's most demanding sectors.
              </p>
              <p className="why-text">
                24/7 support. On-site calibration. Custom fabrication. Turnkey automation. We are the partner from specification to commissioning and beyond.
              </p>
              <a href="#contact" className="btn btn-outline" id="why-readmore-cta">Read More</a>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="industries" aria-labelledby="industries-title">
          <div className="industries-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Sectors We Serve
            </p>
            <h2 id="industries-title" className="section-title">Industries</h2>
            <div className="industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="industry-card" id={`industry-card-${i}`}>
                  <div className="industry-icon">{ind.icon}</div>
                  <h3 className="industry-card-title">{ind.title}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS (DEALERSHIPS) */}
        <section id="products" className="dealers" aria-labelledby="dealers-title">
          <div className="dealers-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Our Dealerships
            </p>
            <h2 id="dealers-title" className="section-title">
              Authorised Distributor for <em>World-Class</em> Brands
            </h2>
            <div className="dealers-grid">
              {DEALERS.map((name) => (
                <div key={name} className="dealer-item" id={`dealer-${name.toLowerCase().replace(/\s/g, '-')}`}>
                  <p className="dealer-name">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects" aria-labelledby="projects-title">
          <div className="projects-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Our Track Record
            </p>
            <h2 id="projects-title" className="section-title">Latest Projects</h2>
            <div className="projects-grid">
              {PROJECTS.map((proj, i) => (
                <div key={i} className="project-card" id={`project-card-${i}`}>
                  <div className="project-image-wrap">
                    <img src={proj.img} alt={proj.title} loading="lazy" />
                    <div className="project-tag">{proj.category}</div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-card-title">{proj.title}</h3>
                    <p className="project-card-meta">{proj.year} — Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="values" aria-labelledby="values-title">
          <div className="values-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Our Foundation
            </p>
            <h2 id="values-title" className="section-title">Core Values</h2>
            <div className="values-grid">
              {VALUES.map((v, i) => (
                <div key={i} className="value-card" id={`value-card-${i + 1}`}>
                  <div className="value-icon" aria-hidden="true">
                    <ThumbIcon />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section id="careers" className="careers" aria-labelledby="careers-title">
          <div className="careers-inner">
            <div className="careers-content">
              <p className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                Join Our Team
              </p>
              <h2 id="careers-title" className="section-title">Careers at <em>Real Technology</em></h2>
              <p className="careers-text">
                We are always looking for precision-driven engineers, technicians, and sales professionals to join our growing operations in Qatar and Saudi Arabia.
              </p>
              <a href="mailto:info@realtechgulf.com?subject=Career%20Inquiry" className="btn btn-primary">View Openings</a>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="gallery" aria-labelledby="gallery-title">
          <div className="gallery-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Visual Showcase
            </p>
            <h2 id="gallery-title" className="section-title">Gallery</h2>
            <div className="gallery-grid">
              {GALLERY.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`Industrial equipment ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="clients" aria-labelledby="clients-title">
          <div className="clients-inner">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Trusted By
            </p>
            <h2 id="clients-title" className="section-title">
              Our <em>Clients</em>
            </h2>
            <div className="clients-grid">
              {CLIENTS.map((name) => (
                <div key={name} className="client-item" id={`client-${name.toLowerCase().replace(/\s/g, '-')}`}>
                  <p className="client-name">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="footer" role="contentinfo">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-top">
              <img src="/logo.png" alt="Real Technologies Logo" className="footer-brand-logo" />
              <span className="footer-slogan">A Promise ....!</span>
            </div>
            <div className="footer-social" aria-label="Social media">
              <a href="#" aria-label="Facebook" rel="noopener noreferrer" id="footer-social-fb">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer" id="footer-social-li">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Instagram" rel="noopener noreferrer" id="footer-social-ig">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links" role="list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Dealership */}
          <nav aria-label="Dealership brands">
            <p className="footer-col-title">Dealership</p>
            <ul className="footer-links" role="list">
              <li><a href="#products">Dini Argeo</a></li>
              <li><a href="#products">Rice Lake</a></li>
              <li><a href="#products">T-Scale</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-line">
              <p className="footer-contact-value">
                <a href="tel:+97466257037">+974 6625 7037</a><br />
                <a href="tel:+966531216181">+966 5312 16181</a><br />
                <a href="mailto:info@realtechgulf.com">info@realtechgulf.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Real Technologies. Qatar &amp; KSA</p>
        </div>
      </footer>
    </>
  );
}

export default App;
