import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareCode, Award, ShieldQuestion, ArrowRight, RefreshCw, Eye, EyeOff, Sparkles } from "lucide-react";

export default function InterviewPrep() {
  const [category, setCategory] = useState("technical"); // technical | behavioral | hr
  const [difficulty, setDifficulty] = useState("mid"); // junior | mid | senior
  const [isStarted, setIsStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // High-fidelity structured prompt mockup datasets
  const questionBank = {
    technical: [
      { q: "Explain how React 19 handles concurrent rendering states natively under the hood.", a: "React 19 optimizes scheduling via the concurrent architecture using fiber priority levels. Transitions safely split low-priority calculations off the main UI rendering thread to secure seamless frame interactions." },
      { q: "What is the computational layout complexity of rendering micro-state graphs?", a: "Typically operations scale close to O(V + E) when analyzing standard directional structures. Optimization hooks minimize recalculation paths via granular visual memoization blocks." },
      { q: "How do you systematically debug cascading performance bottlenecks in database indexing paths?", a: "Isolate network execution threads, check query profiles, trace join allocations, evaluate cache hit rates, and drop redundant compound layout keys." }
    ],
    behavioral: [
      { q: "Describe a high-stakes scenario where you had to refactor a production infrastructure node under extreme client friction.", a: "Emphasize precise communication vectors, mapping rollback pipelines defensively, documenting operational hot-fixes, and maintaining complete cross-functional engineering alignment." },
      { q: "How do you handle structural layout disagreements with a senior system architect?", a: "Anchor arguments firmly in objective data vectors, perform localized benchmark isolation tests, analyze long-term trade-offs, and respect standard consensus thresholds." }
    ],
    hr: [
      { q: "Why do you specifically want to anchor your stack ecosystem inside HireSense?", a: "Highlight direct alignment with automation scaling, a deep passion for clean full-stack architectural systems, and accelerating team velocity parameters." },
      { q: "Where do you map your absolute competencies extending over the next 36 months?", a: "Scale foundational full-stack knowledge blocks into structural system design, cloud operations governance, and training high-performing engineering cells." }
    ]
  };

  const activeQuestions = questionBank[category] || questionBank.technical;
  const currentQuestion = activeQuestions[currentIdx] || activeQuestions[0];

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setCurrentIdx(0); // Loop configuration fallback
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    setCurrentIdx(0);
    setShowAnswer(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Dynamic Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <MessageSquareCode className="text-brand-accent animate-pulse" size={24} />
          AI Interview Readiness Simulator
        </h1>
        <p className="text-sm text-slate-400 font-light">Train against granular contextual challenge sets built on parsed profile vectors.</p>
      </div>

      <AnimatePresence mode="wait">
        {!isStarted ? (
          /* Configuration Panel */
          <motion.div
            key="setup-panel"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            className="glass-panel p-8 rounded-2xl shadow-xl space-y-8 border border-white/5"
          >
            {/* Step 1: Track Category Selection */}
            <div className="space-y-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">1. Select Evaluation Focus Track</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "technical", title: "Technical Core", desc: "System design, language frameworks, and parsing algorithms." },
                  { id: "behavioral", title: "Behavioral Alignment", desc: "Conflict resolution vectors, project friction, and agile processes." },
                  { id: "hr", title: "Cultural Fit & HR", desc: "Career mapping, company growth scaling, and target metrics." }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCategory(item.id)}
                    className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 relative ${
                      category === item.id 
                        ? "border-brand-accent bg-brand-accent/5 shadow-[0_0_20px_rgba(6,182,212,0.1)] text-white" 
                        : "border-white/5 bg-slate-900/30 text-slate-400 hover:border-white/10 hover:text-slate-200"
                    }`}
                  >
                    <p className="font-bold text-sm tracking-tight mb-1">{item.title}</p>
                    <p className="text-[11px] font-light leading-relaxed text-slate-400">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Track Seniority Difficulty Tiers */}
            <div className="space-y-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">2. Define Seniority Vector Level</label>
              <div className="flex gap-4">
                {["junior", "mid", "senior"].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setDifficulty(tier)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold capitalize border cursor-pointer transition-all duration-300 ${
                      difficulty === tier
                        ? "bg-white text-slate-950 border-white shadow-lg"
                        : "bg-slate-900/40 text-slate-400 border-white/5 hover:border-white/10"
                    }`}
                  >
                    {tier} Engineer
                  </button>
                ))}
              </div>
            </div>

            {/* Trigger Simulation Button */}
            <button
              onClick={() => setIsStarted(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold shadow-md hover:shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
            >
              <span>Initialize AI Training Engine</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        ) : (
          /* Live Simulation Arena */
          <motion.div
            key="simulation-arena"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Status Tracking Bar */}
            <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Feed Mode: <span className="text-white uppercase font-bold">{category} // {difficulty}</span>
              </span>
              <span>Question {currentIdx + 1} of {activeQuestions.length}</span>
            </div>

            {/* Interactive Flashcard Container */}
            <div className="glass-panel p-8 rounded-2xl shadow-2xl relative border border-white/5 min-h-[280px] flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px] pointer-events-none" />
              
              <div className="space-y-4 relative z-10 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-widest">
                  <ShieldQuestion size={14} />
                  <span>Challenge Inquiry</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white leading-relaxed">
                  {currentQuestion.q}
                </h2>
              </div>

              {/* Revealed AI Target Answer Node */}
              <AnimatePresence>
                {showAnswer && (
                  <motion.div
                    initial={{ opacity: 0, h: 0 }}
                    animate={{ opacity: 1, h: "auto" }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-5 bg-brand-primary/10 rounded-xl border border-brand-primary/20 space-y-2 text-left relative z-10"
                  >
                    <p className="text-[10px] font-bold uppercase text-brand-accent tracking-widest flex items-center gap-1.5">
                      <Sparkles size={12} />
                      Optimized AI Reference Framework
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {currentQuestion.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button Strip */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8 relative z-10 gap-4">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950/40 hover:bg-slate-900/60 text-slate-300 transition-colors cursor-pointer"
                >
                  {showAnswer ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showAnswer ? "Hide Solution Layer" : "Expose Key Blueprint"}</span>
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="p-2.5 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                    title="Reset Simulator Settings"
                  >
                    <RefreshCw size={16} />
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold shadow-md hover:bg-slate-100 transition-all cursor-pointer hover:scale-[1.02]"
                  >
                    <span>Proceed Matrix</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Practice Reminder Indicator */}
            <div className="p-4 rounded-xl border border-dashed border-white/10 flex items-center gap-3 bg-slate-900/10 text-xs text-slate-500 font-light text-left">
              <Award size={14} className="text-brand-accent" />
              <span>Pro Tip: Formulate your answer out loud for 60 seconds before inspecting the solution vector matrix to maximize memory retention.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}