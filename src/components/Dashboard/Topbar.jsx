import React from "react";
import { Search, Bell, Sun, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-white/5 bg-brand-bg/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 right-0 z-20">
      
      {/* Global Dashboard Control Search Vector */}
      <div className="relative w-72 hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        <input 
  type="text" 
  placeholder="Search reports, skill nodes, ro..." 
  autoComplete="off" 
  className="..." 
/>
      </div>
      <div className="sm:hidden" />

      {/* Right Quick Controls & Status Profiles */}
      <div className="flex items-center gap-4">
        
        {/* Pro Status Upgrade Callout */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 text-[11px] font-semibold text-brand-accent shadow-[0_0_15px_rgba(37,99,235,0.1)]">
          <Sparkles size={12} />
          <span>Tier Premium Active</span>
        </div>

        {/* Notification Bell Node Container */}
        <button className="p-2 text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-900 rounded-xl border border-white/5 transition-colors cursor-pointer relative">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
        </button>

        {/* Custom Theme State Toggle Interface Element */}
        <button className="p-2 text-slate-400 hover:text-white bg-slate-900/40 hover:bg-slate-900 rounded-xl border border-white/5 transition-colors cursor-pointer">
          <Sun size={16} />
        </button>

        <div className="h-6 w-px bg-white/5" />

        {/* Platform Identity Data Avatar Node */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-bold text-xs shadow-inner">
            {user?.email ? user.email.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="hidden xl:block text-left">
            <p className="text-xs font-semibold text-white max-w-[120px] truncate">{user?.email || "User Account"}</p>
            <p className="text-[10px] text-slate-500 font-mono">ID: active_node</p>
          </div>
        </div>

      </div>
    </header>
  );
}