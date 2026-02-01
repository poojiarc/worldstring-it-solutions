import { motion } from "framer-motion";
import { Users, FolderOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const portfolioTypes = [
  { icon: Users, title: "Staffing Cases", description: "Success stories from our IT staffing engagements across industries.", href: "/portfolio/staffing-cases" },
  { icon: FolderOpen, title: "Solution Cases", description: "Case studies showcasing our IT solution implementations.", href: "/portfolio/solution-cases" },
];

const PortfolioPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageHero title="Portfolio" subtitle="Our Work" description="Explore our success stories and case studies across staffing and solution engagements." icon={FolderOpen} />
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioTypes.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Button onClick={() => { navigate(item.href); window.scrollTo({ top: 0 }); }} className="bg-primary hover:bg-primary/90">View Cases <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
