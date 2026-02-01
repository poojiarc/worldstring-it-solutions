// import { motion } from "framer-motion";
// import { Building, Shield, Lock, Server, CheckCircle, Award } from "lucide-react";
// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";
// import { CTASection } from "@/components/CTASection";

// const capabilities = [
//   { title: "IT Modernization", description: "Legacy system modernization and cloud migration" },
//   { title: "Cybersecurity", description: "Security assessment, implementation, and monitoring" },
//   { title: "Data Analytics", description: "Advanced analytics and business intelligence" },
//   { title: "Cloud Services", description: "FedRAMP compliant cloud solutions" },
//   { title: "Application Development", description: "Custom software development and integration" },
//   { title: "IT Staffing", description: "Cleared personnel placement and management" },
// ];

// const complianceFrameworks = [
//   "FISMA",
//   "FedRAMP",
//   "NIST 800-53",
//   "NIST 800-171",
//   "CMMC",
//   "SOC 2",
// ];

// const engagementModels = [
//   { model: "Time & Materials", description: "Flexible engagement for evolving requirements" },
//   { model: "Fixed Price", description: "Defined scope with predictable costs" },
//   { model: "Managed Services", description: "Ongoing operational support and maintenance" },
//   { model: "Staff Augmentation", description: "Skilled professionals integrated with your team" },
// ];

// const FederalPage = () => {
//   return (
//     <PageLayout>
//       <PageHero
//         title="Federal Government Services"
//         subtitle="Public Sector Excellence"
//         description="Trusted IT partner for federal agencies. We deliver secure, compliant solutions that meet the rigorous standards of federal operations."
//         icon={Building}
//       />

//       {/* Overview */}
//       <section className="py-12 lg:py-12">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                 Federal IT Services Overview
//               </h2>
//               <p className="text-muted-foreground mb-6">
//                 WorldString IT Solutions delivers comprehensive technology services to federal agencies across civilian and defense sectors. Our team understands the unique requirements, security standards, and procurement processes of federal government work.
//               </p>
//               <p className="text-muted-foreground mb-6">
//                 We combine deep technical expertise with federal domain knowledge to help agencies modernize IT infrastructure, enhance cybersecurity posture, and improve operational efficiency.
//               </p>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2 text-primary">
//                   <Shield className="w-5 h-5" />
//                   <span className="font-medium">Security-First</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-primary">
//                   <Lock className="w-5 h-5" />
//                   <span className="font-medium">Fully Compliant</span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="bg-card border border-border rounded-2xl p-8"
//             >
//               <h3 className="text-xl font-semibold text-foreground mb-6">Compliance & Security</h3>
//               <div className="flex flex-wrap gap-3">
//                 {complianceFrameworks.map((framework) => (
//                   <span
//                     key={framework}
//                     className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
//                   >
//                     {framework}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="py-20 bg-secondary/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Core Capabilities
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               Comprehensive IT services tailored for federal agency requirements.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {capabilities.map((cap, index) => (
//               <motion.div
//                 key={cap.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
//               >
//                 <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
//                   <p className="text-sm text-muted-foreground">{cap.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Engagement Models */}
//       <section className="py-20 lg:py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Engagement Models
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               Flexible engagement options to meet your agency's procurement requirements.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {engagementModels.map((item, index) => (
//               <motion.div
//                 key={item.model}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-card border border-border rounded-2xl p-6 text-center"
//               >
//                 <Award className="w-10 h-10 text-primary mx-auto mb-4" />
//                 <h3 className="font-semibold text-foreground mb-2">{item.model}</h3>
//                 <p className="text-sm text-muted-foreground">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection
//         title="Partner With Us on Your Federal IT Needs"
//         description="Contact us to discuss how we can support your agency's technology initiatives."
//         buttonText="Schedule a Consultation"
//       />
//     </PageLayout>
//   );
// };

// export default FederalPage;


import { motion } from "framer-motion";
import { Building, Shield, Lock, CheckCircle, Award } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const capabilities = [
  { title: "IT Modernization", description: "Legacy system modernization and cloud migration" },
  { title: "Cybersecurity", description: "Security assessment, implementation, and monitoring" },
  { title: "Data Analytics", description: "Advanced analytics and business intelligence" },
  { title: "Cloud Services", description: "FedRAMP compliant cloud solutions" },
  { title: "Application Development", description: "Custom software development and integration" },
  { title: "IT Staffing", description: "Cleared personnel placement and management" },
];

const complianceFrameworks = [
  "FISMA",
  "FedRAMP",
  "NIST 800-53",
  "NIST 800-171",
  "CMMC",
  "SOC 2",
];

const engagementModels = [
  { model: "Time & Materials", description: "Flexible engagement for evolving requirements" },
  { model: "Fixed Price", description: "Defined scope with predictable costs" },
  { model: "Managed Services", description: "Ongoing operational support and maintenance" },
  { model: "Staff Augmentation", description: "Skilled professionals integrated with your team" },
];

const FederalPage = () => {
  return (
    <PageLayout>
      {/* Background Only */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/federal.jpg')",
        }}
      >
        {/* Keep Original White Layout */}
        <div className="min-h-screen bg-background/60 text-justify">

          <PageHero
            title="Federal Government Services"
            subtitle="Public Sector Excellence"
            description="Trusted IT partner for federal agencies. We deliver secure, compliant solutions that meet the rigorous standards of federal operations."
            icon={Building}
          />

          {/* Overview */}
          <section className="py-12 lg:py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Federal IT Services Overview
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    WorldString IT Solutions delivers comprehensive technology services to federal agencies across civilian and defense sectors. Our team understands the unique requirements, security standards, and procurement processes of federal government work.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    We combine deep technical expertise with federal domain knowledge to help agencies modernize IT infrastructure, enhance cybersecurity posture, and improve operational efficiency.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Security-First</span>
                    </div>

                    <div className="flex items-center gap-2 text-primary">
                      <Lock className="w-5 h-5" />
                      <span className="font-medium">Fully Compliant</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Compliance & Security
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {complianceFrameworks.map((framework) => (
                      <span
                        key={framework}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Core Capabilities
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Comprehensive IT services tailored for federal agency requirements.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, index) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {cap.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* Engagement Models */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Engagement Models
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Flexible engagement options to meet your agency's procurement requirements.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {engagementModels.map((item, index) => (
                  <motion.div
                    key={item.model}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 text-center"
                  >
                    <Award className="w-10 h-10 text-primary mx-auto mb-4" />

                    <h3 className="font-semibold text-foreground mb-2">
                      {item.model}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          <CTASection
            title="Partner With Us on Your Federal IT Needs"
            description="Contact us to discuss how we can support your agency's technology initiatives."
            buttonText="Schedule a Consultation"
          />

        </div>
      </div>
    </PageLayout>
  );
};

export default FederalPage;
