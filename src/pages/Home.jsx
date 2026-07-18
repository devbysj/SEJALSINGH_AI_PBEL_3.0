// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Features from "../components/Features/Features";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen bg-brand-bg select-none overflow-hidden">
//       {/* Absolute Header Infrastructure */}
//       <Navbar />
      
//       {/* Landing Section Content Layer */}
//       <main>
//         <Hero />
//         <Features />
//       </main>
//     </div>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Layers, Shield, LogIn, CheckCircle2 } from 'lucide-react'; // 👈 FIXED: Added CheckCircle2 here

export default function Home() {
  
  // Smooth Scroll Navigation Logic
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#070b19] text-white font-sans overflow-x-hidden selection:bg-blue-600/30 relative">
      
      {/* GLOBAL BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[60vh] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* 1. HIGH-CLASS GLASS NAVBAR */}
      <nav className="w-full h-20 border-b border-white/5 bg-[#070b19]/60 backdrop-blur-xl fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-12">
        {/* LOGO FRAMEWORK */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.35)]">
            🧬
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            HireSense
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer">Features</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer">Pricing</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
        </div>

        {/* Authentication Options */}
        <div className="flex items-center gap-4">
          <button onClick={() => window.location.href = '/login'} className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
            <LogIn size={13} /> Login
          </button>
          <button onClick={() => window.location.href = '/signup'} className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* 2. HERO MODULE */}
      <header className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] relative z-10">
        
        {/* Left Descriptive Portal */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Sparkles size={12} /> Next-Gen AI Resume Intelligence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Transform Your <br />
            Resume Into Your <br />
            Dream Career
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
            Upload your resume and instantly receive deep ATS optimization, targeted skill gap analysis, predictive interview preparation, and real-time career matchmaking vectors.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => window.location.href = '/signup'}
              className="px-8 py-4 bg-white text-slate-900 font-black text-xs uppercase tracking-widest rounded-xl shadow-2xl hover:bg-slate-100 transition-all active:scale-95 cursor-pointer"
            >
              Get Started Free
            </button>
          </div>
        </motion.div>

        {/* Premium High-Class Square 3D Isometric Viewport Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center pt-8 lg:pt-0 [perspective:1200px]"
        >
          {/* Main 3D Tilted Studio Slate Board */}
          <div 
            className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-slate-900 via-[#0b142d] to-slate-950 border border-slate-700/60 rounded-2xl p-6 relative shadow-[25px_25px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-500 [transform:rotateX(16deg)_rotateY(-18deg)_rotateZ(2deg)] group hover:[transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(0deg)]"
          >
            {/* Inner Grid Wireframe Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* Simulated background tracking lines */}
            <div className="space-y-4 mt-16 opacity-10">
              <div className="h-2 bg-slate-400 rounded-md w-4/5" />
              <div className="h-2 bg-slate-400 rounded-md w-full" />
              <div className="h-2 bg-slate-400 rounded-md w-3/4" />
              <div className="h-2 bg-slate-400 rounded-md w-5/6" />
            </div>

            {/* Floating Live Indicator 3D Node Layer */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 left-8 bg-slate-950/90 border border-blue-500/40 p-4 rounded-xl shadow-[10px_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3.5 backdrop-blur-xl border-b-2 border-r-2"
            >
              <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-500/20">📊</div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest font-mono">ATS MATCH</p>
                <p className="text-xl font-black text-white font-mono tracking-tight">94%</p>
              </div>
            </motion.div>

            {/* Bottom Floating Parameter Block */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 right-8 bg-slate-950/90 border border-emerald-500/30 px-4 py-2.5 rounded-xl text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-2 shadow-xl border-t border-l"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              System Design Key Skill Gap
            </motion.div>

            {/* Deep Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </header>

      {/* 3. FEATURES MODULE */}
      <section id="features" className="py-24 border-t border-white/5 bg-gradient-to-b from-slate-950/40 to-transparent px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">Platform Capabilities</h2>
            <p className="text-2xl md:text-4xl font-black tracking-tight text-white max-w-3xl mx-auto">
              Engineered to Outperform Generic Application Filters
            </p>
            <p className="text-xs text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Stop guessing why your profile stalls. Mount our real-time tracking subsystems to audit your assets against enterprise standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl backdrop-blur-xl space-y-4 shadow-xl">
              <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shadow-inner"><Cpu size={18} /></div>
              <h3 className="text-base font-bold text-slate-200">ATS Deep-Scan Parsing</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">Deconstruct your resume vector against target enterprise schemas to expose invisible filter traps instantly.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl backdrop-blur-xl space-y-4 shadow-xl">
              <div className="w-10 h-10 bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center shadow-inner"><Layers size={18} /></div>
              <h3 className="text-base font-bold text-slate-200">Semantic Skill Gap Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">Our contextual intelligence extracts high-value keyword delta vectors missing from your stack setup.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl backdrop-blur-xl space-y-4 shadow-xl">
              <div className="w-10 h-10 bg-purple-600/10 border border-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center shadow-inner"><Shield size={18} /></div>
              <h3 className="text-base font-bold text-slate-200">Predictive Interview Cockpit</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">Generate targeted technical, HR, and behavioral challenge matrix blocks customized to your experience profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="py-24 border-t border-white/5 bg-gradient-to-b from-[#0a0f24]/20 to-transparent px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <h2 className="text-[10px] font-black text-amber-400 uppercase tracking-widest font-mono">Deployment Plans</h2>
            <p className="text-2xl md:text-4xl font-black tracking-tight text-white">Select Your Optimization Tier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
            {/* Free Tier */}
            <div className="p-8 bg-slate-900/20 border border-slate-800/40 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xl backdrop-blur-xl relative">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black font-mono tracking-widest text-slate-500 uppercase">Core Infrastructure</h4>
                <p className="text-4xl font-black font-mono text-slate-100">$0</p>
                <p className="text-xs text-slate-400 font-medium">Basic compilation checks and data parsing modules.</p>
                <div className="h-[1px] bg-white/5 w-full pt-1" />
                <ul className="space-y-2.5 text-xs text-slate-400 font-medium pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> 3 Real-time Optimization Scans</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Basic Live Template Generation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Core Concept Interview Tracking</li>
                </ul>
              </div>
              <button onClick={() => window.location.href = '/signup'} className="w-full py-3 bg-slate-950 border border-white/5 text-slate-300 hover:text-white hover:bg-slate-900 transition-all font-bold text-xs uppercase tracking-widest rounded-xl cursor-pointer shadow-md">Deploy Free Node</button>
            </div>

            {/* Pro Premium Tier */}
            <div className="p-8 bg-gradient-to-b from-blue-950/10 to-slate-900/20 border border-blue-500/30 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md shadow-md">Priority Node</div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black font-mono tracking-widest text-blue-400 uppercase">Enterprise Matrix</h4>
                <p className="text-4xl font-black font-mono text-white">$19<span className="text-xs text-slate-500 font-sans font-medium">/mo</span></p>
                <p className="text-xs text-slate-300 font-medium">Full automation array tracking package for advanced engineers.</p>
                <div className="h-[1px] bg-white/5 w-full pt-1" />
                <ul className="space-y-2.5 text-xs text-slate-200 font-medium pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Unlimited Text & Graphical Scans</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Dynamic Telemetry Mistake Indicators</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Full 20 AI Mock Validation Nodes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-400 shrink-0" /> Premium A4 Live Printing Serialization</li>
                </ul>
              </div>
              <button onClick={() => window.location.href = '/signup'} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer">Upgrade Pipeline</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="py-24 border-t border-white/5 bg-slate-950/20 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-[10px] font-black text-amber-400 uppercase tracking-widest font-mono">Platform Vision</h2>
          <p className="text-xl md:text-3xl font-black tracking-tight text-white">Democratizing System Application Visibility</p>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto text-justify sm:text-center">
            HireSense was built to dismantle the opacity of enterprise application systems. By providing students and engineers with precise keyword matrix feedback, dynamic standard rendering, and automated low-level verification tests, we ensure your structural credentials hit selection pipelines without interference.
          </p>
        </div>
      </section>

      {/* 6. SYSTEM FOOTER ARCHITECTURE */}
      <footer className="py-12 border-t border-white/5 bg-[#040813] px-6 md:px-12 text-xs text-slate-500 font-mono relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-md flex items-center justify-center font-bold text-xs text-white">🧬</div>
            <span className="font-sans font-black text-slate-300">HireSense AI</span>
          </div>
          <p>© 2026 HireSense Automation Systems Inc. All metadata vectors reserved.</p>
        </div>
      </footer>

    </div>
  );
}