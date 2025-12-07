import React from 'react';
import { Layers, Zap, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-24">
      
      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">THE INVISIBLE<br />WAITER</h2>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            Maglev Systems was founded on a simple premise: the dining experience should be about the food and the company, not the logistics. By embedding high-efficiency electromagnetic rails beneath standard surfaces, we enable objects to move independently, silently, and precisely.
          </p>
          <div className="h-px w-24 bg-white mt-8" />
        </div>
        <div className="h-64 md:h-96 w-full bg-neutral-900 border border-neutral-800 relative overflow-hidden flex items-center justify-center">
            {/* Abstract visual of layers */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-white/20 rounded-full animate-[spin_8s_linear_infinite]" />
                <div className="w-32 h-32 border border-white/40 rounded-full absolute animate-[spin_4s_linear_infinite_reverse]" />
                <div className="w-16 h-16 bg-white rounded-full absolute blur-xl opacity-20 animate-pulse" />
            </div>
            <span className="relative z-10 text-xs tracking-widest bg-black px-2">MAGNETIC CORE VIEW</span>
        </div>
      </section>

      {/* Applications */}
      <section>
        <div className="flex items-end justify-between mb-12 border-b border-neutral-800 pb-4">
          <h3 className="text-xl md:text-2xl tracking-widest">APPLICATIONS</h3>
          <span className="text-xs text-neutral-600">SECTOR INTEGRATION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "HOSPITALITY",
              desc: "Automated delivery of courses in fine dining environments. Perfect timing, zero interruption.",
              icon: <Layers className="w-6 h-6 mb-4 text-white" />
            },
            {
              title: "SMART HOMES",
              desc: "Kitchen-to-table delivery systems integrated into islands and dining tables. Hands-free clearing.",
              icon: <Zap className="w-6 h-6 mb-4 text-white" />
            },
            {
              title: "ACCESSIBILITY",
              desc: "Empowering individuals with limited mobility by bringing essential items directly to them on command.",
              icon: <PenTool className="w-6 h-6 mb-4 text-white" />
            }
          ].map((app, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-900 p-8 hover:border-neutral-700 transition-colors group">
              {app.icon}
              <h4 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{app.title}</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Process */}
      <section className="bg-neutral-900/30 border-l-2 border-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Layers size={200} />
        </div>
        <h3 className="text-2xl mb-6 tracking-widest">ENGINEERING & DESIGN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-neutral-400">
          <p>
            Our proprietary <span className="text-white">FluxWave™</span> technology uses micro-coils to generate localized magnetic fields. This allows for multi-vector movement without any moving mechanical parts above the surface. The result is a system that is durable, silent, and indistinguishable from a standard table when idle.
          </p>
          <ul className="space-y-4 list-disc pl-4 marker:text-white">
            <li>Algorithm-driven collision avoidance</li>
            <li>Real-time load balancing & power distribution</li>
            <li>Modular tile surfacing (Marble, Wood, Glass)</li>
            <li>Open API for custom choreography</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default About;
