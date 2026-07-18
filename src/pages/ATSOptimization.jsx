import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ATSOptimization() {
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Dynamic output states (Strictly Unchanged)
  const [score, setScore] = useState(0);
  const [matchedKeywords, setMatchedKeywords] = useState([]);
  const [missingKeywords, setMissingKeywords] = useState([]);

  // Fetch active user profile skills from localStorage (Strictly Unchanged)
  const [activeUser] = useState(() => {
    const saved = localStorage.getItem('activeUser');
    return saved ? JSON.parse(saved) : {
      name: 'SEJAL SINGH',
      title: 'FIRST-YEAR ENGINEERING CORE TRACK',
      skills: ['React.js', 'Node.js', 'JavaScript', 'SQL', 'Tailwind CSS']
    };
  });

  const rawSkills = activeUser.skills || ['React.js', 'Node.js', 'JavaScript', 'SQL', 'Tailwind CSS'];
  const userProfileSkills = rawSkills.map(s => s.trim());

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) {
      alert("Please paste a target Job Description to invoke analysis.");
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const textToScan = jobDescription.toLowerCase();
      
      const industryKeywords = [
        { key: 'react', display: 'React.js' },
        { key: 'node', display: 'Node.js' },
        { key: 'javascript', display: 'JavaScript' },
        { key: 'js', display: 'JavaScript' },
        { key: 'tailwind', display: 'Tailwind CSS' },
        { key: 'sql', display: 'SQL Database' },
        { key: 'docker', display: 'Docker Runtime' },
        { key: 'aws', display: 'AWS Cloud Services' },
        { key: 'ci/cd', display: 'CI/CD Engine' },
        { key: 'python', display: 'Python' },
        { key: 'c language', display: 'C Language' },
        { key: 'git', display: 'Git Version Control' }
      ];

      const keywordsInJD = [];
      industryKeywords.forEach(item => {
        if (textToScan.includes(item.key) && !keywordsInJD.some(k => k.display === item.display)) {
          keywordsInJD.push(item);
        }
      });

      if (keywordsInJD.length === 0) {
        setScore(40);
        setMatchedKeywords([]);
        setMissingKeywords(userProfileSkills.slice(0, 3));
        setIsAnalyzing(false);
        setShowResults(true);
        return;
      }

      const matched = [];
      const missing = [];

      keywordsInJD.forEach(keyword => {
        const userHasSkill = userProfileSkills.some(userSkill => 
          userSkill.toLowerCase().includes(keyword.key) || keyword.key.includes(userSkill.toLowerCase())
        );

        if (userHasSkill) {
          matched.push(keyword.display);
        } else {
          missing.push(keyword.display);
        }
      });

      const calculatedScore = Math.round((matched.length / keywordsInJD.length) * 100);

      setScore(calculatedScore);
      setMatchedKeywords(matched);
      setMissingKeywords(missing);
      
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      // 🎨 UPDATED: Main background container set to matching dashboard deep-slate glass panel
      className="w-full mx-auto p-6 md:p-10 bg-slate-900/30 text-white rounded-3xl border border-slate-800/40 backdrop-blur-md shadow-2xl font-sans"
    >
      {/* 1. Global Header Section with Accent Lines */}
      <div className="relative border-b border-white/5 pb-6 mb-8">
        <div className="absolute top-0 left-0 w-12 h-1 bg-blue-600 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3 pt-3">
          <svg className="w-8 h-8 text-white stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          ATS Keywords Optimization Engine
        </h2>
        <p className="text-xs font-black text-blue-400 uppercase tracking-widest mt-1.5 font-mono">
          Cross-examine profile metrics against targeting corporate parameters
        </p>
      </div>

      {/* 2. Three-Column Grid Architecture */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* COLUMN A: CURRENT SOURCE NODE (Left Sidebar card) */}
        <div className="xl:col-span-3 space-y-3 w-full">
          {/* 🌟 Highlighted Section Header */}
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">Source Node Stack</span>
          <div className="p-5 bg-[#070b19]/60 border border-white/5 rounded-2xl shadow-xl transition-all duration-300">
            <div className="space-y-1">
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <span className="text-[9px] font-black text-cyan-400 uppercase tracking-wider block font-mono">Candidate Workspace</span>
              <span className="text-base font-black text-slate-100 uppercase tracking-tight block truncate">{activeUser.name}</span>
            </div>
            
            <div className="space-y-2.5 border-t border-white/5 pt-4 mt-4">
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <span className="text-[9px] font-black text-cyan-400 uppercase tracking-wider block font-mono">Active Core Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {userProfileSkills.map((skill, idx) => (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    key={idx} 
                    className="px-2.5 py-1 bg-slate-950/40 border border-white/10 rounded-lg text-xs font-bold text-slate-300 shadow-inner cursor-default hover:border-blue-500/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN B: TARGET INPUT TEXTAREA COMPONENT */}
        <div className="xl:col-span-5 space-y-3 w-full">
          {/* 🌟 Highlighted Section Header */}
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">Target Matrix Parameters</span>
          <form onSubmit={handleAnalyze} className="space-y-4">
            <div className="relative group">
              {/* Dark Theme Polished Input Area */}
              <textarea 
                rows="10"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste corporate job description requirement string inputs here to run evaluation matching sequences..." 
                className="w-full bg-[#070b19]/60 border border-white/5 rounded-2xl px-4 py-4 text-sm font-semibold text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 resize-none leading-relaxed shadow-inner transition-all"
              />
            </div>

            <motion.button 
              type="submit"
              disabled={isAnalyzing}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Mapping Intersections...
                </>
              ) : "Compute Compliance Score"}
            </motion.button>
          </form>
        </div>

        {/* COLUMN C: LOG DIAGNOSTIC RESULTS SHOWCASE */}
        <div className="xl:col-span-4 space-y-3 w-full">
          {/* 🌟 Highlighted Section Header */}
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">Diagnostic Logs</span>
          
          {!showResults ? (
            /* Awaiting Status Box */
            <div className="min-h-[295px] flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/10 rounded-2xl bg-[#070b19]/40 shadow-inner">
              <div className="p-3 bg-slate-950/40 border border-white/5 rounded-2xl shadow-md mb-3">
                <svg className="w-6 h-6 text-slate-500 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block font-mono">Awaiting Parameter Target</span>
              <p className="text-[11px] text-slate-500 font-bold max-w-[180px] mx-auto mt-1 leading-relaxed">Invoke compliance compilation to build index reports.</p>
            </div>
          ) : (
            /* Results Panel Output */
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="space-y-4"
            >
              {/* Premium High Contrast Score Display */}
              <div className="p-5 bg-slate-950/80 text-white rounded-2xl flex items-center justify-between shadow-xl border border-white/5 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-600/5 rounded-full opacity-40 blur-xs" />
                <div className="relative z-10">
                  <span className="text-[9px] font-bold text-slate-500 block uppercase tracking-widest font-mono">Compliance Rating</span>
                  <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-wider font-mono">INDEX_ATS_OVERLAP</span>
                </div>
                <div className="relative z-10 text-right">
                  <span className={`text-3xl font-black font-mono tracking-tighter ${score >= 80 ? 'text-emerald-400' : score >= 60 ? 'text-sky-400' : 'text-amber-400'}`}>
                    {score}%
                  </span>
                </div>
              </div>

              {/* Matched Keywords Box (Dark Unified Styling) */}
              <div className="p-4 border border-emerald-900/30 bg-emerald-950/10 rounded-xl space-y-2 shadow-xl">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block font-mono">✓ Mapped Matches ({matchedKeywords.length})</span>
                {matchedKeywords.length === 0 ? (
                  <span className="text-[11px] text-slate-500 font-medium block italic">No system metrics matched.</span>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {matchedKeywords.map((k, i) => (
                      <span key={i} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded-md font-mono text-[10px] font-bold uppercase tracking-wide border border-emerald-500/20">{k}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Missing Keywords Box (Dark Unified Styling) */}
              <div className="p-4 border border-red-900/30 bg-red-950/10 rounded-xl space-y-2 shadow-xl">
                <span className="text-[10px] font-black text-red-400 uppercase tracking-wider block font-mono">⚠ Missing Requirements ({missingKeywords.length})</span>
                {missingKeywords.length === 0 ? (
                  <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest block bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20 text-center">Perfect System Alignment</span>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {missingKeywords.map((k, i) => (
                      <span key={i} className="px-2 py-0.5 bg-red-500/10 text-red-300 rounded-md font-mono text-[10px] font-bold uppercase tracking-wide border border-red-500/20">{k}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </motion.div>
  );
}