import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Outlet, Link, useOutletContext } from 'react-router-dom';
import './index.css';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import IndustriesPage from './IndustriesPage';
import CareersPage from './CareersPage';
import ServicesPage from './ServicesPage';
import IndustryDetailPage from './IndustryDetailPage';

// ============================================================
// SVG Icon Components
// ============================================================
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

// ============================================================
// Constants & Data
// ============================================================
const HERO_SLIDES = [
  {
    eyebrow: 'Weighing the world',
    title: 'Industrial Weighing Solutions',
    label: 'Weighing',
    desc: 'RealTech scales can be found in almost every industry. No matter how challenging or unique, RealTech will have your answer — weighbridges, scales, load cells and indicators.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    link: '#weighing',
    badge: 'Sole Distributor in Qatar',
    telemetry: { label: 'WEIGHBRIDGE CAPACITY', value: 'Up to 120 Ton' }
  },
  {
    eyebrow: 'Accuracy & reliability you can trust',
    title: 'Precision Calibration Services',
    label: 'Calibration',
    desc: 'Adjusting and aligning instruments to ensure accuracy and reliability — scales, weighbridges, verniers, micrometers, thermometers, ovens, pressure and compression machines.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=1600&q=80',
    link: '#calibration',
    badge: 'Standards-Traceable',
    telemetry: { label: 'INSTRUMENTS', value: 'Mass · Pressure · Dimensional' }
  },
  {
    eyebrow: 'Manufacturing & shaping of metal',
    title: 'Steel Fabrication Division',
    label: 'Fabrication',
    desc: 'Cutting, bending, welding and assembling of metal components and structures — steel weighbridges, stairs, grills, cladding, sanitizing gates and concrete mixers.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80',
    link: '#fabrication',
    badge: 'Custom Fabrication',
    telemetry: { label: 'WORKS', value: 'Weighbridges · Structures' }
  },
  {
    eyebrow: 'Automate & streamline your processes',
    title: 'Industrial Automation Solutions',
    label: 'Automation',
    desc: 'Operating processes through electronic means with minimal human intervention — batching plant gate control, PC integration and pneumatics from Artec Italy.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    link: '#automation',
    badge: 'Process Control',
    telemetry: { label: 'INTEGRATION', value: 'PC Serial + Software' }
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
    tagline: 'WEIGHING DIVISION',
    title: 'Weighing Solutions for Every Industry',
    desc: 'Weighing solutions are the various methods and technologies used to accurately measure and determine the weight of objects or substances. As the sole distributor in Qatar, we supply weighbridges, platform and bench scales, load cells and indicators from Dini Argeo, Rice Lake, Cardinal and T-Scale — backed by our own customized weighing software.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    link: '#weighing'
  },
  {
    tagline: 'CALIBRATION DIVISION',
    title: 'Calibration for Accuracy & Reliability',
    desc: 'Calibration is the process of adjusting or aligning a device, instrument or system to ensure accuracy and reliability. We calibrate batching plants, weighing scales, weighbridges, standard weights, test sieves, verniers, micrometers, thermometers, ovens, pH meters, multimeters, pressure and compression machines, and safe load indicators.',
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=800&q=80',
    link: '#calibration'
  },
  {
    tagline: 'FABRICATION DIVISION',
    title: 'Metal Fabrication & Structures',
    desc: 'Fabrication is the manufacturing and shaping of metal components and structures through cutting, bending, welding and assembling processes. Our works include steel weighbridges, stairs, grills, cladding, sanitizing gates and Unibeton concrete mixers built to order.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    link: '#fabrication'
  },
  {
    tagline: 'AUTOMATION DIVISION',
    title: 'Automation & Process Control',
    desc: 'Automation solutions are the technologies and systems that aim to automate and streamline various processes and tasks with minimal human intervention. We control coarse and fine gates to target loading values, integrate systems with PCs over serial communication, and supply Artec pneumatic cylinders.',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    link: '#automation'
  }
];

