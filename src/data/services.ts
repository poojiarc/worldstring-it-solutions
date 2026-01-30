// import {
//   Brain,
//   Package,
//   Zap,
//   Server,
//   Shield,
//   Cloud,
//   GitBranch,
//   Blocks,
//   LucideIcon,
// } from "lucide-react";

// export interface ServiceOffering {
//   title: string;
//   description: string;
// }

// export interface Service {
//   icon: LucideIcon;
//   title: string;
//   slug: string;
//   shortDescription: string;
//   mediumDescription: string;
//   longDescription: string;
//   offerings: ServiceOffering[];
// }

// export const services: Service[] = [
//   {
//     icon: Brain,
//     title: "AI & Innovation Lab",
//     slug: "ai-innovation-lab",
//     shortDescription:
//       "Leverage artificial intelligence and emerging technologies to build intelligent, future-ready solutions. We help organizations innovate faster using data-driven and AI-powered systems.",
//     mediumDescription:
//       "Leverage artificial intelligence and emerging technologies to build intelligent, future-ready solutions. We help organizations innovate faster using data-driven and AI-powered systems. Our team of AI specialists combines cutting-edge research with practical implementation to deliver measurable business outcomes.",
//     longDescription:
//       "At WorldString IT Solutions, our AI & Innovation Lab is at the forefront of technological advancement. We specialize in developing intelligent solutions that transform how businesses operate and compete. Our team combines deep expertise in machine learning, natural language processing, and computer vision with a practical understanding of business challenges. From proof-of-concept to full-scale deployment, we guide organizations through every step of their AI journey, ensuring solutions that are not only technically excellent but also aligned with strategic objectives.",
//     offerings: [
//       {
//         title: "Machine Learning & Predictive Analytics",
//         description: "Build predictive models that uncover insights and drive data-informed decisions.",
//       },
//       {
//         title: "Generative AI Solutions",
//         description: "Implement cutting-edge generative AI for content creation, automation, and innovation.",
//       },
//       {
//         title: "Intelligent Automation (RPA + AI)",
//         description: "Combine robotic process automation with AI for intelligent workflow optimization.",
//       },
//       {
//         title: "Data Engineering & AI Pipelines",
//         description: "Design robust data infrastructure to power your AI and analytics initiatives.",
//       },
//       {
//         title: "AI Consulting & Strategy",
//         description: "Develop comprehensive AI strategies aligned with your business objectives.",
//       },
//       {
//         title: "Proof of Concept (PoC) Development",
//         description: "Rapidly prototype and validate AI solutions before full-scale implementation.",
//       },
//     ],
//   },
//   {
//     icon: Package,
//     title: "Products & Solutions",
//     slug: "products-solutions",
//     shortDescription:
//       "We design and deliver scalable digital products tailored to business and industry needs. From concept to deployment, our solutions drive efficiency and growth.",
//     mediumDescription:
//       "We design and deliver scalable digital products tailored to business and industry needs. From concept to deployment, our solutions drive efficiency and growth. Our product development approach combines user-centric design with robust engineering practices to create solutions that stand the test of time.",
//     longDescription:
//       "WorldString's Products & Solutions division specializes in creating purpose-built digital products that solve real business problems. We take a holistic approach to product development, starting with deep discovery to understand your unique challenges and opportunities. Our cross-functional teams of designers, engineers, and strategists work collaboratively to deliver products that are intuitive, scalable, and maintainable. Whether you need a customer-facing application, an internal tool, or a complete platform, we bring the expertise to make it happen.",
//     offerings: [
//       {
//         title: "Custom Product Development",
//         description: "Build tailored software products from the ground up to meet your specific requirements.",
//       },
//       {
//         title: "Product Strategy & Roadmapping",
//         description: "Define product vision, strategy, and roadmaps aligned with business goals.",
//       },
//       {
//         title: "UX/UI Design & Prototyping",
//         description: "Create intuitive, user-centered designs that drive engagement and adoption.",
//       },
//       {
//         title: "MVP Development",
//         description: "Rapidly build minimum viable products to validate ideas and capture market opportunities.",
//       },
//       {
//         title: "Product Modernization",
//         description: "Revitalize legacy products with modern technologies and improved user experiences.",
//       },
//       {
//         title: "Integration & API Development",
//         description: "Connect systems and enable seamless data flow across your technology ecosystem.",
//       },
//     ],
//   },
//   {
//     icon: Zap,
//     title: "Digital Transformation",
//     slug: "digital-transformation",
//     shortDescription:
//       "Modernize your business with technology-driven transformation strategies. We help organizations shift to agile, digital-first operations.",
//     mediumDescription:
//       "Modernize your business with technology-driven transformation strategies. We help organizations shift to agile, digital-first operations. Our transformation experts guide you through every phase of change, ensuring technology investments deliver real business value.",
//     longDescription:
//       "Digital transformation is more than technology—it's about reimagining how your organization creates value. WorldString's Digital Transformation practice helps businesses navigate the complexities of modernization with a clear, strategic approach. We assess your current state, identify opportunities for improvement, and develop comprehensive roadmaps that balance quick wins with long-term objectives. Our change management expertise ensures that new technologies are adopted effectively, driving sustainable improvements in efficiency, customer experience, and competitive advantage.",
//     offerings: [
//       {
//         title: "Digital Strategy & Assessment",
//         description: "Evaluate your digital maturity and create actionable transformation roadmaps.",
//       },
//       {
//         title: "Process Digitization",
//         description: "Convert manual processes to streamlined digital workflows for improved efficiency.",
//       },
//       {
//         title: "Legacy Modernization",
//         description: "Transform outdated systems into modern, flexible technology platforms.",
//       },
//       {
//         title: "Change Management",
//         description: "Guide your organization through technology adoption with effective change strategies.",
//       },
//       {
//         title: "Digital Customer Experience",
//         description: "Create seamless digital touchpoints that enhance customer engagement and satisfaction.",
//       },
//       {
//         title: "Technology Roadmapping",
//         description: "Plan and prioritize technology investments for maximum business impact.",
//       },
//     ],
//   },
//   {
//     icon: Server,
//     title: "IT Infrastructure",
//     slug: "it-infrastructure",
//     shortDescription:
//       "Build secure, reliable, and scalable IT infrastructure for enterprise environments. We ensure high availability, performance, and operational efficiency.",
//     mediumDescription:
//       "Build secure, reliable, and scalable IT infrastructure for enterprise environments. We ensure high availability, performance, and operational efficiency. Our infrastructure solutions are designed for resilience, with proactive monitoring and management to keep your systems running at peak performance.",
//     longDescription:
//       "A robust IT infrastructure is the foundation of digital success. WorldString's Infrastructure Services deliver enterprise-grade solutions that provide the reliability, security, and scalability your business demands. Our team designs and implements infrastructure architectures that minimize downtime, optimize performance, and adapt to changing business needs. From on-premises data centers to hybrid environments, we provide comprehensive services including network design, server management, storage solutions, and 24/7 monitoring to ensure your technology backbone supports your business objectives.",
//     offerings: [
//       {
//         title: "Network Design & Implementation",
//         description: "Architect and deploy robust network infrastructures for optimal connectivity and security.",
//       },
//       {
//         title: "Server & Storage Solutions",
//         description: "Implement high-performance server and storage systems tailored to your workloads.",
//       },
//       {
//         title: "Virtualization Services",
//         description: "Maximize resource utilization through strategic virtualization implementations.",
//       },
//       {
//         title: "Infrastructure Monitoring",
//         description: "Proactive 24/7 monitoring to identify and resolve issues before they impact operations.",
//       },
//       {
//         title: "Disaster Recovery Planning",
//         description: "Develop comprehensive disaster recovery strategies to ensure business continuity.",
//       },
//       {
//         title: "Data Center Services",
//         description: "Design, migrate, and manage data center environments for optimal performance.",
//       },
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Cyber Security",
//     slug: "cyber-security",
//     shortDescription:
//       "Protect your digital assets with advanced security strategies and solutions. We safeguard systems, data, and networks against evolving threats.",
//     mediumDescription:
//       "Protect your digital assets with advanced security strategies and solutions. We safeguard systems, data, and networks against evolving threats. Our security experts combine industry-leading tools with proven methodologies to create comprehensive defense strategies.",
//     longDescription:
//       "In an era of sophisticated cyber threats, protecting your organization requires more than basic security measures. WorldString's Cyber Security practice provides comprehensive protection through a defense-in-depth approach. Our certified security professionals assess vulnerabilities, implement robust controls, and provide ongoing monitoring to detect and respond to threats in real-time. We help organizations meet compliance requirements, protect sensitive data, and build security-aware cultures that reduce risk at every level.",
//     offerings: [
//       {
//         title: "Security Assessment & Audits",
//         description: "Comprehensive evaluations to identify vulnerabilities and security gaps.",
//       },
//       {
//         title: "Penetration Testing",
//         description: "Simulated attacks to test your defenses and identify exploitable weaknesses.",
//       },
//       {
//         title: "Security Operations Center (SOC)",
//         description: "24/7 monitoring and incident response to protect against active threats.",
//       },
//       {
//         title: "Compliance & Governance",
//         description: "Ensure adherence to regulatory requirements and security standards.",
//       },
//       {
//         title: "Identity & Access Management",
//         description: "Implement robust access controls to protect sensitive systems and data.",
//       },
//       {
//         title: "Security Awareness Training",
//         description: "Educate your workforce to recognize and prevent security threats.",
//       },
//     ],
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Solutions",
//     slug: "cloud-solutions",
//     shortDescription:
//       "Accelerate growth with secure and scalable cloud-based architectures. We help businesses migrate, manage, and optimize cloud environments.",
//     mediumDescription:
//       "Accelerate growth with secure and scalable cloud-based architectures. We help businesses migrate, manage, and optimize cloud environments. Our cloud specialists deliver solutions across AWS, Azure, and Google Cloud that maximize performance while controlling costs.",
//     longDescription:
//       "Cloud computing offers unprecedented opportunities for agility, scalability, and innovation. WorldString's Cloud Solutions practice helps organizations harness the full potential of cloud technologies through strategic planning and expert implementation. Whether you're beginning your cloud journey or optimizing existing environments, our certified architects design solutions that meet your specific requirements. We provide end-to-end services from assessment and migration to ongoing management and optimization, ensuring your cloud investments deliver maximum value.",
//     offerings: [
//       {
//         title: "Cloud Strategy & Assessment",
//         description: "Develop cloud strategies aligned with your business objectives and technical requirements.",
//       },
//       {
//         title: "Cloud Migration Services",
//         description: "Seamlessly migrate workloads to the cloud with minimal disruption.",
//       },
//       {
//         title: "Multi-Cloud & Hybrid Solutions",
//         description: "Design and manage complex multi-cloud and hybrid environments.",
//       },
//       {
//         title: "Cloud Native Development",
//         description: "Build applications designed specifically for cloud environments.",
//       },
//       {
//         title: "Cloud Cost Optimization",
//         description: "Analyze and optimize cloud spending for maximum efficiency.",
//       },
//       {
//         title: "Managed Cloud Services",
//         description: "Ongoing management and support for your cloud infrastructure.",
//       },
//     ],
//   },
//   {
//     icon: GitBranch,
//     title: "Agile Development",
//     slug: "agile-development",
//     shortDescription:
//       "Deliver high-quality software faster using agile and DevOps methodologies. We enable continuous improvement, collaboration, and rapid delivery.",
//     mediumDescription:
//       "Deliver high-quality software faster using agile and DevOps methodologies. We enable continuous improvement, collaboration, and rapid delivery. Our agile coaches and DevOps engineers help teams adopt practices that accelerate development while maintaining quality.",
//     longDescription:
//       "Modern software development demands speed without sacrificing quality. WorldString's Agile Development practice brings together proven methodologies, skilled practitioners, and cutting-edge tools to help organizations deliver better software faster. Our agile coaches work with your teams to implement Scrum, Kanban, or hybrid approaches tailored to your context. Combined with our DevOps expertise, we create end-to-end delivery pipelines that automate testing, deployment, and monitoring, enabling rapid iteration and continuous improvement.",
//     offerings: [
//       {
//         title: "Agile Transformation",
//         description: "Guide your organization's transition to agile methodologies and mindsets.",
//       },
//       {
//         title: "Scrum & Kanban Implementation",
//         description: "Implement and optimize agile frameworks for effective team collaboration.",
//       },
//       {
//         title: "DevOps & CI/CD",
//         description: "Build automated pipelines for continuous integration and deployment.",
//       },
//       {
//         title: "Quality Engineering",
//         description: "Implement comprehensive testing strategies for reliable software delivery.",
//       },
//       {
//         title: "Agile Coaching",
//         description: "Provide expert coaching to help teams reach their full potential.",
//       },
//       {
//         title: "Technical Debt Management",
//         description: "Strategically address technical debt while maintaining delivery velocity.",
//       },
//     ],
//   },
//   {
//     icon: Blocks,
//     title: "Low-Code / No-Code",
//     slug: "low-code-no-code",
//     shortDescription:
//       "Build applications faster with minimal coding using modern platforms. We empower businesses to innovate quickly with reduced development costs.",
//     mediumDescription:
//       "Build applications faster with minimal coding using modern platforms. We empower businesses to innovate quickly with reduced development costs. Our low-code experts help you select the right platforms and build solutions that balance speed with scalability.",
//     longDescription:
//       "Low-code and no-code platforms are revolutionizing how businesses build applications, enabling rapid development with reduced technical complexity. WorldString's Low-Code/No-Code practice helps organizations leverage these powerful platforms to accelerate innovation. We guide platform selection based on your specific needs, implement solutions that follow best practices, and train your teams to become self-sufficient. Whether you're automating workflows, building customer portals, or creating internal tools, we help you achieve results in weeks instead of months.",
//     offerings: [
//       {
//         title: "Platform Selection & Strategy",
//         description: "Evaluate and select the optimal low-code platforms for your requirements.",
//       },
//       {
//         title: "Application Development",
//         description: "Rapidly build applications using leading low-code and no-code platforms.",
//       },
//       {
//         title: "Workflow Automation",
//         description: "Automate business processes with intuitive workflow builders.",
//       },
//       {
//         title: "Citizen Developer Programs",
//         description: "Empower business users to build their own applications safely and effectively.",
//       },
//       {
//         title: "Integration Services",
//         description: "Connect low-code applications with existing enterprise systems.",
//       },
//       {
//         title: "Training & Enablement",
//         description: "Train your teams to leverage low-code platforms independently.",
//       },
//     ],
//   },
// ];

