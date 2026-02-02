import { motion } from "framer-motion";
import { FolderOpen, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

const cases = [
  {
    title: "Cloud Migration",
    problem: "Legacy on-premises infrastructure causing scalability issues",
    solution: "AWS cloud migration with zero downtime using phased approach",
    result: "40% cost reduction",
  },
  {
    title: "Security Overhaul",
    problem: "Outdated security posture exposing vulnerabilities",
    solution: "Comprehensive security assessment & implementation",
    result: "Zero breaches in 2 years",
  },
  {
    title: "Digital Portal",
    problem: "Manual citizen services causing delays",
    solution: "Modern web portal with mobile support and automation",
    result: "80% digital adoption",
  },
  {
    title: "Data Analytics",
    problem: "Siloed data systems preventing insights",
    solution: "Unified data warehouse & BI dashboards",
    result: "Real-time decision making",
  },
];

const SolutionCasesPage = () => (
  <PageLayout>
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <PageHero
        title="Solution Cases"
        subtitle="Case Studies"
        description="IT solution implementations that delivered measurable results."
        icon={FolderOpen}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cases.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {c.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <p className="text-justify leading-relaxed">
                    <span className="text-foreground font-semibold">
                      Problem:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {c.problem}
                    </span>
                  </p>

                  <p className="text-justify leading-relaxed">
                    <span className="text-foreground font-semibold">
                      Solution:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {c.solution}
                    </span>
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold pt-2">
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
  </PageLayout>
);

export default SolutionCasesPage;
