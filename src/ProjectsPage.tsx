import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, PROJECTS, type LayoutContext } from './App';

function ProjectsPage() {
  const { openModal } = useOutletContext<LayoutContext>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      {/* INTRO */}
      <section className="value-prop-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">SELECTED PROJECTS</span>
            <h1 className="section-heading">Our Projects</h1>
            <p className="section-subtitle">
              Weighbridges, batching systems and weighing scales delivered for leading contractors
              and industries across Qatar — engineered with Dini Argeo and Rice Lake equipment.
            </p>
          </div>

          <div className="why-choose-grid">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="why-card">
                <span className="section-pre-title">{project.client}</span>
                <h2 className="why-card-title">{project.title}</h2>
                <p className="why-card-desc">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default ProjectsPage;
