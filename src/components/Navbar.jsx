import { Moon, Sun, Cpu, Map, Terminal, Briefcase } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Tracks', href: '#tracks', icon: Map },
    { name: 'Projects', href: '#projects', icon: Terminal },
    { name: 'Interview', href: '#interview', icon: Briefcase },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,240,255,0.15)]"
      >
        {/* Logo Icon */}
        <a href="#" className="p-3 rounded-full hover:bg-white/5 transition-colors group">
          <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </a>
        
        <div className="w-px h-6 bg-white/10 mx-2" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="w-px h-6 bg-white/10 mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </motion.nav>
    </div>
  );
}
