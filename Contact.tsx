import React, { useState } from 'react';
import { Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transmission Received. We will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row gap-20">
      
      {/* Contact Info */}
      <div className="md:w-1/3 space-y-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tighter">INITIATE<br />CONTACT</h2>
          <p className="text-neutral-400 text-sm">
            Interested in transforming your space? Reach out for inquiries, partnerships, or press requests.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 mt-1 text-white" />
            <div>
              <h4 className="font-bold text-sm mb-1">EMAIL</h4>
              <p className="text-neutral-500 text-xs">hello@maglevsystems.com</p>
              <p className="text-neutral-500 text-xs">press@maglevsystems.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-1 text-white" />
            <div>
              <h4 className="font-bold text-sm mb-1">HQ</h4>
              <p className="text-neutral-500 text-xs">800 Market St.</p>
              <p className="text-neutral-500 text-xs">San Francisco, CA 94102</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Github className="w-4 h-4" />
            </a>
        </div>
      </div>

      {/* Form */}
      <div className="md:w-2/3 bg-neutral-950 p-8 md:p-12 border border-neutral-900">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="group">
            <label className="block text-xs font-bold tracking-widest mb-2 group-focus-within:text-white text-neutral-500 transition-colors">NAME</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
              placeholder="ENTER YOUR NAME"
            />
          </div>
          
          <div className="group">
            <label className="block text-xs font-bold tracking-widest mb-2 group-focus-within:text-white text-neutral-500 transition-colors">EMAIL</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
              placeholder="ENTER YOUR EMAIL"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-bold tracking-widest mb-2 group-focus-within:text-white text-neutral-500 transition-colors">MESSAGE</label>
            <textarea 
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="HOW CAN WE HELP?"
            />
          </div>

          <button type="submit" className="bg-white text-black px-8 py-4 font-bold tracking-widest hover:bg-neutral-200 transition-colors w-full md:w-auto">
            TRANSMIT MESSAGE
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
