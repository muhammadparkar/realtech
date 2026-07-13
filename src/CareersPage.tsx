import { useEffect, useState } from 'react';

const GrowthIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);
const TeamIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const ToolsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.07 7.07l-9.74 9.74a1 1 0 0 1-1.42 0l-1.6-1.6a1 1 0 0 1 0-1.42l9.74-9.74a6 6 0 0 1 7.07-7.07z"/>
  </svg>
);
const UploadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const WHY_JOIN = [
  { icon: <GrowthIcon />, title: 'Long-Term Growth', desc: 'We invest in people the same way we invest in clients — training, certifications, and clear paths to grow within the company.' },
  { icon: <TeamIcon />, title: 'Skilled Team', desc: 'Work alongside engineers and technicians with decades of combined experience across weighing, calibration, and automation.' },
  { icon: <ShieldIcon />, title: 'Stability & Trust', desc: 'Sole distributor status in Qatar for Dini Argeo, Rice Lake, and T-Scale means steady, long-term project pipelines.' },
  { icon: <ToolsIcon />, title: 'Hands-On Work', desc: 'From weighbridge installs to precision calibration — real fieldwork, real equipment, real responsibility from day one.' },
];

function CareersPage() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    applyingFor: 'Other',
    message: ''
  });
  const [resumeFileName, setResumeFileName] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setForm({ name: '', mobile: '', email: '', applyingFor: 'Other', message: '' });
        setResumeFileName('');
      }, 2500);
    }, 600);
  };

  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-bg" aria-hidden="true" />
        <div className="container-width services-hero-inner">
          <span className="services-hero-eyebrow">JOIN THE TEAM</span>
          <h1 className="services-hero-title">Build Your <em>Career</em> With Us</h1>
          <p className="services-hero-lead">
            We build long-term relationships with our people the same way we do with our clients.
            Grow your career with a trusted industrial equipment partner across Qatar and KSA.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="why-choose-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">WHY REAL TECHNOLOGIES</span>
            <h2 className="section-heading">A Team Worth Growing With</h2>
          </div>
          <div className="why-choose-grid about-trust-grid">
            {WHY_JOIN.map((card, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-icon">{card.icon}</div>
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="careers-apply-section">
        <div className="container-width">
          <div className="careers-apply-grid">
            <div className="careers-apply-info">
              <span className="section-pre-title">CURRENT OPENINGS</span>
              <h2 className="section-heading">No Open Positions Right Now</h2>
              <p className="section-subtitle careers-apply-desc">
                We don&apos;t have specific vacancies listed at the moment — but we&apos;re always glad to
                hear from skilled technicians and engineers. Post your resume and we&apos;ll reach out
                when a suitable role opens.
              </p>

              <ul className="careers-divisions-list">
                <li>Weighing Division</li>
                <li>Calibration Division</li>
                <li>Fabrication Division</li>
                <li>Automation Division</li>
                <li>Motor Re-Winding</li>
              </ul>
            </div>

            <div className="careers-form">
              <h3 className="careers-form-title">Post Your Resume</h3>
              {success ? (
                <div className="modal-success-state text-center py-xl">
                  <div className="success-icon-wrap">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 className="success-title">Application Received</h4>
                  <p className="success-desc">
                    Thank you for your interest in Real Technologies. Our team will review your details
                    and contact you if a suitable opportunity arises.
                  </p>
                </div>
              ) : (
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="career-name">Full Name *</label>
                      <input
                        type="text"
                        id="career-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="career-mobile">Mobile *</label>
                      <input
                        type="tel"
                        id="career-mobile"
                        required
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        placeholder="+974 / +966 ..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="career-email">Email Address *</label>
                      <input
                        type="email"
                        id="career-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. you@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="career-applying">Applying For</label>
                      <select
                        id="career-applying"
                        value={form.applyingFor}
                        onChange={(e) => setForm({ ...form, applyingFor: e.target.value })}
                      >
                        <option value="Weighing Division">Weighing Division</option>
                        <option value="Calibration Division">Calibration Division</option>
                        <option value="Fabrication Division">Fabrication Division</option>
                        <option value="Automation Division">Automation Division</option>
                        <option value="Motor Re-Winding">Motor Re-Winding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group col-span-2">
                      <label htmlFor="career-message">Message</label>
                      <textarea
                        id="career-message"
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your experience and the role you're after..."
                      />
                    </div>

                    <div className="form-group col-span-2">
                      <label htmlFor="career-resume">Resume (PDF / DOC)</label>
                      <label htmlFor="career-resume" className="careers-file-drop">
                        <UploadIcon />
                        <span>{resumeFileName || 'Choose a file or drag it here'}</span>
                      </label>
                      <input
                        type="file"
                        id="career-resume"
                        accept=".pdf,.doc,.docx"
                        className="careers-file-input"
                        onChange={(e) => setResumeFileName(e.target.files?.[0]?.name ?? '')}
                      />
                    </div>
                  </div>

                  <div className="modal-form-actions">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
