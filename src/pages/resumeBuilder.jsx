// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function ResumeBuilder() {
//   // 1. Unified Form State for Live Tracking (Strictly Unchanged)
//   const [formData, setFormData] = useState({
//     fullName: 'John Doe',
//     role: 'Full-Stack Software Engineer',
//     email: 'johndoe@example.com',
//     phone: '+1 (555) 019-2834',
//     location: 'San Francisco, CA',
//     summary: 'Ambitious software engineer specializing in building high-scale distributed architectures, predictive AI modeling, and highly responsive modern web applications.',
//     education: 'B.Tech in Computer Science - Tech University (2023-2027)',
//     experience: 'Software Engineer Intern at ByteCorp (Managed cloud infrastructure migrations and optimized query execution paths by 40%).',
//     projects: 'HireSense AI Application (Built an interactive resume screening platform using dynamic React parsing modules and vector metrics).',
//     skillsList: 'React, Node.js, Python, SQL, AWS, TailwindCSS'
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 15 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       // 🎨 Removed pitch-black card wrapper so the content flows beautifully on the workspace
//       className="w-full mx-auto p-6 text-white space-y-6"
//     >
//       {/* Header Info */}
//       <div className="flex justify-between items-center border-b border-slate-850 pb-4">
//         <div>
//           <h2 className="text-2xl font-black text-white flex items-center gap-2">
//             <span>📄</span> Dynamic Resume Builder
//           </h2>
//           <p className="text-sm text-slate-400 mt-0.5">Fill out your engineering profiles and monitor your structural blueprint live.</p>
//         </div>
//         <button 
//           onClick={() => alert('Exporting to PDF alignment engine...')}
//           className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-sm rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
//         >
//           📥 Export Compiled PDF
//         </button>
//       </div>

//       {/* Main Split-Screen Studio Workspace */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
//         {/* LEFT COLUMN: ⚡ FIXED COLOR: CHANGED FROM PITCH BLACK TO DEEP-SLATE GLASSMORPHISM */}
//         <div className="lg:col-span-5 bg-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-800/40 p-5 space-y-4 max-h-[75vh] overflow-y-auto custom-scrollbar shadow-2xl">
//           <h3 className="text-md font-bold text-blue-400 uppercase tracking-wider mb-2">📝 Document Control Form</h3>
          
//           {/* Section: Personal Metrics */}
//           <div className="space-y-3">
//             <h4 className="text-xs font-bold text-slate-500 uppercase border-b border-white/5 pb-1">1. Contact Identity</h4>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Full Name</label>
//               <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//             </div>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Target Professional Title</label>
//               <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//             </div>
//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <label className="text-[11px] font-bold text-slate-400 block mb-1">Email</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//               </div>
//               <div>
//                 <label className="text-[11px] font-bold text-slate-400 block mb-1">Phone</label>
//                 <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//               </div>
//             </div>
//           </div>

//           {/* Section: Professional Summary */}
//           <div className="space-y-2 pt-2">
//             <h4 className="text-xs font-bold text-slate-500 uppercase border-b border-white/5 pb-1">2. Executive Summary</h4>
//             <textarea name="summary" rows="3" value={formData.summary} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed" />
//           </div>

//           {/* Section: Structural Blocks */}
//           <div className="space-y-3 pt-2">
//             <h4 className="text-xs font-bold text-slate-500 uppercase border-b border-white/5 pb-1">3. Core Experience & Timelines</h4>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Professional Experience Descriptions</label>
//               <textarea name="experience" rows="3" value={formData.experience} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed" />
//             </div>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Academic Background Data</label>
//               <input type="text" name="education" value={formData.education} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//             </div>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Key Technical Projects</label>
//               <textarea name="projects" rows="2" value={formData.projects} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed" />
//             </div>
//             <div>
//               <label className="text-[11px] font-bold text-slate-400 block mb-1">Core Tech Stack Skills (Comma Separated)</label>
//               <input type="text" name="skillsList" value={formData.skillsList} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all" />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: 🔮 FIXED COLOR: CHANGED PANEL WRAPPER TO DEEP-SLATE GLASSMORPHISM */}
//         <div className="lg:col-span-7 bg-slate-900/30 backdrop-blur-md border border-slate-800/40 rounded-2xl p-6 flex flex-col items-center shadow-2xl">
//           <div className="w-full flex justify-between items-center mb-4 px-2">
//             <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
//               <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Dynamic Virtual Canvas
//             </h3>
//             <span className="text-[11px] text-slate-400 font-medium">Scale: 100% (A4 Standard)</span>
//           </div>

