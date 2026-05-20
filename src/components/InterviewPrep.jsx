import { motion } from 'framer-motion';
import { Target, Mic, Volume2 } from 'lucide-react';

export function InterviewPrep() {
  // Generate random heights for the voice visualizer bars
  const bars = Array.from({ length: 40 }, () => Math.random() * 100);

  return (
    <section id="interview" className="py-32 bg-black font-mono transition-colors duration-300 border-t border-white/10 overflow-hidden relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 text-slate-300 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 w-max">
              <Target className="w-4 h-4 text-cyan-400" />
              // AI_MOCK_INTERVIEWER
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Simulated <br />Interrogation.
            </h2>
            <p className="text-lg text-slate-500 mb-10 font-sans font-light leading-relaxed">
              Experience realistic interview pressure. Our AI module parses thousands of real questions from Intel, Qualcomm, and AMD to test your limits.
            </p>
            
            <button className="w-max px-8 py-4 bg-white text-black text-xs tracking-widest font-bold uppercase transition-all hover:bg-slate-200">
              Initiate Voice Session
            </button>
          </motion.div>

          {/* Right Column: AI Voice Visualizer UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-[#050505] border border-white/10 shadow-2xl relative overflow-hidden group">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Recording Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-cyan-500" />
                  <Volume2 className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              {/* Voice Visualizer */}
              <div className="flex items-end justify-center h-48 gap-1 mb-12">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [`${height}%`, `${Math.random() * 100}%`, `${height}%`]
                    }}
                    transition={{
                      duration: 1.5 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 bg-cyan-400 rounded-t-sm"
                    style={{
                      opacity: 0.3 + (Math.random() * 0.7),
                      boxShadow: '0 0 10px rgba(34,211,238,0.5)'
                    }}
                  />
                ))}
              </div>

              {/* Transcript / Question display */}
              <div className="text-center">
                <p className="text-xl text-white font-sans font-light leading-relaxed mb-4">
                  "Explain the concept of <span className="text-cyan-400 font-bold">clock skew</span> and how it affects <span className="text-violet-400 font-bold">setup</span> and <span className="text-emerald-400 font-bold">hold</span> timing constraints."
                </p>
                <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-500 uppercase rounded-full">
                  Listening for response...
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
