// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function ScanHistory() {
//   const [selectedReport, setSelectedReport] = useState(null);

//   // 🔄 FIXED INITIALIZATION: Strictly checks if data exists (even if it is an empty array)
//   const [scans, setScans] = useState(() => {
//     const savedScans = localStorage.getItem('resumeScans');
//     return savedScans !== null ? JSON.parse(savedScans) : [
//       { 
//         id: 'ATS-RE-940', 
//         date: '18/07/2026', 
//         fileName: 'Devansh_FullStack_Resume.pdf', 
//         score: 91, 
//         status: 'Optimal Match',
//         summary: 'Your resume structure looks outstanding. Grammatical patterns are highly compatible with enterprise parsing models.',
//         keywordsMatched: ['React.js', 'Node.js', 'JavaScript', 'SQL', 'Tailwind CSS'],
//         keywordsMissing: ['Docker Containers', 'AWS Architecture', 'CI/CD Pipelines (GitHub Actions)'],
//         formatting: 'Passed',
//         grammar: 'Passed',
//         contactInfo: 'Passed'
//       },
//       { 
//         id: 'ATS-RE-881', 
//         date: '12/07/2026', 
//         fileName: 'Frontend_Developer_CV_v2.pdf', 
//         score: 84, 
//         status: 'Target Passed',
//         summary: 'Solid project structures detected. However, key continuous integration metrics and containerized parameters are absent.',
//         keywordsMatched: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'HTML5'],
//         keywordsMissing: ['AWS Cloud Architecture', 'Kubernetes Clusters', 'TypeScript'],
//         formatting: 'Passed',
//         grammar: 'Warning (Minor typos)',
//         contactInfo: 'Passed'
//       },
//       { 
//         id: 'ATS-RE-764', 
//         date: '29/06/2026', 
//         fileName: 'Internship_Software_Draft.pdf', 
//         score: 76, 
//         status: 'Needs Keywords',
//         summary: 'The layout requires structural alignment. There are a few styling discrepancies and a noticeable lack of technical keyword density.',
//         keywordsMatched: ['C Language', 'Python', 'Git', 'CSS3'],
//         keywordsMissing: ['React.js', 'Node.js', 'SQL Databases', 'NoSQL Datastores'],
//         formatting: 'Attention Required',
//         grammar: 'Passed',
//         contactInfo: 'Warning (No Portfolio Link)'
//       }
//     ];
//   });

//   const handleDeleteItem = (id) => {
//     const updatedScans = scans.filter(scan => scan.id !== id);
//     setScans(updatedScans);
//     // Explicitly saving the updated array template
//     localStorage.setItem('resumeScans', JSON.stringify(updatedScans));
//     if (selectedReport?.id === id) setSelectedReport(null);
//   };

//   const handleClearAll = () => {
//     if (confirm("⚠️ Are you sure you want to clear your entire historical archive?")) {
//       setScans([]);
//       // ⚡ THE FIX: Store an empty array string so it stays blank even after a refresh!
//       localStorage.setItem('resumeScans', JSON.stringify([]));
//       setSelectedReport(null);
//     }
//   };

//   // Programmatic text report downloader
//   const triggerDownload = (log) => {
//     const matched = log?.keywordsMatched || [];
//     const missing = log?.keywordsMissing || [];
    
//     const reportText = `==================================================
// HIRESENSE ATS EVALUATION REPORT
// ==================================================
// Document Reference: ${log?.id || 'N/A'}
// Scanned Timestamp:  ${log?.date || 'N/A'}
// Target File Name:   ${log?.fileName || 'N/A'}
// Overall Score:      ${log?.score || 0}%
// Operational Status: ${(log?.status || 'N/A').toUpperCase()}

// COMPLIANCE SUMMARY:
// "${log?.summary || 'No summary breakdown generated.'}"

// [KEYWORD EVALUATION MATRIX]
// Matched Keywords: ${matched.length > 0 ? matched.join(', ') : 'None'}
// Missing Keywords: ${missing.length > 0 ? missing.join(', ') : 'None'}

// ==================================================`;

//     const element = document.createElement("a");
//     const file = new Blob([reportText], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = `${(log?.fileName || 'report').replace('.pdf', '')}_ATS_Report.txt`;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 10 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       className="w-full mx-auto p-6 md:p-8 bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-md font-sans"
//     >
//       {/* Header Control Hub Area */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5 mb-8">
//         <div>
//           <h2 className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
//             <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             ATS Evaluation Logs
//           </h2>
//           <p className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mt-1">
//             Historical document score metrics and keyword compliance analysis tracks.
//           </p>
//         </div>
        
