import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { History, Search, Eye, Download, Trash2, FileText, ArrowUpRight } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ScanHistory({ onViewReport }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // High-fidelity dynamic historic logs dataset mockup
  const [records, setRecords] = useState([
    { id: "rec_1", filename: "Senior_FullStack_Resume_2026.pdf", targetRole: "AI Engineer", date: "Jul 14, 2026", atsScore: 94, status: "Optimized" },
    { id: "rec_2", filename: "Lead_Developer_Profile.docx", targetRole: "Frontend Architect", date: "Jun 28, 2026", atsScore: 88, status: "Optimized" },
    { id: "rec_3", filename: "Technical_Resume_v2.pdf", targetRole: "Backend Engineer", date: "May 19, 2026", atsScore: 71, status: "Action Required" },
    { id: "rec_4", filename: "DevOps_Cloud_Infrastructure.pdf", targetRole: "Cloud Engineer", date: "Apr 05, 2026", atsScore: 64, status: "Critical Gaps" },
  ]);

  const handleDelete = (id, filename) => {
    setRecords(records.filter(record => record.id !== id));
    toast.success(`Removed tracking history entry for: ${filename}`);
  };

  // Filter matrix parsing logic
  const filteredRecords = records.filter(record => 
    record.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.targetRole.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Header Info Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-5 text-left">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <History className="text-brand-accent animate-pulse" size={24} />
            Historic Audit Matrix Ledger
          </h1>
          <p className="text-sm text-slate-400 font-light">Trace and inspect past vector optimization processing logs.</p>
        </div>

        {/* Local Table Context Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search historic files or tracking roles..."
            className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs text-slate-300 focus:outline-none focus:border-brand-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* Premium Glassmorphism Ledger Data Table */}
      <div className="glass-panel rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/5 bg-slate-900/30 font-mono uppercase tracking-wider text-slate-400">
                <th className="p-4 font-semibold">Asset Payload File</th>
                <th className="p-4 font-semibold">Target Mapping Vector</th>
                <th className="p-4 font-semibold">Processed Timestamp</th>
                <th className="p-4 font-semibold text-center">ATS Index</th>
                <th className="p-4 font-semibold">System Verdict</th>
                <th className="p-4 font-semibold text-right">Operational Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-white/5">
              <AnimatePresence>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((rec) => (
                    <motion.tr 
                      key={rec.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="hover:bg-white/20 transition-colors duration-200 group"
                    >
                      {/* Filename Identification */}
                      <td className="p-4 flex items-center gap-2.5 max-w-xs sm:max-w-md">
                        <FileText size={16} className="text-brand-primary group-hover:text-brand-accent transition-colors shrink-0" />
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors truncate">{rec.filename}</span>
                      </td>

                      {/* Targeted Role */}
                      <td className="p-4 text-slate-300 font-light">{rec.targetRole}</td>

                      {/* Date String */}
                      <td className="p-4 text-slate-400 font-mono">{rec.date}</td>

                      {/* ATS Score Output Tag */}
                      <td className="p-4 text-center">
                        <span className={`font-mono font-bold text-sm ${
                          rec.atsScore >= 90 ? "text-brand-accent" : rec.atsScore >= 75 ? "text-brand-primary" : "text-amber-400"
                        }`}>
                          {rec.atsScore}%
                        </span>
                      </td>

                      {/* Verdict Status Pills */}
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase border ${
                          rec.status === "Optimized" 
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                            : rec.status === "Action Required" 
                            ? "bg-amber-500/10 border-amber-500/20 text-amber-400" 
                            : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        }`}>
                          {rec.status}
                        </span>
                      </td>

                      {/* Control Interactive Icons */}
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => {
                              toast.success("Mounting report layout vectors...");
                              if (onViewReport) onViewReport(rec);
                            }}
                            className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-white hover:border-white/10 transition-all cursor-pointer"
                            title="Expose Visual Report"
                          >
                            <Eye size={13} />
                          </button>
                          
                          <button 
                            onClick={() => toast.success("Downloading binary asset summary...")}
                            className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-white hover:border-white/10 transition-all cursor-pointer"
                            title="Export Summary Data"
                          >
                            <Download size={13} />
                          </button>

                          <button 
                            onClick={() => handleDelete(rec.id, rec.filename)}
                            className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-rose-400 hover:border-rose-500/20 transition-all cursor-pointer"
                            title="Drop Scan Node Entry"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-12 text-center text-slate-500 font-mono tracking-wide">
                      No matching records synchronized inside database logs.
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}