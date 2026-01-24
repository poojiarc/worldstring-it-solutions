import { PageLayout } from "@/components/PageLayout";
import { HeroSlider } from "@/components/HeroSlider";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { WhoWeServePreview } from "@/components/WhoWeServePreview";

const Index = () => {
  return (
    <PageLayout>
      <HeroSlider />
      <Services />
      <WhoWeServePreview />
      <About />
      <Contact />
    </PageLayout>
  );
};

export default Index;
