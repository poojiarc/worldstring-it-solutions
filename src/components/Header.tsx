// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Menu, X, Home, Briefcase, Users, Building, FileText, 
//   Plane, FolderOpen, GraduationCap, LogIn, ChevronDown,
//   Phone, Info, Server
// } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { navigationItems, NavItem } from "@/data/navigation";
// import logo from "../assets/favicon.svg";

// // Icon mapping for navigation items
// const navIcons: Record<string, React.ElementType> = {
//   "IT SERVICES": Server,
//   "WHO WE SERVE": Users,
//   "CONTRACTS": FileText,
//   "IMMIGRATION": Plane,
//   "PORTFOLIO": FolderOpen,
//   "CAREERS": Briefcase,
//   "EMPLOYEE RESOURCES": GraduationCap,
// };

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAboutClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavClick = (item: NavItem) => {
//     if (item.subItems?.length) return;
//     navigate(item.href);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* TOP BAR - Premium Design */}
//       <div className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary border-b border-border/50 hidden md:block">
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex justify-between items-center h-10 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
//             <div className="flex gap-8">
//               <button 
//                 onClick={handleAboutClick} 
//                 className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
//               >
//                 <Info className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
//                 <span className="link-underline">About Us</span>
//               </button>
//               <Link 
//                 to="/contact" 
//                 className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
//               >
//                 <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
//                 <span className="link-underline">Contact Us</span>
//               </Link>
//             </div>
//             <div className="flex items-center gap-2 text-primary font-bold">
//               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//               Enterprise IT Solutions
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN HEADER */}
//       <motion.header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ${
//           isScrolled 
//             ? "bg-white/95 backdrop-blur-xl shadow-lg py-2 border-b border-border/50" 
//             : "bg-white py-3 border-b border-border/30"
//         }`}
//       >
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex items-center justify-between gap-2 lg:gap-4">
            
//             {/* LOGO AREA - Enhanced with glow effect */}
//             <motion.div 
//               onClick={() => navigate("/")} 
//               className="flex items-center gap-3 cursor-pointer shrink-0 group"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               {/* Logo Image with glow */}
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="WorldStringIT Solutions" 
//                   className="h-11 w-auto object-contain relative z-10 group-hover:brightness-110 transition-all duration-300" 
//                 />
//                 <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
              
//               {/* Brand Text with gradient underline */}
//               <div className="border-l pl-4 border-gray-200/80 relative">
//                 <div className="font-bold text-lg leading-tight">
//                   <span className="text-lg font-bold text-foreground">
//                     WorldString<span className="text-gradient">IT</span>
//                   </span>
//                   <span className="text-xs text-muted-foreground ml-1">Solutions</span>
//                 </div>
//                 {/* Gradient underline on hover */}
//                 <div className="absolute -bottom-1 left-4 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//               </div>
//             </motion.div>

//             {/* DESKTOP NAV - Premium Layout */}
//             <nav className="hidden xl:flex items-center justify-end flex-1 min-w-0">
//               {/* Home Icon with enhanced styling */}
//               <motion.button 
//                 onClick={() => navigate("/")} 
//                 className="text-muted-foreground hover:text-primary p-2.5 mr-2 transition-all rounded-xl hover:bg-primary/5 shrink-0 group"
//                 title="Home"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Home size={18} className="group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
//               </motion.button>
              
//               {/* Navigation Items Container - Glassmorphism */}
//               <div className="flex items-center h-10 bg-secondary/50 backdrop-blur-sm rounded-xl px-1.5 border border-border/50 shadow-sm shrink min-w-0 overflow-visible">
//                 {navigationItems
//                   .filter(item => !["Contact Us", "Employee Login", "About Us"].includes(item.name))
//                   .map((item) => {
//                     const IconComponent = navIcons[item.name];
//                     return (
//                       <div
//                         key={item.name}
//                         className="relative h-full flex items-center group"
//                         onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         <button
//                           onClick={() => handleNavClick(item)}
//                           className={`
//                             px-2.5 lg:px-3 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-tight 
//                             transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap rounded-lg
//                             hover:bg-white/80
//                             ${location.pathname.startsWith(item.href) 
//                               ? "text-primary bg-white shadow-sm" 
//                               : "text-slate-600 hover:text-primary"}
//                           `}
//                         >
//                           {IconComponent && (
//                             <IconComponent className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
//                           )}
//                           <span className="hidden lg:inline">{item.name}</span>
//                           {item.subItems && (
//                             <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
//                           )}
//                         </button>

