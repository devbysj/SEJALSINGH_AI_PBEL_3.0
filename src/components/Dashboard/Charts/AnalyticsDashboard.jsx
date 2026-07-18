import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function AnalyticsDashboard({ report }) {
  const data = report || {};

  const radarData = [
    { subject: "ATS Match", A: data.atsScore || 0, fullMark: 100 },
    { subject: "Grammar", A: data.grammarScore || 0, fullMark: 100 },
    { subject: "Keywords", A: data.keywordScore || 0, fullMark: 100 },
    { subject: "Structure", A: data.resumeScore || 0, fullMark: 100 },
    { subject: "Skill Density", A: 90, fullMark: 100 },
  ];

  const barData = data.skills ? data.skills.map((skill, index) => ({
    name: typeof skill === 'object' ? skill.name : skill,
    weight: typeof skill === 'object' ? skill.weight : (100 - (index * 8))
  })) : [];

  const metrics = [
    { name: "ATS Match Index", score: data.atsScore || 0, color: "text-blue-400", bg: "border-blue-500/20" },
    { name: "Global Resume Score", score: data.resumeScore || 0, color: "text-green-400", bg: "border-green-500/20" },
    { name: "Linguistic & Grammar", score: data.grammarScore || 0, color: "text-purple-400", bg: "border-purple-500/20" },
    { name: "Keyword Optimization", score: data.keywordScore || 0, color: "text-yellow-400", bg: "border-yellow-500/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-white max-w-7xl mx-auto"
    >
      {/* Left Column: Metrics & Skill Badges */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-slate-100 flex items-center gap-2">
            <span>📊</span> Core Performance Metrics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className={`p-4 bg-slate-800/80 backdrop-blur rounded-xl border ${metric.bg}`}>
                <p className="text-sm text-slate-400 font-medium">{metric.name}</p>
                <p className={`text-3xl font-black mt-1 ${metric.color}`}>{metric.score}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 text-slate-200">Dominant Skill Assets Detected</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills && data.skills.length > 0 ? (
              data.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-medium flex items-center gap-1"
                >
                  ✓ {typeof skill === 'object' ? skill.name : skill}
                </span>
              ))
            ) : (
              <p className="text-sm text-slate-500">No explicit skills mapped.</p>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Charts */}
      <div className="space-y-6">
        <div className="p-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 h-64">
          <h3 className="text-md font-semibold mb-2 text-slate-300">Relative Skill Weights</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
              <Tooltip cursor={{ fill: '#334155', opacity: 0.4 }} />
              <Bar dataKey="weight" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 h-64 flex flex-col items-center justify-center">
          <h3 className="text-md font-semibold self-start mb-2 text-slate-300">Alignment Profiler</h3>
          <ResponsiveContainer width="100%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
              <Radar name="Score" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}