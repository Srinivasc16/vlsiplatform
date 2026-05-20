import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Flag, Map, Calendar } from 'lucide-react';
import { roadmapsData } from '../data';

export function RoadmapDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = roadmapsData[id];

  if (!data) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-24 text-center font-mono flex flex-col items-center justify-center bg-black">
        <h1 className="text-4xl text-white font-bold mb-4">404_DATA_NOT_FOUND</h1>
        <p className="text-slate-500 mb-8">The requested roadmap [{id}] does not exist.</p>
        <button onClick={() => navigate(-1)} className="text-cyan-400 hover:underline">
          &lt; RETURN_TO_SYSTEM
        </button>
      </div>
    );
  }

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

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Map className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-slate-400 font-sans max-w-2xl mx-auto mb-8">
            {data.desc}
          </p>
          <div className="flex justify-center gap-4 text-xs font-bold tracking-widest uppercase">
            <span className="px-4 py-2 border border-white/10 bg-[#0a0a0a] text-slate-300">Target: {data.role}</span>
            <span className="px-4 py-2 border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {data.duration}
            </span>
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Trace Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {data.timeline.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <div className={`p-6 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      <span className="inline-block px-3 py-1 bg-white/5 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                        {step.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 font-sans text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* End Flag */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-16 z-10"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full">
              <Flag className="w-4 h-4" /> Goal Accomplished
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
