import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data';

const projectsList = Object.values(projectsData);

export function Projects() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section id="projects" className="py-32 bg-black font-mono relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-widest mb-4 block">// PORTFOLIO_REGISTRY</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Build_Log
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            Execute real-world architectures. The registry contains industry-standard projects designed to bypass the resume filter.
          </p>
        </div>

        {/* The Registry List */}
        <div className="relative group">
          
          {/* Header Row */}
          <div className="flex items-center text-xs font-bold text-slate-600 tracking-widest uppercase mb-4 px-4">
            <div className="w-16">ID</div>
            <div className="flex-1">Nomenclature</div>
            <div className="w-1/4 hidden md:block">Classification</div>
            <div className="w-32 hidden sm:block">Tier</div>
            <div className="w-12 text-right">Ext</div>
          </div>

          <div className="space-y-1">
            {projectsList.map((proj) => (
              <Link 
                to={`/project/${proj.id}`}
                key={proj.id}
                onMouseEnter={() => setHoveredRow(proj.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className="relative flex items-center px-4 py-6 border-b border-white/5 cursor-pointer transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* ID */}
                <div className={`w-16 text-sm transition-colors ${hoveredRow === proj.id ? 'text-cyan-400' : 'text-slate-600'}`}>
                  {proj.id}
                </div>
                
                {/* Name */}
                <div className={`flex-1 text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors ${hoveredRow === proj.id ? 'text-white' : 'text-slate-400'}`}>
                  {proj.name}
                  {hoveredRow === proj.id && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      className="ml-4 inline-block text-xs font-normal text-cyan-500 tracking-widest"
                    >
                      [{proj.tech}]
                    </motion.span>
                  )}
                </div>

                {/* Type */}
                <div className={`w-1/4 hidden md:block text-sm transition-colors ${hoveredRow === proj.id ? 'text-slate-300' : 'text-slate-600'}`}>
                  {proj.type}
                </div>

                {/* Tier */}
                <div className="w-32 hidden sm:block">
                  <span className={`text-xs px-2 py-1 border transition-colors ${
                    hoveredRow === proj.id 
                      ? proj.tier === 'Advanced' ? 'border-violet-500/50 text-violet-400 bg-violet-500/10' : 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10'
                      : 'border-white/10 text-slate-500'
                  }`}>
                    {proj.tier}
                  </span>
                </div>

                {/* Action Icon */}
                <div className="w-12 flex justify-end">
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${hoveredRow === proj.id ? 'text-cyan-400 opacity-100 -rotate-45' : 'text-slate-700 opacity-50'}`} />
                </div>

                {/* Hover Glow Background */}
                <AnimatePresence>
                  {hoveredRow === proj.id && (
                    <motion.div
                      layoutId="row-highlight"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 px-6 py-3 border border-white/20 text-slate-300 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all">
            <Terminal className="w-4 h-4" />
            Access Full Registry
          </button>
        </div>

      </div>
    </section>
  );
}
