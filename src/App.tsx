import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ITServicesPage from "./pages/ITServicesPage";
import ITStaffingPage from "./pages/ITStaffingPage";
import ITSolutionsPage from "./pages/ITSolutionsPage";
import WhoWeServePage from "./pages/WhoWeServePage";
import FederalPage from "./pages/FederalPage";
import StateLocalEducationPage from "./pages/StateLocalEducationPage";
import GSAMASPage from "./pages/GSAMASPage";
import H1BVisaPage from "./pages/H1BVisaPage";
import GreenCardPage from "./pages/GreenCardPage";
import PortfolioPage from "./pages/PortfolioPage";
import StaffingCasesPage from "./pages/StaffingCasesPage";
import SolutionCasesPage from "./pages/SolutionCasesPage";
import CareersPage from "./pages/CareersPage";
import CoursesPage from "./pages/CoursesPage";
import EmployeeLoginPage from "./pages/EmployeeLoginPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/it-services/it-staffing" element={<ITStaffingPage />} />
          <Route path="/it-services/it-solutions" element={<ITSolutionsPage />} />
          <Route path="/who-we-serve" element={<WhoWeServePage />} />
          <Route path="/who-we-serve/federal" element={<FederalPage />} />
          <Route path="/who-we-serve/state-local-education" element={<StateLocalEducationPage />} />
          <Route path="/contracts" element={<GSAMASPage />} />
          <Route path="/contracts/gsa-mas" element={<GSAMASPage />} />
          <Route path="/immigration" element={<H1BVisaPage />} />
          <Route path="/immigration/h1b-visa" element={<H1BVisaPage />} />
          <Route path="/immigration/green-card" element={<GreenCardPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/staffing-cases" element={<StaffingCasesPage />} />
          <Route path="/portfolio/solution-cases" element={<SolutionCasesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/employee-resources" element={<CoursesPage />} />
          <Route path="/employee-resources/courses" element={<CoursesPage />} />
          <Route path="/employee-login" element={<EmployeeLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
