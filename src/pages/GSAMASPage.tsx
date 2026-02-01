// import { motion } from "framer-motion";
// import { FileText, CheckCircle } from "lucide-react";
// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";
// import { CTASection } from "@/components/CTASection";

// const capabilities = [
//   "IT Professional Services", "Software Development", "Cloud Solutions", "Cybersecurity Services",
//   "Data Analytics", "IT Staffing", "System Integration", "Managed Services"
// ];

// const GSAMASPage = () => (
//   <PageLayout>
//     <PageHero title="GSA MAS Contract" subtitle="Contract Vehicle" description="Access WorldString IT Solutions through the GSA Multiple Award Schedule for streamlined procurement." icon={FileText} />
//     <section className="py-8">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 mb-8">
//             <h2 className="text-2xl font-bold text-foreground mb-4">Contract Capabilities</h2>
//             <div className="grid md:grid-cols-2 gap-3">
//               {capabilities.map((cap) => (
//                 <div key={cap} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span className="text-muted-foreground">{cap}</span></div>
//               ))}
//             </div>
//           </motion.div>
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
//             <h2 className="text-2xl font-bold text-foreground mb-4">Benefits of GSA MAS</h2>
//             <ul className="space-y-3 text-muted-foreground">
//               <li>• Pre-negotiated pricing and terms</li>
//               <li>• Streamlined procurement process</li>
//               <li>• Compliance with federal acquisition regulations</li>
//               <li>• Access to vetted IT service providers</li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//     <CTASection title="Ready to Work With Us?" description="Contact us to discuss your requirements through GSA MAS." />
//   </PageLayout>
// );

// export default GSAMASPage;


import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const capabilities = [
  "IT Professional Services",
  "Software Development",
  "Cloud Solutions",
  "Cybersecurity Services",
  "Data Analytics",
  "IT Staffing",
  "System Integration",
  "Managed Services",
];

const GSAMASPage = () => (
  <PageLayout>
    {/* Background */}
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/GSAMAS.jpg')",
      }}
    >
      {/* Keep White Theme + Justify */}
      <div className="min-h-screen bg-background/60 text-justify">

        <PageHero
          title="GSA MAS Contract"
          subtitle="Contract Vehicle"
          description="Access WorldString IT Solutions through the GSA Multiple Award Schedule for streamlined procurement."
          icon={FileText}
        />

        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contract Capabilities
                </h2>

                <div className="grid md:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />

                      <span className="text-muted-foreground">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Benefits of GSA MAS
                </h2>

                <ul className="space-y-3 text-muted-foreground">
                  <li>• Pre-negotiated pricing and terms</li>
                  <li>• Streamlined procurement process</li>
                  <li>• Compliance with federal acquisition regulations</li>
                  <li>• Access to vetted IT service providers</li>
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Work With Us?"
          description="Contact us to discuss your requirements through GSA MAS."
        />

      </div>
    </div>
  </PageLayout>
);

export default GSAMASPage;