const WHY_CHOOSE_US = {
  title: 'Why Leading Industries Choose Real Technologies',
  cards: [
    {
      icon: <SupportIcon />,
      heading: '60 Years Combined Experience',
      desc: 'Our team brings together 60 years of combined experience in the industry, honing our skills and knowledge to deliver the highest standard of service to our valued clients.'
    },
    {
      icon: <CalibrationIcon />,
      heading: 'Sole Distributor in Qatar',
      desc: 'Authorised distribution for Dini Argeo, Rice Lake, Cardinal, T-Scale, Banner Engineering, Kempston Controls and Artec — premium brands trusted across industry.'
    },
    {
      icon: <AutomationIcon />,
      heading: '24x7 Support in KSA & Qatar',
      desc: 'With 24x7 customer service support and fully integrated service centres in Saudi Arabia and Qatar, we provide quick, responsive on-site technical assistance.'
    }
  ]
};

const SOLUTIONS_GRID = {
  title: 'Our Services',
  sub: 'Customized solutions for leading manufacturers and plant operators',
  cards: [
    {
      icon: <CalibrationIcon />,
      title: 'Calibration Services',
      desc: 'The process of adjusting or aligning a device, instrument or system to ensure accuracy and reliability.',
      link: '#calibration'
    },
    {
      icon: <WeighingIcon />,
      title: 'Weighing Solutions',
      desc: 'Various methods and technologies used to accurately measure and determine the weight of objects or substances.',
      link: '#weighing'
    },
    {
      icon: <AutomationIcon />,
      title: 'Automation Solutions',
      desc: 'Technologies and systems that aim to automate and streamline various processes and tasks.',
      link: '#automation'
    },
    {
      icon: <FabricationIcon />,
      title: 'Fabrication Services',
      desc: 'Manufacturing and shaping of metal components and structures through cutting, bending, welding and assembling.',
      link: '#fabrication'
    },
    {
      icon: <SupportIcon />,
      title: 'Motor Re-Winding',
      desc: 'Repairing or refurbishing an electric motor by replacing the winding coils.',
      link: '#contact'
    }
  ]
};

export const SECONDARY_SERVICES = {
  watermark: 'INDUSTRIES',
  sub: 'Weighing the World — RealTech scales can be found in almost every industry',
  cards: [
    { icon: <WeighingIcon />, title: 'Agriculture', desc: 'Weighing and measurement solutions for farms, grain handling and produce.' },
    { icon: <AutomationIcon />, title: 'Aviation', desc: 'Precision weighing systems supporting airport and aviation operations.' },
    { icon: <FabricationIcon />, title: 'Bulk Construction', desc: 'Weighbridges and batching plant control for heavy construction sites.' },
    { icon: <CalibrationIcon />, title: 'Chemical', desc: 'Accurate weighing and calibration for chemical processing facilities.' },
    { icon: <WeighingIcon />, title: 'Commercial Fishing', desc: 'Durable weighing equipment for fishing and marine handling.' },
    { icon: <SupportIcon />, title: 'Food Processing', desc: 'Hygienic scales and systems for food production lines.' },
    { icon: <WeighingIcon />, title: 'Grocery & Food Service', desc: 'Retail and food-service weighing for accurate portioning and billing.' },
    { icon: <CalibrationIcon />, title: 'Health Care', desc: 'Calibrated instruments and scales for medical and lab environments.' },
    { icon: <FabricationIcon />, title: 'Manufacturing', desc: 'Industrial weighing and automation across production processes.' },
    { icon: <AutomationIcon />, title: 'Scrap & Recycling', desc: 'Heavy-duty weighbridges for scrap, aggregates and recycling yards.' },
    { icon: <SupportIcon />, title: 'Logistics', desc: 'Vehicle weighbridges and software for ports and logistics hubs.' },
    { icon: <WeighingIcon />, title: 'Livestock', desc: 'Robust weighing systems designed for livestock management.' }
  ]
};

const PARTNER_LOGOS = [
  'CARDINAL', 'DINI ARGEO', 'RICE LAKE', 'PRECIA MOLEN', 'T-SCALE',
  'BANNER ENGINEERING', 'KEMPSTON CONTROLS', 'ARTEC PNEUMATIC',
  'SICK', 'OMRON', 'WEIDMULLER', 'DANFOSS', 'BURKERT', 'HONEYWELL', 'EATON', 'PILZ', 'UNIBETON'
];

