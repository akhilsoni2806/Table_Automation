import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Grid } from 'lucide-react';
import MagnetGrid from '../components/MagnetGrid';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex flex-col items-center justify-center">
      <MagnetGrid />
      
      {/* Hero Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-10 md:mt-0">
        <div className="inline-block border border-neutral-700 bg-black/50 backdrop-blur px-4 py-1 mb-4">
          <span className="text-xs tracking-[0.2em] text-neutral-300">SYSTEM STATUS: OPTIMAL</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mix-blend-difference">
          REDEFINING<br />
          TABLE<br />
          AUTOMATION
        </h1>
        
        <p className="max-w-xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed tracking-wide">
          The future of dining is frictionless. We build automated magnet-rail ecosystems that silently orchestrate the movement of plates, dishes, and culinary art.
        </p>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            to="/about" 
            className="group relative px-8 py-4 bg-white text-black font-bold tracking-widest overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              LEARN MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          
          <Link to="/contact" className="text-sm tracking-widest border-b border-transparent hover:border-white transition-colors pb-1">
            REQUEST DEMO
          </Link>
        </div>
      </div>

      {/* Feature Snippets */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end pointer-events-none hidden md:flex">
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-2 text-neutral-500">
             <Grid className="w-4 h-4" />
             <span className="text-xs">PRECISION GRID</span>
           </div>
           <span className="text-xs text-neutral-700">ACCURACY &lt; 1MM</span>
        </div>

        <div className="flex flex-col gap-2 text-right">
           <div className="flex items-center gap-2 justify-end text-neutral-500">
             <Circle className="w-4 h-4" />
             <span className="text-xs">SILENT MAGLEV</span>
           </div>
           <span className="text-xs text-neutral-700">0dB FRICTION</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
