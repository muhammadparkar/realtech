import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, type LayoutContext } from './App';

const CalibrationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="m16.2 7.8-8.4 8.4"/>
    <path d="M9 9h.01M15 15h.01"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
);

const WeighingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 20h12M12 4v16M8 8a4 4 0 0 1 8 0"/>
    <path d="M3 20h4l1-6H3l-1 4a1 1 0 0 0 1 2zM17 20h4a1 1 0 0 0 1-2l-1-4h-4l1 6z"/>
  </svg>
);

const AutomationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const FabricationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.07 7.07l-9.74 9.74a1 1 0 0 1-1.42 0l-1.6-1.6a1 1 0 0 1 0-1.42l9.74-9.74a6 6 0 0 1 7.07-7.07z"/>
    <path d="m14 14-4-4"/>
  </svg>
);

const MotorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);

export const SERVICES = [
  {
    id: 'calibration',
    icon: <CalibrationIcon />,
    title: 'Calibration Services',
    tagline: 'PRECISION & COMPLIANCE',
    desc: 'Calibration typically refers to the process of adjusting or aligning a device, instrument, or system to ensure accuracy and reliability. It involves comparing the measurements of the device to a known standard and making any necessary adjustments to bring them into agreement. It is essential for various applications, such as laboratory equipment, industrial machinery, medical devices, and even automotive systems. By calibrating instruments and systems, we can ensure that they provide precise and consistent results, which is crucial for maintaining quality, safety, and compliance in many industries.',
    highlights: ['Laboratory Equipment', 'Industrial Machinery', 'Medical Devices', 'Automotive Systems'],
    img: '/images/services/service-calibration-icon.png',
    photo: '/images/home/divisions/division-calibration-weights-loading.jpg',
    short: 'Adjusting and aligning devices against known standards to guarantee accuracy, reliability, and compliance.',
  },
  {
    id: 'weighing',
    icon: <WeighingIcon />,
    title: 'Weighing Solutions',
    tagline: 'INDUSTRIAL-GRADE ACCURACY',
    desc: 'Weighing solutions refer to various methods or technologies used to accurately measure and determine the weight of objects or substances. There are different types of weighing solutions available, depending on the specific requirements and applications. It\'s essential to select the appropriate weighing solution based on the specific requirements, accuracy needs, and environmental conditions of the intended application. Electronic balances employ strain gauge load cells or other sensor technologies to convert the applied force into an electrical signal, which is then translated into weight readings. Industrial weighing solutions include platform scales, floor scales, and other heavy-duty equipment capable of handling large loads.',
    highlights: ['Platform & Floor Scales', 'Load Cells & Indicators', 'Weighbridges up to 120T', 'Software Integration'],
    img: '/images/services/service-weighing-icon.png',
    photo: '/images/home/divisions/division-weighing-weighbridge-finished-blue.jpg',
    short: 'Platform scales, load cells, and weighbridges up to 120T — accurate measurement for any load or environment.',
  },
  {
    id: 'automation',
    icon: <AutomationIcon />,
    title: 'Automation Solutions',
    tagline: 'SMART PROCESS CONTROL',
    desc: 'Automation solutions refer to technologies and systems that aim to automate and streamline various processes and tasks in industries, businesses, and everyday life. These solutions utilize a combination of hardware, software, and control systems to reduce manual intervention, increase efficiency, improve productivity, and enhance overall operational performance. Automation solutions bring numerous benefits, including increased efficiency, improved accuracy, reduced labor costs, enhanced safety, and the ability to handle complex tasks. They play a crucial role in modern industries, businesses, and daily life, transforming the way we work and live.',
    highlights: ['Process Automation', 'Batching Plant Control', 'PC & Software Integration', 'Pneumatics (Artec)'],
    img: '/images/services/service-automation-icon.png',
    photo: '/images/home/divisions/division-automation-indicator-panel.jpg',
    short: 'Hardware, software, and control systems that cut manual intervention and lift efficiency, accuracy, and safety.',
  },
  {
    id: 'fabrication',
    icon: <FabricationIcon />,
    title: 'Fabrication Services',
    tagline: 'STEEL & METAL WORKS',
    desc: 'Metal fabrication services involve the manufacturing and shaping of metal components and structures through cutting, bending, welding, and assembling processes. These services are typically provided by specialized staff who have expertise in working with different types of metals, such as steel and stainless steel. Metal fabrication services are utilized in various industries, including construction, automotive, aerospace, furniture manufacturing, and more.',
    highlights: ['Steel Weighbridges', 'Stairs, Grills & Cladding', 'Sanitizing Gates', 'Custom Structures'],
    img: '/images/services/service-fabrication-icon.png',
    photo: '/images/home/divisions/division-fabrication-beam-crane-hoist.jpg',
    short: 'Cutting, bending, welding, and assembling steel and stainless components and structures built to order.',
  },
  {
    id: 'motor',
    icon: <MotorIcon />,
    title: 'Motor Re-Winding',
    tagline: 'REPAIR & REFURBISHMENT',
    desc: 'Motor rewinding is a process of repairing or refurbishing an electric motor by replacing the winding coils. It involves removing the existing winding coils, inspecting the motor for any other damage or wear, and then replacing the coils with new ones. Motor rewinding is typically performed when the original winding coils are damaged, worn out, or if the motor needs to be reconfigured for a different voltage or speed. The rewinding process includes several steps such as dismantling the motor, removing the old coils, cleaning and inspecting the core and other motor components, calculating and winding the new coils, and finally reassembling the motor.',
    highlights: ['Single & Three Phase Motors', 'Voltage Reconfiguration', 'Core Inspection & Cleaning', 'Full Reassembly & Test'],
    img: '/images/services/service-motor-rewinding-icon.png',
    photo: '/images/home/gallery/gallery-weighbridge-night-sensor-pole.jpeg',
    short: 'Replacing winding coils, inspecting the core, and reassembling electric motors to restore full performance.',
  },
];

