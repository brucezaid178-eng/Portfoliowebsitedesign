import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Award, FileCheck, Code, Plane, Car, Mail, Heart } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/achievements", label: "Achievements", icon: Award },
  { path: "/certifications", label: "Certifications", icon: FileCheck },
  { path: "/projects", label: "Projects", icon: Code },
  { path: "/drones", label: "Drones", icon: Plane },
  { path: "/evs", label: "EVs", icon: Car },
  { path: "/social-service", label: "Social Service", icon: Heart },
  { path: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/30 border-b border-purple-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-xl transition-all ${
                        isActive
                          ? "text-purple-300"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl border border-purple-500/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className="relative flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 rounded-2xl bg-purple-600/20 backdrop-blur-xl border border-purple-500/30"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-y-0 right-0 z-40 w-80 bg-slate-950/95 backdrop-blur-xl border-l border-purple-500/30"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className={`flex items-center gap-4 py-4 px-4 rounded-xl mb-2 transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 text-purple-300"
                            : "text-slate-300 hover:bg-purple-600/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
