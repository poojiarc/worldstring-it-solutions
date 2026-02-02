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
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <PageHero
        title="GSA MAS Contract"
        subtitle="Contract Vehicle"
        description="Access WorldString IT Solutions through the GSA Multiple Award Schedule for streamlined procurement."
        icon={FileText}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contract Capabilities
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                    <span className="text-foreground font-medium">
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
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Benefits of GSA MAS
              </h2>

              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-justify leading-relaxed">Pre-negotiated pricing and terms for faster procurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-justify leading-relaxed">Streamlined procurement process with reduced administrative burden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-justify leading-relaxed">Compliance with federal acquisition regulations and standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-justify leading-relaxed">Access to vetted IT service providers with proven track records</span>
                </li>
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
  </PageLayout>
);

export default GSAMASPage;
