import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIInterview() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answerText, setAnswerText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackReport, setFeedbackReport] = useState(null);
  const [isSolutionRevealed, setIsSolutionRevealed] = useState(false);

  // Database of 20 Comprehensive Engineering Validation Nodes (Strictly Unchanged)
  const questionsMock = [
    {
      id: 'Q-NODE-01',
      track: 'Low-Level Memory Architecture',
      question: 'Explain the structural mechanics of multi-dimensional arrays inside low-level compilation runtimes like the C programming language. How do row-major tracking and pointer layouts influence execution cache locality during matrix transformations?',
      evalKeywords: ['array', 'pointer', 'memory', 'cache', 'row', 'locality', 'matrix', 'address'],
      idealAnswer: 'In C, multi-dimensional arrays are allocated as continuous blocks in row-major order. For a matrix A[M][N], the memory address of element A[i][j] is calculated via: Address = Base + (i * N + j) * sizeof(datatype). Accessing elements sequentially along rows minimizes cache misses because adjacent items are loaded into the same cache line.'
    },
    {
      id: 'Q-NODE-02',
      track: 'Linear Systems & Projections',
      question: 'Describe the computational significance of determining eigenvalues and eigenvectors within dynamic linear systems. How does the characteristic matrix factorization map vector transformations?',
      evalKeywords: ['eigenvalue', 'eigenvector', 'transformation', 'matrix', 'characteristic', 'vector', 'linear', 'determinant'],
      idealAnswer: 'Eigenvalues and eigenvectors satisfy the fundamental relationship: A * v = lambda * v. To compute them, we solve the characteristic equation given by the determinant statement: det(A - lambda * I) = 0. This isolates invariant directional vectors under linear mappings.'
    },
    {
      id: 'Q-NODE-03',
      track: 'Continuous Integral Solvers',
      question: 'Outline how Laplace Transforms convert complex differential equations into algebraic operations. Explain the importance of boundary constraints in defining system stability profiles.',
      evalKeywords: ['laplace', 'differential', 'algebraic', 'transform', 'stability', 'boundary', 'integral', 's-domain'],
      idealAnswer: 'The Laplace Transform converts time-domain functions into the complex s-domain via an improper integral pipeline. By mapping derivative terms to algebraic multiplication factors, initial boundary parameters are injected directly to locate stability roots.'
    },
    {
      id: 'Q-NODE-04',
      track: 'Reactive Tree Reconciliations',
      question: 'How do virtual document reference trees optimize computation boundaries inside frontend application models? Outline the mechanisms that intercept redundant paint pipelines.',
      evalKeywords: ['virtual', 'reconciliation', 'dom', 'state', 'diff', 'render', 'tree', 'reactive'],
      idealAnswer: 'Virtual DOM systems minimize slow rendering tasks by executing lightweight abstraction comparisons in memory. The diffing engine traces tree structural changes; if a node value alters, only that specific node subtree triggers a browser layout paint loop.'
    },
    {
      id: 'Q-NODE-05',
      track: 'Compilation Precedence Regulations',
      question: 'Analyze how strict operator precedence and compiler evaluation sequences dictate bitwise shifts and logic branches when processing low-level algorithms in C.',
      evalKeywords: ['precedence', 'operator', 'bitwise', 'compiler', 'evaluation', 'shift', 'sequence', 'binary'],
      idealAnswer: 'C compiler standards dictate that arithmetic operations maintain a higher priority binding than bitwise shifts and logic conditions. For instance, x & y == z parses strictly as x & (y == z), demanding explicit parentheses for safe masking arrays.'
    },
    {
      id: 'Q-NODE-06',
      track: 'Complex Variables & Analyticity',
      question: 'State the conditions required for a complex function f(z) to be analytic within a target domain. How do the Cauchy-Riemann equations regulate continuity?',
      evalKeywords: ['cauchy', 'riemann', 'analytic', 'complex', 'derivative', 'continuity', 'partial', 'equations'],
      idealAnswer: 'For a complex function f(z) = u(x,y) + i*v(x,y) to be analytic, it must possess a unique derivative. This requires the continuous partial equations to satisfy the Cauchy-Riemann criteria: du/dx = dv/dy and du/dy = -dv/dx.'
    },
    {
      id: 'Q-NODE-07',
      track: 'Vector Mechanics & Field Diagnostics',
      question: 'Explain the geometric and physical interpretation of the divergence and curl of a continuous vector field within classical physics protocols.',
      evalKeywords: ['divergence', 'curl', 'field', 'vector', 'flux', 'rotation', 'gradient', 'physics'],
      idealAnswer: 'Divergence measures the net volumetric flux expansion out of an infinitesimal boundary point. Curl evaluates the rotational density torque of the field vectors around a localized spatial axis.'
    },
    {
      id: 'Q-NODE-08',
      track: 'Infinite Sequences & Convergence',
      question: 'Detail the practical applications of Taylor Series expansions in engineering algorithms. How is the remainder sequence checked for uniform convergence metrics?',
      evalKeywords: ['taylor', 'series', 'convergence', 'expansion', 'approximation', 'derivative', 'remainder', 'polynomial'],
      idealAnswer: 'Taylor series map non-linear functions into infinity-order polynomial arrays for numerical approximations. Convergence thresholds are monitored via Lagrange remainder bounds to truncate expressions safely inside operational hardware loops.'
    },
    {
      id: 'Q-NODE-09',
      track: 'Pointers & System Memory Leaks',
      question: 'Differentiate between dangling pointers and memory leaks inside unmanaged memory architectures. How do dynamic allocations invoke allocation tracking maps?',
      evalKeywords: ['dangling', 'pointer', 'leak', 'allocation', 'malloc', 'free', 'memory', 'address'],
      idealAnswer: 'A dangling pointer occurs when a tracking coordinate references a memory block that has already been deallocated using the free command. A memory leak occurs when heap memory objects lose their active binding reference without being freed.'
    },
    {
      id: 'Q-NODE-10',
      track: 'Wave Mechanics & Phase States',
      question: 'Analyze the mathematical setup for wave interference patterns. How do path differences introduce localized constructive or destructive physical validation outputs?',
      evalKeywords: ['wave', 'interference', 'phase', 'constructive', 'destructive', 'path', 'amplitude', 'wavelength'],
      idealAnswer: 'Wave overlap profiles depend on phase alignment coordinates. A path difference equal to integer steps of the wavelength triggers constructive reinforcement, whereas half-integer steps produce inverse phase cancellations.'
    },
    {
      id: 'Q-NODE-11',
      track: 'Linear Target Factorizations',
      question: 'Compare Gauss Elimination and Gauss-Jordan matrix row tracking pipelines. What defines pivot selections when normalizing dense linear rows?',
      evalKeywords: ['gauss', 'elimination', 'jordan', 'matrix', 'pivot', 'row', 'operation', 'linear'],
      idealAnswer: 'Standard Gauss Elimination maps a target coefficient array into an upper triangular structure followed by backward substitution loops. Gauss-Jordan extends this reduction path into a pure diagonal identity format.'
    },
    {
      id: 'Q-NODE-12',
      track: 'Higher-Order Calculus Triggers',
      question: 'State the operational mechanics of the Leibniz Theorem when computing higher-order derivatives of products containing two distinct mathematical continuous variables.',
      evalKeywords: ['leibniz', 'derivative', 'product', 'theorem', 'differentiation', 'order', 'binomial', 'calculus'],
      idealAnswer: 'The Leibniz Theorem calculates the nth derivative of a product configuration by applying a binomial style layout expansion across individual differential terms: d^n/dx^n (u*v) = sum from k=0 to n of C(n,k) * u^(n-k) * v^k.'
    },
    {
      id: 'Q-NODE-13',
      track: 'Complex Integration Integrals',
      question: 'Explain the application bounds of the Cauchy Residue Theorem when solving closed contour boundary integrations across isolated singular coordinate nodes.',
      evalKeywords: ['residue', 'cauchy', 'contour', 'integration', 'singularity', 'pole', 'closed', 'complex'],
      idealAnswer: 'The Cauchy Residue Theorem asserts that a closed contour integral equals 2 * pi * i multiplied by the sum of residues calculated at all enclosed isolated pole singular points inside that boundary geometry.'
    },
    {
      id: 'Q-NODE-14',
      track: 'Dynamic Heap Memory Managers',
      question: 'Contrast the runtime operational initialization procedures between standard malloc and calloc blocks during unmanaged memory configuration tasks.',
      evalKeywords: ['malloc', 'calloc', 'heap', 'initialization', 'zero', 'allocation', 'sizeof', 'block'],
      idealAnswer: 'The malloc selector provisions a raw, continuous block of memory leaving old garbage variables intact inside the array storage space. The calloc generator systematically flushes all allocated memory allocations to absolute zero.'
    },
    {
      id: 'Q-NODE-15',
      track: 'Continuous Frequency Mappings',
      question: 'Detail the spectral transformation properties of the Fourier Series representation. How are periodic continuous waveforms mapped to infinite harmonic components?',
      evalKeywords: ['fourier', 'series', 'harmonic', 'periodic', 'waveform', 'coefficient', 'frequency', 'orthogonal'],
      idealAnswer: 'Fourier decompositions represent bounded periodic waveforms as infinite series chains of orthogonal sine and cosine oscillations, mapping structural components from time vectors into explicit frequency buckets.'
    },
    {
      id: 'Q-NODE-16',
      track: 'Modern Wave-Particle Physics Metrics',
      question: 'Detail the operational limits imposed by the Heisenberg Uncertainty Principle when examining particle wave-packet coordinates inside enclosed sub-atomic system models.',
      evalKeywords: ['heisenberg', 'uncertainty', 'momentum', 'position', 'quantum', 'packet', 'physics', 'bounds'],
      idealAnswer: 'The uncertainty rule specifies a mandatory evaluation constraint asserting that the simultaneous measurement products of conjugate metrics, like positional tracking delta-x and momentum delta-p, must exceed h-bar/2.'
    },
    {
      id: 'Q-NODE-17',
      track: 'Compiler Object Data Alignments',
      question: 'Explain why C compilers inject structural data alignment padding within complex data configuration blocks. How does this affect global data structure sizing?',
      evalKeywords: ['padding', 'alignment', 'structure', 'compiler', 'offset', 'byte', 'memory', 'size'],
      idealAnswer: 'Compilers insert empty spacer bytes inside structure layouts to align data addresses with hardware words. This optimizes word fetch cycles from memory chips at the expense of footprint expansion.'
    },
    {
      id: 'Q-NODE-18',
      track: 'Linear Maps & Nullspace Metrics',
      question: 'Define the Rank-Nullity Theorem when evaluating continuous linear conversion mappings. How do dimension limits track dependence properties?',
      evalKeywords: ['rank', 'nullity', 'dimension', 'theorem', 'transformation', 'kernel', 'linear', 'matrix'],
      idealAnswer: 'The Rank-Nullity Theorem coordinates transformation limits by asserting that the total dimension parameters of a vector space domain must equal the transformation Rank plus the Nullity kernel dimension.'
    },
    {
      id: 'Q-NODE-19',
      track: 'Advanced Jacobi Jacobian Transforms',
      question: 'Describe the structural transformation purpose of utilizing Jacobian Determinants during multiple integration coordinate translations across variable systems.',
      evalKeywords: ['jacobian', 'determinant', 'integration', 'coordinate', 'transformation', 'differential', 'variable', 'multiple'],
      idealAnswer: 'The Jacobian maps scaling modifiers into localized coordinate integrations during transformations, serving as an area or volumetric conversion coefficient between spatial models.'
    },
    {
      id: 'Q-NODE-20',
      track: 'Frontend Event Loop Scheduling',
      question: 'Deconstruct how macro-task queues and micro-task stacks coordinate async priorities inside runtime compilation thread models.',
      evalKeywords: ['macro-task', 'micro-task', 'queue', 'stack', 'async', 'promise', 'loop', 'event'],
      idealAnswer: 'The execution cycle flushes all immediate script commands from the primary stack before checking the async channels. The micro-task channel possesses higher scheduling execution priority over standard macro-task queues.'
    }
  ];

  const currentQuestion = questionsMock[currentQuestionIdx];

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (!answerText.trim() || answerText.length < 5) {
      alert("Please type a descriptive response narrative to activate analysis.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const cleanInput = answerText.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      const inputWords = cleanInput.split(/\s+/);
      
      const detectedKeywords = currentQuestion.evalKeywords.filter(keyword => 
        inputWords.some(word => word.includes(keyword) || keyword.includes(word))
      );

      const keywordDensityRatio = detectedKeywords.length / currentQuestion.evalKeywords.length;
      let calculatedScore = Math.round(45 + (keywordDensityRatio * 50)); 
      if (calculatedScore > 96) calculatedScore = 96;

      let articulationLevel = 'Basic Structural Level';
      let critiqueText = '';

      if (calculatedScore >= 80) {
        articulationLevel = 'Advanced Technical Context';
        critiqueText = 'Strong vocabulary density detected. Your narrative captures the fundamental operational constraints of this domain topic accurately.';
      } else if (calculatedScore >= 60) {
        articulationLevel = 'Moderate Analytical Baseline';
        critiqueText = 'Essential core points mentioned. To maximize optimization scoring, expand further on structural variables and implementation logic.';
      } else {
        articulationLevel = 'Deficient Vocabulary Density';
        critiqueText = 'Response lacks adequate vocabulary keywords. Click Reveal Reference Solution to cross-examine correct domain parameters.';
      }

      setFeedbackReport({
        score: calculatedScore,
        articulation: articulationLevel,
        critique: critiqueText,
        matchedKeys: detectedKeywords,
        missingKeys: currentQuestion.evalKeywords.filter(k => !detectedKeywords.includes(k))
      });

      setIsSubmitting(false);
    }, 900);
  };

  const handleNextQuestion = () => {
    setFeedbackReport(null);
    setAnswerText('');
    setIsSolutionRevealed(false);
    setCurrentQuestionIdx((prev) => (prev + 1) % questionsMock.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      // 🎨 UPDATED: Main background container set to matching dashboard glass panel
      className="w-full mx-auto p-6 md:p-10 bg-slate-900/30 text-white rounded-3xl border border-slate-800/40 backdrop-blur-md shadow-2xl font-sans"
    >
      {/* 1. Global Header Component */}
      <div className="relative border-b border-white/5 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="absolute top-0 left-0 w-12 h-1 bg-blue-600 rounded-full" />
        <div className="pt-3">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-white stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            AI Technical Interview Workspace
          </h2>
          <p className="text-xs font-black text-blue-400 uppercase tracking-widest mt-1.5 font-mono">
            Autonomous live validation engine for technical verification
          </p>
        </div>
        
        <span className="font-mono text-xs font-black bg-slate-950/80 text-white border border-white/10 px-4 py-2 rounded-xl uppercase tracking-widest shadow-md md:mt-3">
          Node Index: {currentQuestionIdx + 1} / {questionsMock.length}
        </span>
      </div>

      {/* 2. Dual Column Structural Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COMPARTMENT: CHALLENGE PANEL */}
        <div className="lg:col-span-7 space-y-5 w-full">
          {/* 🌟 Highlighted Section Header */}
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">Active Challenge Target</span>
          
          <div className="p-6 bg-[#070b19]/60 border border-white/5 rounded-2xl shadow-xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
              <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-950/40 border border-white/10 px-2.5 py-0.5 rounded-lg shadow-inner">
                {currentQuestion.id}
              </span>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">
                {currentQuestion.track}
              </span>
            </div>
            <p className="text-base font-semibold text-slate-100 leading-relaxed pt-1">
              {currentQuestion.question}
            </p>
          </div>

          <form onSubmit={handleSubmitAnswer} className="space-y-4">
            <div className="space-y-1.5">
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider block font-mono pl-0.5">Formulate Response Context</label>
              <textarea 
                rows="7"
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                disabled={feedbackReport !== null || isSubmitting}
                placeholder="Type your analytical solution narrative here to run keyword validation tests..." 
                className="w-full bg-[#070b19]/60 border border-white/5 rounded-2xl px-4 py-4 text-sm font-semibold text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all duration-300 resize-none leading-relaxed disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {feedbackReport === null ? (
                <>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Parsing Data...' : 'Commit Response Parameter'}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setIsSolutionRevealed(true)}
                    className="px-5 py-3.5 border border-white/10 hover:bg-white/5 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Reveal Solution
                  </button>
                </>
              ) : (
                <button 
                  type="button"
                  onClick={handleNextQuestion}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-600/20"
                >
                  Advance to Next Evaluation Node
                </button>
              )}
            </div>
          </form>

          {/* Inline Reveal Solution Block */}
          {isSolutionRevealed && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl space-y-2">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider block font-mono">📚 Bounded Reference Solution</span>
              <p className="text-xs font-medium text-slate-200 leading-relaxed text-justify">{currentQuestion.idealAnswer}</p>
            </motion.div>
          )}
        </div>

        {/* RIGHT COMPARTMENT: ANALYTICS HUB */}
        <div className="lg:col-span-5 space-y-4 w-full">
          {/* 🌟 Highlighted Section Header */}
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">Diagnostic Logs</span>
          
          <AnimatePresence mode="wait">
            {feedbackReport === null ? (
              /* Waiting Panel Layout */
              <div className="min-h-[350px] flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/10 rounded-2xl bg-[#070b19]/40 shadow-inner">
                <div className="p-3 bg-slate-950/40 border border-white/5 rounded-2xl shadow-md mb-3">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider block font-mono">Awaiting Evaluation</span>
                <p className="text-[11px] text-slate-500 font-bold max-w-[180px] mx-auto mt-1 leading-relaxed">Submit your workspace logic to generate automated grading diagnostics.</p>
              </div>
            ) : (
              /* Report Diagnostics Box Output */
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                
                {/* Score Summary Contrast Matrix Block */}
                <div className="p-5 bg-slate-950/80 text-white rounded-2xl flex items-center justify-between shadow-xl border border-white/5 font-mono">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 block uppercase tracking-widest">Grading Metric</span>
                    <span className={`text-[10px] font-black uppercase tracking-wider block max-w-[170px] truncate ${feedbackReport.score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {feedbackReport.articulation}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-blue-400">{feedbackReport.score}%</span>
                </div>

                {/* Critique Text */}
                <div className="p-4 bg-[#070b19]/60 border border-white/5 rounded-xl text-xs text-slate-300 font-medium leading-relaxed shadow-inner">
                  {/* 🌟 Highlighted Vivid Cyan Label */}
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider block font-mono mb-1.5">AI Critique Breakdown</span>
                  "{feedbackReport.critique}"
                </div>

                {/* Keyword Splitting Logs Panel */}
                <div className="p-4 border border-white/5 bg-[#070b19]/40 rounded-xl space-y-2.5 shadow-xl text-[11px] font-bold">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-wider block font-mono">✓ Intercepted Terms ({feedbackReport.matchedKeys.length})</span>
                    <div className="flex flex-wrap gap-1">
                      {feedbackReport.matchedKeys.map((k, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono text-[9px] rounded uppercase tracking-wide font-medium">{k}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 border-t border-white/5 pt-2">
                    <span className="text-[9px] font-black text-red-400 uppercase tracking-wider block font-mono">⚠ Missing Target Parameters ({feedbackReport.missingKeys.length})</span>
                    <div className="flex flex-wrap gap-1">
                      {feedbackReport.missingKeys.map((k, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-red-500/10 text-red-300 border border-red-500/20 font-mono text-[9px] rounded uppercase tracking-wide font-medium">{k}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ideal Solution Secondary Panel */}
                {!isSolutionRevealed && (
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-slate-200 routines leading-relaxed shadow-md">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-wider block font-mono mb-1">📚 Bounded Reference Solution</span>
                    {currentQuestion.idealAnswer}
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}