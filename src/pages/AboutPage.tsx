import {PageLayout} from "@/components/PageLayout";
import { About } from "@/components/About";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="pt-20">
        <About />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
