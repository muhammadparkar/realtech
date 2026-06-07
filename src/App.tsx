import { useState, useEffect, useRef } from 'react';
import './index.css';

// SVG Icon Components for modular, dependency-free rendering
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);


const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
);


const WeighingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0-6-8-6-8-6s-8 0-8 6c0 5 3 8 8 10h.01c5-2 7.99-5 7.99-10z"/><path d="M12 4v16M8 8h8M6 12h12"/></svg>
);

const CalibrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-8.4 8.4M9 9l6 6M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
);

const FabricationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.07 7.07l-9.74 9.74a1 1 0 0 1-1.42 0l-1.6-1.6a1 1 0 0 1 0-1.42l9.74-9.74a6 6 0 0 1 7.07-7.07z"/><path d="m14 14-4-4"/></svg>
);

const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><path d="M12 14v4M12 8V6"/></svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
);

// Constants & Data adapted from the original website
const MEGA_MENU_SECTIONS = [
  {
    category: 'Weighing Systems',
    icon: <WeighingIcon />,
    links: [
      { name: 'Platform Scales', desc: 'Accurate and heavy-duty floor weighing solutions.', href: '#weighing' },
      { name: 'Vehicle Weighbridges', desc: 'High-capacity systems for logistics & ports.', href: '#weighing' },
      { name: 'Crane & Tension Scales', desc: 'Overhead load-monitoring under tough operations.', href: '#weighing' },
      { name: 'Hazardous Area Scales', desc: 'ATEX certified scales for chemical & gas environments.', href: '#weighing' }
    ]
  },
  {
    category: 'Metrology & Calibration',
    icon: <CalibrationIcon />,
    links: [
      { name: 'ISO/IEC 17025 Services', desc: 'Accredited testing at our high-precision laboratories.', href: '#calibration' },
      { name: 'On-Site Calibration', desc: 'Mobile certification units active across Qatar & KSA.', href: '#calibration' },
      { name: 'Mass & Force Calibration', desc: 'Standards-traceable weight inspections.', href: '#calibration' },
      { name: 'Scheduled Maintenance', desc: 'Annual compliance and service contracts.', href: '#calibration' }
    ]
  },
  {
    category: 'Fabrication & Systems',
    icon: <FabricationIcon />,
    links: [
      { name: 'Steel Platforms', desc: 'Custom load-bearing structures engineered to tolerance.', href: '#fabrication' },
      { name: 'Silo & Hopper Scales', desc: 'Continuous level integration for batching plants.', href: '#fabrication' },
      { name: 'Custom Tanks/Vessels', desc: 'SS304/SS316 food-grade containers and weighing.', href: '#fabrication' }
    ]
  },
  {
    category: 'Process Automation',
    icon: <AutomationIcon />,
    links: [
      { name: 'PLC Systems & HMI', desc: 'Siemens controller configurations & visual monitoring.', href: '#automation' },
      { name: 'ERP Database Integration', desc: 'Live SQL data links directly to SAP & Oracle.', href: '#automation' },
      { name: 'Batch & Recipe Control', desc: 'Automated mixing loops for consistent quality.', href: '#automation' }
    ]
  }
];

