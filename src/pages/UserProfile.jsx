import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Github, Linkedin, Shield, CheckCircle, Save, Edit3, Globe, Compass } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    linkedin: ''
  });

  // Pull profile state vectors cleanly from active local storage node
  useEffect(() => {
    const activeSessionUser = localStorage.getItem('activeUser');
    if (activeSessionUser) {
      try {
        const parsed = JSON.parse(activeSessionUser);
        setFormData({
          name: parsed.name || 'HIRESENSE OPERATOR',
          email: parsed.email || 'not_indexed@hiresense.system',
          github: parsed.github || '',
          linkedin: parsed.linkedin || ''
        });
      } catch (error) {
        console.error("Failed parsing active session profile data:", error);
      }
    }
  }, []);

  // Save updated parameters back into the local memory matrix
  const handleProfileSave = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return toast.error("Identity handle name cannot be blank.");

    try {
      const activeSessionUser = localStorage.getItem('activeUser');
      const currentConfig = activeSessionUser ? JSON.parse(activeSessionUser) : {};
      
      const updatedConfig = {
        ...currentConfig,
        name: formData.name.toUpperCase(),
        email: formData.email.toLowerCase(),
        github: formData.github.trim(),
        linkedin: formData.linkedin.trim()
      };

      localStorage.setItem('activeUser', JSON.stringify(updatedConfig));
      setFormData(updatedConfig);
      setIsEditing(false);
      toast.success("Profile system context updated cleanly!");
    } catch (err) {
      toast.error("Failed compilation logic during profile sync.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.99 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.4 }}
      className="space-y-6 max-w-5xl mx-auto w-full text-white p-1 selection:bg-blue-600/30"
    >
      
      {/* 1. VISUAL BRANDING HERO HEADER */}
      <div className="bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent p-8 rounded-3xl border border-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="flex items-center gap-6 w-full md:w-auto">
          {/* Neon Animated Glow Avatar */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-500 p-[1.5px] shadow-[0_0_30px_rgba(37,99,235,0.2)] shrink-0 relative group">
            <div className="w-full h-full bg-[#070b19] rounded-[14px] flex items-center justify-center transition-colors group-hover:bg-[#0a122c]">
              <User className="text-blue-400 w-9 h-9 animate-pulse" />
            </div>
          </div>

          {/* Dynamic Identity Data Block */}
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text">
                {formData.name || "UNINDEXED USER"}
              </h1>
              <span className="flex items-center gap-1 px-3 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase font-bold rounded-full tracking-widest shadow-sm">
                <CheckCircle size={10} /> Sync Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 tracking-wide">
              <Compass size={12} className="text-slate-500" /> Operational Matrix Handle: <span className="font-mono text-blue-400">node_id_v2.6</span>
            </p>
          </div>
        </div>

        {/* Edit Toggle Controls */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
            isEditing 
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20' 
              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-blue-500/40'
          }`}
        >
          <Edit3 size={13} />
          {isEditing ? "Cancel Changes" : "Modify Credentials"}
        </button>
      </div>

      {/* 2. DYNAMIC FORM & CONFIGURATION CONTROL REGISTRY */}
      <form onSubmit={handleProfileSave} className="grid grid-cols-1 gap-6 w-full">
        
        <div className="bg-slate-900/20 border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-6">
          <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2 border-b border-white/5 pb-4">
            <Shield size={14} className="text-blue-500 shadow-sm" /> Infrastructure Verification Parameters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* INPUT BLOCK: Full Identity Name */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Operator Profile Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"><User size={16} /></div>
                <input 
                  type="text"
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950/80 border border-white/5 disabled:border-white/5 focus:border-blue-500/40 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold transition-all text-slate-200 disabled:text-slate-400 disabled:bg-slate-950/30 shadow-inner"
                  placeholder="Enter full identity handle..."
                />
              </div>
            </div>

            {/* INPUT BLOCK: Email Node */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Core Email Node</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"><Mail size={16} /></div>
                <input 
                  type="email"
                  disabled // Core primary email node stays read-only for authentication security
                  value={formData.email}
                  className="w-full bg-slate-950/30 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-sm font-semibold text-slate-500 cursor-not-allowed shadow-inner"
                />
              </div>
            </div>

            {/* INPUT BLOCK: GitHub Portfolio Link */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">GitHub Integration Pipeline</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-white transition-colors"><Github size={16} /></div>
                <input 
                  type="url"
                  disabled={!isEditing}
                  value={formData.github}
                  onChange={(e) => setFormData({...formData, github: e.target.value})}
                  className="w-full bg-slate-950/80 border border-white/5 focus:border-blue-500/40 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium tracking-wide transition-all text-blue-400 disabled:text-blue-400/70 placeholder-slate-600 disabled:bg-slate-950/30 shadow-inner"
                  placeholder={isEditing ? "https://github.com/username" : "Repository link not set. Click Modify to add."}
                />
              </div>
            </div>

            {/* INPUT BLOCK: LinkedIn Identity Vector */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">LinkedIn Network Vector</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-400 transition-colors"><Linkedin size={16} /></div>
                <input 
                  type="url"
                  disabled={!isEditing}
                  value={formData.linkedin}
                  onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                  className="w-full bg-slate-950/80 border border-white/5 focus:border-blue-500/40 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium tracking-wide transition-all text-blue-400 disabled:text-blue-400/70 placeholder-slate-600 disabled:bg-slate-950/30 shadow-inner"
                  placeholder={isEditing ? "https://linkedin.com/in/username" : "Professional link not set. Click Modify to add."}
                />
              </div>
            </div>

          </div>

          {/* Action Trigger Save Controls Row */}
          {isEditing && (
            <motion.div 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end pt-4"
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save size={14} /> Commit & Sync Metadata
              </button>
            </motion.div>
          )}

        </div>

        {/* Global Hub Footer Infrastructure Diagnostics Node */}
        <div className="flex items-center gap-2 text-slate-600 font-mono text-[10px] pl-2">
          <Globe size={12} className="opacity-80" />
          <span>system_matrix: active_session_verified</span>
        </div>
      </form>

    </motion.div>
  );
}