//         {scans.length > 0 && (
//           <button 
//             onClick={handleClearAll}
//             className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-widest border border-red-200 bg-red-50/50 hover:bg-red-100 text-red-700 rounded-xl transition-all active:scale-95 cursor-pointer whitespace-nowrap"
//           >
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.72 0L9 9m-4.72-4.11h15.44M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14zm-9-4h4a1 1 0 011 1v1H9V3a1 1 0 011-1z" />
//             </svg>
//             Clear All Logs
//           </button>
//         )}
//       </div>

//       {/* Primary Log Loop Streams Workspace */}
//       <div className="space-y-4">
//         <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">
//           Live Document Execution Telemetry Stream
//         </span>

//         {scans.length === 0 ? (
//           <div className="text-center py-16 border border-dashed border-slate-300 rounded-2xl bg-slate-50">
//             <svg className="w-12 h-12 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">No Scanned Documents Stored</span>
//           </div>
//         ) : (
//           scans.map((log) => (
//             <div 
//               key={log.id} 
//               className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all hover:bg-slate-100/40 shadow-sm"
//             >
//               <div className="space-y-1 min-w-0 flex-1">
//                 <div className="flex flex-wrap items-center gap-2.5">
//                   <span className="font-mono text-[10px] font-black bg-slate-900 px-2 py-0.5 rounded text-white tracking-wider">
//                     {log.id}
//                   </span>
//                   <span className="text-[11px] font-mono text-slate-400 font-bold">
//                     Scanned: {log.date}
//                   </span>
//                 </div>
//                 <span className="text-sm font-black text-slate-900 block tracking-wide pt-1 truncate font-mono">
//                   📄 {log.fileName}
//                 </span>
//               </div>

//               <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-200/60 shrink-0">
//                 <div className="text-left lg:text-right min-w-[100px]">
//                   <span className="text-xl font-black text-slate-950 block leading-none">
//                     {log.score}%
//                   </span>
//                   <span className={`text-[9px] font-black uppercase tracking-wider block mt-1 ${
//                     log.score >= 90 ? 'text-emerald-600' : 'text-blue-600'
//                   }`}>
//                     {log.status}
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button 
//                     onClick={() => setSelectedReport(log)}
//                     className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm cursor-pointer"
//                   >
//                     Report
//                   </button>
                  
//                   <button 
//                     onClick={() => triggerDownload(log)}
//                     className="p-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
//                     </svg>
//                   </button>

//                   <button 
//                     onClick={() => handleDeleteItem(log.id)}
//                     className="p-2.5 bg-white hover:bg-red-50 border border-red-200 text-red-600 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.72 0L9 9m-4.72-4.11h15.44M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14zm-9-4h4a1 1 0 011 1v1H9V3a1 1 0 011-1z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Interactive Safe Modal */}
//       <AnimatePresence>
//         {selectedReport && (
//           <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
//             <motion.div 
//               initial={{ scale: 0.95, opacity: 0 }} 
//               animate={{ scale: 1, opacity: 1 }} 
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 font-sans text-slate-950"
//             >
//               <div className="border-b border-slate-200 pb-3 flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   <span className="font-mono text-xs font-black bg-slate-900 text-white px-2 py-0.5 rounded uppercase">{selectedReport.id || 'N/A'}</span>
//                   <span className="text-sm font-black uppercase tracking-wide">Analysis Workspace</span>
//                 </div>
//                 <button onClick={() => setSelectedReport(null)} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-all cursor-pointer">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-black tracking-tight font-mono">📄 {selectedReport.fileName || 'Document.pdf'}</h3>
//                   <p className="text-xs text-slate-500 font-bold mt-0.5">Automated Scan Executed: {selectedReport.date || 'N/A'}</p>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-3xl font-black text-blue-600 block leading-none">{selectedReport.score || 0}%</span>
//                 </div>
//               </div>

