import React from 'react';

export default function Sidebar() {
  // Current active path mapping without relying on standard router triggers
  const currentPath = window.location.pathname;

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Resume Builder', path: '/resume-builder' },
    { name: 'ATS Optimization', path: '/ats-optimization' },
    { name: 'AI Interview', path: '/interview' },
    { name: 'Scan History', path: '/history' },
    { name: 'User Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-transparent border-r border-blue-900/40 p-5 flex flex-col justify-between backdrop-blur-md select-none font-sans">
      
      {/* Top Section: App Branding & Navigation Links */}
      <div className="space-y-7">
        <div className="flex items-center gap-2.5 px-2">
          {/* Cyan Tech Icon */}
          <div className="w-7 h-7 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-white">HireSense</span>
        </div>
        
        <nav className="space-y-1.5">
          {menuItems.map((item, idx) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={idx}
                onClick={() => { window.location.href = item.path; }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 text-left cursor-pointer ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-blue-900/20'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Exit Control & Weather Layout */}
      <div className="space-y-4 pt-4 border-t border-blue-900/40">
        
        {/* ⚡ DIRECT FORCE LOGOUT BUTTON */}
        <button 
          onClick={() => {
            localStorage.clear(); // Wipes user context instantly
            window.location.href = '/login'; // Bypasses browser navigation locks
          }}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded-xl transition-all text-left cursor-pointer group"
        >
          <svg className="w-4 h-4 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Exit Session
        </button>

        {/* System Location Parameters Widget */}
        <div className="p-3 bg-blue-950/20 border border-blue-900/30 rounded-xl text-[11px] font-mono text-slate-400 space-y-0.5">
          <div className="flex justify-between items-center text-slate-300">
            <span>🌦️ Prayagraj</span>
            <span className="font-bold">34°C</span>
          </div>
          <div className="text-[10px] text-blue-400 font-semibold tracking-wide uppercase">T-storms / Cloudy</div>
        </div>

      </div>
    </div>
  );
}