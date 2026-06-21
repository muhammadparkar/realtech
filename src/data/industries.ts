export interface IndustryData {
  slug: string;
  title: string;
  subtitle?: string;
  keyBenefits?: string[];
  applications?: string[];
  solutions?: string[];
  features?: string[];
  featuredSystems?: string[];
  products?: string[];
  animalTypes?: string[];
  categories?: Record<string, string[]>;
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Precision weighing solutions for agricultural operations. Rice Lake and Dini Argeo technologies focused on efficiency, accuracy, and productivity.',
    keyBenefits: ['Livestock management', 'Crop measurement', 'Resource distribution', 'Feed management', 'Fertilizer management', 'Yield monitoring', 'Seed weighing', 'Packaging operations'],
    solutions: ['Livestock scales', 'Hopper weighing systems', 'Tank weighing systems', 'Precision balances', 'Mobile weighing solutions', 'Weighing indicators', 'Controllers'],
    products: ['Sustainer Steel Weighbridge RT-SWB-DFWLII', 'Sustainer Concrete Weighbridge RT-CWB-DFWL', 'RT-MSPS-DFWL', 'RT-MSPS-DFWLII', 'RT-MSPS-A12E', 'RT-MSFS-DFWL', 'RT-MSFS-DFWLII', 'RT-MSFS-A12E', 'RT-MSFS-BWS', 'HSW30', 'KS', 'KST', 'KSD', 'APM'],
  },
  {
    slug: 'aviation',
    title: 'Aviation',
    subtitle: 'Aircraft weight and balance management. Safety-focused weighing systems engineered for operational efficiency and regulatory compliance.',
    applications: ['Aircraft maintenance', 'Cargo loading', 'Aircraft manufacturing', 'Weight distribution analysis', 'Regulatory compliance'],
    solutions: ['Platform scales', 'Load cells', 'Dynamic weighing systems', 'Aircraft weighing systems'],
    products: ['Sustainer Steel Weighbridge RT-SWB-DFWLII', 'Sustainer Concrete Weighbridge RT-CWB-DFWL', 'KS', 'APM'],
  },
  {
    slug: 'bulk-construction',
    title: 'Bulk Construction',
    subtitle: 'Heavy-duty weighing systems built for the demands of construction and aggregate processing sites.',
    applications: ['Stone weighing', 'Lumber weighing', 'Building materials', 'Aggregate processing', 'Bulk loading stations'],
    solutions: ['Armor Truck Scales', 'Armor Portable Steel Deck Scales', 'PRL Series', '760 Series Axle Scales', 'Yukon Scales', 'Olympus Truck Scales'],
    features: ['NTEP certified', 'Real-time diagnostics', 'High capacity platforms', 'Portable options', 'Heavy-duty construction'],
  },
  {
    slug: 'chemical',
    title: 'Chemical',
    subtitle: 'High-accuracy weighing solutions engineered for hazardous and corrosion-demanding chemical environments.',
    applications: ['Raw material weighing', 'Ingredient batching', 'Inventory management', 'Dosage control', 'Chemical manufacturing'],
    solutions: ['Precision balances', 'Hopper scales', 'Tank scales', 'Batch weighing systems'],
    features: ['Corrosion resistant', 'Hazardous environment compatible', 'High accuracy measurements', 'Process integration'],
  },
  {
    slug: 'commercial-fishing',
    title: 'Commercial Fishing',
    subtitle: 'Robust, waterproof weighing solutions for processing facilities, fisheries, and marine logistics operations.',
    applications: ['Processing facilities', 'Fish markets', 'Shipping yards', 'Commercial fisheries'],
    solutions: ['Digital hanging scales', 'Crane scales', 'Floor scales', 'Bench scales', 'Waterproof scales'],
    featuredSystems: ['HSDC Series', 'Admiral Series', 'Enforcer', 'RuggedWeigh', 'FloorHugger'],
    products: ['RT-SSPS-BWS', 'RT-SSPS-DFWLII', 'RT-SSFS-DFWLII', 'RT-SSFS-DFWL', 'RT-SSFS-BWS', 'RT-SSPS-DFWL', 'HSW30', 'KS', 'KST', 'KSD', 'APM', 'Weighing Indicators', 'Weighing Load Cells'],
  },
  {
    slug: 'food-processing',
    title: 'Food Processing',
    subtitle: 'Hygienic, washdown-rated weighing systems keeping food production lines accurate and compliant.',
    applications: ['Grain weighing', 'Vegetable weighing', 'Processing operations', 'Checkweighing', 'Packaging'],
    solutions: ['IP69K washdown scales', 'Truck scales', 'In-motion checkweighers', 'Bench scales', 'Production weighing systems'],
    featuredSystems: ['ARMOR Truck Scales', 'CIM In-Motion Checkweigher', 'Admiral Bench Scales', 'EB Series Bench Scales'],
  },
  {
    slug: 'grocery-food-service',
    title: 'Grocery & Food Service',
    subtitle: 'Point-of-sale and retail weighing solutions for grocery stores, delis, and food service counters.',
    applications: ['Grocery stores', 'Retail counters', 'Delis', 'Food markets', 'Point-of-sale operations'],
    categories: {
      'Printing Scales': ['Uni-9 Series', 'Uni-7 Series', 'Uni-5 Series', 'Uni-3 Series'],
      'Wrappers': ['WM-4000', 'WM-Ai', 'WM-Nano'],
      'Price Computing Scales': ['RS-130', 'RS-160'],
    },
  },
  {
    slug: 'health-care',
    title: 'Health Care',
    subtitle: 'Medical-grade patient weighing systems with EMR/EHR integration for modern healthcare facilities.',
    features: ['BMI calculation', 'Sonar height measurement', 'EMR integration', 'EHR integration', 'Wi-Fi connectivity'],
    categories: {
      'Physician Scales': ['Weigh-Beam Series', 'Solo', 'Apex', 'Icon'],
      'Infant & Pediatric': ['6745', 'MB130', '8440', '8435', '8432-CH'],
      'Bariatric': ['Digital Bariatric Series'],
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Complete weighing solutions across the manufacturing floor — from parts counting to heavy pallet and crane systems.',
    applications: ['Parts counting', 'Material handling', 'Shipping', 'Receiving', 'Logistics', 'Pharmaceutical production', 'Food manufacturing'],
    solutions: ['Counting scales', 'Bench scales', 'Floor scales', 'Pallet scales', 'Crane scales'],
    featuredSystems: ['C Series Counting Scales', 'EB Series Bench Scales', '4500 Mechanical Bench Scales', 'Admiral CA-190', 'Enforcer', 'RuggedWeigh', 'FloorHugger', 'GroundForce', 'Guardian Hydraulic'],
    products: ['MCWN "NINJA" Crane Scales', 'Sustainer Steel Weighbridge RT-SWB-DFWLII', 'Sustainer Concrete Weighbridge RT-CWB-DFWL', 'TPWP Pallet Scale'],
  },
  {
    slug: 'scrap-recycling',
    title: 'Scrap & Recycling',
    subtitle: 'High-capacity, durable weighing systems built for the rigours of scrap metal yards and recycling centres.',
    applications: ['Scrap metal weighing', 'Recycling centers', 'Material recovery', 'Truck weighing'],
    solutions: ['Truck scales', 'Floor scales', 'Crane scales', 'Pallet scales'],
    features: ['Heavy-duty construction', 'High capacity', 'Durable build', 'Accurate measurement'],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    subtitle: 'Integrated weighing solutions for warehousing, parcel handling, and cargo operations at any scale.',
    applications: ['Warehousing', 'Parcel handling', 'Cargo operations', 'Shipping', 'Logistics centers'],
    solutions: ['Enterprise POS Scale', 'CIM In-Motion Checkweigher', 'EB Bench Scales', 'Admiral CA-190', 'Run-A-Weigh', 'Portable Digital Scales', 'Electronic Counting Scales'],
    features: ['POS integration', 'Portable weighing', 'Package processing', 'Counting functions'],
    products: ['MCWN "NINJA" Crane Scales', 'Sustainer Steel Weighbridge RT-SWB-DFWLII', 'Sustainer Concrete Weighbridge RT-CWB-DFWL', 'TPWP Pallet Scale'],
  },
  {
    slug: 'livestock',
    title: 'Livestock',
    subtitle: 'Dependable animal weighing systems for single-head, multi-animal, and mobile ranch operations.',
    applications: ['Single animal weighing', 'Multi-animal weighing', 'Mobile weighing', 'Ranch management'],
    solutions: ['SLS Single Animal Scale', 'Ag Load Bars', 'Harvester Series Scale', 'Weight Wrangler Series'],
    animalTypes: ['Cattle', 'Sheep', 'Goats', 'Horses'],
    products: ['RT-SSPS-DFWL', 'RT-SSPS-BWS', 'RT-SSPS-DFWLII', 'RT-SSFS-DFWLII', 'RT-SSFS-DFWL', 'RT-SSFS-BWS'],
  },
];

export const INDUSTRY_MAP: Record<string, IndustryData> = Object.fromEntries(
  INDUSTRIES.map((ind) => [ind.slug, ind])
);
