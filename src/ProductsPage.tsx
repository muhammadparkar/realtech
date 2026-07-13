import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, type LayoutContext } from './App';

type Product = {
  img: string;
  name: string;
  model: string;
  brand: string;
};

const PRODUCTS: Product[] = [
  // Dini Argeo
  { img: '/images/products/dini-argeo/product-dini-argeo-platform-scale-rplc.jpeg', name: 'Platform Scale', model: 'RPLC Series', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-platform-scale-tec6.jpeg', name: 'Platform Scale', model: 'TE-C6', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-weight-indicator-trixt.jpeg', name: 'Weight Indicator', model: 'TRIXT Series', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-junction-box-jb10q.jpeg', name: 'Equalised Junction Box', model: 'JB10QIP69K', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-weight-transmitter-dgt1.jpeg', name: 'Weight Transmitter Indicator', model: 'DGT1', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-weight-transmitter-dgt20i.jpeg', name: 'Weight Transmitter Indicator', model: 'DGT20I IP68', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-overhead-rail-scale-cw.jpeg', name: 'Overhead Rail Scale', model: 'CW Stainless Steel Series', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-load-cell-stg.jpeg', name: 'Tension Load Cell', model: 'STG Series', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-wireless-indicator-dfwl.jpeg', name: 'Wireless Weight Indicator Access Point', model: 'DFWL-AP', brand: 'Dini Argeo' },
  { img: '/images/products/dini-argeo/product-dini-argeo-overhead-monorail-twl.jpeg', name: 'Overhead Monorail Weighing Scale', model: 'TWL Series', brand: 'Dini Argeo' },
  // T-Scale
  { img: '/images/products/t-scale/product-t-scale-weighing-scale-t28.jpeg', name: 'Weighing Scale', model: 'T28-3KT', brand: 'T-Scale' },
  { img: '/images/products/t-scale/product-t-scale-remote-display-tp02.jpeg', name: 'Remote Display', model: 'TP-02', brand: 'T-Scale' },
  { img: '/images/products/t-scale/product-t-scale-digital-scale-qhw.jpeg', name: 'Digital Weight Scale', model: 'QHW 15kg', brand: 'T-Scale' },
  { img: '/images/products/t-scale/product-t-scale-indicator-cws-r.jpeg', name: 'Stainless Steel Indicator', model: 'CWS-R', brand: 'T-Scale' },
  { img: '/images/products/t-scale/product-t-scale-price-computing-qtp3m.jpeg', name: 'Price Computing Scale', model: 'QTP-3M', brand: 'T-Scale' },
  { img: '/images/products/t-scale/product-labor-it-as-weighing-scale-collage.jpeg', name: 'Weighing Scale Range', model: '', brand: 'T-Scale' },
  // Banner Engineering
  { img: '/images/products/banner/product-banner-single-ended-cordsets.jpeg', name: 'Single-Ended Cordsets', model: '', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-area-light-wlr95.jpeg', name: 'Compact Area Light', model: 'WLR95 Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-fiber-optic-amplifier-qs18.jpeg', name: 'Fiber Optic Amplifier', model: 'QS18 Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-temperature-sensor-m18t.jpeg', name: 'Non-Contact Temperature Sensor', model: 'M18T Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-sensors-collage.jpeg', name: 'Sensors Range', model: '', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-wireless-controller-dxm.jpeg', name: 'Industrial Wireless Controller', model: 'DXM Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-fiber-sensor-r55f.jpeg', name: 'Color Contrast Fiber Optic Sensor', model: 'R55F Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-converter-r95c.jpeg', name: 'Converter', model: 'R95C-8B22-KQ', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-3d-sensor-zmx.jpeg', name: '3D Measurement Sensor', model: 'ZMX Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-monitoring-gateway.jpeg', name: 'Asset Monitoring Gateway', model: '', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-pick-to-light-ptl110.jpeg', name: 'Pick-To-Light Device', model: 'PTL110 Series', brand: 'Banner Engineering' },
  { img: '/images/products/banner/product-banner-q45-sensor-nodes.jpeg', name: 'Sensor Nodes for Predictive Maintenance', model: 'Q45 Series', brand: 'Banner Engineering' },
  // Rice Lake
  { img: '/images/products/rice-lake/product-rice-lake-health-scale-160-10-7n.jpeg', name: 'Digital Athletic Scale', model: '160-10-7N Low-Profile', brand: 'Rice Lake' },
  // Hanna Instruments
  { img: '/images/products/hanna/product-hanna-ph-meter-calibration.jpeg', name: 'pH Meter Calibration', model: '', brand: 'Hanna Instruments' },
];

const BRANDS = ['All', 'Dini Argeo', 'T-Scale', 'Banner Engineering', 'Rice Lake', 'Hanna Instruments'];

function ProductsPage() {
  const { openModal } = useOutletContext<LayoutContext>();
  const [activeBrand, setActiveBrand] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeBrand === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === activeBrand);

  return (
    <div className="products-page">
      {/* INTRO */}
      <section className="value-prop-section">
        <div className="container-width">
          <div className="section-intro text-center">
            <span className="section-pre-title">OUR PRODUCT RANGE</span>
            <h1 className="section-heading">Products</h1>
            <p className="section-subtitle">
              Weighing equipment, sensors, and pneumatics from Dini Argeo, T-Scale, Rice Lake,
              Banner Engineering, and Hanna Instruments — sole distributor in Qatar.
            </p>
          </div>

          <div className="products-brand-pills">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                type="button"
                className={`products-brand-pill ${activeBrand === brand ? 'products-brand-pill--active' : ''}`}
                onClick={() => setActiveBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="products-grid-section">
        <div className="container-width">
          <div className="products-grid">
            {filtered.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-card-img-wrap">
                  <img src={product.img} alt={`${product.brand} ${product.name} ${product.model}`} loading="lazy" />
                </div>
                <div className="product-card-body">
                  <span className="product-card-brand">{product.brand}</span>
                  <h3 className="product-card-name">{product.name}</h3>
                  {product.model && <span className="product-card-model">{product.model}</span>}
                  <button className="product-card-cta" onClick={openModal}>
                    Request a Quote <ArrowIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pre-footer-cta-section">
        <div className="container-width cta-grid">
          <div className="cta-left">
            <span className="cta-eyebrow">NEED A SPECIFIC MODEL?</span>
            <h2 className="cta-title">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="cta-desc">
              We carry a much wider catalog than shown here. Tell us your application and our team
              will recommend the right equipment.
            </p>
          </div>
          <div className="cta-right">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Talk to our team <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
