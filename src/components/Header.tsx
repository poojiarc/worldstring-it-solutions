
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigationItems, NavItem } from "@/data/navigation";
import logo from "../assets/favicon.svg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.subItems?.length) return;
    navigate(item.href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* TOP BAR - Hidden on mobile, visible on medium+ screens */}
      <div className="bg-secondary/40 border-b border-border hidden md:block">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-9 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <div className="flex gap-6">
              <button onClick={handleAboutClick} className="hover:text-primary transition-colors ">
                ABOUT US
              </button>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
            <div>Enterprise IT Solutions</div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur shadow-sm py-2" : "bg-white py-3"
        } border-b`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            
            {/* LOGO AREA - Fixed width to prevent crushing */}
            <div 
              onClick={() => navigate("/")} 
              className="flex items-center gap-3 cursor-pointer shrink-0"
            >
              {/* Logo Image */}
              <img src={logo} alt="WorldStringIT Solutions" className="h-14 w-auto object-contain" />
              
              {/* Hidden text block to avoid duplication if logo has text */}
              <div className="hidden border-l pl-4 border-gray-200">
                <div className="font-bold text-lg leading-tight">
                  WorldString<span className="text-primary">IT</span>
                </div>
              </div>
            </div>

            {/* DESKTOP NAV - Compact Layout */}
            <nav className="hidden xl:flex items-center justify-end flex-1 min-w-0">
              {/* Home Icon */}
              <button 
                onClick={() => navigate("/")} 
                className="text-muted-foreground hover:text-primary p-2 mr-1 transition-colors shrink-0"
                title="Home"
              >
                <Home size={18} />
              </button>
              
              {/* Navigation Items Container */}
              <div className="flex items-center h-9 bg-gray-50/50 rounded-lg px-1 border border-transparent hover:border-gray-100 transition-colors shrink min-w-0 overflow-visible">
                {navigationItems
                  .filter(item => !["Contact Us", "Employee Login", "About Us"].includes(item.name))
                  .map((item) => (
                    <div
                      key={item.name}
                      className="relative h-full flex items-center group"
                      onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`
                          px-2 lg:px-3 py-1.5 text-[10px] lg:text-[11px] font-bold uppercase tracking-tight 
                          transition-colors flex items-center gap-0.5 whitespace-nowrap
                          ${location.pathname.startsWith(item.href) ? "text-primary" : "text-slate-600 hover:text-primary"}
                        `}
                      >
                        {item.name}
                        {item.subItems && (
                          <ChevronDown 
                            size={12} 
                            className={`transition-transform duration-200 opacity-60 ${openDropdown === item.name ? "rotate-180" : ""}`} 
                          />
                        )}
                      </button>

                      {/* Dropdown Menu - Aligned to keep bounds */}
                      <AnimatePresence>
                        {item.subItems && openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-lg shadow-xl py-2 mt-1 z-50"
                          >
                            {item.subItems.map((sub) => (
                              <Link 
                                key={sub.name} 
                                to={sub.href} 
                                className="block px-4 py-2.5 hover:bg-slate-50 border-l-2 border-transparent hover:border-primary transition-all group/link"
                              >
                                <span className="font-bold text-xs text-slate-700 group-hover/link:text-primary block mb-0.5">
                                  {sub.name}
                                </span>
                                {sub.description && (
                                  <span className="text-[10px] text-muted-foreground leading-tight block">
                                    {sub.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Divider */}
                      <div className="h-3 w-[1px] bg-gray-200 mx-0.5 last:hidden group-last:hidden" />
                    </div>
                  ))}
              </div>

              {/* Login Button - Separated and Fixed Right */}
              <div className="ml-2 pl-2 lg:ml-4 lg:pl-4 border-l border-gray-200 shrink-0">
                <Button
                  onClick={() => navigate("/employee-login")}
                  variant="outline"
                  className="rounded-full border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white px-4 lg:px-5 h-8 lg:h-9 font-bold uppercase text-[10px] tracking-wider shadow-sm whitespace-nowrap"
                >
                  Employee Login
                </Button>
              </div>
            </nav>

            {/* MOBILE MENU TOGGLE */}
            <div className="xl:hidden flex items-center">
              <button 
                className="p-2 text-slate-600 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-gray-100 overflow-hidden absolute w-full shadow-2xl left-0"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col max-h-[80vh] overflow-y-auto">
                <button 
                  onClick={handleAboutClick} 
                  className="text-left px-4 py-3 font-bold text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors border-b border-gray-50"
                >
                  About Us
                </button>
                
                {navigationItems.map((item) => (
                   <div key={item.name} className="border-b border-gray-50 last:border-0">
                      <div 
                        className="flex justify-between items-center px-4 py-3 font-bold text-sm text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => item.subItems ? setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name) : handleNavClick(item)}
                      >
                        {item.name}
                        {item.subItems && (
                          <ChevronDown 
                            size={16} 
                            className={`text-muted-foreground transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} 
                          />
                        )}
                      </div>
                      
                      {item.subItems && mobileOpenDropdown === item.name && (
                        <div className="bg-slate-50/50 pl-4 py-2">
                          {item.subItems.map(sub => (
                            <Link 
                              key={sub.name} 
                              to={sub.href} 
                              onClick={() => setIsMobileMenuOpen(false)} 
                              className="block py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-primary rounded-md hover:bg-white transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                   </div>
                ))}
                
                <div className="mt-6 px-4 pb-2">
                  <Button
                    onClick={() => {
                        navigate("/employee-login");
                        setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-lg bg-primary text-white font-bold uppercase text-xs tracking-wider h-11 shadow-md"
                  >
                    Employee Login
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};