//           {/* Simulated A4 Modern Resume Sheet (STRICTLY UNTOUCHED - Kept pure white for printing accuracy) */}
//           <div className="w-full bg-white text-slate-900 shadow-2xl rounded-lg p-8 min-h-[70vh] font-serif text-left border border-slate-200">
//             {/* Template Header */}
//             <div className="text-center border-b border-slate-300 pb-3">
//               <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">{formData.fullName || 'Untitled Profile'}</h1>
//               <p className="text-xs font-medium text-blue-700 font-sans mt-0.5 uppercase tracking-wide">{formData.role || 'Professional Role'}</p>
              
//               <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-600 font-sans mt-2 italic">
//                 <span>📍 {formData.location}</span>
//                 <span>📞 {formData.phone}</span>
//                 <span>✉️ {formData.email}</span>
//               </div>
//             </div>

//             {/* Template Body Layout */}
//             <div className="mt-4 space-y-4 text-xs leading-relaxed">
//               {/* Summary Block */}
//               {formData.summary && (
//                 <div>
//                   <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Professional Summary</h3>
//                   <p className="text-slate-700 font-sans text-justify text-[11px]">{formData.summary}</p>
//                 </div>
//               )}

//               {/* Experience Block */}
//               <div>
//                 <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Work History</h3>
//                 <p className="text-slate-800 font-sans text-justify text-[11px]">{formData.experience}</p>
//               </div>

//               {/* Projects Block */}
//               <div>
//                 <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Technical Projects</h3>
//                 <p className="text-slate-800 font-sans text-justify text-[11px]">{formData.projects}</p>
//               </div>

//               {/* Education Block */}
//               <div>
//                 <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Academic History</h3>
//                 <p className="text-slate-800 font-sans text-[11px]">{formData.education}</p>
//               </div>

//               {/* Skills Grid */}
//               <div>
//                 <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Technical Capabilities</h3>
//                 <div className="flex flex-wrap gap-1.5 mt-1">
//                   {formData.skillsList.split(',').map((skill, index) => (
//                     skill.trim() && (
//                       <span key={index} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[10px] font-medium font-sans border border-slate-200">
//                         {skill.trim()}
//                       </span>
//                     )
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// }