//                         {/* Dropdown Menu - Premium Glassmorphism */}
//                         <AnimatePresence>
//                           {item.subItems && openDropdown === item.name && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                               animate={{ opacity: 1, y: 0, scale: 1 }}
//                               exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                               transition={{ duration: 0.2, ease: "easeOut" }}
//                               className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl py-2 mt-2 z-50 overflow-hidden"
//                             >
//                               {/* Gradient accent at top */}
//                               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                              
//                               {item.subItems.map((sub) => {
//                                 const SubIcon = sub.icon;
//                                 return (
//                                   <Link 
//                                     key={sub.name} 
//                                     to={sub.href} 
//                                     className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 border-l-2 border-transparent hover:border-primary transition-all group/link"
//                                   >
//                                     {SubIcon && (
//                                       <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:shadow-lg transition-all">
//                                         <SubIcon className="w-4 h-4 text-primary group-hover/link:text-white transition-colors" />
//                                       </div>
//                                     )}
//                                     <div>
//                                       <span className="font-bold text-xs text-slate-700 group-hover/link:text-primary block mb-0.5 transition-colors">
//                                         {sub.name}
//                                       </span>
//                                       {sub.description && (
//                                         <span className="text-[10px] text-muted-foreground leading-tight block">
//                                           {sub.description}
//                                         </span>
//                                       )}
//                                     </div>
//                                   </Link>
//                                 );
//                               })}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
                        
//                         {/* Divider */}
//                         <div className="h-4 w-[1px] bg-border/50 mx-0.5 last:hidden group-last:hidden" />
//                       </div>
//                     );
//                   })}
//               </div>

//               {/* Login Button - Premium Style */}
//               <div className="ml-3 pl-3 lg:ml-4 lg:pl-4 border-l border-border/50 shrink-0">
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     onClick={() => navigate("/employee-login")}
//                     className="btn-premium rounded-full text-white px-5 lg:px-6 h-9 lg:h-10 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap flex items-center gap-2"
//                   >
//                     <LogIn className="w-3.5 h-3.5" />
//                     Employee Login
//                   </Button>
//                 </motion.div>
//               </div>
//             </nav>

//             {/* MOBILE MENU TOGGLE */}
//             <div className="xl:hidden flex items-center">
//               <motion.button 
//                 className="p-2.5 text-slate-600 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE MENU OVERLAY - Premium Design */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-border/50 overflow-hidden absolute w-full shadow-2xl left-0"
//             >
//               <div className="container mx-auto px-4 py-6 flex flex-col max-h-[80vh] overflow-y-auto">
//                 {/* Home Link */}
//                 <button 
//                   onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }} 
//                   className="flex items-center gap-3 px-4 py-3 font-bold text-sm text-slate-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl transition-all border-b border-border/30"
//                 >
//                   <Home className="w-5 h-5 text-primary" />
//                   Home
//                 </button>

//                 {/* About Link */}
//                 <button 
//                   onClick={handleAboutClick} 
//                   className="flex items-center gap-3 px-4 py-3 font-bold text-sm text-slate-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl transition-all border-b border-border/30"
//                 >
//                   <Info className="w-5 h-5 text-primary" />
//                   About Us
//                 </button>
                
//                 {navigationItems.map((item) => {
//                   const IconComponent = navIcons[item.name];
//                   return (
//                     <div key={item.name} className="border-b border-border/30 last:border-0">
//                       <div 
//                         className="flex justify-between items-center px-4 py-3 font-bold text-sm text-slate-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl cursor-pointer transition-all"
//                         onClick={() => item.subItems ? setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name) : handleNavClick(item)}
//                       >
//                         <div className="flex items-center gap-3">
//                           {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
//                           {item.name}
//                         </div>
//                         {item.subItems && (
//                           <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
//                         )}
//                       </div>
                      
//                       <AnimatePresence>
//                         {item.subItems && mobileOpenDropdown === item.name && (
//                           <motion.div 
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             className="bg-secondary/30 pl-6 py-2 rounded-xl mx-2 mb-2 overflow-hidden"
//                           >
//                             {item.subItems.map(sub => {
//                               const SubIcon = sub.icon;
//                               return (
//                                 <Link 
//                                   key={sub.name} 
//                                   to={sub.href} 
//                                   onClick={() => setIsMobileMenuOpen(false)} 
//                                   className="flex items-center gap-3 py-3 px-4 text-sm font-semibold text-slate-600 hover:text-primary rounded-lg hover:bg-white/80 transition-all"
//                                 >
//                                   {SubIcon && <SubIcon className="w-4 h-4 text-primary/70" />}
//                                   {sub.name}
//                                 </Link>
//                               );
//                             })}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
                
