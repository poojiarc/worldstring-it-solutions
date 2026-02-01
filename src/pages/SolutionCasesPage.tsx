// import { motion } from "framer-motion";
// import { FolderOpen, TrendingUp } from "lucide-react";
// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";

// const cases = [
//   { title: "Cloud Migration", problem: "Legacy on-premises infrastructure", solution: "AWS cloud migration with zero downtime", result: "40% cost reduction" },
//   { title: "Security Overhaul", problem: "Outdated security posture", solution: "Comprehensive security assessment & implementation", result: "Zero breaches in 2 years" },
//   { title: "Digital Portal", problem: "Manual citizen services", solution: "Modern web portal with mobile support", result: "80% digital adoption" },
//   { title: "Data Analytics", problem: "Siloed data systems", solution: "Unified data warehouse & BI dashboards", result: "Real-time decision making" },
// ];

// const SolutionCasesPage = () => (
//   <PageLayout>
//     <PageHero title="Solution Cases" subtitle="Case Studies" description="IT solution implementations that delivered measurable results." icon={FolderOpen} />
//     <section className="py-10">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {cases.map((c, index) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-foreground mb-4">{c.title}</h3>
//               <div className="space-y-2 text-sm">
//                 <p><span className="text-muted-foreground">Problem:</span> <span className="text-foreground">{c.problem}</span></p>
//                 <p><span className="text-muted-foreground">Solution:</span> <span className="text-foreground">{c.solution}</span></p>
//                 <div className="flex items-center gap-2 text-primary font-medium pt-2"><TrendingUp className="w-4 h-4" />{c.result}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   </PageLayout>
// );

// export default SolutionCasesPage;
import { motion } from "framer-motion";
import { FolderOpen, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

const cases = [
  {
    title: "Cloud Migration",
    problem: "Legacy on-premises infrastructure",
    solution: "AWS cloud migration with zero downtime",
    result: "40% cost reduction",
  },
  {
    title: "Security Overhaul",
    problem: "Outdated security posture",
    solution: "Comprehensive security assessment & implementation",
    result: "Zero breaches in 2 years",
  },
  {
    title: "Digital Portal",
    problem: "Manual citizen services",
    solution: "Modern web portal with mobile support",
    result: "80% digital adoption",
  },
  {
    title: "Data Analytics",
    problem: "Siloed data systems",
    solution: "Unified data warehouse & BI dashboards",
    result: "Real-time decision making",
  },
];

const SolutionCasesPage = () => (
  <PageLayout>

    {/* Background */}
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/Solution cases.jpg')",
      }}
    >
      {/* White Theme + Justify */}
      <div className="min-h-screen  text-justify">

        <PageHero
          title="Solution Cases"
          subtitle="Case Studies"
          description="IT solution implementations that delivered measurable results."
          icon={FolderOpen}
        />

        <section className="py-10">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {cases.map((c, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {c.title}
                  </h3>

                  <div className="space-y-2 text-sm">

                    <p>
                      <span className="text-muted-foreground">
                        Problem:
                      </span>{" "}
                      <span className="text-foreground">
                        {c.problem}
                      </span>
                    </p>

                    <p>
                      <span className="text-muted-foreground">
                        Solution:
                      </span>{" "}
                      <span className="text-foreground">
                        {c.solution}
                      </span>
                    </p>

                    <div className="flex items-center gap-2 text-primary font-medium pt-2">
                      <TrendingUp className="w-4 h-4" />
                      {c.result}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  </PageLayout>
);

export default SolutionCasesPage;
