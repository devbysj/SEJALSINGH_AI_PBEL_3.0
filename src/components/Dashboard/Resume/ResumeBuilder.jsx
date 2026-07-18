import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileEdit, Sparkles, Copy, Check, Download, RefreshCw, LayoutGrid, Eye } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("summary"); // summary | experience | projects
  const [copied, setCopied] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Editable text states for standard sections
  const [resumeData, setResumeData] = useState({
    summary: "Ambitious engineer with experience building web apps. Skilled in React, Node.js, and basic databases. Looking for a full-time role to improve systems and write clean code.",
    experience: "Software Engineer Intern at Tech Corp.\n- Assisted the core team in upgrading components to newer React versions.\n- Wrote backend APIs using Node and Express.\n- Fixed bugs in database queries and helped deploy updates.",
    projects: "E-Commerce Microservice App\n- Built an online storefront application using a modern stack framework.\n- Integrated user authentication routing mechanics.\n- Handled basic performance tuning parameters.",
  });

  // Hyper-optimized AI vector equivalents
  const aiOptimizedData = {
    summary: "Performance-driven Full-Stack Engineer specializing in scalable enterprise web architectures. Proven expertise across React 19, Tailwind CSS v4 design tokens, and highly resilient Node.js microservices. Documented success optimizing core layout rendering paths and reducing system latency vectors by 24%.",
    experience: "Full-Stack Engineering Associate // Tech Corp\n- Orchestrated the migrations of mission-critical customer layouts to React 19, improving overall core web vitals by 35%.\n- Engineered high-throughput RESTful API architectures using Node.js and Express, scaling session handling limits seamlessly.\n- Debugged production database bottleneck queries, decreasing transaction time windows down to sub-millisecond cycles.",
    projects: "Distributed E-Commerce Mesh Microservice\n- Architected an asynchronous e-commerce checkout engine handling concurrent transaction threads efficiently.\n- Integrated secure distributed token authentication layers via decoupled identity providers.\n- Configured automated horizontal auto-scaling matrices reducing processing footprint constraints.",
  };

  const [currentOptimizedText, setCurrentOptimizedText] = useState(aiOptimizedData.summary);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setCurrentOptimizedText(aiOptimizedData[sectionId]);
  };

  const triggerAiRewrite = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setCurrentOptimizedText(aiOptimizedData[activeSection]);
      toast.success("AI Generation Layer Synced Safely!");
    }, 1200);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentOptimizedText);
      setCopied(true);
      toast.success("Optimized text saved to clipboard clipboard vector.");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Clipboard ingestion failed.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Header Info Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <FileEdit className="text-brand-accent animate-pulse" size={24} />
            AI Resume Customizer & Optimizer
          </h1>
          <p className="text-sm text-slate-400 font-light">Refactor weak text fragments into standard enterprise performance structures.</p>
        </div>

        {/* Global Action Export Hook */}
        <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-950 text-xs font-bold rounded-xl shadow-md hover:bg-slate-100 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
          <Download size={14} />
          <span>Export Optimized PDF</span>
        </button>
      </div>

      {/* Internal Multi-Tab Controls */}
      <div className="flex gap-2 overflow-x-auto pb-1.5">
        {[
          { id: "summary", name: "Professional Summary" },
          { id: "experience", name: "Work History Matrix" },
          { id: "projects", name: "Technical Deployments" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSectionChange(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
              activeSection === tab.id
                ? "bg-brand-primary/10 border-brand-primary text-brand-accent"
                : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Primary Split-Screen Architecture Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Workspace Panel: Current Input Area */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-xl border border-white/5">
          <div className="space-y-2 text-left">
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 font-bold flex items-center gap-1">
              <LayoutGrid size={12} /> Work Stage Area
            </span>
            <h3 className="text-sm font-bold text-white tracking-tight">Original Text Mapping</h3>
          </div>

          <textarea
            value={resumeData[activeSection]}
            onChange={(e) => setResumeData({ ...resumeData, [activeSection]: e.target.value })}
            className="w-full h-64 bg-slate-950/60 border border-white/5 rounded-xl p-4 text-xs font-light text-slate-300 leading-relaxed focus:outline-none focus:border-brand-primary/40 resize-none flex-1"
          />

          <button
            onClick={triggerAiRewrite}
            disabled={isOptimizing}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold shadow-md hover:shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
          >
            {isOptimizing ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
            <span>{isOptimizing ? "Processing Context Maps..." : "Execute AI Optimization"}</span>
          </button>
        </div>

        {/* Right Workspace Panel: AI Target Output Area */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-xl border border-white/5 relative bg-gradient-to-b from-brand-card/40 to-slate-950/30">
          
          <div className="flex items-center justify-between">
            <div className="space-y-1 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-brand-accent font-bold flex items-center gap-1">
                <Sparkles size={12} className="animate-pulse" /> Optimized Vector
              </span>
              <h3 className="text-sm font-bold text-white tracking-tight">Suggested Refactored Syntax</h3>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Copy Output Fragment"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* AI Output Stream Box Container */}
          <div className="w-full bg-slate-950/40 border border-brand-primary/10 rounded-xl p-4 text-xs font-light text-slate-200 leading-relaxed flex-1 min-h-[256px] text-left relative overflow-hidden group">
            
            <AnimatePresence mode="wait">
              {isOptimizing ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/90"
                >
                  <div className="flex flex-col items-center gap-2 font-mono text-[10px] text-brand-accent">
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Recalculating semantic matrix weights...</span>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <p className="relative z-10 font-normal selection:bg-brand-accent/30">
              {currentOptimizedText}
            </p>
          </div>

          {/* Micro Evaluation Impact Metrics footer */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1"><Eye size={12} /> Impact Metric Forecast</span>
            <span className="text-emerald-400 font-bold">+42% ATS Context Score Bump</span>
          </div>

        </div>

      </div>
    </div>
  );
}