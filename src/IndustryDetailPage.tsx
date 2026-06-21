import { useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { ArrowIcon, type LayoutContext } from './App';
import { INDUSTRY_MAP } from './data/industries';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const BoxIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.07 7.07l-9.74 9.74a1 1 0 0 1-1.42 0l-1.6-1.6a1 1 0 0 1 0-1.42l9.74-9.74a6 6 0 0 1 7.07-7.07z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useOutletContext<LayoutContext>();
  const industry = slug ? INDUSTRY_MAP[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="ind-not-found">
        <div className="container-width ind-not-found-inner">
          <h1>Industry not found</h1>
          <Link to="/industries" className="btn btn-primary">Browse all industries <ArrowIcon /></Link>
        </div>
      </div>
    );
  }

  const listItems = industry.keyBenefits ?? industry.applications ?? [];
  const listLabel = industry.keyBenefits ? 'Key Benefits' : 'Applications';

  return (
    <div className="ind-page">

      {/* ── HERO ── */}
      <section className="ind-hero">
        <div className="ind-hero-bg" aria-hidden="true" />
        <div className="container-width ind-hero-inner">
          <nav className="ind-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="ind-breadcrumb-link">Home</Link>
            <ChevronIcon />
            <Link to="/industries" className="ind-breadcrumb-link">Industries</Link>
            <ChevronIcon />
            <span className="ind-breadcrumb-current">{industry.title}</span>
          </nav>

          <span className="ind-hero-eyebrow">REAL TECHNOLOGIES · GULF</span>
          <h1 className="ind-hero-title">
            {industry.title.includes(' ')
              ? <>{industry.title.split(' ').slice(0, -1).join(' ')} <em>{industry.title.split(' ').slice(-1)}</em></>
              : <em>{industry.title}</em>
            }
          </h1>
          {industry.subtitle && (
            <p className="ind-hero-lead">{industry.subtitle}</p>
          )}

          <div className="ind-hero-actions">
            <button className="btn btn-primary" onClick={openModal}>
              Request a Quote <ArrowIcon />
            </button>
            <Link to="/industries" className="btn btn-ghost-light">
              All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS / KEY BENEFITS ── */}
      {listItems.length > 0 && (
        <section className="ind-section ind-section--light">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">{listLabel}</span>
              <h2 className="ind-section-title">Where We Add Value</h2>
            </div>
            <ul className="ind-benefits-grid">
              {listItems.map((item) => (
                <li key={item} className="ind-benefit-item">
                  <span className="ind-check"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── SOLUTIONS ── */}
      {industry.solutions && industry.solutions.length > 0 && (
        <section className="ind-section ind-section--white">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Our Solutions</span>
              <h2 className="ind-section-title">Equipment We Provide</h2>
            </div>
            <div className="ind-solutions-grid">
              {industry.solutions.map((sol) => (
                <div key={sol} className="ind-solution-card">
                  <span className="ind-solution-icon"><WrenchIcon /></span>
                  <span className="ind-solution-name">{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURES ── */}
      {industry.features && industry.features.length > 0 && (
        <section className="ind-section ind-section--light">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Features</span>
              <h2 className="ind-section-title">Built for the Job</h2>
            </div>
            <ul className="ind-features-list">
              {industry.features.map((f) => (
                <li key={f} className="ind-feature-item">
                  <span className="ind-check"><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── FEATURED SYSTEMS ── */}
      {industry.featuredSystems && industry.featuredSystems.length > 0 && (
        <section className="ind-section ind-section--white">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Featured Systems</span>
              <h2 className="ind-section-title">Proven in the Field</h2>
            </div>
            <div className="ind-systems-wrap">
              {industry.featuredSystems.map((sys) => (
                <span key={sys} className="ind-system-badge">
                  <StarIcon /> {sys}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORIES (grocery / healthcare) ── */}
      {industry.categories && (
        <section className="ind-section ind-section--light">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Product Categories</span>
              <h2 className="ind-section-title">Range Overview</h2>
            </div>
            <div className="ind-categories-grid">
              {Object.entries(industry.categories).map(([cat, items]) => (
                <div key={cat} className="ind-category-card">
                  <h3 className="ind-category-title">{cat}</h3>
                  <ul className="ind-category-list">
                    {items.map((item) => (
                      <li key={item} className="ind-category-item">
                        <span className="ind-check ind-check--sm"><CheckIcon /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ANIMAL TYPES (livestock) ── */}
      {industry.animalTypes && industry.animalTypes.length > 0 && (
        <section className="ind-section ind-section--white">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Animal Types</span>
              <h2 className="ind-section-title">Species We Support</h2>
            </div>
            <div className="ind-systems-wrap">
              {industry.animalTypes.map((a) => (
                <span key={a} className="ind-system-badge">{a}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED PRODUCTS ── */}
      {industry.products && industry.products.length > 0 && (
        <section className="ind-section ind-section--light">
          <div className="container-width">
            <div className="ind-section-header">
              <span className="ind-section-eyebrow">Related Products</span>
              <h2 className="ind-section-title">Recommended Models</h2>
            </div>
            <div className="ind-products-grid">
              {industry.products.map((p) => (
                <div key={p} className="ind-product-card">
                  <span className="ind-product-icon"><BoxIcon /></span>
                  <span className="ind-product-name">{p}</span>
                  <button className="ind-product-cta" onClick={openModal} aria-label={`Request quote for ${p}`}>
                    Quote <ArrowIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA STRIP ── */}
      <section className="ind-cta-strip">
        <div className="container-width ind-cta-inner">
          <div className="ind-cta-text">
            <h2 className="ind-cta-title">Need a weighing solution for {industry.title}?</h2>
            <p className="ind-cta-sub">Our engineers will assess your requirements and recommend the right system.</p>
          </div>
          <button className="btn ind-cta-btn" onClick={openModal}>
            Get a Quote <ArrowIcon />
          </button>
        </div>
      </section>

    </div>
  );
}

export default IndustryDetailPage;
