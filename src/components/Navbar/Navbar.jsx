import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to apply premium glass transition morphing
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-brand-bg/70 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo with Glow State */}
          <Link to="/" className="flex items-center gap-2 group select-none">
            <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-accent group-hover:bg-brand-primary/20 transition-colors duration-300">
              <Brain size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              HireSense
            </span>
          </Link>

          {/* Desktop Navigation Paths */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Authentication Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="group relative flex items-center gap-1.5 bg-white text-slate-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Action Controller Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Drawer System overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] p-6 bg-brand-bg/95 backdrop-blur-xl border-b border-white/5 z-40 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-px bg-white/5 w-full" />
            
            <div className="flex flex-col gap-3">
              <Link 
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium shadow-lg shadow-brand-primary/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}