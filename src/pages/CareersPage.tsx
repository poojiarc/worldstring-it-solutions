import { motion } from "framer-motion";
import { Briefcase, Users, Rocket, Heart, Mail } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const openPositions = [
  { title: "Senior Java Developer", location: "Remote / TX", type: "Full-time" },
  { title: "Cloud Solutions Architect", location: "Pflugerville, TX", type: "Full-time" },
  { title: "DevOps Engineer", location: "Remote", type: "Contract" },
  { title: "Cybersecurity Analyst", location: "Washington, DC", type: "Full-time" },
];

const culturePoints = [
  { icon: Users, title: "Collaborative Team", description: "Work with talented professionals" },
  { icon: Rocket, title: "Growth Opportunities", description: "Continuous learning and advancement" },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible work arrangements" },
];

const CareersPage = () => (
  <PageLayout>
    <PageHero title="Careers at WorldString" subtitle="Join Our Team" description="Build your career with an innovative IT solutions company. We're always looking for talented individuals." icon={Briefcase} />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {culturePoints.map((point, index) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
              <point.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Open Positions</h2>
          <div className="space-y-4 max-w-3xl mx-auto mb-12">
            {openPositions.map((pos, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/40 transition-colors">
                <div><h3 className="font-semibold text-foreground">{pos.title}</h3><p className="text-sm text-muted-foreground">{pos.location} • {pos.type}</p></div>
                <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:worldstringitsolutions@gmail.com?subject=Application: ' + pos.title}>Apply</Button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" onClick={() => window.location.href = 'mailto:worldstringitsolutions@gmail.com?subject=Resume Submission'} className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 w-5 h-5" />Email Your Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default CareersPage;
