import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  const handleNavClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      return; // Let dropdown handle it
    }
    navigate(item.href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter main nav items for display (excluding Contact Us, Employee Login)
  const mainNavItems = navigationItems.filter(
    item => !["Contact Us", "Employee Login"].includes(item.name)
  );

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Left side - About & Contact */}
            <div className="flex items-center gap-6">
              <Link 
                to="/about" 
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
            {/* Right side - optional blogs */}
            <div className="hidden md:flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                Enterprise IT Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm py-2"
            : "bg-background border-b border-border py-3"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
                <span className="text-lg font-bold text-foreground leading-tight">
                  WorldString<span className="text-primary">IT</span>
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  Solutions
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.subItems && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-secondary ${
                      location.pathname.startsWith(item.href) && item.href !== "/"
                        ? "text-primary"
                        : location.pathname === "/" && item.href === "/"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.subItems && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-start gap-3 p-4 hover:bg-secondary transition-colors group"
                          >
                            {subItem.icon && (
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                <subItem.icon className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden xl:flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => navigate("/employee-login")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-5 transition-all duration-300"
              >
                Employee Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-background border-b border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => setMobileOpenDropdown(
                            mobileOpenDropdown === item.name ? null : item.name
                          )}
                          className="w-full flex items-center justify-between text-left text-foreground hover:text-primary py-3 px-2 rounded-lg hover:bg-secondary"
                        >
                          {item.name}
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                              mobileOpenDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center gap-3 py-2 px-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary"
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="w-4 h-4 text-primary" />
                                  )}
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-foreground hover:text-primary py-3 px-2 rounded-lg hover:bg-secondary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Employee Login Button */}
                <div className="pt-4 border-t border-border mt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigate("/employee-login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  >
                    Employee Login
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