//                 <div className="mt-6 px-4 pb-2">
//                   <Button
//                     onClick={() => {
//                         navigate("/employee-login");
//                         setIsMobileMenuOpen(false);
//                     }}
//                     className="w-full btn-premium rounded-xl text-white font-bold uppercase text-xs tracking-wider h-12 shadow-lg flex items-center justify-center gap-2"
//                   >
//                     <LogIn className="w-4 h-4" />
//                     Employee Login
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// };


// import { useState, useEffect, useRef } from "react";
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
//   Phone,
//   Info,
//   Server,
// } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { navigationItems, NavItem } from "@/data/navigation";
// import logo from "../assets/favicon.svg";

// // Icon mapping for navigation items
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
//   const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
//     null
//   );

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAboutClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document
//           .getElementById("about")
//           ?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       document
//         .getElementById("about")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavClick = (item: NavItem) => {
//     if (item.subItems?.length) return;
//     navigate(item.href);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* TOP BAR */}
//       <div className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary border-b border-border/50 hidden md:block">
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex justify-between items-center h-10 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
//             <div className="flex gap-8">
//               <button
//                 onClick={handleAboutClick}
//                 className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
//               >
//                 <Info className="w-3.5 h-3.5" />
//                 About Us
//               </button>
//               <Link
//                 to="/contact"
//                 className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
//               >
//                 <Phone className="w-3.5 h-3.5" />
//                 Contact Us
//               </Link>
//             </div>
//             <div className="flex items-center gap-2 text-primary font-bold">
//               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//               Enterprise IT Solutions
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* HEADER */}
//       <motion.header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-xl shadow-lg py-2 border-b border-border/50"
//             : "bg-white py-3 border-b border-border/30"
//         }`}
//       >
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex items-center justify-between gap-4">
//             {/* LOGO */}
//             <motion.div
//               onClick={() => navigate("/")}
//               className="flex items-center gap-3 cursor-pointer shrink-0"
//               whileHover={{ scale: 1.02 }}
//             >
//               <img src={logo} alt="WorldStringIT" className="h-11 w-auto" />
//               <div className="border-l pl-4">
//                 <span className="font-bold text-lg">
//                   WorldString<span className="text-primary">IT</span>
//                 </span>
//                 <span className="text-xs text-muted-foreground ml-1">
//                   Solutions
//                 </span>
//               </div>
//             </motion.div>

//             {/* DESKTOP NAV */}
//             <nav className="hidden xl:flex items-center justify-end flex-1">
//               <button
//                 onClick={() => navigate("/")}
//                 className="p-2.5 text-muted-foreground hover:text-primary"
//               >
//                 <Home size={18} />
//               </button>

//               <div className="flex items-center h-10 bg-secondary/50 rounded-xl px-1.5 border border-border/50">
//                 {navigationItems
//                   .filter(
//                     (item) =>
//                       ![
//                         "Contact Us",
//                         "Employee Login",
//                         "About Us",
//                         "EMPLOYEE RESOURCES", // ✅ FIX: prevents overlap
//                       ].includes(item.name)
//                   )
//                   .map((item) => {
//                     const IconComponent = navIcons[item.name];
//                     return (
//                       <div
//                         key={item.name}
//                         className="relative"
//                         onMouseEnter={() =>
//                           item.subItems && setOpenDropdown(item.name)
//                         }
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         <button
//                           onClick={() => handleNavClick(item)}
//                           className={`px-3 py-2 text-[11px] font-bold uppercase flex items-center gap-1.5 rounded-lg transition-all ${
//                             location.pathname.startsWith(item.href)
//                               ? "text-primary bg-white"
//                               : "text-slate-600 hover:text-primary"
//                           }`}
//                         >
//                           {IconComponent && (
//                             <IconComponent className="w-3.5 h-3.5" />
//                           )}
//                           {item.name}
//                           {item.subItems && (
//                             <ChevronDown className="w-3 h-3" />
//                           )}
//                         </button>

