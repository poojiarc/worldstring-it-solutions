// import { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Home,
//   Briefcase,
//   Users,
//   FileText,
//   Plane,
//   FolderOpen,
//   GraduationCap,
//   LogIn,
//   ChevronDown,
//   Server,
// } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { navigationItems, NavItem } from "@/data/navigation";
// import logo from "../assets/favicon.svg";

// /* ICON MAP */
// const navIcons: Record<string, React.ElementType> = {
//   "IT SERVICES": Server,
//   "WHO WE SERVE": Users,
//   CONTRACTS: FileText,
//   IMMIGRATION: Plane,
//   PORTFOLIO: FolderOpen,
//   CAREERS: Briefcase,
//   "EMPLOYEE RESOURCES": GraduationCap,
// };

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* Scroll Effect */
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* Desktop Order */
//   const desktopNavItems = useMemo(() => {
//     return navigationItems.filter(
//       i => !["Contact Us", "Employee Login", "About Us"].includes(i.name)
//     );
//   }, []);

//   /* Nav Click */
//   const handleNavClick = (item: NavItem) => {
//     if (item.subItems?.length) return;

//     navigate(item.href);
//     setIsMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <motion.header
//   className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//     isScrolled
//       ? "bg-white/95 backdrop-blur shadow-sm py-3 lg:py-2"
//       : "bg-white py-4 lg:py-4"
//   } border-b`}
// >
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex items-center justify-between gap-4">

//             {/* LOGO */}
//             <div
//               onClick={() => navigate("/")}
//               className="flex items-center gap-3 cursor-pointer shrink-0"
//             >
//               <img src={logo} alt="WorldStringIT" className="h-11 w-auto" />
//             </div>

//             {/* DESKTOP NAV */}
//             <nav className="hidden xl:flex items-center flex-1 justify-end gap-3">

//               {/* Home */}
//               <button
//                 onClick={() => navigate("/")}
//                 className="p-2 rounded-xl hover:bg-primary/5"
//               >
//                 <Home size={18} />
//               </button>

//               {/* Nav Items */}
//               <div className="flex items-center gap-1 bg-secondary/50 rounded-xl px-2 py-1 border">

//                 {desktopNavItems.map(item => {
//                   const Icon = navIcons[item.name];

//                   return (
//                     <div
//                       key={item.name}
//                       className="relative"
//                       onMouseEnter={() =>
//                         item.subItems && setOpenDropdown(item.name)
//                       }
//                       onMouseLeave={() => setOpenDropdown(null)}
//                     >
//                       <button
//                         onClick={() => handleNavClick(item)}
//                         className={`px-2.5 py-2 text-[10px] font-bold uppercase flex items-center gap-1 rounded-lg whitespace-nowrap transition ${
//                           location.pathname.startsWith(item.href)
//                             ? "bg-white text-primary shadow"
//                             : "text-slate-600 hover:bg-white hover:text-primary"
//                         }`}
//                       >
//                         {Icon && <Icon className="w-3.5 h-3.5" />}
//                         {item.name}

//                         {item.subItems && (
//                           <ChevronDown className="w-3 h-3" />
//                         )}
//                       </button>

//                       {/* Desktop Dropdown */}
//                       <AnimatePresence>
//                         {item.subItems &&
//                           openDropdown === item.name && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: 10 }}
//                               className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl mt-2 z-50"
//                             >
//                               {item.subItems.map(sub => {
//                                 const SubIcon = sub.icon;

//                                 return (
//                                   <Link
//                                     key={sub.name}
//                                     to={sub.href}
//                                     className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5"
//                                   >
//                                     {SubIcon && (
//                                       <SubIcon className="w-4 h-4 text-primary" />
//                                     )}
//                                     {sub.name}
//                                   </Link>
//                                 );
//                               })}
//                             </motion.div>
//                           )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Login */}
//               <Button
//                 onClick={() => navigate("/employee-login")}
//                 className="rounded-full px-5 h-10 text-xs font-bold uppercase flex items-center gap-2"
//               >
//                 <LogIn className="w-4 h-4" />
//                 Login
//               </Button>
//             </nav>

//             {/* MOBILE TOGGLE */}
//             <div className="xl:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2.5 rounded-xl hover:bg-primary/5"
//               >
//                 {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="xl:hidden bg-white border-t shadow-lg"
//             >
//               <div className="container mx-auto px-4 py-4 flex flex-col">

//                 {/* Home */}
//                 <button
//                   onClick={() => {
//                     navigate("/");
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="flex items-center gap-3 py-3 font-bold text-slate-700"
//                 >
//                   <Home size={18} />
//                   Home
//                 </button>

//                 {/* Mobile Items */}
//                 {desktopNavItems.map(item => {
//                   const Icon = navIcons[item.name];

//                   return (
//                     <div key={item.name} className="border-t">

//                       <div
//                         onClick={() =>
//                           item.subItems
//                             ? setMobileDropdown(
//                                 mobileDropdown === item.name
//                                   ? null
//                                   : item.name
//                               )
//                             : handleNavClick(item)
//                         }
//                         className="flex justify-between items-center py-3 font-bold text-slate-700 cursor-pointer"
//                       >
//                         <div className="flex items-center gap-3">
//                           {Icon && <Icon size={16} />}
//                           {item.name}
//                         </div>

