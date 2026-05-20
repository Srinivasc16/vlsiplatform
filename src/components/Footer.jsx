import { Cpu, Terminal, Users, Globe } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'SYS_TOOLS',
      links: ['Verilog Playground', 'Waveform Viewer', 'K-Map Solver', 'STA Calculator', 'Binary Converter']
    },
    {
      title: 'CORP_DATA',
      links: ['Intel', 'Qualcomm', 'AMD', 'Nvidia', 'Synopsys', 'Texas Instruments']
    },
    {
      title: 'CAREER_EXEC',
      links: ['Resume Templates', 'ATS Tips', 'Project Descriptions', 'GitHub Guidelines']
    },
    {
      title: 'NETWORK',
      links: ['Discussion Forum', 'Doubt Solving', 'Project Showcase', 'Coding Contests']
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-32 font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl tracking-tighter text-white uppercase">
                Silicon<span className="text-cyan-400">Mastery</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-8 max-w-xs">
              0 TO GDSII. The definitive, unapologetically technical platform for VLSI & Embedded Mastery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"><Globe className="h-4 w-4" /></a>
              <a href="#" className="p-2 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"><Terminal className="h-4 w-4" /></a>
              <a href="#" className="p-2 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"><Users className="h-4 w-4" /></a>
            </div>
          </div>

          {footerSections.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-bold text-xs text-white tracking-widest mb-6 uppercase border-b border-white/10 pb-2">{section.title}</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-cyan-400 hover:underline decoration-cyan-400/30 underline-offset-4 transition-all">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 tracking-widest uppercase">
          <p>SYS_STATUS: ONLINE</p>
          <p>&copy; {new Date().getFullYear()} SILICON_MASTERY. ALL_RIGHTS_RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
