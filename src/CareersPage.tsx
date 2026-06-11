import { useEffect, useState } from 'react';
import { ArrowIcon } from './App';

function CareersPage() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    applyingFor: 'Other',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: '', mobile: '', email: '', applyingFor: 'Other', message: '' });
    }, 2500);
  };

  return (
    <div className="careers-page">
      {/* INTRO */}
      <section className="value-prop-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">JOIN THE TEAM</span>
            <h1 className="section-heading">Careers</h1>
            <p className="section-subtitle">
              We build long-term relationships with our people the same way we do with our clients.
              Grow your career with a trusted industrial equipment partner across Qatar and KSA.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="why-choose-section" style={{ paddingTop: 0 }}>
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">CURRENT OPENINGS</span>
            <h2 className="section-heading">No open positions right now</h2>
            <p className="section-subtitle">
              We don&apos;t have specific vacancies listed at the moment — but we&apos;re always glad to
              hear from skilled technicians and engineers. Post your resume below and we&apos;ll reach
              out when a suitable role opens.
            </p>
          </div>

          {/* POST YOUR RESUME */}
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
                    <input type="file" id="career-resume" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div className="modal-form-actions">
                  <button type="submit" className="btn btn-primary">
                    Submit Application <ArrowIcon />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