//                         <AnimatePresence>
//                           {item.subItems &&
//                             openDropdown === item.name && (
//                               <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 10 }}
//                                 className="absolute top-full left-0 w-64 bg-white border rounded-xl shadow-xl mt-2 z-50"
//                               >
//                                 {item.subItems.map((sub) => {
//                                   const SubIcon = sub.icon;
//                                   return (
//                                     <Link
//                                       key={sub.name}
//                                       to={sub.href}
//                                       className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5"
//                                     >
//                                       {SubIcon && (
//                                         <SubIcon className="w-4 h-4 text-primary" />
//                                       )}
//                                       {sub.name}
//                                     </Link>
//                                   );
//                                 })}
//                               </motion.div>
//                             )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//               </div>

//               {/* EMPLOYEE LOGIN */}
//               <div className="ml-4">
//                 <Button
//                   onClick={() => navigate("/employee-login")}
//                   className="rounded-full px-6 h-10 font-bold uppercase text-xs flex items-center gap-2"
//                 >
//                   <LogIn className="w-4 h-4" />
//                   Employee Login
//                 </Button>
//               </div>
//             </nav>

//             {/* MOBILE MENU TOGGLE */}
//             <div className="xl:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2.5"
//               >
//                 {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.header>
//     </>
//   );
// };


// import { useState, useEffect, useRef } from "react";
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
//   Phone,
//   Info,
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
//   const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
//     null
//   );

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAboutClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document
//           .getElementById("about")
//           ?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       document
//         .getElementById("about")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavClick = (item: NavItem) => {
//     if (item.subItems?.length) return;
//     navigate(item.href);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* TOP BAR */}
//       <div className="hidden md:block bg-secondary border-b border-border/50">
//         <div className="container mx-auto px-4 lg:px-6 h-10 flex justify-between items-center text-[11px] font-semibold uppercase">
//           <div className="flex gap-8">
//             <button
//               onClick={handleAboutClick}
//               className="flex items-center gap-2 hover:text-primary"
//             >
//               <Info className="w-3.5 h-3.5" />
//               About Us
//             </button>
//             <Link
//               to="/contact"
//               className="flex items-center gap-2 hover:text-primary"
//             >
//               <Phone className="w-3.5 h-3.5" />
//               Contact Us
//             </Link>
//           </div>
//           <span className="text-primary font-bold">Enterprise IT Solutions</span>
//         </div>
//       </div>

//       {/* HEADER */}
//       <motion.header
//         className={`sticky top-0 z-50 transition-all ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur shadow"
//             : "bg-white border-b"
//         }`}
//       >
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex items-center justify-between gap-4">
//             {/* LOGO */}
//             <motion.div
//               onClick={() => navigate("/")}
//               className="flex items-center gap-3 cursor-pointer shrink-0"
//             >
//               <img src={logo} alt="WorldStringIT" className="h-11" />
//               <div className="border-l pl-4">
//                 <span className="font-bold text-lg">
//                   WorldString<span className="text-primary">IT</span>
//                 </span>
//                 <span className="text-xs text-muted-foreground ml-1">
//                   Solutions
//                 </span>
//               </div>
//             </motion.div>

//             {/* DESKTOP NAV */}
//             <nav className="hidden xl:flex items-center justify-end flex-1 gap-3">
//               <button
//                 onClick={() => navigate("/")}
//                 className="p-2.5 hover:text-primary"
//               >
//                 <Home size={18} />
//               </button>

//               {/* 🔧 FIX: flex-wrap + gap prevents overlap */}
//               <div className="flex flex-wrap items-center gap-1.5 bg-secondary/50 rounded-xl px-2 py-1 border">
//                 {navigationItems
//                   .filter(
//                     (item) =>
//                       !["Contact Us", "Employee Login", "About Us"].includes(
//                         item.name
//                       )
//                   )
//                   .map((item) => {
//                     const Icon = navIcons[item.name];
//                     return (
//                       <div
//                         key={item.name}
//                         className="relative"
//                         onMouseEnter={() =>
//                           item.subItems && setOpenDropdown(item.name)
//                         }
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         <button
//                           onClick={() => handleNavClick(item)}
//                           className={`px-3 py-2 text-[11px] font-bold uppercase flex items-center gap-1.5 rounded-lg transition ${
//                             location.pathname.startsWith(item.href)
//                               ? "text-primary bg-white shadow"
//                               : "text-slate-600 hover:text-primary hover:bg-white"
//                           }`}
//                         >
//                           {Icon && <Icon className="w-3.5 h-3.5" />}
//                           {item.name}
//                           {item.subItems && (
//                             <ChevronDown className="w-3 h-3" />
//                           )}
//                         </button>