function ServicesPage() {
  const { openModal } = useOutletContext<LayoutContext>();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      // wait a frame so the target row is mounted
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-bg" aria-hidden="true" />
        <div className="container-width services-hero-inner">
          <span className="services-hero-eyebrow">REAL TECHNOLOGIES · GULF</span>
          <h1 className="services-hero-title">Our <em>Services</em></h1>
          <p className="services-hero-lead">
            From precision calibration to heavy-duty fabrication — five core disciplines
            engineered to keep your operations accurate, efficient, and compliant.
          </p>
          <div className="services-hero-pills">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="services-hero-pill">
                <span className="services-hero-pill-icon">{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section className="services-list">
        {SERVICES.map((svc, i) => (
          <article
            key={svc.id}
            id={svc.id}
            className={`services-row ${i % 2 === 1 ? 'services-row--reversed' : ''}`}
          >
            <div className="container-width services-row-inner">

              {/* Visual */}
              <div className="services-row-visual">
                <div className="services-row-img-wrap">
                  <img
                    src={svc.photo}
                    alt={svc.title}
                    className="services-row-img"
                    loading="lazy"
                  />
                  <div className="services-row-img-badge">
                    <span className="services-row-badge-icon">{svc.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="services-row-content">
                <span className="services-row-tagline">{svc.tagline}</span>
                <h2 className="services-row-title">{svc.title}</h2>
                <p className="services-row-desc">{svc.desc}</p>

                <ul className="services-row-highlights">
                  {svc.highlights.map((h) => (
                    <li key={h} className="services-row-highlight-item">
                      <span className="services-row-check" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary services-row-cta" onClick={openModal}>
                  Get a Quote <ArrowIcon />
                </button>
              </div>

            </div>
          </article>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="services-cta-strip">
        <div className="container-width services-cta-inner">
          <div className="services-cta-text">
            <h2 className="services-cta-title">Ready to get started?</h2>
            <p className="services-cta-sub">
              Our engineers are on hand to assess your requirements and recommend the right solution.
            </p>
          </div>
          <button className="btn services-cta-btn" onClick={openModal}>
            Contact our team <ArrowIcon />
          </button>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;
