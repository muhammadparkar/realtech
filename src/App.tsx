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
    img: 'https://images.unsplash.com/photo-1581093458791-9d15e7fdbd67?auto=format&fit=crop&w=900&q=80',
    alt: 'Calibration technician performing instrument checks',
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
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-brand" aria-label="Real Technologies home">
            <svg className="nav-brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" fill="var(--text)" />
              <rect x="6" y="6" width="8" height="8" fill="var(--bg)" />
              <rect x="18" y="6" width="8" height="8" fill="var(--accent-orange)" />
              <rect x="6" y="18" width="8" height="8" fill="var(--accent-orange)" />
              <rect x="18" y="18" width="8" height="8" fill="var(--bg)" />
            </svg>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Real Technologies</span>
              <span className="nav-brand-sub">Qatar &amp; KSA</span>
            </div>
          </a>
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <button className="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false" id="mobile-menu-toggle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

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
                  src="https://images.unsplash.com/photo-1581093458791-9d15e7fdbd67?auto=format&fit=crop&w=400&q=80"
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

        {/* DEALERSHIPS */}
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
            <svg className="footer-brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" fill="var(--accent-orange)" />
              <rect x="6" y="6" width="8" height="8" fill="rgba(14,14,12,0.8)" />
              <rect x="18" y="6" width="8" height="8" fill="rgba(244,242,238,0.9)" />
              <rect x="6" y="18" width="8" height="8" fill="rgba(244,242,238,0.9)" />
              <rect x="18" y="18" width="8" height="8" fill="rgba(14,14,12,0.8)" />
            </svg>
            <p className="footer-brand-name">Real Technologies</p>
            <p className="footer-brand-text">
              Weighing, Calibration, Fabrication, and Automation solutions for industrial Qatar and KSA.
            </p>
            <div className="footer-qr" aria-label="QR code for contact">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="8" width="16" height="16" fill="currentColor"/>
                <rect x="50" y="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="56" y="8" width="16" height="16" fill="currentColor"/>
                <rect x="2" y="50" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="56" width="16" height="16" fill="currentColor"/>
                <rect x="36" y="36" width="8" height="8" fill="currentColor"/>
                <rect x="50" y="36" width="6" height="6" fill="currentColor"/>
                <rect x="60" y="36" width="6" height="6" fill="currentColor"/>
                <rect x="36" y="50" width="6" height="6" fill="currentColor"/>
                <rect x="46" y="56" width="6" height="6" fill="currentColor"/>
                <rect x="60" y="50" width="18" height="6" fill="currentColor"/>
                <rect x="60" y="62" width="18" height="6" fill="currentColor"/>
              </svg>
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
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Dealership */}
          <nav aria-label="Dealership brands">
            <p className="footer-col-title">Dealership</p>
            <ul className="footer-links" role="list">
              {DEALERS.map((d) => (
                <li key={d}><a href="#products">{d}</a></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact Us</p>
            <div className="footer-contact-line">
              <p className="footer-contact-label">Qatar</p>
              <p className="footer-contact-value">
                <a href="tel:+97466257037">+974 6625 7037</a>
              </p>
            </div>
            <div className="footer-contact-line" style={{ marginTop: '1rem' }}>
              <p className="footer-contact-label">KSA</p>
              <p className="footer-contact-value">
                <a href="tel:+966531216181">+966 5312 16181</a>
              </p>
            </div>
            <div className="footer-contact-line" style={{ marginTop: '1rem' }}>
              <p className="footer-contact-label">Email</p>
              <p className="footer-contact-value">
                <a href="mailto:info@realtechgulf.com">info@realtechgulf.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Real Technologies. All rights reserved.</p>
          <p className="footer-copy">Qatar &amp; KSA</p>
        </div>
      </footer>
    </>
  );
}

export default App;