const HERO_SLIDES = [
  {
    eyebrow: 'Precision weighing & force systems',
    title: 'Industrial Weighing Solutions',
    label: 'Weighing',
    desc: '40 years of engineered precision. High-capacity, ATEX-approved weighing platforms built for the most demanding environments.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    link: '#weighing',
    badge: 'ATEX Certified Zone 1/21',
    telemetry: { label: 'MAX CAPACITY', value: '500,000 KG' }
  },
  {
    eyebrow: 'ISO/IEC 17025 accredited metrology',
    title: 'Accredited Calibration Services',
    label: 'Calibration',
    desc: 'Providing certified, traceable on-site calibrations and standards audits for Qatar and Saudi Arabian industries.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=1600&q=80',
    link: '#calibration',
    badge: 'ISO/IEC 17025 Accredited',
    telemetry: { label: 'TRACEABILITY', value: 'NIST / PTB Standards' }
  },
  {
    eyebrow: 'Turnkey PLC & ERP connectivity',
    title: 'Advanced Industrial Automation',
    label: 'Automation',
    desc: 'Connecting scale transmitters and PLC panels to enterprise ERP databases for real-time stock control and tracking.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    link: '#automation',
    badge: 'Industry 4.0 Compliant',
    telemetry: { label: 'INTERFACE', value: 'Modbus/TCP & Profinet' }
  },
  {
    eyebrow: 'Structural engineering & fabrication',
    title: 'Heavy Structural Fabrication',
    label: 'Fabrication',
    desc: 'AWS and ASME certified fabrication of custom platforms, hopper vessels, and silo load cells engineered to ±0.5mm tolerances.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80',
    link: '#fabrication',
    badge: 'ASME SEC IX / AWS D1.1',
    telemetry: { label: 'TOLERANCE', value: '±0.5 MM Structural' }
  },
  {
    eyebrow: 'Preventative compliance agreements',
    title: '24/7 Service & Support Contracts',
    label: 'Support Services',
    desc: 'Ensuring zero downtime with prompt site assistance, calibration reminders, and parts stocking agreements across the GCC.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    link: '#contact',
    badge: 'GCC-wide Support Coverage',
    telemetry: { label: 'RESPONSE TIME', value: '< 4 Hours On-site' }
  }
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=400&q=80'
];

const ALTERNATING_SECTIONS = [
  {
    tagline: 'INDUSTRIAL FORCE MEASUREMENT',
    title: 'High-Capacity Weighing Platforms',
    desc: 'Our weighing systems are designed to operate under harsh conditions. Incorporating shear-beam load cells, dustproof indicators, and anti-corrosion finishes, they provide stable measurements for mining, shipping ports, and manufacturing lines. Available in standard and hazardous ATEX area layouts.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    link: '#weighing'
  },
  {
    tagline: 'CERTIFIED METROLOGY STANDARDS',
    title: 'ISO/IEC 17025 Accredited Calibration',
    desc: 'Maintaining measurement accuracy is vital for quality control and audits. Real Technologies provides ISO accredited calibration contracts across Qatar and KSA. Our standard mass laboratories and mobile units offer testing, certified stickers, and documentation traceble directly to international standards.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=800&q=80',
    link: '#calibration'
  },
  {
    tagline: 'TURNKEY PROCESS CONNECTIVITY',
    title: 'Integrated Automation & PLC Panels',
    desc: 'Transition raw weight signals into actionable operational data. We fabricate control cabinets, write PLC algorithms, and configure direct database synchronization. We connect sensor telemetry into systems like SAP and SQL databases to ensure plant transparency and automated workflow loops.',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    link: '#automation'
  }
];

const WHY_CHOOSE_US = {
  title: 'Why Leading Industries Choose Real Technologies',
  cards: [
    {
      icon: <SupportIcon />,
      heading: '40 Years of Service',
      desc: 'Our teams possess deep mechanical and electronic domain expertise. We build weighing platforms and system connections engineered to last decades in coastal and industrial areas.'
    },
    {
      icon: <CalibrationIcon />,
      heading: 'ISO 17025 Accredited Labs',
      desc: 'All our metrology procedures comply strictly with international standards, ensuring your audits pass inspection smoothly with certified, traceable documentation.'
    },
    {
      icon: <AutomationIcon />,
      heading: 'Local GCC Presence',
      desc: 'With active engineering offices, fabrication facilities, and mobile calibration units in Qatar and Saudi Arabia, we provide quick, responsive on-site technical support.'
    }
  ]
};

const SOLUTIONS_GRID = {
  title: 'End-to-End Solutions for Excellence',
  sub: 'Customized solutions for leading manufacturers and plant operators',
  cards: [
    {
      icon: <WeighingIcon />,
      title: 'Heavy Duty Weighbridges',
      desc: 'Above-ground and pit-mounted vehicle truck scales with automated recognition and database links.',
      link: '#weighing'
    },
    {
      icon: <CalibrationIcon />,
      title: 'Accredited Metrology',
      desc: 'ISO 17025 calibrated mass, force, temperature, and pressure audits across industrial sectors.',
      link: '#calibration'
    },
    {
      icon: <FabricationIcon />,
      title: 'Custom Fabricated hoppers',
      desc: 'Carbon steel and SS316 load-bearing hopper scales, silo mounts, and structure systems built to order.',
      link: '#fabrication'
    },
    {
      icon: <AutomationIcon />,
      title: 'PLC Recipe Batching',
      desc: 'PLC-controlled recipe mixing networks with pneumatic valve controls and custom HMI touchscreen consoles.',
      link: '#automation'
    },
    {
      icon: <SupportIcon />,
      title: 'On-Site Maintenance',
      desc: 'Preventative agreements, load cell replacements, indicator swaps, and scheduled GCC technician audits.',
      link: '#contact'
    }
  ]
};

