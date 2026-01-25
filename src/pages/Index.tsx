import { PageLayout } from "@/components/PageLayout";
import { HeroSlider } from "@/components/HeroSlider";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { OurCustomers } from "@/components/OurCustomers";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <PageLayout>
      <HeroSlider />
      <Services />
      <About />
      <OurCustomers />
      <Contact />
    </PageLayout>
  );
};

export default Index;
