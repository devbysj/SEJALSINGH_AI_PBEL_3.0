import React from "react";
import { motion } from "framer-motion";
import { Upload, Play, CheckCircle, Brain, BarChart3, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="glow-effect w-[500px] h-[500px] bg-brand-primary -top-40 -left-20" />
      <div className="glow-effect w-[600px] h-[600px] bg-brand-secondary top-1/2 right-[-10%] -translate-y-1/2" />
      <div className="glow-effect w-[300px] h-[300px] bg-brand-accent bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-medium text-brand-accent w-fit mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <Brain size={14} className="animate-pulse" />
            <span>Next-Gen AI Resume Intelligence</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            Transform Your Resume <br />
            <span className="bg-gradient-to-r from-brand-primary via-purple-500 to-brand-accent bg-clip-text text-transparent">
              Into Your Dream Career
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            Upload your resume and instantly receive deep ATS optimization, targeted skill gap analysis, predictive interview preparation, and real-time career matchmaking vectors.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group relative flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-xl font-medium shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <Upload size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span>Upload Resume</span>
            </button>

            <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <Play size={16} fill="white" />
              <span className="text-slate-300">Watch Demo</span>
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/5 flex items-center gap-6 text-xs text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-accent" />
              <span>Privacy Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-brand-accent" />
              <span>ATS Compliant Parsing</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full aspect-[4/3] rounded-2xl glass-panel p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono">analysis_engine_v2.5.js</span>
              </div>
              <div className="h-5 px-2 bg-white/5 rounded text-[10px] text-slate-400 flex items-center font-mono">
                Gemini-Pro active
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="h-4 bg-white/5 rounded-md w-1/3 animate-pulse" />
              <div className="h-2 bg-white/5 rounded-md w-full" />
              <div className="h-2 bg-white/5 rounded-md w-5/6" />
              <div className="h-2 bg-white/5 rounded-md w-4/5" />
              <div className="h-2 bg-white/5 rounded-md w-11/12" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="absolute top-[-20px] left-[-30px] z-20 glass-panel p-4 rounded-xl shadow-2xl flex items-center gap-4 min-w-[180px] border-l-2 border-l-brand-accent"
          >
            <div className="p-2.5 bg-brand-accent/10 text-brand-accent rounded-lg">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">ATS Match</p>
              <p className="text-2xl font-bold text-white">94%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute bottom-[-15px] right-[-20px] z-20 glass-panel p-4 rounded-xl shadow-2xl min-w-[220px]"
          >
            <p className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-ping" />
              Key Skill Gaps Identified
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["System Design", "CI/CD Pipelines"].map((skill) => (
                <span key={skill} className="text-[10px] px-2 py-0.5 rounded bg-brand-secondary/20 text-indigo-300 border border-brand-secondary/30">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}