//                         <AnimatePresence>
//                           {item.subItems &&
//                             openDropdown === item.name && (
//                               <motion.div
//                                 initial={{ opacity: 0, y: 8 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 8 }}
//                                 className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl mt-2 z-50"
//                               >
//                                 {item.subItems.map((sub) => {
//                                   const SubIcon = sub.icon;
//                                   return (
//                                     <Link
//                                       key={sub.name}
//                                       to={sub.href}
//                                       className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5"
//                                     >
//                                       {SubIcon && (
//                                         <SubIcon className="w-4 h-4 text-primary" />
//                                       )}
//                                       {sub.name}
//                                     </Link>
//                                   );
//                                 })}
//                               </motion.div>
//                             )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//               </div>

//               {/* LOGIN BUTTON */}
//               <Button
//                 onClick={() => navigate("/employee-login")}
//                 className="rounded-full px-6 h-10 font-bold uppercase text-xs flex items-center gap-2 shrink-0"
//               >
//                 <LogIn className="w-4 h-4" />
//                 Employee Login
//               </Button>
//             </nav>

//             {/* MOBILE TOGGLE */}
//             <div className="xl:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="p-2.5"
//               >
//                 {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.header>
//     </>
//   );
// };

// 



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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      {/* HEADER */}
      <motion.header
  className={`sticky top-0 z-50 w-full transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 backdrop-blur shadow-sm py-3 lg:py-2"
      : "bg-white py-4 lg:py-4"
  } border-b`}
>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between gap-4">

            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer shrink-0"
            >
              <img src={logo} alt="WorldStringIT" className="h-11 w-auto" />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center flex-1 justify-end gap-3">

              {/* Home */}
              <button
                onClick={() => navigate("/")}
                className="p-2 rounded-xl hover:bg-primary/5"
              >
                <Home size={18} />
              </button>

              {/* Nav Items */}
              <div className="flex items-center gap-1 bg-secondary/50 rounded-xl px-2 py-1 border">

                {desktopNavItems.map(item => {
                  const Icon = navIcons[item.name];

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() =>
                        item.subItems && setOpenDropdown(item.name)
                      }
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`px-2.5 py-2 text-[10px] font-bold uppercase flex items-center gap-1 rounded-lg whitespace-nowrap transition ${
                          location.pathname.startsWith(item.href)
                            ? "bg-white text-primary shadow"
                            : "text-slate-600 hover:bg-white hover:text-primary"
                        }`}
                      >
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                        {item.name}

                        {item.subItems && (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {item.subItems &&
                          openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl mt-2 z-50"
                            >
                              {item.subItems.map(sub => {
                                const SubIcon = sub.icon;

                                return (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5"
                                  >
                                    {SubIcon && (
                                      <SubIcon className="w-4 h-4 text-primary" />
                                    )}
                                    {sub.name}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Login */}
              <Button
                onClick={() => navigate("/employee-login")}
                className="rounded-full px-5 h-10 text-xs font-bold uppercase flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </nav>

            {/* MOBILE TOGGLE */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl hover:bg-primary/5"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              className="xl:hidden bg-white border-t shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col">

                {/* Home */}
                <button
                  onClick={() => {
                    navigate("/");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 py-3 font-bold text-slate-700"
                >
                  <Home size={18} />
                  Home
                </button>

                {/* Mobile Items */}
                {desktopNavItems.map(item => {
                  const Icon = navIcons[item.name];

                  return (
                    <div key={item.name} className="border-t">

                      <div
                        onClick={() =>
                          item.subItems
                            ? setMobileDropdown(
                                mobileDropdown === item.name
                                  ? null
                                  : item.name
                              )
                            : handleNavClick(item)
                        }
                        className="flex justify-between items-center py-3 font-bold text-slate-700 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon size={16} />}
                          {item.name}
                        </div>

                        {item.subItems && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileDropdown === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      {item.subItems &&
                        mobileDropdown === item.name && (
                          <div className="pl-6 pb-2">
                            {item.subItems.map(sub => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm text-slate-600 hover:text-primary"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  );
                })}

                {/* Login */}
                <Button
                  onClick={() => {
                    navigate("/employee-login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 w-full h-11 font-bold uppercase"
                >
                  <LogIn size={18} />
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
