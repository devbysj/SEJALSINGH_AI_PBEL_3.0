import React from "react";
import { motion } from "framer-motion";
import { Cpu, LineChart, ShieldCheck, Terminal, Sparkles, Layers } from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const featuresData = [
    {
      icon: <Cpu className="text-brand-accent" size={24} />,
      title: "ATS Deep-Scan Parsing",
      description: "Deconstruct your resume vector against target enterprise schemas to expose invisible filter traps instantly.",
      gradient: "from-cyan-500/10 to-blue-500/5",
    },
    {
      icon: <LineChart className="text-brand-primary" size={24} />,
      title: "Semantic Skill Gap Analysis",
      description: "Our contextual intelligence extracts high-value keyword delta vectors missing from your stack.",
      gradient: "from-blue-500/10 to-indigo-500/5",
    },
    {
      icon: <Terminal className="text-purple-400" size={24} />,
      title: "Predictive Interview Cockpit",
      description: "Generate targeted technical, HR, and behavioral challenge matrix blocks customized to your experience profile.",
      gradient: "from-purple-500/10 to-pink-500/5",
    },
    {
      icon: <Layers className="text-emerald-400" size={24} />,
      title: "Continuous Learning Timelines",
      description: "Receive step-by-step roadmap structures complete with production-ready project suggestions and materials.",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: <Sparkles className="text-amber-400" size={24} />,
      title: "AI Optimization Rewrites",
      description: "Transform generic action points into hyper-optimized metrics powered by production performance structures.",
      gradient: "from-amber-500/10 to-orange-500/5",
    },
    {
      icon: <ShieldCheck className="text-rose-400" size={24} />,
      title: "Enterprise Encryption Vault",
      description: "Your intellectual asset matrix stays isolated and heavily secure. We never train public models on user data.",
      gradient: "from-rose-500/10 to-red-500/5",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-brand-bg text-white overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="glow-effect w-[500px] h-[500px] bg-brand-secondary/10 top-1/4 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-3">
            Platform Capabilities
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Engineered to Outperform Generic Application Filters
          </p>
          <p className="text-base text-slate-400 mt-4 font-light leading-relaxed">
            Stop guessing why your profile stalls. Mount our real-time tracking subsystems to audit your assets against enterprise standards.
          </p>
        </div>

        {/* Feature Bento Mesh Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl p-8 glass-panel overflow-hidden transition-all duration-300 shadow-xl border border-white/5 hover:border-white/10"
            >
              {/* Dynamic Internal Mesh Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Feature Content Stack */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-5 p-3 w-fit bg-slate-950/60 rounded-xl border border-white/5 group-hover:border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
                
                {/* Micro Tech Highlight Accent Line */}
                <div className="mt-6 h-px w-0 bg-gradient-to-r from-transparent via-brand-accent to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}