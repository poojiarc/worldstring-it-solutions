import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Code } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

const courses = [
  { icon: Code, title: "Cloud Certifications", description: "AWS, Azure, GCP certification preparation courses to advance your cloud computing skills.", category: "Technical" },
  { icon: BookOpen, title: "Agile & Scrum", description: "Scrum Master & Product Owner training for effective project management.", category: "Methodology" },
  { icon: Award, title: "Security Training", description: "CISSP, Security+ preparation for cybersecurity professionals.", category: "Security" },
  { icon: GraduationCap, title: "Leadership Development", description: "Management & leadership skills for career advancement.", category: "Professional" },
];

const CoursesPage = () => (
  <PageLayout>
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <PageHero
        title="Employee Courses"
        subtitle="Learning & Development"
        description="Continuous learning opportunities for WorldString employees."
        icon={GraduationCap}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-badge">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>

                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {course.title}
                </h3>

                <p className="text-muted-foreground text-justify leading-relaxed">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </PageLayout>
);

export default CoursesPage;