const STATISTICS = [
  { icon: <SupportIcon />, target: 60, suffix: '', label: 'Years Combined Experience' },
  { icon: <FabricationIcon />, target: 4, suffix: '', label: 'Core Divisions' },
  { icon: <WeighingIcon />, target: 12, suffix: '', label: 'Industries Served' },
  { icon: <CalibrationIcon />, target: 8, suffix: '+', label: 'Authorised Brands' },
  { icon: <AutomationIcon />, target: 2, suffix: '', label: 'Countries — KSA & Qatar' }
];

export const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    title: 'Recycled Aggregates Project',
    client: 'Al Awalia (QPMC)',
    desc: 'Manufacturing of 4 weighbridges of capacity 120 Ton with Rice Lake analog load cells and Dini Argeo touch screen indicator, with 2 years of warranty.'
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    title: 'IIWWTP',
    client: 'Larsen & Toubro',
    desc: 'Manufacturing of 10 numbers of 120 Ton concrete weighbridge with Dini Argeo load cells and Dini Argeo indicator with external display and safety guards.'
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80',
    title: 'Recycled Aggregates Project',
    client: 'Al Awalia (QPMC)',
    desc: 'Manufacturing of 10 weighbridges of capacity 120 Ton with Dini Argeo analog load cells and Dini Argeo touch screen indicator, with 2 years of warranty.'
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    title: 'Cement Batching Plant Implementation',
    client: 'Al Khalij Cement',
    desc: 'Controlling of coarse and fine gates based on the target value set for loading the cement bulkers using the Dini Argeo 3590 touchscreen indicator.'
  },
  {
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=600&q=80',
    title: 'D&B Wakra & Wukair TSE Line',
    client: 'UCC Infraroad Joint Venture',
    desc: 'Manufacturing of 120 Ton weighbridge with Dini Argeo analog load cells and Dini Argeo indicator, with 2 years of warranty.'
  },
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    title: 'Central Doha & Corniche Beautification — Package 4',
    client: 'UCC Infraroad Joint Venture',
    desc: 'Manufacturing of 120 Ton weighbridge with Dini Argeo digital load cells and Dini Argeo indicator (2 years warranty), with PC serial communication and customized weighing software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    title: 'Al Meshaf Package 7',
    client: 'Petroserv',
    desc: 'Manufacturing of 120 Ton weighbridge with Dini Argeo digital load cells and Dini Argeo indicator (2 years warranty), integrated with PC via serial communication and proprietary weighing software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    title: 'PJ021 — Al Karthiyat & Izgava Phase 1 Package 2',
    client: 'UCC Infraroad Joint Venture',
    desc: 'Manufacturing of 120 Ton weighbridge with Dini Argeo digital load cells and Dini Argeo indicator (2 years warranty), with system-to-computer connectivity via serial interface and custom software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80',
    title: 'Bunker Expansion Project',
    client: 'Aalaf Qatar',
    desc: 'Production of 2 numbers of 120 Ton concrete weighbridge with Dini Argeo load cells and indicator, external display and safety guards, with PC-linked serial communication and customized weighing software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    title: 'HIA Extension Project',
    client: 'UCC Bahadir Tedeschia Joint Venture',
    desc: 'Manufacturing of 2 numbers of 120 Ton steel weighbridge with Dini Argeo load cells and Dini Argeo indicator, with PC connection via serial communication and specialized weighing software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1742163962100-0694339f2d57?auto=format&fit=crop&w=600&q=80',
    title: 'Drum Scale',
    client: 'Qatar International Cables Company',
    desc: 'Manufacturing of 25 Ton weighing scale with Dini Argeo load cells and indicator, with the entire system communicating to PC via serial communication and a customized Real Technology weighing software.'
  },
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    title: 'QICC Extension Project',
    client: 'Qatar International Cables Company',
    desc: 'Manufacturing of 120 Ton weighbridge with Dini Argeo digital load cells and touch screen Dini Argeo indicator (2 years warranty), with PC serial communication and customized Real Technology weighing software.'
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

// Shared Outlet context — lets routed pages open the global quote modal
export type LayoutContext = { openModal: () => void };
export const ArrowIcon = ArrowRightIcon;

