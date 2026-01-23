// import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
// import { Services } from "@/components/Services";
// import { About } from "@/components/About";
// import { Careers } from "@/components/Careers";
// import { Contact } from "@/components/Contact";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <Hero />
//         <Services />
//         <About />
//         <Careers />
//         <Contact />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default Index;
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About /> {/* Ensure this file has id="about" */}
        <Careers /> {/* Ensure this file has id="careers" */}
        <Contact /> {/* Ensure this file has id="contact" */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;