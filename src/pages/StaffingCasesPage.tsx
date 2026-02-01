// import { motion } from "framer-motion";
// import { Users, Building, CheckCircle } from "lucide-react";
// import { PageLayout } from "@/components/PageLayout";
// import { PageHero } from "@/components/PageHero";

// const cases = [
//   { industry: "Healthcare", role: "Senior Java Developer", outcome: "Filled in 2 weeks, extended to 18 months" },
//   { industry: "Financial Services", role: "Cloud Architect", outcome: "Permanent placement after contract" },
//   { industry: "Government", role: "Cybersecurity Analyst", outcome: "Team of 5 placed for federal project" },
//   { industry: "Technology", role: "Full Stack Engineers", outcome: "Offshore team of 10 developers" },
// ];

// const StaffingCasesPage = () => (
//   <PageLayout>
//     <PageHero title="Staffing Cases" subtitle="Success Stories" description="Real examples of successful IT staffing placements." icon={Users} />
//     <section className="py-10">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {cases.map((c, index) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-xl p-6">
//               <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2"><Building className="w-4 h-4" />{c.industry}</div>
//               <h3 className="text-lg font-semibold text-foreground mb-2">{c.role}</h3>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500" />{c.outcome}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   </PageLayout>
// );

// export default StaffingCasesPage;

import { motion } from "framer-motion";
import { Users, Building, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

const cases = [
  {
    industry: "Healthcare",
    role: "Senior Java Developer",
    outcome: "Filled in 2 weeks, extended to 18 months",
  },
  {
    industry: "Financial Services",
    role: "Cloud Architect",
    outcome: "Permanent placement after contract",
  },
  {
    industry: "Government",
    role: "Cybersecurity Analyst",
    outcome: "Team of 5 placed for federal project",
  },
  {
    industry: "Technology",
    role: "Full Stack Engineers",
    outcome: "Offshore team of 10 developers",
  },
];

const StaffingCasesPage = () => (
  <PageLayout>

    {/* Background */}
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/staffing cases.jpg')",
      }}
    >
      {/* White Theme + Justify */}
      <div className="min-h-screen bg-background/60 text-justify">

        <PageHero
          title="Staffing Cases"
          subtitle="Success Stories"
          description="Real examples of successful IT staffing placements."
          icon={Users}
        />

        <section className="py-10">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cases.map((c, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Building className="w-4 h-4" />
                    {c.industry}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {c.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {c.outcome}
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

export default StaffingCasesPage;
