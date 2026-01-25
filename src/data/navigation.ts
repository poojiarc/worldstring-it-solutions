// import { LucideIcon, Users, Briefcase, Shield, Building, Globe, Newspaper, GraduationCap, Lock, Mail, User, FileText, Code, Cloud, Zap, Brain, Blocks, Server, CreditCard, Plane, Award, FolderOpen } from "lucide-react";

// export interface NavSubItem {
//   name: string;
//   href: string;
//   description?: string;
//   icon?: LucideIcon;
// }

// export interface NavItem {
//   name: string;
//   href: string;
//   subItems?: NavSubItem[];
// }

// export const navigationItems: NavItem[] = [
//   { 
//     name: "Home", 
//     href: "/" 
//   },
//   { 
//     name: "IT Services", 
//     href: "/it-services",
//     subItems: [
//       { 
//         name: "IT Staffing", 
//         href: "/it-services/it-staffing",
//         description: "Contract, permanent & offshore staffing",
//         icon: Users
//       },
//       { 
//         name: "IT Solutions", 
//         href: "/it-services/it-solutions",
//         description: "Application development, cloud & security",
//         icon: Code
//       },
//     ]
//   },
//   { 
//     name: "Who We Serve", 
//     href: "/who-we-serve",
//     subItems: [
//       { 
//         name: "Federal", 
//         href: "/who-we-serve/federal",
//         description: "Federal government IT services",
//         icon: Building
//       },
//       { 
//         name: "State, Local & Education", 
//         href: "/who-we-serve/state-local-education",
//         description: "SLED sector solutions",
//         icon: GraduationCap
//       },
//     ]
//   },
//   { 
//     name: "Contracts", 
//     href: "/contracts",
//     subItems: [
//       { 
//         name: "GSA MAS", 
//         href: "/contracts/gsa-mas",
//         description: "GSA Multiple Award Schedule",
//         icon: FileText
//       },
//     ]
//   },
//   { 
//     name: "Immigration", 
//     href: "/immigration",
//     subItems: [
//       { 
//         name: "H1B Visa Applications", 
//         href: "/immigration/h1b-visa",
//         description: "H1B visa processing & support",
//         icon: Plane
//       },
//       { 
//         name: "Green Card Applications", 
//         href: "/immigration/green-card",
//         description: "Permanent residency processing",
//         icon: Award
//       },
//     ]
//   },
//   { 
//     name: "Portfolio", 
//     href: "/portfolio",
//     subItems: [
//       { 
//         name: "Staffing Cases", 
//         href: "/portfolio/staffing-cases",
//         description: "Staffing success stories",
//         icon: Users
//       },
//       { 
//         name: "Solution Cases", 
//         href: "/portfolio/solution-cases",
//         description: "IT solution case studies",
//         icon: FolderOpen
//       },
//     ]
//   },
//   { 
//     name: "Careers", 
//     href: "/careers" 
//   },
//   { 
//     name: "Employee Resources", 
//     href: "/employee-resources",
//     subItems: [
//       { 
//         name: "Courses", 
//         href: "/employee-resources/courses",
//         description: "Training & certification programs",
//         icon: GraduationCap
//       },
//     ]
//   },
//   { 
//     name: "Employee Login", 
//     href: "/employee-login" 
//   },
//   { 
//     name: "Contact Us", 
//     href: "/contact" 
//   },
// ];

// export const heroSlides = [
//   {
//     id: 1,
//     title: "IT Staffing Solutions",
//     subtitle: "Find the Right Talent, Faster",
//     description: "Contract, permanent, and offshore staffing solutions tailored to your business needs.",
//     cta: { text: "Explore Staffing", href: "/it-services/it-staffing" },
//     image: "staffing"
//   },
//   {
//     id: 2,
//     title: "IT Solutions & Development",
//     subtitle: "Transform Your Business",
//     description: "Custom application development, cloud migration, and cybersecurity solutions.",
//     cta: { text: "View Solutions", href: "/it-services/it-solutions" },
//     image: "solutions"
//   },
//   {
//     id: 3,
//     title: "Digital Transformation",
//     subtitle: "Innovate. Modernize. Grow.",
//     description: "End-to-end digital transformation services to keep your business ahead.",
//     cta: { text: "Start Transformation", href: "/services/digital-transformation" },
//     image: "transformation"
//   },
// ];
import {
  Users,
  Code,
  Building,
  GraduationCap,
  FileText,
  Plane,
  Award,
  FolderOpen,
} from "lucide-react";

export interface NavSubItem {
  name: string;
  href: string;
  description?: string;
  icon?: any;
}

export interface NavItem {
  name: string;
  href: string;
  subItems?: NavSubItem[];
}

export const navigationItems: NavItem[] = [
  {
    name: "IT Services",
    href: "/it-services",
    subItems: [
      {
        name: "IT Staffing",
        href: "/it-services/it-staffing",
        description: "Contract & permanent staffing",
        icon: Users,
      },
      {
        name: "IT Solutions",
        href: "/it-services/it-solutions",
        description: "Cloud, security & development",
        icon: Code,
      },
    ],
  },

  {
    name: "Who We Serve",
    href: "/who-we-serve",
    subItems: [
      {
        name: "Federal",
        href: "/who-we-serve/federal",
        icon: Building,
      },
      {
        name: "State, Local & Education",
        href: "/who-we-serve/state-local-education",
        icon: GraduationCap,
      },
    ],
  },

  {
    name: "Contracts",
    href: "/contracts",
    subItems: [
      {
        name: "GSA MAS",
        href: "/contracts/gsa-mas",
        icon: FileText,
      },
    ],
  },

  {
    name: "Immigration",
    href: "/immigration",
    subItems: [
      {
        name: "H1B Visa",
        href: "/immigration/h1b-visa",
        icon: Plane,
      },
      {
        name: "Green Card",
        href: "/immigration/green-card",
        icon: Award,
      },
    ],
  },

  {
    name: "Portfolio",
    href: "/portfolio",
    subItems: [
      {
        name: "Staffing Cases",
        href: "/portfolio/staffing-cases",
        icon: Users,
      },
      {
        name: "Solution Cases",
        href: "/portfolio/solution-cases",
        icon: FolderOpen,
      },
    ],
  },

  {
    name: "Careers",
    href: "/careers",
  },

  {
    name: "Employee Resources",
    href: "/employee-resources",
    subItems: [
      {
        name: "Courses",
        href: "/employee-resources/courses",
        icon: GraduationCap,
      },
    ],
  },

  {
    name: "Employee Login",
    href: "/employee-login",
  },

  {
  name: "Contact Us", // Changed from "CONTACT US"
  href: "/contact",
},
  {
    name: "ABOUT US",
    href: "/about",
  },
];

/* HERO SLIDES */

export const heroSlides = [
  {
    id: 1,
    title: "IT Staffing Solutions",
    subtitle: "Find the Right Talent, Faster",
    description:
      "Contract, permanent, and offshore staffing solutions for modern enterprises.",
    cta: { text: "Explore Staffing", href: "/it-services/it-staffing" },
  },

  {
    id: 2,
    title: "IT Solutions & Development",
    subtitle: "Transform Your Business",
    description:
      "Application development, cloud migration, and cybersecurity solutions.",
    cta: { text: "View Solutions", href: "/it-services/it-solutions" },
  },

  {
    id: 3,
    title: "Digital Transformation",
    subtitle: "Innovate. Modernize. Grow.",
    description:
      "End-to-end digital transformation services for future-ready businesses.",
    cta: { text: "Start Now", href: "/contact" },
  },
];
