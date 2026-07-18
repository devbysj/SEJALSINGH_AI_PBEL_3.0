import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, UserPlus, User, Github, Linkedin } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Signup() {
  // 📝 Extended Profile State Vectors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // 🛡️ Inputs Validation Check
    if (!name || !email || !password || !confirmPassword || !githubUrl || !linkedinUrl) {
      return toast.error("Please fill in all layout profile parameters.");
    }
    if (password !== confirmPassword) {
      return toast.error("System structural passwords do not match.");
    }
    if (password.length < 6) {
      return toast.error("Password string verification must match or exceed 6 units.");
    }

    try {
      setIsSubmitting(true);
      
      // 1. Firebase/Auth core registration trigger
      await signup(email, password);
      
      // 2. ⚡ INTEGRATION LAYER: Save full customized metadata directly into the User Profile matrix
      const detailedUserProfile = {
        name: name.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        github: githubUrl.trim(),
        linkedin: linkedinUrl.trim(),
        skills: ['PYTHON', 'SQL', 'HTML', 'CSS', 'C++'] // Core baseline skills for dashboard analytics
      };
      localStorage.setItem('activeUser', JSON.stringify(detailedUserProfile));

      toast.success("Account engine & User Profile sync complete!");
      
      // Clean clean load directly to the mounted dashboard view
      window.location.href = "/dashboard";
    } catch (error) {
      toast.error(error.message || "Failed parsing security parameters.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden">
      <div className="glow-effect w-[400px] h-[400px] bg-brand-secondary -top-20 -right-20" />
      <div className="glow-effect w-[400px] h-[400px] bg-brand-primary bottom-[-10%] left-[-10%]" />

      {/* Left Side Frame - Micro Info Visuals */}
      <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-12 bg-slate-900/40 border-r border-white/5 relative z-10">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          HireSense
        </Link>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight leading-snug">
            Kickstart optimized profile indexing pipelines instantly.
          </h2>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Create an entry node file matrix to process dynamic score charts, continuous roadmap suggestions, and mock query environments.
          </p>
        </div>
        <p className="text-xs text-slate-600 font-mono">system_register_v2.6</p>
      </div>

      {/* Right Form Component - Multi-Input Field Wrapper */}
      <div className="col-span-1 lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative z-10 overflow-y-auto max-h-screen">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md glass-panel p-8 rounded-2xl shadow-2xl relative my-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1">Create Account</h3>
            <p className="text-xs text-slate-400 font-light">Deploy global platform indexing profiles.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            
            {/* FULL NAME INPUT */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* EMAIL ADDRESS INPUT */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            {/* GITHUB PORTFOLIO LINK */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">GitHub URL</label>
              <div className="relative">
                <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="url" 
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="https://github.com/username"
                />
              </div>
            </div>

            {/* LINKEDIN PORTFOLIO LINK (⚡ FIXED TYPO HERE) */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">LinkedIn URL</label>
              <div className="relative">
                <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="url" 
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Choose Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD INPUT */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-brand-primary focus:outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* SUBMIT REGISTRATION IDENTITY BUTTON */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 rounded-xl font-medium shadow-md hover:shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
            >
              <UserPlus size={16} />
              <span>{isSubmitting ? "Syncing Identity..." : "Register Identity Matrix"}</span>
            </button>
          </form>

          <div className="relative my-5 text-center">
            <hr className="border-white/5" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1527] px-3 text-[10px] text-slate-500 uppercase tracking-widest">Or Register With</span>
          </div>

          <button 
            type="button"
            onClick={async () => {
              try {
                await loginWithGoogle();
                const googleFallback = {
                  name: 'AUTHENTICATED OPERATOR',
                  email: 'google-context@matrix.com',
                  github: 'https://github.com',
                  linkedin: 'https://linkedin.com',
                  skills: ['PYTHON', 'SQL', 'HTML', 'CSS', 'C++']
                };
                localStorage.setItem('activeUser', JSON.stringify(googleFallback));
                toast.success("Authenticated via Google Workspace!");
                window.location.href = "/dashboard";
              } catch (err) {
                toast.error(err.message);
              }
            }}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-medium transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span>Google Workspace Signup</span>
          </button>

          <p className="mt-6 text-center text-xs text-slate-400 font-light">
            Already have an active engine block?{" "}
            <Link to="/login" className="text-brand-accent font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}