//               <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
//                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Executive Analysis Summary</span>
//                 <p className="text-xs text-slate-800 font-bold leading-relaxed">{selectedReport.summary || 'No summary metrics available.'}</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold">
//                 <div className="p-4 border border-emerald-100 bg-emerald-50/20 rounded-xl space-y-2">
//                   <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">✓ Matched Keywords ({(selectedReport.keywordsMatched || []).length})</span>
//                   <div className="flex flex-wrap gap-1.5">
//                     {(selectedReport.keywordsMatched || []).map((k, i) => (
//                       <span key={i} className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-[10px]">{k}</span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="p-4 border border-red-100 bg-red-50/20 rounded-xl space-y-2">
//                   <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block">⚠ Missing Keywords ({(selectedReport.keywordsMissing || []).length})</span>
//                   <div className="flex flex-wrap gap-1.5">
//                     {(selectedReport.keywordsMissing || []).map((k, i) => (
//                       <span key={i} className="px-2 py-0.5 bg-red-100 text-red-800 rounded font-mono text-[10px]">{k}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
//                 <button onClick={() => setSelectedReport(null)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer">
//                   Close Window
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScanHistory() {
  const [selectedReport, setSelectedReport] = useState(null);

  // 🔄 INITIALIZATION STATE NODE (Strictly Unchanged)
  const [scans, setScans] = useState(() => {
    const savedScans = localStorage.getItem('resumeScans');
    return savedScans !== null ? JSON.parse(savedScans) : [
      { 
        id: 'ATS-RE-940', 
        date: '18/07/2026', 
        fileName: 'Devansh_FullStack_Resume.pdf', 
        score: 91, 
        status: 'Optimal Match',
        summary: 'Your resume structure looks outstanding. Grammatical patterns are highly compatible with enterprise parsing models.',
        keywordsMatched: ['React.js', 'Node.js', 'JavaScript', 'SQL', 'Tailwind CSS'],
        keywordsMissing: ['Docker Containers', 'AWS Architecture', 'CI/CD Pipelines (GitHub Actions)'],
        formatting: 'Passed',
        grammar: 'Passed',
        contactInfo: 'Passed'
      },
      { 
        id: 'ATS-RE-881', 
        date: '12/07/2026', 
        fileName: 'Frontend_Developer_CV_v2.pdf', 
        score: 84, 
        status: 'Target Passed',
        summary: 'Solid project structures detected. However, key continuous integration metrics and containerized parameters are absent.',
        keywordsMatched: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'HTML5'],
        keywordsMissing: ['AWS Cloud Architecture', 'Kubernetes Clusters', 'TypeScript'],
        formatting: 'Passed',
        grammar: 'Warning (Minor typos)',
        contactInfo: 'Passed'
      },
      { 
        id: 'ATS-RE-764', 
        date: '29/06/2026', 
        fileName: 'Internship_Software_Draft.pdf', 
        score: 76, 
        status: 'Needs Keywords',
        summary: 'The layout requires structural alignment. There are a few styling discrepancies and a noticeable lack of technical keyword density.',
        keywordsMatched: ['C Language', 'Python', 'Git', 'CSS3'],
        keywordsMissing: ['React.js', 'Node.js', 'SQL Databases', 'NoSQL Datastores'],
        formatting: 'Attention Required',
        grammar: 'Passed',
        contactInfo: 'Warning (No Portfolio Link)'
      }
    ];
  });

  const handleDeleteItem = (id) => {
    const updatedScans = scans.filter(scan => scan.id !== id);
    setScans(updatedScans);
    localStorage.setItem('resumeScans', JSON.stringify(updatedScans));
    if (selectedReport?.id === id) setSelectedReport(null);
  };

  const handleClearAll = () => {
    if (confirm("⚠️ Are you sure you want to clear your entire historical archive?")) {
      setScans([]);
      localStorage.setItem('resumeScans', JSON.stringify([]));
      setSelectedReport(null);
    }
  };

  // Programmatic text report downloader script mapping (Strictly Unchanged)
  const triggerDownload = (log) => {
    const matched = log?.keywordsMatched || [];
    const missing = log?.keywordsMissing || [];
    
    const reportText = `==================================================
HIRESENSE ATS EVALUATION REPORT
==================================================
Document Reference: ${log?.id || 'N/A'}
Scanned Timestamp:  ${log?.date || 'N/A'}
Target File Name:   ${log?.fileName || 'N/A'}
Overall Score:      ${log?.score || 0}%
Operational Status: ${(log?.status || 'N/A').toUpperCase()}

COMPLIANCE SUMMARY:
"${log?.summary || 'No summary breakdown generated.'}"

[KEYWORD EVALUATION MATRIX]
Matched Keywords: ${matched.length > 0 ? matched.join(', ') : 'None'}
Missing Keywords: ${missing.length > 0 ? missing.join(', ') : 'None'}

==================================================`;

    const element = document.createElement("a");
    const file = new Blob([reportText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${(log?.fileName || 'report').replace('.pdf', '')}_ATS_Report.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      // 🎨 UPDATED: Blended background container matching user profile slate card
      className="w-full mx-auto p-6 md:p-8 bg-slate-900/30 text-white rounded-3xl border border-slate-800/40 backdrop-blur-md shadow-2xl font-sans"
    >
      {/* Header Control Hub Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-5 mb-8">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ATS Evaluation Logs
          </h2>
          <p className="text-xs font-black text-blue-400 uppercase tracking-wider mt-1.5 font-mono">
            Historical document score metrics and keyword compliance analysis tracks.
          </p>
        </div>
        
        {scans.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-widest border border-red-900/40 bg-red-950/10 hover:bg-red-950/20 text-red-400 rounded-xl transition-all active:scale-95 cursor-pointer whitespace-nowrap shadow-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.72 0L9 9m-4.72-4.11h15.44M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14zm-9-4h4a1 1 0 011 1v1H9V3a1 1 0 011-1z" />
            </svg>
            Clear All Logs
          </button>
        )}
      </div>

      {/* Primary Log Loop Streams Workspace */}
      <div className="space-y-4 w-full">
        {/* 🌟 Highlighted Neon Amber Section Header */}
        <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block font-mono pl-0.5">
          Live Document Execution Telemetry Stream
        </span>

        {scans.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl bg-[#070b19]/40 shadow-inner">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider block font-mono">No Scanned Documents Stored</span>
          </div>
        ) : (
          scans.map((log) => (
            /* Individual Row Card Item Loop */
            <div 
              key={log.id} 
              className="p-5 bg-[#070b19]/60 border border-white/5 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all hover:border-slate-800/60 shadow-xl"
            >
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-[10px] font-black bg-slate-950 px-2 py-0.5 rounded text-slate-300 tracking-wider border border-white/5">
                    {log.id}
                  </span>
                  {/* 🌟 Highlighted Vivid Cyan Track Parameter */}
                  <span className="text-[11px] font-mono text-cyan-400 font-bold">
                    Scanned: {log.date}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-100 block tracking-wide pt-1 truncate font-mono">
                  📄 {log.fileName}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 pt-3 lg:pt-0 border-white/5 shrink-0">
                <div className="text-left lg:text-right min-w-[100px]">
                  <span className="text-xl font-black text-white block leading-none font-mono">
                    {log.score}%
                  </span>
                  <span className={`text-[9px] font-black uppercase tracking-wider block mt-1 ${
                    log.score >= 90 ? 'text-emerald-400' : 'text-blue-400'
                  }`}>
                    {log.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedReport(log)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-blue-600/10 cursor-pointer"
                  >
                    Report
                  </button>
                  
                  <button 
                    onClick={() => triggerDownload(log)}
                    className="p-2.5 bg-slate-950 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 rounded-xl shadow-inner transition-all active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </button>

                  <button 
                    onClick={() => handleDeleteItem(log.id)}
                    className="p-2.5 bg-slate-950 border border-red-900/30 text-red-400 hover:bg-red-950/20 rounded-xl shadow-inner transition-all active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.72 0L9 9m-4.72-4.11h15.44M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14zm-9-4h4a1 1 0 011 1v1H9V3a1 1 0 011-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Interactive Safe Modal Backdrop System */}
      <AnimatePresence>
        {selectedReport && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }}
              // 🎨 UPDATED: Modal theme turned completely premium dark slate core glass matching profile layout grids
              className="bg-slate-900/90 border border-white/10 shadow-2xl rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 font-sans text-white backdrop-blur-xl"
            >
              <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black bg-slate-950 border border-white/10 text-slate-300 px-2 py-0.5 rounded uppercase">{selectedReport.id || 'N/A'}</span>
                  {/* 🌟 Highlighted Neon Amber Section Header */}
                  <span className="text-sm font-black text-amber-400 uppercase tracking-wide font-mono">Analysis Workspace</span>
                </div>
                <button onClick={() => setSelectedReport(null)} className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-100 font-mono">📄 {selectedReport.fileName || 'Document.pdf'}</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Automated Scan Executed: {selectedReport.date || 'N/A'}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-blue-400 block leading-none font-mono">{selectedReport.score || 0}%</span>
                </div>
              </div>

              <div className="p-4 bg-[#070b19]/60 border border-white/5 rounded-xl space-y-1.5 shadow-inner">
                {/* 🌟 Highlighted Vivid Cyan Label */}
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest block font-mono">Executive Analysis Summary</span>
                <p className="text-xs text-slate-300 font-medium leading-relaxed leading-justify">"{selectedReport.summary || 'No summary metrics available.'}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold">
                <div className="p-4 border border-emerald-900/30 bg-emerald-950/10 rounded-xl space-y-2 shadow-xl">
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block font-mono">✓ Matched Keywords ({(selectedReport.keywordsMatched || []).length})</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedReport.keywordsMatched || []).map((k, i) => (
                      <span key={i} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded font-mono text-[10px] font-medium">{k}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border border-red-900/30 bg-red-950/10 rounded-xl space-y-2 shadow-xl">
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-wider block font-mono">⚠ Missing Keywords ({(selectedReport.keywordsMissing || []).length})</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedReport.keywordsMissing || []).map((k, i) => (
                      <span key={i} className="px-2 py-0.5 bg-red-500/10 text-red-300 border border-red-500/20 rounded font-mono text-[10px] font-medium">{k}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                <button onClick={() => setSelectedReport(null)} className="px-4 py-2 bg-slate-950 border border-white/10 hover:border-white/20 text-slate-300 font-black text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md">
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}