//                         {item.subItems && (
//                           <ChevronDown
//                             className={`w-4 h-4 transition-transform ${
//                               mobileDropdown === item.name
//                                 ? "rotate-180"
//                                 : ""
//                             }`}
//                           />
//                         )}
//                       </div>

//                       {/* Mobile Dropdown */}
//                       {item.subItems &&
//                         mobileDropdown === item.name && (
//                           <div className="pl-6 pb-2">
//                             {item.subItems.map(sub => (
//                               <Link
//                                 key={sub.name}
//                                 to={sub.href}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="block py-2 text-sm text-slate-600 hover:text-primary"
//                               >
//                                 {sub.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                     </div>
//                   );
//                 })}

//                 {/* Login */}
//                 <Button
//                   onClick={() => {
//                     navigate("/employee-login");
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="mt-4 w-full h-11 font-bold uppercase"
//                 >
//                   <LogIn size={18} />
//                   Login
//                 </Button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// };


import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  FileText,
  Plane,
  FolderOpen,
  GraduationCap,
  LogIn,
  ChevronDown,
  Server,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigationItems, NavItem } from "@/data/navigation";
import logo from "../assets/favicon.svg";

/* ICON MAP */
const navIcons: Record<string, React.ElementType> = {
  "IT SERVICES": Server,
  "WHO WE SERVE": Users,
  CONTRACTS: FileText,
  IMMIGRATION: Plane,
  PORTFOLIO: FolderOpen,
  CAREERS: Briefcase,
  "EMPLOYEE RESOURCES": GraduationCap,
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Desktop Order */
  const desktopNavItems = useMemo(() => {
    return navigationItems.filter(
      i => !["Contact Us", "Employee Login", "About Us"].includes(i.name)
    );
  }, []);

  /* Nav Click */
  const handleNavClick = (item: NavItem) => {
    if (item.subItems?.length) return;

    navigate(item.href);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4"
        } border-b border-slate-100`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 lg:gap-4">

            {/* LOGO */}
            <div
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 cursor-pointer shrink-0 transition-transform hover:scale-105"
            >
              <img src={logo} alt="WorldStringIT" className="h-10 lg:h-12 w-auto" />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center justify-end gap-2 flex-1 min-w-0">

              {/* Home */}
              <button
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`p-2 rounded-xl transition-colors shrink-0 ${
                    location.pathname === "/" ? "text-primary bg-primary/5" : "hover:bg-primary/5 text-slate-600"
                }`}
              >
                <Home size={18} />
              </button>

              {/* Nav Items Container - REMOVED overflow-hidden so dropdowns can show */}
              <div className="flex items-center gap-0.5 bg-slate-50 rounded-xl px-1.5 py-1 border border-slate-100">
                {desktopNavItems.map(item => {
                  const Icon = navIcons[item.name];
                  const isActive = location.pathname.startsWith(item.href);

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`px-2 py-2 text-[10px] font-bold uppercase flex items-center gap-1 rounded-lg whitespace-nowrap transition-all ${
                          isActive
                            ? "bg-white text-primary shadow-sm"
                            : "text-slate-600 hover:bg-white/80 hover:text-primary"
                        }`}
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {item.name}
                        {item.subItems && (
                          <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                        )}
                      </button>

                      <AnimatePresence>
                        {(item.subItems|| item.emptyMessage) && openDropdown === item.name && (
                          <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-[110]"
>
  {item.subItems ? (
    item.subItems.map(sub => (
      <Link
        key={sub.name}
        to={sub.href!}
        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
      >
        {sub.icon && <sub.icon className="w-4 h-4 text-primary" />}
        {sub.name}
      </Link>
    ))
  ) : (
    <div className="px-4 py-4 text-sm text-slate-400 text-center font-medium">
      {item.emptyMessage}
    </div>
  )}
</motion.div>

                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* LOGIN BUTTON */}
              <Button
                onClick={() => navigate("/employee-login")}
                className="rounded-full px-5 h-10 text-[10px] font-bold uppercase flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all shrink-0"
              >
                <span>Login</span>
                <LogIn className="w-4 h-4" />
              </Button>
            </nav>

            {/* MOBILE TOGGLE */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
                <button
                  onClick={() => {
                    navigate("/");
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Home size={18} />
                  Home
                </button>

                {desktopNavItems.map(item => {
                  const Icon = navIcons[item.name];
                  const isOpen = mobileDropdown === item.name;

                  return (
                    <div key={item.name} className="flex flex-col">
                      <div
                        onClick={() => item.subItems ? setMobileDropdown(isOpen ? null : item.name) : handleNavClick(item)}
                        className={`flex justify-between items-center py-3 px-4 rounded-xl font-bold transition-colors cursor-pointer ${
                            isOpen ? "bg-primary/5 text-primary" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon size={18} />}
                          {item.name}
                        </div>
                        {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                      </div>
                      {item.subItems && isOpen && (
                        <div className="pl-12 pr-4 pb-2 flex flex-col gap-1">
                          {item.subItems.map(sub => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2.5 text-sm text-slate-500 hover:text-primary transition-colors border-l border-slate-100 pl-4"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Button
                  onClick={() => {
                    navigate("/employee-login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-6 w-full h-12 font-bold uppercase rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Login</span>
                  <LogIn size={18} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-[76px] lg:h-[84px] w-full" />
    </>
  );
};