import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ResumeBuilder() {
  // 1. Unified Form State for Live Tracking (Strictly Unchanged)
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    role: 'Full-Stack Software Engineer',
    email: 'johndoe@example.com',
    phone: '+1 (555) 019-2834',
    location: 'San Francisco, CA',
    summary: 'Ambitious software engineer specializing in building high-scale distributed architectures, predictive AI modeling, and highly responsive modern web applications.',
    education: 'B.Tech in Computer Science - Tech University (2023-2027)',
    experience: 'Software Engineer Intern at ByteCorp (Managed cloud infrastructure migrations and optimized query execution paths by 40%).',
    projects: 'HireSense AI Application (Built an interactive resume screening platform using dynamic React parsing modules and vector metrics).',
    skillsList: 'React, Node.js, Python, SQL, AWS, TailwindCSS'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="w-full mx-auto p-6 text-white space-y-6"
    >
      {/* Header Info */}
      <div className="flex justify-between items-center border-b border-slate-800/40 pb-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <span>📄</span> Dynamic Resume Builder
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">Fill out your engineering profiles and monitor your structural blueprint live.</p>
        </div>
        <button 
          onClick={() => alert('Exporting to PDF alignment engine...')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-sm rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          📥 Export Compiled PDF
        </button>
      </div>

      {/* Main Split-Screen Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: HIGH-CONTRAST HIGHLIGHTED FORM EDITOR */}
        <div className="lg:col-span-5 bg-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-800/40 p-5 space-y-4 max-h-[75vh] overflow-y-auto custom-scrollbar shadow-2xl">
          <h3 className="text-md font-black text-blue-400 uppercase tracking-widest mb-2 pb-1 border-b border-white/5">📝 Document Control Form</h3>
          
          {/* Section: Personal Metrics */}
          <div className="space-y-3">
            {/* 🌟 Highlighted Section 1 Header */}
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider border-b border-slate-800/60 pb-1.5 mt-2">
              1. Contact Identity
            </h4>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
            </div>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Target Professional Title</label>
              <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                {/* 🌟 Highlighted Vivid Cyan Label */}
                <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
              </div>
              <div>
                {/* 🌟 Highlighted Vivid Cyan Label */}
                <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-2 pt-2">
            {/* 🌟 Highlighted Section 2 Header */}
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider border-b border-slate-800/60 pb-1.5">
              2. Executive Summary
            </h4>
            <textarea name="summary" rows="3" value={formData.summary} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed font-medium" />
          </div>

          {/* Section: Structural Blocks */}
          <div className="space-y-3 pt-2">
            {/* 🌟 Highlighted Section 3 Header */}
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider border-b border-slate-800/60 pb-1.5">
              3. Core Experience & Timelines
            </h4>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Professional Experience Descriptions</label>
              <textarea name="experience" rows="3" value={formData.experience} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed font-medium" />
            </div>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Academic Background Data</label>
              <input type="text" name="education" value={formData.education} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
            </div>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Key Technical Projects</label>
              <textarea name="projects" rows="2" value={formData.projects} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50 resize-none shadow-inner transition-all leading-relaxed font-medium" />
            </div>
            <div>
              {/* 🌟 Highlighted Vivid Cyan Label */}
              <label className="text-[10px] font-extrabold text-cyan-400 block mb-1 uppercase tracking-wider">Core Tech Stack Skills (Comma Separated)</label>
              <input type="text" name="skillsList" value={formData.skillsList} onChange={handleInputChange} className="w-full bg-[#070b19]/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 shadow-inner transition-all font-medium" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: VIRTUAL A4 CANVAS SHEET */}
        <div className="lg:col-span-7 bg-slate-900/30 backdrop-blur-md border border-slate-800/40 rounded-2xl p-6 flex flex-col items-center shadow-2xl">
          <div className="w-full flex justify-between items-center mb-4 px-2">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Dynamic Virtual Canvas
            </h3>
            <span className="text-[11px] text-slate-400 font-medium">Scale: 100% (A4 Standard)</span>
          </div>

          {/* Simulated A4 Modern Resume Sheet (Strictly Untouched) */}
          <div className="w-full bg-white text-slate-900 shadow-2xl rounded-lg p-8 min-h-[70vh] font-serif text-left border border-slate-200">
            {/* Template Header */}
            <div className="text-center border-b border-slate-300 pb-3">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">{formData.fullName || 'Untitled Profile'}</h1>
              <p className="text-xs font-medium text-blue-700 font-sans mt-0.5 uppercase tracking-wide">{formData.role || 'Professional Role'}</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-600 font-sans mt-2 italic">
                <span>📍 {formData.location}</span>
                <span>📞 {formData.phone}</span>
                <span>✉️ {formData.email}</span>
              </div>
            </div>

            {/* Template Body Layout */}
            <div className="mt-4 space-y-4 text-xs leading-relaxed">
              {/* Summary Block */}
              {formData.summary && (
                <div>
                  <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Professional Summary</h3>
                  <p className="text-slate-700 font-sans text-justify text-[11px]">{formData.summary}</p>
                </div>
              )}

              {/* Experience Block */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Work History</h3>
                <p className="text-slate-800 font-sans text-justify text-[11px]">{formData.experience}</p>
              </div>

              {/* Projects Block */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Technical Projects</h3>
                <p className="text-slate-800 font-sans text-justify text-[11px]">{formData.projects}</p>
              </div>

              {/* Education Block */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Academic History</h3>
                <p className="text-slate-800 font-sans text-[11px]">{formData.education}</p>
              </div>

              {/* Skills Grid */}
              <div>
                <h3 className="text-[11px] font-bold text-slate-900 uppercase font-sans tracking-wider border-b border-slate-200 pb-0.5 mb-1 text-blue-800">Technical Capabilities</h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {formData.skillsList.split(',').map((skill, index) => (
                    skill.trim() && (
                      <span key={index} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[10px] font-medium font-sans border border-slate-200">
                        {skill.trim()}
                      </span>
                    )
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}