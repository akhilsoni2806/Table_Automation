import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JobListing } from '../types';

const jobs: JobListing[] = [
  { id: '1', title: 'SENIOR EMBEDDED ENGINEER', department: 'R&D', location: 'SAN FRANCISCO', type: 'FULL-TIME' },
  { id: '2', title: 'INDUSTRIAL DESIGNER', department: 'DESIGN', location: 'REMOTE', type: 'CONTRACT' },
  { id: '3', title: 'FULL STACK DEVELOPER', department: 'SOFTWARE', location: 'SAN FRANCISCO', type: 'FULL-TIME' },
  { id: '4', title: 'MAGNETICS PHYSICIST', department: 'R&D', location: 'ZURICH', type: 'FULL-TIME' },
];

const Careers: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
      
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">JOIN THE GRID</h2>
        <p className="max-w-2xl mx-auto text-neutral-400">
          We are architects of invisible motion. We are looking for visionaries who want to change how the world interacts with physical objects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 border border-neutral-800 bg-neutral-950">
          <h3 className="text-lg font-bold mb-2">INNOVATION FIRST</h3>
          <p className="text-xs text-neutral-500">We don't follow trends. We build the infrastructure for the next century of interior automation.</p>
        </div>
        <div className="p-6 border border-neutral-800 bg-neutral-950">
          <h3 className="text-lg font-bold mb-2">DEEP WORK</h3>
          <p className="text-xs text-neutral-500">A culture that values focus, depth, and solving hard physics problems over quick fixes.</p>
        </div>
        <div className="p-6 border border-neutral-800 bg-neutral-950">
          <h3 className="text-lg font-bold mb-2">FULL BENEFITS</h3>
          <p className="text-xs text-neutral-500">Comprehensive health, equity packages, and a budget for your own home automation setup.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end border-b border-white pb-2 mb-8">
          <h3 className="text-xl tracking-widest">OPEN POSITIONS</h3>
          <span className="text-xs bg-white text-black px-2 py-1 font-bold">{jobs.length} ROLES</span>
        </div>

        {jobs.map((job) => (
          <div key={job.id} className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-neutral-800 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <div className="space-y-1 mb-4 md:mb-0">
              <h4 className="text-lg font-bold tracking-wide">{job.title}</h4>
              <div className="flex gap-4 text-xs text-neutral-500 group-hover:text-neutral-600">
                <span>{job.department}</span>
                <span>//</span>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs border border-neutral-800 px-2 py-1 group-hover:border-black">{job.type}</span>
              <button className="bg-white text-black p-2 md:p-3 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="md:hidden text-xs font-bold mr-2">APPLY</span>
                <ArrowUpRight className="w-4 h-4 inline-block" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Careers;
