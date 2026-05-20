import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { tracksData } from '../data';

// Group data by domain
const vlsiTopics = Object.values(tracksData).filter(t => t.domain === 'VLSI');
const embeddedTopics = Object.values(tracksData).filter(t => t.domain === 'EMBEDDED');

export function LearningTracks() {
  const [activeTab, setActiveTab] = useState('VLSI');
  const [activeTopic, setActiveTopic] = useState('digital');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = activeTab === 'VLSI' ? vlsiTopics : embeddedTopics;
  const activeColor = activeTab === 'VLSI' ? 'text-cyan-400 border-cyan-400 bg-cyan-400' : 'text-violet-400 border-violet-400 bg-violet-400';
  const glowColor = activeTab === 'VLSI' ? 'shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'shadow-[0_0_15px_rgba(167,139,250,0.5)]';

  const selectDomain = (domain) => {
    setActiveTab(domain);
    setActiveTopic(domain === 'VLSI' ? 'digital' : 'c');
    setDropdownOpen(false);
  };

  return (
    <section id="tracks" className="py-32 bg-black font-mono relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Header and Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-xs font-bold text-slate-500 tracking-widest mb-4 block">// SYSTEM_ARCHITECTURE_PATH</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Learning_Topology
            </h2>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-3 px-6 py-3 border text-xs font-bold tracking-widest uppercase transition-colors ${
                activeTab === 'VLSI' ? 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10' : 'border-violet-500/50 text-violet-400 bg-violet-500/10'
              }`}
            >
              [ DOMAIN: {activeTab} ]
              <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronUp className="w-4 h-4" />
              </motion.div>
            </button>

            {/* Upward Dropdown */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-2 right-0 w-48 bg-black border border-white/10 shadow-2xl z-50 flex flex-col p-2"
                >
                  <button
                    onClick={() => selectDomain('VLSI')}
                    className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                  >
                    VLSI_CORE
                  </button>
                  <button
                    onClick={() => selectDomain('EMBEDDED')}
                    className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-violet-400 hover:bg-white/5 transition-colors"
                  >
                    EMBEDDED_SYS
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Schematic Layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Trace Map */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-white/10" />
            
            <div className="space-y-12">
              {data.map((node) => {
                const isActive = activeTopic === node.id;
                return (
                  <div 
                    key={node.id} 
                    className="relative flex items-center cursor-pointer group"
                    onClick={() => setActiveTopic(node.id)}
                  >
                    <div className={`relative z-10 w-6 h-6 flex-shrink-0 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-black ${
                      isActive ? activeColor + ' ' + glowColor : 'border-white/20 group-hover:border-white/50'
                    }`}>
                      {isActive && <div className="w-2 h-2 bg-black rounded-full" />}
                    </div>

                    <div className={`h-px transition-all duration-300 ${
                      isActive ? (activeTab === 'VLSI' ? 'bg-cyan-400 w-12' : 'bg-violet-400 w-12') : 'bg-white/10 w-6 group-hover:bg-white/30 group-hover:w-8'
                    }`} />

                    <span className={`ml-4 text-sm font-bold tracking-widest transition-colors ${
                      isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {node.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              {data.map((node) => (
                node.id === activeTopic && (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 border border-white/10 bg-white/[0.02] relative"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />

                    <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">
                      <span className={activeTab === 'VLSI' ? 'text-cyan-400' : 'text-violet-400'}>&gt;</span> {node.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-8 leading-relaxed font-sans">
                      {node.description}
                    </p>

                    <ul className="space-y-4">
                      {node.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm text-slate-300">
                          <span className="text-slate-600">[{String(i).padStart(2, '0')}]</span>
                          {topic}
                        </li>
                      ))}
                      {node.topics.length > 3 && (
                        <li className="text-sm text-slate-600 ml-10">...and {node.topics.length - 3} more</li>
                      )}
                    </ul>

                    <Link to={`/topic/${node.id}`} className={`mt-10 block text-center w-full py-3 text-xs font-bold tracking-widest uppercase transition-colors border ${
                      activeTab === 'VLSI' 
                        ? 'text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10' 
                        : 'text-violet-400 border-violet-400/30 hover:bg-violet-400/10'
                    }`}>
                      Execute Module
                    </Link>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