// export const getServiceBySlug = (slug: string): Service | undefined => {
//   return services.find((service) => service.slug === slug);
// };



import {
  Users,
  Shield,
  Server,
  Cloud,
  GitBranch,
  Blocks,
  Zap,
  LucideIcon,
} from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  shortDescription: string;
  mediumDescription: string;
  longDescription: string;
  offerings: ServiceOffering[];
  scrollToFooter?: boolean;
}

export const services: Service[] = [
  // ==============================
  // 1️⃣ IT STAFFING (SCROLL)
  // ==============================
  {
    icon: Users,
    title: "IT Staffing",
    slug: "",
    scrollToFooter: true,
    shortDescription:
      "Flexible IT staffing solutions delivering contract, contract-to-hire, and permanent talent.",
    mediumDescription: "",
    longDescription: "",
    offerings: [],
  },

  // ==============================
  // 2️⃣ FEDERAL IT (SCROLL)
  // ==============================
  {
    icon: Shield,
    title: "Federal IT",
    slug: "",
    scrollToFooter: true,
    shortDescription:
      "Secure, compliant, and mission-driven IT services tailored for federal agencies.",
    mediumDescription: "",
    longDescription: "",
    offerings: [],
  },

  // ==============================
  // 3️⃣ GSA MAS (SCROLL)
  // ==============================
  {
    icon: Server,
    title: "GSA MAS",
    slug: "",
    scrollToFooter: true,
    shortDescription:
      "Authorized IT services offered through the GSA Multiple Award Schedule.",
    mediumDescription: "",
    longDescription: "",
    offerings: [],
  },

  // ==============================
  // 4️⃣ CLOUD SOLUTIONS
  // ==============================
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    shortDescription:
      "Accelerate growth with secure and scalable cloud-based architectures.",
    mediumDescription:
      "Accelerate growth with secure and scalable cloud-based architectures.",
    longDescription:
      "We help businesses design, migrate, and optimize cloud environments.",
    offerings: [],
  },

  // ==============================
  // 5️⃣ AGILE DEVELOPMENT
  // ==============================
  {
    icon: GitBranch,
    title: "Agile Development",
    slug: "agile-development",
    shortDescription:
      "Deliver high-quality software faster using agile and DevOps methodologies.",
    mediumDescription:
      "Deliver high-quality software faster using agile and DevOps methodologies.",
    longDescription:
      "Our agile and DevOps experts enable continuous delivery and improvement.",
    offerings: [],
  },

  // ==============================
  // 6️⃣ LOW-CODE / NO-CODE
  // ==============================
  {
    icon: Blocks,
    title: "Low-Code / No-Code",
    slug: "low-code-no-code",
    shortDescription:
      "Build applications faster with minimal coding using modern platforms.",
    mediumDescription:
      "Build applications faster with minimal coding using modern platforms.",
    longDescription:
      "We empower teams to build applications rapidly with low-code tools.",
    offerings: [],
  },

  // ==============================
  // 7️⃣ CYBER SECURITY (RESTORED)
  // ==============================
  {
    icon: Shield,
    title: "Cyber Security",
    slug: "cyber-security",
    shortDescription:
      "Protect systems, networks, and data from evolving cyber threats.",
    mediumDescription:
      "Protect systems, networks, and data from evolving cyber threats.",
    longDescription:
      "Our cybersecurity services ensure compliance, resilience, and protection.",
    offerings: [],
  },

  // ==============================
  // 8️⃣ DIGITAL TRANSFORMATION (RESTORED)
  // ==============================
  {
    icon: Zap,
    title: "Digital Transformation",
    slug: "digital-transformation",
    shortDescription:
      "Modernize operations with technology-driven transformation strategies.",
    mediumDescription:
      "Modernize operations with technology-driven transformation strategies.",
    longDescription:
      "We help organizations transition to agile, digital-first operations.",
    offerings: [],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
