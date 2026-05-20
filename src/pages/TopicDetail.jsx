import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, Activity, FileCode, CheckCircle2 } from 'lucide-react';
import { tracksData } from '../data';

export function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = tracksData[id];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-24 text-center font-mono flex flex-col items-center justify-center bg-black">
        <h1 className="text-4xl text-white font-bold mb-4">404_DATA_NOT_FOUND</h1>
        <p className="text-slate-500 mb-8">The requested module [{id}] does not exist in the registry.</p>
        <button onClick={() => navigate(-1)} className="text-cyan-400 hover:underline">
          &lt; RETURN_TO_SYSTEM
        </button>
      </div>
    );
  }

  const themeColor = data.domain === 'VLSI' ? 'cyan' : 'violet';
  const borderClass = themeColor === 'cyan' ? 'border-cyan-500' : 'border-violet-500';
  const textClass = themeColor === 'cyan' ? 'text-cyan-500' : 'text-violet-500';
  const bgSubtleClass = themeColor === 'cyan' ? 'bg-cyan-500/10' : 'bg-violet-500/10';
  const borderSubtleClass = themeColor === 'cyan' ? 'border-cyan-500/20' : 'border-violet-500/20';

  return (
    <div className="min-h-screen bg-black font-mono pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          System_Return
        </button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`border-l-2 ${borderClass} pl-6 mb-16`}
        >
          <span className={`text-xs font-bold ${textClass} tracking-widest mb-4 block`}>
            // TRACK_MODULE : {id.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            {data.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest">
            <span className={`px-3 py-1 ${bgSubtleClass} border ${borderSubtleClass} ${textClass}`}>
              DOMAIN: {data.domain}
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300">
              PREREQ: {data.prerequisites}
            </span>
          </div>
        </motion.div>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <section>
            <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" /> MODULE_DESCRIPTION
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-sans">
              {data.description}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
              <FileCode className="w-4 h-4" /> CURRICULUM_SYLLABUS
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {data.topics.map((topic, i) => (
                <li key={i} className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-white/5 text-slate-300 hover:border-white/20 transition-colors">
                  <span className={`${textClass} font-bold mt-0.5`}>[{String(i+1).padStart(2, '0')}]</span>
                  <span className="font-sans font-medium">{topic}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={`p-8 ${bgSubtleClass} border ${borderSubtleClass} rounded-xl relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${themeColor === 'cyan' ? 'bg-cyan-500/20' : 'bg-violet-500/20'} blur-3xl`} />
            <h3 className={`text-xs font-bold ${textClass} tracking-widest uppercase mb-4 flex items-center gap-2`}>
              <CheckCircle2 className="w-4 h-4" /> TARGET_OUTCOME
            </h3>
            <p className="text-slate-200 font-sans text-lg relative z-10">{data.expectedOutcome}</p>
          </section>

          <div className="pt-12 border-t border-white/10">
            <button className={`flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-colors`}>
              <Terminal className="w-4 h-4" />
              EXECUTE_MODULE
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