const SECONDARY_SERVICES = {
  watermark: 'INNOVATION',
  sub: 'Solutions that work for your business',
  cards: [
    {
      icon: <WeighingIcon />,
      title: 'ATEX Scale Systems',
      desc: 'Intrinsically safe load cells and display boxes certified for Zone 1/21 hazardous areas.'
    },
    {
      icon: <CalibrationIcon />,
      title: 'Tank Scale Calibration',
      desc: 'Certified water-calibration checks and physical standard loading testing on-site.'
    },
    {
      icon: <FabricationIcon />,
      title: 'ASME Platform Welding',
      desc: 'Load-certified platforms, structural supports, and customized steel fabrications.'
    },
    {
      icon: <AutomationIcon />,
      title: 'Live SQL Database Sync',
      desc: 'Direct synchronization of truck weighs into client server directories and billing platforms.'
    },
    {
      icon: <SupportIcon />,
      title: 'Calibration Contracts',
      desc: 'Scheduled inspections with automatic calibration reminder alerts to avoid expired certificates.'
    },
    {
      icon: <WeighingIcon />,
      title: 'Laboratory Balances',
      desc: 'High-precision microbalances and analytical calibration services for laboratories.'
    }
  ]
};

const PARTNER_LOGOS = [
  'DINI ARGEO', 'RICE LAKE', 'PRECISION', 'T-SCALE', 'JADEVER', 'KEMPSTON', 'ASTREC',
  'KERN & SOHN', 'METTLER TOLEDO', 'SARTORIUS', 'MINEBEA INTEC', 'OHAUS', 'HBM', 'AVERY WEIGH-TRONIX',
  'PRECIA MOLEN', 'FLINTEC', 'ZEMIC', 'KELI SENSORS', 'SYSTEC', 'BILANCIAI', 'LAUMAS', 'HOTTINGER',
  'TEDEA-HUNTLEIGH', 'SENSORTREAD', 'FLLS GROUP', 'GULF WEIGHING', 'Q-CALIBRATION'
];

const STATISTICS = [
  { icon: <SupportIcon />, target: 7, suffix: '+', label: 'Years GCC Presence' },
  { icon: <CalibrationIcon />, target: 50, suffix: '+', label: 'Global Partnerships' },
  { icon: <WeighingIcon />, target: 36, suffix: '+', label: 'Authorised Brands' },
  { icon: <FabricationIcon />, target: 1810, suffix: '+', label: 'Installed Systems' },
  { icon: <AutomationIcon />, target: 7241, suffix: '+', label: 'Calibrations Conducted' }
];

const BLOG_POSTS = [
  {
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=600&q=80',
    title: 'ISO 17025 Lab Capacity Expansion in Riyadh',
    excerpt: 'To better support Saudi Arabia Vision 2030, Real Technologies has expanded its metrology laboratory capacity, adding certified deadweight calibrators up to 10 Tons.',
    link: '#news'
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    title: 'Integrating Weighing Data with SAP Enterprise Platforms',
    excerpt: 'Standardizing raw sensor telemetry directly into warehouse SQL grids eliminates typing errors. Here is how we configured automatic SQL handshakes for a major logistics port.',
    link: '#news'
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80',
    title: 'Choosing the Right OIML Scale Accuracy Class',
    excerpt: 'Selecting standard scales requires knowing the differences between Class I, II, III, and IIII. Our calibration engineering team breaks down guidelines and margins.',
    link: '#news'
  }
];

const PHONE_COUNTRIES = [
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' }
];

