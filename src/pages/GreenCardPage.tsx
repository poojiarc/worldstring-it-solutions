// import { motion } from "framer-motion";
// import { Award, FileCheck, Clock, AlertTriangle } from "lucide-react";
// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";
// import { CTASection } from "@/components/CTASection";

// const stages = [
//   { title: "PERM Labor Certification", description: "Department of Labor certification process" },
//   { title: "I-140 Petition", description: "Immigrant worker petition filed with USCIS" },
//   { title: "I-485 Adjustment", description: "Adjustment of status to permanent resident" },
// ];

// const GreenCardPage = () => (
//   <PageLayout>
//     <PageHero title="Green Card Applications" subtitle="Immigration Services" description="Employment-based green card sponsorship and permanent residency support." icon={Award} />
//     <section className="py-4">
//       <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-foreground mb-4">Green Card Process Stages</h2>
//         </motion.div>
//         <div className="space-y-6 mb-12">
//           {stages.map((stage, index) => (
//             <motion.div key={stage.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{index + 1}</div>
//               <div><h3 className="font-semibold text-foreground">{stage.title}</h3><p className="text-sm text-muted-foreground">{stage.description}</p></div>
//             </motion.div>
//           ))}
//         </div>
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
//           <div className="flex items-start gap-3 text-muted-foreground">
//             <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
//             <p className="text-sm"><strong>Disclaimer:</strong> Green card processing times vary. This is general information only. Consult qualified immigration attorneys for specific guidance.</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//     <CTASection title="Interested in Green Card Sponsorship?" description="Explore permanent residency opportunities with WorldString." />
//   </PageLayout>
// );

// export default GreenCardPage;


import { motion } from "framer-motion";
import { Award, AlertTriangle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const stages = [
  { title: "PERM Labor Certification", description: "Department of Labor certification process" },
  { title: "I-140 Petition", description: "Immigrant worker petition filed with USCIS" },
  { title: "I-485 Adjustment", description: "Adjustment of status to permanent resident" },
];

const GreenCardPage = () => (
  <PageLayout>
    {/* Background */}
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/greencard.jpg')",
      }}
    >
      {/* Keep White Theme + Justify */}
      <div className="min-h-screen bg-background/60 text-justify">

        <PageHero
          title="Green Card Applications"
          subtitle="Immigration Services"
          description="Employment-based green card sponsorship and permanent residency support."
          icon={Award}
        />

        <section className="py-4">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Green Card Process Stages
              </h2>
            </motion.div>

            <div className="space-y-6 mb-12">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-start gap-3 text-muted-foreground">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />

                <p className="text-sm">
                  <strong>Disclaimer:</strong> Green card processing times vary. This is general information only. Consult qualified immigration attorneys for specific guidance.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        <CTASection
          title="Interested in Green Card Sponsorship?"
          description="Explore permanent residency opportunities with WorldString."
        />

      </div>
    </div>
  </PageLayout>
);

export default GreenCardPage;
