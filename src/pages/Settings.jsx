




import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Settings() {
  // Fetch active user data from signup/profile (Strictly Unchanged)
  const [activeUser] = useState(() => {
    const saved = localStorage.getItem('activeUser');
    return saved ? JSON.parse(saved) : {
      name: 'SEJAL SINGH',
      email: 'sejal.singh@example.com'
    };
  });

  // Standard normal application settings state (Strictly Unchanged)
  const [preferences, setPreferences] = useState(() => {
    const savedPrefs = localStorage.getItem('appPreferences');
    return savedPrefs ? JSON.parse(savedPrefs) : {
      emailNotifications: true,
      profileVisibility: true,
      interviewDifficulty: 'Intermediate'
    };
  });

  const handleToggle = (key) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    localStorage.setItem('appPreferences', JSON.stringify(updated));
  };

  const handleSelectChange = (key, value) => {
    const updated = { ...preferences, [key]: value };
    setPreferences(updated);
    localStorage.setItem('appPreferences', JSON.stringify(updated));
  };

  const handleResetAccount = () => {
    if (confirm("Are you sure you want to reset your account? This will clear your saved profile details, history logs, and preferences.")) {
      localStorage.clear();
      alert("Account data cleared successfully. Reloading...");
      window.location.reload();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      // 🎨 UPDATED: Main background changed from bright white to matching UserProfile deep-slate glass panel
      className="w-full mx-auto p-6 md:p-10 bg-slate-900/30 text-white rounded-3xl border border-slate-800/40 backdrop-blur-md shadow-2xl font-sans"
    >
      {/* Page Header */}
      <div className="relative border-b border-white/5 pb-6 mb-8">
        <div className="absolute top-0 left-0 w-12 h-1 bg-blue-600 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3 pt-3">
          <svg className="w-8 h-8 text-white stroke-[2.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.77a1.119 1.119 0 00-.362.834c.002.074.003.148.003.222 0 .074-.001.148-.003.222a1.119 1.119 0 00.362.834l1.002.77a1.125 1.125 0 01.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a6.512 6.512 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.43l1.003-.77a1.119 1.119 0 00.362-.834 2.945 2.945 0 010-.443c-.001-.074-.003-.148-.003-.222 0-.074.002-.148.003-.222a1.119 1.119 0 00-.362-.834l-1.002-.77a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128c.332-.183.582-.495.644-.869l.214-1.28z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Account Settings
        </h2>
        <p className="text-xs font-black text-blue-400 uppercase tracking-widest mt-1.5 font-mono">
          Manage your personal profile preferences and application visibility
        </p>
      </div>

      {/* Main Settings Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT CARD: USER SUMMARY */}
        <div className="lg:col-span-4 space-y-3 w-full">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono pl-1">Profile Overview</span>
          
          {/* 🎨 UPDATED: Blended background container */}
          <div className="p-5 bg-[#070b19]/60 border border-white/5 rounded-2xl shadow-xl space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Full Name</span>
              <span className="text-base font-black text-slate-100 uppercase block tracking-tight truncate">{activeUser.name}</span>
            </div>
            
            <div className="space-y-1 border-t border-white/5 pt-3">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Email Address</span>
              <span className="text-xs font-semibold text-slate-300 block truncate">{activeUser.email}</span>
            </div>

            <div className="p-3 bg-slate-950/40 border border-white/5 rounded-xl flex items-center justify-between text-[11px] font-bold shadow-inner">
              <span className="text-slate-400">Account Status:</span>
              <span className="text-emerald-400 uppercase font-black tracking-wide">Active</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: GENERAL PREFERENCES */}
        <div className="lg:col-span-8 space-y-6 w-full">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono pl-1">Preferences</span>

          {/* 🎨 UPDATED: Preferences grid layout matching dashboard style layers */}
          <div className="bg-slate-900/20 border border-white/5 rounded-2xl p-5 md:p-6 space-y-6 shadow-2xl backdrop-blur-md">
            
            {/* DIFFICULTY PREFERENCE */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-5 border-b border-white/5">
              <div className="space-y-1 max-w-md">
                <span className="text-sm font-black text-slate-200 uppercase tracking-wide block">Interview Level</span>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">Choose the standard level of technical difficulty for your mock interview rounds.</p>
              </div>
              {/* Dark Styled Dropdown Select Field */}
              <select 
                value={preferences.interviewDifficulty}
                onChange={(e) => handleSelectChange('interviewDifficulty', e.target.value)}
                className="bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer w-fit self-start sm:self-auto shadow-inner"
              >
                <option value="Beginner" className="bg-[#070b19] text-white">Beginner</option>
                <option value="Intermediate" className="bg-[#070b19] text-white">Intermediate</option>
                <option value="Advanced" className="bg-[#070b19] text-white">Advanced</option>
              </select>
            </div>

            {/* EMAIL TOGGLE */}
            <div className="flex justify-between items-center gap-4 pb-5 border-b border-white/5">
              <div className="space-y-1 max-w-md">
                <span className="text-sm font-black text-slate-200 uppercase tracking-wide block">Email Notifications</span>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">Receive automated email alerts and feedback reports after completing tests.</p>
              </div>
              <button 
                onClick={() => handleToggle('emailNotifications')}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 border ${
                  preferences.emailNotifications ? 'bg-blue-600 border-blue-600 justify-end' : 'bg-slate-950 border-white/10 justify-start'
                }`}
              >
                <motion.div layout className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

            {/* PRIVACY TOGGLE */}
            <div className="flex justify-between items-center gap-4">
              <div className="space-y-1 max-w-md">
                <span className="text-sm font-black text-slate-200 uppercase tracking-wide block">Public Profile Visibility</span>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">Allow recruitment partners to search and view your optimized resume scores.</p>
              </div>
              <button 
                onClick={() => handleToggle('profileVisibility')}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 border ${
                  preferences.profileVisibility ? 'bg-blue-600 border-blue-600 justify-end' : 'bg-slate-950 border-white/10 justify-start'
                }`}
              >
                <motion.div layout className="w-4 h-4 rounded-full bg-white shadow-md" />
              </button>
            </div>

          </div>

          {/* DANGER ZONE */}
          {/* 🎨 UPDATED: High-Contrast Dark Alert Panel */}
          <div className="p-5 border border-red-900/30 bg-red-950/10 rounded-2xl space-y-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-sm font-black text-red-400 uppercase tracking-wide flex items-center gap-1.5">
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Danger Zone
              </span>
              <p className="text-xs font-medium text-slate-400 leading-relaxed">
                Resetting your account will erase everything stored locally, including your active session data and history streams.
              </p>
            </div>
            
            <button 
              onClick={handleResetAccount}
              className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all active:scale-98 cursor-pointer shadow-lg shadow-red-600/20"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Reset All Account Data
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
