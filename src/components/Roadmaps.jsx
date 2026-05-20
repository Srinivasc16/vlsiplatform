import { motion } from 'framer-motion';
import { Map, Briefcase, BookOpen, PenTool, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { roadmapsData } from '../data';

const roadmapsList = Object.values(roadmapsData);

export function Roadmaps() {
  return (
    <section id="roadmaps" className="py-32 bg-black transition-colors duration-300 relative border-t border-white/10 font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <Map className="w-8 h-8 text-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Strategic Paths</h2>
          <p className="text-lg text-slate-500 font-sans">
            Stop wandering aimlessly through GitHub repos and random YouTube playlists. Follow highly curated, visual paths designed to get you hired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roadmapsList.map((map, idx) => (
            <Link
              to={`/roadmap/${map.id}`}
              key={idx}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-colors cursor-pointer"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="w-full aspect-[2/1] bg-black border-b border-white/5 flex flex-col items-center justify-center text-white/20 relative overflow-hidden">
                  <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50">Roadmap Graphic Placeholder</span>
                  {/* Subtle hover overlay */}
                  <div className={`absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                <div className="p-8 relative z-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                        {map.title}
                      </h3>
                      <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Target: {map.role}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-black border border-white/10 text-slate-300 text-xs font-bold shadow-sm">
                      {map.duration}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8 font-sans">
                    <div className="flex items-center text-sm font-medium text-slate-300 bg-black/50 p-3 border border-white/5">
                      <BookOpen className="w-4 h-4 mr-3 text-cyan-500" /> What to study step-by-step
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-300 bg-black/50 p-3 border border-white/5">
                      <PenTool className="w-4 h-4 mr-3 text-violet-500" /> Industry Tools & Projects
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-300 bg-black/50 p-3 border border-white/5">
                      <Briefcase className="w-4 h-4 mr-3 text-emerald-500" /> Companies hiring
                    </div>
                  </div>

                  <div className="mt-auto w-full py-4 bg-white text-black text-center font-bold text-xs tracking-widest uppercase hover:bg-slate-200 transition-colors">
                    View Full Roadmap
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