// ============================================================
// TopBar Component
// ============================================================
function TopBar({ isScrolled }: { isScrolled: boolean }) {
  const marqueeItems = (
    <>
      <a href="tel:+966138555359" className="top-bar-contact-item"><PhoneIcon /><span>+966 13 855 5359 <span className="top-bar-country">(KSA)</span></span></a>
      <span className="top-bar-sep">|</span>
      <a href="tel:+97444436750" className="top-bar-contact-item"><PhoneIcon /><span>+974 4443 6750 <span className="top-bar-country">(QATAR)</span></span></a>
      <span className="top-bar-sep">|</span>
      <a href="mailto:info@realtechgulf.com" className="top-bar-contact-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><span>info@realtechgulf.com</span></a>
      <span className="top-bar-sep">|</span>
    </>
  );

  return (
    <div className={`top-bar${isScrolled ? ' top-bar-hidden' : ''}`}>
      {/* Mobile: continuous marquee of contact details */}
      <div className="top-bar-mobile" aria-hidden="true">
        <div className="top-bar-marquee-track">
          {marqueeItems}
          {marqueeItems}
        </div>
      </div>

      <div className="top-bar-inner top-bar-desktop">
        <div className="top-bar-contacts">
          <a href="tel:+966138555359" className="top-bar-contact-item">
            <PhoneIcon />
            <span>+966 13 855 5359 <span className="top-bar-country">(KSA)</span></span>
          </a>
          <span className="top-bar-sep">|</span>
          <a href="tel:+97444436750" className="top-bar-contact-item">
            <PhoneIcon />
            <span>+974 4443 6750 <span className="top-bar-country">(QATAR)</span></span>
          </a>
          <span className="top-bar-sep">|</span>
          <a href="mailto:info@realtechgulf.com" className="top-bar-contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>info@realtechgulf.com</span>
          </a>
        </div>
        <div className="top-bar-social">
          <a href="#" aria-label="Facebook" className="top-bar-social-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="top-bar-social-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Google" className="top-bar-social-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
          </a>
          <a href="#" aria-label="Search" className="top-bar-social-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Header Component (navbar — owns its own scroll/menu state)
// ============================================================
function Header({ onOpenModal, isScrolled }: { onOpenModal: () => void; isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <>
      <header className={`navbar-float ${isScrolled ? 'navbar-scrolled' : ''} ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" aria-label="Real Technologies Home">
            <img src="/logo.png" alt="Real Technologies Logo" className="navbar-logo-img" />
          </Link>

          <nav className="navbar-links-desktop" aria-label="Main Navigation">
            <ul className="navbar-links-list">
              <li><a href="/#home" className="navbar-link">Home</a></li>
              <li><Link to="/about" className="navbar-link">About Us</Link></li>
              <li><Link to="/services" className="navbar-link">Services</Link></li>
              <li
                onMouseEnter={() => handleMouseEnterMenu(0)}
                onMouseLeave={handleMouseLeaveMenu}
                className="navbar-item-has-dropdown"
              >
                <button className="navbar-link navbar-link-btn" aria-expanded={activeMegaMenu === 0}>
                  Industries <ChevronDownIcon />
                </button>
                <div className={`industries-dropdown ${activeMegaMenu === 0 ? 'is-active' : ''}`}>
                  <ul className="industries-dropdown-grid">
                    {([
                      { label: 'Agriculture',           slug: 'agriculture',          icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 7 2 2 2c0 5 5 10 10 10zM12 12c0-5 5-10 10-10-5 5-5 5-5 10"/><path d="M5 22h14"/></svg> },
                      { label: 'Aviation',              slug: 'aviation',             icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2a1 1 0 0 0-.6 1.7l4 4-1 3.5 3.5-1 4 4a1 1 0 0 0 1.7-.6z"/></svg> },
                      { label: 'Bulk Construction',     slug: 'bulk-construction',    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2"/><path d="M12 7V5a2 2 0 0 0-4 0v2M7 21V17M17 21V17M2 17h20"/></svg> },
                      { label: 'Chemical',              slug: 'chemical',             icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6v4l4 11a1 1 0 0 1-.9 1.4H5.9A1 1 0 0 1 5 18L9 7V3z"/><path d="M6 14h12"/></svg> },
                      { label: 'Commercial Fishing',    slug: 'commercial-fishing',   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.5a7 7 0 0 0-12 0"/><path d="M12 2v5M5 9l1.5 1.5M19 9l-1.5 1.5M12 22v-4.5"/><circle cx="12" cy="12" r="3"/></svg> },
                      { label: 'Food Processing',       slug: 'food-processing',      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg> },
                      { label: 'Grocery & Food Service',slug: 'grocery-food-service', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
                      { label: 'Health Care',           slug: 'health-care',          icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
                      { label: 'Manufacturing',         slug: 'manufacturing',        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l4-4 4 4V4l4 4v12"/></svg> },
                      { label: 'Scrap & Recycling',     slug: 'scrap-recycling',      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.764L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-2.769l-6.277-10.88a1.83 1.83 0 0 0-3.113 0l-.387.67"/><path d="m14 16-3 3 3 3"/><path d="m8.5 8.5-3 3 3 3"/></svg> },
                      { label: 'Logistics',             slug: 'logistics',            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="2" y="5" rx="2"/><path d="M16 5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M22 13v3a2 2 0 0 1-2 2h-1"/></svg> },
                      { label: 'Livestock',             slug: 'livestock',            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
                    ] as { label: string; slug: string; icon: React.ReactNode }[]).map(({ label, slug, icon }) => (
                      <li key={label}>
                        <Link to={`/industry/${slug}`} className="industries-dropdown-item" onClick={() => setActiveMegaMenu(null)}>
                          <span className="industries-dropdown-icon">{icon}</span>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li><a href="/#products" className="navbar-link">Products</a></li>
              <li><Link to="/projects" className="navbar-link">Projects</Link></li>
              <li><Link to="/careers" className="navbar-link">Careers</Link></li>
              <li><a href="/#gallery" className="navbar-link">Gallery</a></li>
              <li><a href="/#contact" className="navbar-link">Reach Us</a></li>
            </ul>
          </nav>

          <div className="navbar-cta-desktop">
            <button className="btn btn-outline-nav btn-sm" onClick={onOpenModal}>
              Get a Quote
            </button>
            <button className="btn btn-primary btn-sm" onClick={onOpenModal}>
              Request Consult <ArrowRightIcon />
            </button>
          </div>

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

        <div className={`navbar-mobile-panel ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="mobile-nav-list">
            <li><a href="/#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/industries" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Industries</Link></li>
            <li><a href="/#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
            <li><Link to="/projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/careers" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
            <li><a href="/#gallery" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="/#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Reach Us</a></li>
          </ul>
          <div className="mobile-nav-footer-actions">
            <a href="tel:+97466257037" className="mobile-contact-link"><PhoneIcon /> Qatar: +974 6625 7037</a>
            <a href="tel:+966531216181" className="mobile-contact-link"><PhoneIcon /> KSA: +966 5312 16181</a>
            <button className="btn btn-primary w-full" style={{ marginTop: '1rem' }} onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}>
              Request a quote <ArrowRightIcon />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
}

// ============================================================
// Footer Component
// ============================================================
function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container-width footer-grid">
        <div className="footer-col brand-col">
          <div className="footer-logo-wrap">
            <span className="logo-bold">REAL</span>
            <span className="logo-light">TECHNOLOGIES</span>
          </div>
          <p className="footer-about-text">
            Industrial equipment solutions across KSA &amp; Qatar — weighing, calibration, fabrication and automation, backed by 24x7 support.
          </p>
          <div className="footer-contact-details">
            <p><strong>Qatar:</strong> P.O. Box 55760, Building 7, Zone 91, Street 3023, Birkat Al Awameer, Doha, Qatar</p>
            <p><strong>KSA:</strong> Business Gate Office No 315, 3804, King Fahd Road, Al Khalidiyah Ash Shamiliya, Dammam 32257, KSA</p>
            <p><strong>Phone Qatar:</strong> <a href="tel:+97444436750">+974 4443 6750</a> / <a href="tel:+97444413980">+974 4441 3980</a></p>
            <p><strong>Phone KSA:</strong> <a href="tel:+966138555359">+966 13 855 5359</a> / <a href="tel:+966531218181">+966 53 121 8181</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@realtechgulf.com">info@realtechgulf.com</a></p>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Our Divisions</h4>
          <ul className="footer-links">
            <li><a href="/#weighing">Weighing Division</a></li>
            <li><a href="/#calibration">Calibration Division</a></li>
            <li><a href="/#fabrication">Fabrication Division</a></li>
            <li><a href="/#automation">Automation Division</a></li>
            <li><a href="https://www.erphorizon.com/company/realtechnologies137/index.php?r=site%2Flogin" target="_blank" rel="noopener noreferrer">ERP Partner Portal</a></li>
          </ul>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/#home">Home</a></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="/#contact">Reach Us</a></li>
          </ul>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Products & Brands</h4>
          <ul className="footer-links">
            <li><a href="/#weighing">Weighbridges & Scales</a></li>
            <li><a href="/#weighing">Dini Argeo · Rice Lake · Cardinal</a></li>
            <li><a href="/#weighing">Load Cells & Indicators</a></li>
            <li><a href="/#automation">Banner & Kempston Sensors</a></li>
            <li><a href="/#automation">Artec Pneumatics</a></li>
          </ul>
        </div>
      </div>

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
  );
}

// ============================================================
// HomePage — main landing page body sections
// ============================================================
function HomePage() {
  const { openModal } = useOutletContext<LayoutContext>();

  // Hero Slider states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  // Video Section state
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Statistics Section states (counting animation)
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statValues, setStatValues] = useState<number[]>(STATISTICS.map(() => 0));
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll for Hero Section
  useEffect(() => {
    if (heroPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroPaused]);

  // Statistics count-up animation triggered by IntersectionObserver
  useEffect(() => {
    const currentRef = statsSectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
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

  const handlePlayPauseVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log('Video play error:', err));
    }
    setVideoPlaying(!videoPlaying);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className={`hero-v2 ${heroPaused ? 'is-paused' : ''}`}
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <div className="hero-v2-bg-stack">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-v2-bg-slide ${idx === currentSlide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            />
          ))}
          <div className="hero-v2-overlay" />
          <div className="hero-v2-overlay-side" />
        </div>

        <div className="hero-v2-content">
          <div className="hero-v2-inner">
            <p className="hero-v2-eyebrow">{HERO_SLIDES[currentSlide].eyebrow}</p>

            <h1 className="hero-v2-headline">{HERO_SLIDES[currentSlide].title}</h1>

            <p className="hero-v2-desc">{HERO_SLIDES[currentSlide].desc}</p>

            <div className="hero-v2-ctas">
              <a href={`/${HERO_SLIDES[currentSlide].link}`} className="hero-v2-btn-primary">
                Explore Solutions <ArrowRightIcon />
              </a>
              <button className="hero-v2-btn-ghost" onClick={openModal}>
                Request a Demo
              </button>
            </div>

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
              </button>
            ))}
          </div>
        </div>

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

      {/* PARTNER TICKER */}
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

      {/* GALLERY CAROUSEL */}
      <section className="gallery-carousel-section">
        <div className="gallery-ticker-wrap">
          <div className="gallery-ticker-track">
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

      {/* VALUE PROPOSITION */}
      <section id="services" className="value-prop-section">
        <div className="container-width value-prop-grid">
          <div className="value-prop-content">
            <span className="section-pre-title">OUR PERFORMANCE PROMISE</span>
            <h2 className="value-prop-headline">
              Your trusted partner<br />
              for industrial equipment
            </h2>
            <p className="value-prop-paragraph">
              Real Technologies provides industrial equipment solutions across KSA and Qatar, with 60 years
              of combined experience, 24x7 customer service support and fully integrated service centres.
              As the sole distributor in Qatar, we deliver weighing, calibration, fabrication and automation
              to businesses across every sector.
            </p>
            <div className="value-prop-actions">
              <button className="btn btn-primary" onClick={openModal}>
                Request a quote <ArrowRightIcon />
              </button>
              <Link to="/about" className="btn btn-outline">
                Read Corporate Profile
              </Link>
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

      {/* ALTERNATING IMAGE + TEXT SECTIONS */}
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
                  <a href={`/${sec.link}`} className="row-link">
                    Explore technology spec sheets <ArrowRightIcon />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose" className="why-choose-section">
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
            <button className="btn btn-outline" onClick={openModal}>
              Get more information <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
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
              <h2 className="video-heading">Calibration &amp; Fabrication Facilities</h2>
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

      {/* SOLUTIONS GRID */}
      <section className="solutions-grid-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">OUR SERVICES</span>
            <h2 className="section-heading">{SOLUTIONS_GRID.title}</h2>
            <p className="section-subtitle">{SOLUTIONS_GRID.sub}</p>
          </div>

          <div className="solutions-5col-grid">
            {SOLUTIONS_GRID.cards.map((card, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-icon">{card.icon}</div>
                <h3 className="solution-card-title">{card.title}</h3>
                <p className="solution-card-desc">{card.desc}</p>
                <a href={`/${card.link}`} className="solution-card-btn">
                  Explore <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY SERVICES */}
      <section className="secondary-services-section">
        <div className="container-width relative-container">
          <div className="creative-watermark" aria-hidden="true">
            {SECONDARY_SERVICES.watermark}
          </div>

          <div className="section-intro">
            <span className="section-pre-title">INDUSTRIES WE SERVE</span>
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

      {/* PARTNER LOGOS CAROUSEL */}
      <section className="partner-logos-section">
        <div className="container-width text-center mb-xl">
          <span className="section-pre-title">AUTHORISED DISTRIBUTOR & DEALERSHIP</span>
          <h2 className="section-heading-sm">Representing World Class Brands</h2>
        </div>

        <div className="logo-ticker-wrap">
          <div className="logo-ticker-track scroll-forward">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoName, idx) => (
              <div key={idx} className="logo-card">
                <span className="logo-text">{logoName}</span>
              </div>
            ))}
          </div>
        </div>

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

      {/* STATISTICS */}
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

      {/* NEWS & RESOURCES */}
      <section id="projects" className="news-resources-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">SELECTED PROJECTS</span>
            <h2 className="section-heading">Our Projects</h2>
            <p className="section-subtitle">120 Ton weighbridges and batching systems delivered across Qatar</p>
          </div>

          <div className="news-3col-grid">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-card-img" style={{ backgroundImage: `url(${project.img})` }} />
                <div className="blog-card-body">
                  <span className="section-pre-title">{project.client}</span>
                  <h3 className="blog-card-title">{project.title}</h3>
                  <p className="blog-card-excerpt">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why-choose-cta text-center">
            <Link to="/projects" className="btn btn-outline">
              View all projects <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">LET&apos;S TALK</span>
            <h2 className="cta-title">Smart, Efficient &amp; Future Ready</h2>
            <p className="cta-desc">
              Request a quote or speak directly with our engineering teams in Doha and Dammam.
              We calibrate load systems and configure automated data synchronization customized for your plant setup.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Get started <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// Layout — shared chrome (top bar, header, footer, quote modal)
// ============================================================
function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(PHONE_COUNTRIES[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Weighing Solutions',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        service: 'Weighing Solutions',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="app-container">
      <TopBar isScrolled={isScrolled} />
      <Header onOpenModal={() => setIsModalOpen(true)} isScrolled={isScrolled} />

      <main>
        <Outlet context={{ openModal: () => setIsModalOpen(true) } satisfies LayoutContext} />
      </main>

      <Footer />

      {/* MODAL — Request a Quote */}
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
                      <option value="Weighing Solutions">Weighing Division</option>
                      <option value="Calibration Services">Calibration Division</option>
                      <option value="Fabrication Services">Fabrication Division</option>
                      <option value="Automation Solutions">Automation Division</option>
                      <option value="Motor Re-Winding">Motor Re-Winding</option>
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
                  <button type="button" className="btn btn-secondary" style={{ color: '#555', borderColor: '#ccc' }} onClick={() => setIsModalOpen(false)}>
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

// ============================================================
// App — route table
// ============================================================
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="industry/:slug" element={<IndustryDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