function App() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null);

  // Hero Slider states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  // Video Section state
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Statistics Section states (Counting animation)
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statValues, setStatValues] = useState<number[]>(STATISTICS.map(() => 0));
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  // Modal Section states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(PHONE_COUNTRIES[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Industrial Weighing Systems',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);

  // Mega menu close timer to prevent glitching on cursor exit
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection for sticky header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll for Hero Section (rotating slider)
  useEffect(() => {
    if (heroPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroPaused]);

  // Statistics Count-Up Animation triggered by IntersectionObserver
  useEffect(() => {
    const currentRef = statsSectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 2000; // 2 seconds animation
          const frameRate = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out expo curve for organic feel
            const easeProgress = 1 - Math.pow(2, -10 * progress);

            setStatValues(
              STATISTICS.map((stat) => {
                const targetVal = stat.target;
                const currentVal = Math.round(targetVal * easeProgress);
                return currentVal > targetVal ? targetVal : currentVal;
              })
            );

            if (frame === totalFrames) {
              clearInterval(timer);
              // Ensure exact final numbers are populated
              setStatValues(STATISTICS.map((s) => s.target));
            }
          }, frameRate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [statsAnimated]);

  // Toggle video playing state
  const handlePlayPauseVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log('Video play error:', err));
    }
    setVideoPlaying(!videoPlaying);
  };

  // Handle quote modal submission
  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.email || !quoteForm.company) return;
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsModalOpen(false);
      setQuoteForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'Industrial Weighing Systems',
        message: ''
      });
    }, 2000);
  };

  // Mega menu mouse interactions
  const handleMouseEnterMenu = (index: number) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMegaMenu(index);
  };

  const handleMouseLeaveMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 250);
  };

  return (
    <div className="app-container">

      {/* ============================================================
          SECTION 1: FLOATING NAVBAR (reference-style)
      ============================================================ */}
      <header className={`navbar-float ${isScrolled ? 'navbar-scrolled' : ''} ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo" aria-label="Real Technologies Home">
            <img src="/logo.png" alt="Real Technologies Logo" className="navbar-logo-img" />
          </a>

          {/* Desktop nav links — centered */}
          <nav className="navbar-links-desktop" aria-label="Main Navigation">
            <ul className="navbar-links-list">
              <li><a href="#home" className="navbar-link">Home</a></li>
              <li
                onMouseEnter={() => handleMouseEnterMenu(0)}
                onMouseLeave={handleMouseLeaveMenu}
                className="navbar-item-has-dropdown"
              >
                <button className="navbar-link navbar-link-btn" aria-expanded={activeMegaMenu === 0}>
                  Solutions <ChevronDownIcon />
                </button>
                {/* Mega Menu */}
                <div className={`mega-menu ${activeMegaMenu === 0 ? 'is-active' : ''}`}>
                  <div className="mega-menu-inner container-width">
                    <div className="mega-menu-grid">
                      {MEGA_MENU_SECTIONS.map((sec, idx) => (
                        <div key={idx} className="mega-column">
                          <div className="mega-header">
                            <span className="mega-icon">{sec.icon}</span>
                            <span className="mega-title">{sec.category}</span>
                          </div>
                          <ul className="mega-links">
                            {sec.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <a href={link.href} className="mega-link">
                                  <span className="mega-link-name">{link.name}</span>
                                  <span className="mega-link-desc">{link.desc}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mega-footer">
                      <span className="mega-footer-txt">Need assistance with customized drawings or standard certification audits?</span>
                      <button className="btn btn-primary btn-sm" onClick={() => setIsModalOpen(true)}>
                        Request technical consult <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="#services" className="navbar-link">Services</a></li>
              <li><a href="#about" className="navbar-link">About</a></li>
              <li><a href="#news" className="navbar-link">News</a></li>
              <li><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-cta-desktop">
            <button className="btn btn-outline-nav btn-sm" onClick={() => setIsModalOpen(true)}>
              Get a Quote
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => setIsModalOpen(true)}>
              Request Consult <ArrowRightIcon />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-hamburger ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`navbar-mobile-panel ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="mobile-nav-list">
            <li><a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
            <li><a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#news" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>News</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="mobile-nav-footer-actions">
            <a href="tel:+97466257037" className="mobile-contact-link"><PhoneIcon /> Qatar: +974 6625 7037</a>
            <a href="tel:+966531216181" className="mobile-contact-link"><PhoneIcon /> KSA: +966 5312 16181</a>
            <button className="btn btn-primary w-full" style={{marginTop: '1rem'}} onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}>
              Request a quote <ArrowRightIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* ============================================================
          SECTION 2: IMMERSIVE HERO (reference-style: full-bleed bg)
      ============================================================ */}
      <section
        id="home"
        className={`hero-v2 ${heroPaused ? 'is-paused' : ''}`}
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        {/* Full-bleed background slides */}
        <div className="hero-v2-bg-stack">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-v2-bg-slide ${idx === currentSlide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            />
          ))}
          {/* Gradient overlays */}
          <div className="hero-v2-overlay" />
          <div className="hero-v2-overlay-side" />
        </div>

        {/* Content */}
        <div className="hero-v2-content">
          <div className="hero-v2-inner">
            {/* Badge */}
            <div className="hero-v2-badge">
              <span className="hero-v2-badge-dot"></span>
              <span>{HERO_SLIDES[currentSlide].badge}</span>
            </div>

            {/* Eyebrow */}
            <p className="hero-v2-eyebrow">{HERO_SLIDES[currentSlide].eyebrow}</p>

            {/* Headline */}
            <h1 className="hero-v2-headline">{HERO_SLIDES[currentSlide].title}</h1>

            {/* Description */}
            <p className="hero-v2-desc">{HERO_SLIDES[currentSlide].desc}</p>

            {/* CTA Buttons */}
            <div className="hero-v2-ctas">
              <a href={HERO_SLIDES[currentSlide].link} className="btn hero-v2-btn-primary">
                Explore Solutions <ArrowRightIcon />
              </a>
              <button className="btn hero-v2-btn-ghost" onClick={() => setIsModalOpen(true)}>
                Request a Demo
              </button>
            </div>

            {/* Telemetry strip */}
            <div className="hero-v2-telemetry">
              <div className="hero-v2-tel-item">
                <span className="hero-v2-tel-label">{HERO_SLIDES[currentSlide].telemetry.label}</span>
                <span className="hero-v2-tel-value">{HERO_SLIDES[currentSlide].telemetry.value}</span>
              </div>
              <div className="hero-v2-tel-sep"></div>
              <div className="hero-v2-tel-item">
                <span className="hero-v2-tel-label">COVERAGE</span>
                <span className="hero-v2-tel-value">Qatar &amp; KSA</span>
              </div>
              <div className="hero-v2-tel-sep"></div>
              <div className="hero-v2-tel-item">
                <span className="hero-v2-tel-label">EXPERIENCE</span>
                <span className="hero-v2-tel-value">40+ Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation tabs */}
        <div className="hero-v2-tabs">
          <div className="hero-v2-tabs-inner">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={idx}
                className={`hero-v2-tab ${idx === currentSlide ? 'is-active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to ${slide.label}`}
              >
                <div className="hero-v2-tab-bar">
                  {idx === currentSlide && (
                    <div key={currentSlide} className="hero-v2-tab-bar-fill" />
                  )}
                </div>
                <span className="hero-v2-tab-num">0{idx + 1}</span>
                <span className="hero-v2-tab-label">{slide.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          className="hero-v2-arrow hero-v2-arrow-prev"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          className="hero-v2-arrow hero-v2-arrow-next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </section>

      {/* ============================================================
          PARTNER TICKER (below hero — "trusted by" strip)
      ============================================================ */}
      <section className="partner-ticker-section">
        <div className="partner-ticker-inner">
          <div className="partner-ticker-label">
            <p>Authorised &amp; trusted by</p>
          </div>
          <div className="partner-ticker-track-wrap">
            <div className="partner-ticker-track">
              {[...PARTNER_LOGOS.slice(0, 12), ...PARTNER_LOGOS.slice(0, 12)].map((name, idx) => (
                <span key={idx} className="partner-ticker-name">{name}</span>
              ))}
            </div>
            <div className="partner-ticker-fade-left"></div>
            <div className="partner-ticker-fade-right"></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMAGE GALLERY CAROUSEL */}
      <section className="gallery-carousel-section">
        <div className="gallery-ticker-wrap">
          <div className="gallery-ticker-track">
            {/* Render gallery twice to ensure seamless circular wrapping */}
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((imgUrl, idx) => (
              <div key={idx} className="gallery-thumbnail">
                <img src={imgUrl} alt={`Real Technologies Industrial Equipment ${idx + 1}`} loading="lazy" />
                <div className="thumbnail-overlay">
                  <span className="thumbnail-tag">Verified Setup</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4: MAIN VALUE PROPOSITION */}
      <section id="services" className="value-prop-section">
        <div className="container-width value-prop-grid">
          <div className="value-prop-content">
            <span className="section-pre-title">OUR PERFORMANCE PROMISE</span>
            <h2 className="value-prop-headline">
              Your partner in precision,<br />
              productivity, performance
            </h2>
            <p className="value-prop-paragraph">
              Real Technologies designs, manufactures, and calibrates high-integrity industrial systems.
              We ensure GCC manufacturing plants maintain compliant, accurate sensor outputs, bridging
              the gap between heavy machinery and digital enterprise systems without compromising on durability.
            </p>
            <div className="value-prop-actions">
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                Request a quote <ArrowRightIcon />
              </button>
              <a href="#about" className="btn btn-outline">
                Read Corporate Profile
              </a>
            </div>
          </div>
          <div className="value-prop-visual">
            <div className="visual-blueprint-box">
              <div className="blueprint-line vertical" />
              <div className="blueprint-line horizontal" />
              <div className="blueprint-crosshair" />
              <div className="blueprint-data-badge">[ METROLOGY SYSTEM SCALE: GCC APPROVED ]</div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80"
                alt="Calibration measurement laboratory engineer"
                className="blueprint-photo"
              />
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: THREE-COLUMN IMAGE + TEXT SECTIONS */}
      <section className="alternating-blocks-section">
        <div className="container-width">
          {ALTERNATING_SECTIONS.map((sec, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`alternating-row ${isEven ? 'row-normal' : 'row-reversed'}`}>
                <div className="row-image-col">
                  <div className="row-image-frame">
                    <img src={sec.img} alt={sec.title} loading="lazy" />
                  </div>
                </div>
                <div className="row-text-col">
                  <span className="row-eyebrow">{sec.tagline}</span>
                  <h3 className="row-title">{sec.title}</h3>
                  <p className="row-desc">{sec.desc}</p>
                  <a href={sec.link} className="row-link">
                    Explore technology spec sheets <ArrowRightIcon />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* SECTION 6: WHY CHOOSE US SECTION */}
      <section id="about" className="why-choose-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">BUILT ON TRUST &amp; COMPETENCE</span>
            <h2 className="section-heading">{WHY_CHOOSE_US.title}</h2>
          </div>

          <div className="why-choose-grid">
            {WHY_CHOOSE_US.cards.map((card, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-icon">{card.icon}</div>
                <h3 className="why-card-title">{card.heading}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="why-choose-cta text-center">
            <button className="btn btn-outline" onClick={() => setIsModalOpen(true)}>
              Get more information <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 7: VIDEO SECTION */}
      <section className="video-section">
        <div className="video-viewport">
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-parts-of-a-robotic-arm-moving-41682-large.mp4"
            loop
            muted
            playsInline
            className="video-player-element"
            onClick={handlePlayPauseVideo}
          />
          <div className={`video-overlay-details ${videoPlaying ? 'is-playing' : ''}`}>
            <div className="video-content-inner text-center">
              <span className="video-tag">LABORATORY OVERVIEW</span>
              <h2 className="video-heading">Calibration &amp; Fabrications Facilities</h2>
              <p className="video-desc">Take a look inside our high-precision standards room and heavy steel fabrication workshops in action.</p>
              <button
                className="video-play-btn"
                onClick={handlePlayPauseVideo}
                aria-label={videoPlaying ? 'Pause video' : 'Play video'}
              >
                {videoPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 8: SOLUTIONS/SERVICES GRID */}
      <section className="solutions-grid-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">CORE CAPABILITIES</span>
            <h2 className="section-heading">{SOLUTIONS_GRID.title}</h2>
            <p className="section-subtitle">{SOLUTIONS_GRID.sub}</p>
          </div>

          <div className="solutions-5col-grid">
            {SOLUTIONS_GRID.cards.map((card, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-icon">{card.icon}</div>
                <h3 className="solution-card-title">{card.title}</h3>
                <p className="solution-card-desc">{card.desc}</p>
                <a href={card.link} className="solution-card-btn">
                  Explore <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 9: SECONDARY SERVICES SECTION */}
      <section className="secondary-services-section">
        <div className="container-width relative-container">
          {/* Creative Watermark Behind Section */}
          <div className="creative-watermark" aria-hidden="true">
            {SECONDARY_SERVICES.watermark}
          </div>

          <div className="section-intro">
            <span className="section-pre-title">SPECIFIC APPLICATIONS</span>
            <h2 className="section-heading">{SECONDARY_SERVICES.sub}</h2>
          </div>

          <div className="secondary-6card-grid">
            {SECONDARY_SERVICES.cards.map((card, idx) => (
              <div key={idx} className="secondary-service-card">
                <div className="secondary-card-icon">{card.icon}</div>
                <h3 className="secondary-card-title">{card.title}</h3>
                <p className="secondary-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 10: PARTNER LOGOS CAROUSEL */}
      <section className="partner-logos-section">
        <div className="container-width text-center mb-xl">
          <span className="section-pre-title">GCC AUTHORIZED DISTRIBUTOR</span>
          <h2 className="section-heading-sm">Representing World Class Brands</h2>
        </div>

        {/* Row 1: Left to Right */}
        <div className="logo-ticker-wrap">
          <div className="logo-ticker-track scroll-forward">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoName, idx) => (
              <div key={idx} className="logo-card">
                <span className="logo-text">{logoName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="logo-ticker-wrap mt-md">
          <div className="logo-ticker-track scroll-backward">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoName, idx) => (
              <div key={idx} className="logo-card">
                <span className="logo-text">{logoName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 11: STATISTICS COUNTER SECTION */}
      <section className="stats-section" ref={statsSectionRef}>
        <div className="container-width stats-grid">
          {STATISTICS.map((stat, idx) => (
            <div key={idx} className="stat-box text-center">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number-wrap">
                <span className="stat-number">{statValues[idx].toLocaleString()}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 12: NEWS & RESOURCES */}
      <section id="news" className="news-resources-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">TECHNICAL INSIGHTS</span>
            <h2 className="section-heading">News and Resources</h2>
            <p className="section-subtitle">Insights that Inspire Innovation...</p>
          </div>

          <div className="news-3col-grid">
            {BLOG_POSTS.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-card-img" style={{ backgroundImage: `url(${post.img})` }} />
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <a href={post.link} className="blog-card-link">
                    Read more <ArrowRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 13: PRE-FOOTER CTA SECTION */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">LET'S TALK</span>
            <h2 className="cta-title">Smart, Efficient &amp; Future Ready</h2>
            <p className="cta-desc">
              Request a quote or speak directly with our engineering teams in Doha and Dammam.
              We calibrate load systems and configure automated data synchronization customized for your plant setup.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={() => setIsModalOpen(true)}>
              Get started <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 14: FOOTER */}
      <footer id="contact" className="footer-section">
        <div className="container-width footer-grid">
          {/* Column 1: Logo & Contact Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <span className="logo-bold">REAL</span>
              <span className="logo-light">TECHNOLOGIES</span>
            </div>
            <p className="footer-about-text">
              GCC systems provider for industrial weighing, calibration, fabrication, and PLC automation.
            </p>
            <div className="footer-contact-details">
              <p><strong>Qatar HQ Address:</strong> Industrial Area St. 24, Doha, Qatar</p>
              <p><strong>KSA Branch Address:</strong> Khalidiya Industrial, Dammam, KSA</p>
              <p><strong>Phone Qatar:</strong> <a href="tel:+97466257037">+974 6625 7037</a></p>
              <p><strong>Phone KSA:</strong> <a href="tel:+966531216181">+966 5312 16181</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@realtechgulf.com">info@realtechgulf.com</a></p>
            </div>
          </div>

          {/* Column 2: Our Business */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Our Business</h4>
            <ul className="footer-links">
              <li><a href="#weighing">Weighing Solutions</a></li>
              <li><a href="#calibration">ISO Calibration</a></li>
              <li><a href="#fabrication">Custom Fabrications</a></li>
              <li><a href="#automation">Process Automation</a></li>
              <li><a href="https://www.erphorizon.com/company/realtechnologies137/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer">ERP Partner Portal</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Products */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#weighing">Platform Scales</a></li>
              <li><a href="#weighing">Truck Weighbridges</a></li>
              <li><a href="#fabrication">Silo Load Cells</a></li>
              <li><a href="#weighing">ATEX Indicators</a></li>
              <li><a href="#automation">Recipe Controller Software</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container-width bottom-inner">
            <p className="copyright-txt">
              &copy; {new Date().getFullYear()} Real Technologies. All Rights Reserved. Qatar &amp; KSA.
            </p>

            <div className="social-links-row">
              <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12a10.01 10.01 0 0 1-2.91 7.07 10 10 0 0 1-14.18 0A10 10 0 0 1 3 12a10.01 10.01 0 0 1 2.91-7.07 10 10 0 0 1 14.18 0A10.02 10.02 0 0 1 23 12m-11-4.5v9l6-4.5-6-4.5z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.7 0-1.37-.2-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.6 8.6 0 0 1-5.36 1.84c-.35 0-.69-.02-1.03-.06A12.13 12.13 0 0 0 6.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53.8-.57 1.49-1.3 2.04-2.13z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            </div>

            <p className="footer-credit">
              Powered by <span className="credit-brand">Real Technologies Gulf</span>
            </p>
          </div>
        </div>
      </footer>


      {/* SECTION 15: MODAL/POPUP FORM ("Request a Quote") */}
      {isModalOpen && (
        <div className="modal-root" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
          <div className="modal-window">
            <div className="modal-header">
              <h3 className="modal-title">Request a Certified Quote</h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close dialog"
              >
                <CloseIcon />
              </button>
            </div>

            {formSuccess ? (
              <div className="modal-success-state text-center py-xl">
                <div className="success-icon-wrap">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className="success-title">Submission Successful</h4>
                <p className="success-desc">
                  Thank you. An engineering representative from our Doha or Dammam office will contact you shortly with specs.
                </p>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmitQuote}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="quote-name">Full Name *</label>
                    <input
                      type="text"
                      id="quote-name"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quote-company">Company Name *</label>
                    <input
                      type="text"
                      id="quote-company"
                      required
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      placeholder="e.g. Saudi Aramco / QTerminals"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quote-email">Corporate Email *</label>
                    <input
                      type="email"
                      id="quote-email"
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="e.g. engineer@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quote-phone">Phone Number *</label>
                    <div className="phone-input-wrap">
                      <div className="country-selector">
                        <button
                          type="button"
                          className="country-selector-btn"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          aria-label="Select country code"
                        >
                          <span className="country-flag">{selectedCountry.flag}</span>
                          <span className="country-code">{selectedCountry.code}</span>
                          <ChevronDownIcon />
                        </button>
                        {countryDropdownOpen && (
                          <ul className="country-dropdown-list">
                            {PHONE_COUNTRIES.map((c, i) => (
                              <li key={i}>
                                <button
                                  type="button"
                                  className="country-item-btn"
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setCountryDropdownOpen(false);
                                  }}
                                >
                                  <span className="country-flag">{c.flag}</span>
                                  <span className="country-name">{c.name}</span>
                                  <span className="country-code-item">{c.code}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="quote-phone"
                        required
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        placeholder="5555 1234"
                      />
                    </div>
                  </div>

                  <div className="form-group col-span-2">
                    <label htmlFor="quote-service">Select Required Division / Service</label>
                    <select
                      id="quote-service"
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    >
                      <option value="Industrial Weighing Systems">Industrial Weighing Division</option>
                      <option value="ISO 17025 Accredited Calibration">Metrology &amp; Calibration Division</option>
                      <option value="Steel Structure Fabrication">Heavy Fabrication Division</option>
                      <option value="PLC Systems Integration">Process Automation Division</option>
                      <option value="GCC Annual Maintenance Contract">Annual Maintenance Contract (AMC)</option>
                    </select>
                  </div>

                  <div className="form-group col-span-2">
                    <label htmlFor="quote-message">Application / Tolerance Requirements</label>
                    <textarea
                      id="quote-message"
                      rows={3}
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      placeholder="Please describe capacities, dimensions, or ISO audit deadlines..."
                    />
                  </div>
                </div>

                <div className="modal-form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit RFQ <ArrowRightIcon />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
