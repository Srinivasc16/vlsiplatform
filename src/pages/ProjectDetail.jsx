import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, Server, Cpu, Code2, GitBranch, ExternalLink } from 'lucide-react';
import { projectsData } from '../data';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = projectsData[id];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-24 text-center font-mono flex flex-col items-center justify-center bg-black">
        <h1 className="text-4xl text-white font-bold mb-4">404_DATA_NOT_FOUND</h1>
        <p className="text-slate-500 mb-8">The requested registry entry [{id}] does not exist.</p>
        <button onClick={() => navigate(-1)} className="text-cyan-400 hover:underline">
          &lt; RETURN_TO_SYSTEM
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-mono pt-32 pb-32 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-cyan-900/20 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          System_Return
        </button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold tracking-widest uppercase">ID: {data.id}</span>
            <span className={`px-3 py-1 border text-xs font-bold tracking-widest uppercase ${
              data.tier === 'Advanced' ? 'border-violet-500/50 text-violet-400 bg-violet-500/10' : 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10'
            }`}>
              {data.tier}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            {data.name}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-white/10 py-6 mb-12">
            <div>
              <span className="block text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Classification</span>
              <span className="text-white text-sm flex items-center gap-2"><Server className="w-4 h-4 text-cyan-500" /> {data.type}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Tech Stack</span>
              <span className="text-white text-sm flex items-center gap-2"><Code2 className="w-4 h-4 text-violet-500" /> {data.tech}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Status</span>
              <span className="text-emerald-400 text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Verified</span>
            </div>
          </div>
        </motion.div>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Massive Architecture Diagram Placeholder */}
            <div className="w-full aspect-video bg-[#050505] border border-white/10 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
              <Cpu className="w-16 h-16 text-white/10 mb-4 group-hover:text-cyan-500/50 transition-colors duration-500" />
              <span className="text-xs text-slate-500 tracking-widest font-bold uppercase">Architecture_Diagram_Placeholder</span>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <section>
              <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-4 border-b border-white/10 pb-2">
                SYSTEM_OVERVIEW
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-sans">
                {data.desc}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-6 border-b border-white/10 pb-2">
                TECHNICAL_SPECIFICATIONS
              </h2>
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-[#0a0a0a] border-l-2 border-cyan-500 text-slate-300">
                    <Terminal className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-sans font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl">
              <h3 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-6">EXECUTION_LINKS</h3>
              
              <button className="w-full flex items-center justify-between p-4 bg-white text-black hover:bg-slate-200 transition-colors mb-4 group">
                <div className="flex items-center gap-3 font-bold text-sm">
                  <GitBranch className="w-5 h-5" /> View Source
                </div>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>

              <button className="w-full flex items-center justify-between p-4 border border-white/20 text-white hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 font-bold text-sm">
                  <Terminal className="w-5 h-5 text-cyan-400" /> Run Simulation
                </div>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
            </div>
            
            <div className="p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-2">INTERVIEW_RELEVANCE</h3>
              <p className="text-slate-400 text-sm font-sans">
                This architecture frequently appears in technical screening rounds for {data.tech} roles at top semiconductor firms.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
