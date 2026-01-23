// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import logo from "../assets/favicon.svg";

// interface NavLink {
//   name: string;
//   href: string;
//   isRoute?: boolean;
// }

// const navLinks: NavLink[] = [
//   { name: "Home", href: "/" , isRoute: true },
//   { name: "Services", href: "/services", isRoute: true },
//   { name: "About", href: "#about" },
//   { name: "Careers", href: "#careers" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (link: NavLink) => {
//     setIsMobileMenuOpen(false);
    
//     if (link.isRoute) {
//       navigate(link.href);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     // Hash navigation
//     if (location.pathname !== "/") {
//       // Navigate to home first, then scroll
//       navigate("/" + link.href);
//     } else {
//       const element = document.querySelector(link.href);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleLogoClick = () => {
//     if (location.pathname !== "/") {
//       navigate("/");
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const handleContactClick = () => {
//     setIsMobileMenuOpen(false);
//     if (location.pathname !== "/") {
//       navigate("/#contact");
//     } else {
//       const element = document.querySelector("#contact");
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
//           : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <div 
//             className="flex items-center gap-3 cursor-pointer group" 
//             onClick={handleLogoClick}
//           >
//             <img 
//               src={logo} 
//               alt="WorldString IT Solutions" 
//               className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
//             />
//             <div className="flex flex-col">
//               <span className="text-xl font-bold text-foreground leading-tight">
//                 WorldString<span className="text-primary">IT</span>
//               </span>
//               <span className="text-xs text-muted-foreground">Solutions</span>
//             </div>
//           </div>

//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleNavClick(link)}
//                 className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group bg-transparent border-none cursor-pointer"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//               </button>
//             ))}
//             <Button
//               onClick={handleContactClick}
//               className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-button hover:shadow-glow transition-all duration-300"
//             >
//               Contact Us
//             </Button>
//           </nav>

//           <button
//             className="lg:hidden text-foreground p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-card border-b border-border"
//           >
//             <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.name}
//                   onClick={() => handleNavClick(link)}
//                   className="text-left text-muted-foreground hover:text-primary py-2 bg-transparent border-none cursor-pointer"
//                 >
//                   {link.name}
//                 </button>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/favicon.svg";

interface NavLink {
  name: string;
  href: string;
  isRoute?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "Services", href: "/services", isRoute: true },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX: This Effect monitors the URL and scrolls once the page is ready
  useEffect(() => {
    if (location.hash) {
      // Small timeout ensures the DOM elements like #about are rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150); 
      return () => clearTimeout(timer);
    }
  }, [location]); // Triggers on every navigation/hash change

  const handleNavClick = (link: NavLink) => {
    setIsMobileMenuOpen(false);
    
    if (link.isRoute) {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Logic for hash links (#about, #contact, etc)
    if (location.pathname !== "/") {
      // If we are not on home, go home with the hash. 
      // The useEffect above will handle the actual scrolling once we arrive.
      navigate("/" + link.href);
    } else {
      // If already on home, scroll immediately
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    handleNavClick({ name: "Contact", href: "#contact" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <img 
              src={logo} 
              alt="WorldString IT Solutions" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
              WorldString<span className="text-primary">IT</span> <p className="text-sm">Solutions</p>
            </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group bg-transparent border-none cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-button hover:shadow-glow transition-all duration-300"
            >
              Contact Us
            </Button>
          </nav>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-left text-muted-foreground hover:text-primary py-2 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};