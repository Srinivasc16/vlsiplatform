import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 530); // Standard terminal blink rate
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center bg-white dark:bg-black overflow-hidden font-mono text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Absolute minimal background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Top subtle fade out for aesthetic */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col justify-center flex-grow">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-cyan-500 font-bold tracking-widest text-xs sm:text-sm">
            // SYS_INIT: LEARNING_PROTOCOL
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className="flex flex-col"
        >
          <h1 className="text-[12vw] sm:text-[8vw] md:text-8xl lg:text-[140px] font-black leading-[0.9] tracking-tighter uppercase mb-6 flex flex-wrap items-center">
            0 TO GDSII
            <motion.span 
              animate={{ opacity: cursorBlink ? 1 : 0 }}
              transition={{ duration: 0 }}
              className="inline-block w-[6vw] sm:w-[4vw] md:w-16 lg:w-24 h-[10vw] sm:h-[6vw] md:h-20 lg:h-32 bg-cyan-400 ml-4 lg:ml-8"
            />
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-lg md:text-2xl font-light text-slate-500 dark:text-slate-400 font-sans tracking-wide leading-relaxed">
              The definitive, unapologetically technical platform for VLSI and Embedded Systems engineering. Execute your career tape-out.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center gap-8 font-sans"
        >
          <a href="#tracks" className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
            Initialize Sequence
            <div className="w-10 h-px bg-slate-300 dark:bg-white/20 group-hover:bg-cyan-500 group-hover:w-16 transition-all relative">
              <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-900 dark:text-white group-hover:text-cyan-500 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[4px] transition-all" />
            </div>
          </a>
        </motion.div>

      </div>

      {/* Decorative vertical line */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

      {/* Bouncing Scroll Down Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-500" />
        </motion.div>
      </motion.div>

    </div>
  );
}
