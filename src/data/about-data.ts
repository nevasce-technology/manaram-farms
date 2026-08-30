import {
  CircleCheckIcon,
  ClipboardIcon,
  DropletsIcon,
  HeartIcon,
  MountainIcon,
  PackageCheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  TruckIcon,
  UsersRoundIcon,
} from "@animateicons/react/lucide";
import type { AnimatedIconComponent } from "../components/ui/HoverIcon";

export const stats = [
  {
    label: "Established",
    value: "2014",
    note: "Farm and facility in Jhapa; head office in Kathmandu.",
  },
  {
    label: "Farm & facility",
    value: "Jhapa",
    note: "Our pastures and dairy facility are in Jhapa, eastern Nepal.",
  },
  {
    label: "Workforce",
    value: "75%+ women",
    note: "Women lead a majority of the work across our teams.",
  },
  {
    label: "Focus",
    value: "Dairy & pantry",
    note: "Milk, ghee, pickles, dried meats, flours, and more.",
  },
] as const;

export const foodSafetyCert = {
  eyebrow: "Food safety, verified",
  standard: "ISO 22000:2018",
  body: "Our Jhapa facility operates under a certified food-safety management system.",
  image: "/certifications/iso-22000-badges.png",
  imageAlt:
    "IAS Accredited MSCB-113 and G-CERT2 System Service ISO 22000:2018 certification marks",
  accreditation: "IAS Accredited · MSCB-113",
  certificate: "G-CERT2 · GINE-0068-FC",
} as const;

export const facilityCheckpoints: ReadonlyArray<{
  title: string;
  body: string;
  icon: AnimatedIconComponent;
}> = [
  {
    title: "Stainless standards",
    body: "Polished floors and steel tanks keep every batch controlled from intake through finishing.",
    icon: ClipboardIcon,
  },
  {
    title: "Traditional finish",
    body: "Time-honored methods preserved for the taste families already expect from Mana Ko.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Women-led teams",
    body: "Women make up over 75% of our workforce across the farm, facility, and finishing lines.",
    icon: UsersRoundIcon,
  },
];

export const processSteps: ReadonlyArray<{
  title: string;
  body: string;
  icon: AnimatedIconComponent;
}> = [
  {
    title: "Raise and source",
    body: "Healthy cows on our farm, plus carefully chosen local ingredients from across Nepal.",
    icon: MountainIcon,
  },
  {
    title: "Make with care",
    body: "Traditional craft meets a modern Jhapa facility built for clean, consistent dairy.",
    icon: ClipboardIcon,
  },
  {
    title: "Finish and pack",
    body: "Every batch is finished for freshness, safety, and the taste people expect from Mana Ko.",
    icon: DropletsIcon,
  },
  {
    title: "Reach the table",
    body: "From farm to doorstep through shops and partners so households can cook with confidence.",
    icon: TruckIcon,
  },
];

export const pillars: ReadonlyArray<{
  title: string;
  body: string;
  points: string;
  icon: AnimatedIconComponent;
  image: string;
  imageAlt: string;
}> = [
  {
    title: "Rooted in tradition",
    body: "Time-honored dairy craft and Nepali pantry methods stay intact in every batch. We keep the flavors families already know, then protect them with careful process.",
    points: "Nepali pantry methods · familiar daily flavors · craft kept intact",
    icon: MountainIcon,
    image: "/landing/about-origin.jpg",
    imageAlt: "Dairy herd on bright Manaram Farm pasture with Himalayan peaks",
  },
  {
    title: "Powered by innovation",
    body: "Modern facilities and careful process keep freshness, safety, and flavor holding together. Innovation here means better control, not shortcuts.",
    points: "Modern dairy facility · consistent batches · safety with flavor",
    icon: SparklesIcon,
    image: "/landing/about-facility.jpg",
    imageAlt: "Stainless steel dairy tanks at Manaram Farm in Jhapa",
  },
  {
    title: "Crafted for nutrition",
    body: "Foods made for daily tables: wholesome, honest, and ready for real kitchens. From milk and ghee to pickles and staples, the aim is nourishment you can taste.",
    points: "Daily-table foods · wholesome ingredients · ready for real kitchens",
    icon: HeartIcon,
    image: "/landing/about-craft.jpg",
    imageAlt: "Thick yogurt pour into a bowl on a steel-blue cloth",
  },
];

export const missions: ReadonlyArray<{
  title: string;
  body: string;
  icon: AnimatedIconComponent;
}> = [
  {
    title: "Quality first",
    body: "Produce quality products to the highest standards we can uphold, from farm care to finished packs.",
    icon: CircleCheckIcon,
  },
  {
    title: "Taste that advances",
    body: "Keep traditional taste while advancing how we make each product, without losing what makes it Nepali.",
    icon: SparklesIcon,
  },
  {
    title: "Local innovation",
    body: "Innovate new foods from native raw materials across Nepal, turning local resources into daily pantry staples.",
    icon: TrendingUpIcon,
  },
  {
    title: "Women at the center",
    body: "Promote women empowerment, with women making up over 75% of our workforce across the farm and facility.",
    icon: UsersRoundIcon,
  },
  {
    title: "Share the Himalaya",
    body: "Share Himalayan beauty by celebrating the places and resources behind our work, locally and beyond.",
    icon: MountainIcon,
  },
];

export const reasons: ReadonlyArray<{
  title: string;
  body: string;
  icon: AnimatedIconComponent;
  featured?: boolean;
}> = [
  {
    title: "Health and wellness first",
    body: "Your health sits at the center of every batch. We make products to nourish and energize your family, with care from farm through packing.",
    icon: HeartIcon,
    featured: true,
  },
  {
    title: "Goodness you can trust",
    body: "Pure, natural goodness: free from harmful chemicals, additives, or shortcuts. What goes in is chosen for honesty as much as flavor.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Customer-centric approach",
    body: "Every decision keeps your needs in mind. Products that meet expectations for taste, freshness, and everyday usefulness, then go further.",
    icon: UsersRoundIcon,
  },
  {
    title: "Premium quality products",
    body: "From careful cultivation to final packaging, every step is handled with excellence so the finished food feels worth bringing home.",
    icon: PackageCheckIcon,
  },
  {
    title: "Delivering the finest, always",
    body: "From farm to doorstep, every product that reaches you is fresh, safe, and held high. That promise is the point of the whole chain.",
    icon: TruckIcon,
  },
];

export const visionNotes = [
  { num: "01", label: "Local", body: "Nepal-first sourcing across our farm network." },
  { num: "02", label: "Modern", body: "Careful process from pasture to pack." },
  { num: "03", label: "Shared", body: "Tables near and far, one standard." },
] as const;

export const facilityMeta = [
  ["Farm & facility", "Jhapa, eastern Nepal"],
  ["Head office", "Baluwatar 4, Kathmandu"],
  ["Brands", "Mana Ko and sister lines"],
  ["Range", "Dairy, pantry, achar, more"],
] as const;
