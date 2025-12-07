import React from 'react';
import { Calendar, Award, BookOpen, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full mt-[-60px]">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-900/30 rounded-full border border-orange-500/30 backdrop-blur-sm">
          Admissions Open for 2024-25
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Shape Your Future With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-200">
            Excellence & Guidance
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
          Join the top-rated coaching institute for JEE, NEET, and Board exams. 
          Expert mentors, proven results, and a personalized learning approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg shadow-primary-600/40 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2">
            Explore Courses <BookOpen size={20} />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
            Watch Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export const InfoBar: React.FC = () => {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-16">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 p-2">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600">
              <Award size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Scholarship</p>
              <h3 className="text-lg font-bold text-slate-800">Up to 100% Off</h3>
              <a href="#" className="text-sm text-primary-600 font-medium hover:underline mt-1 inline-block">Take Test &rarr;</a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 p-2 md:pl-8">
            <div className="bg-purple-50 p-3 rounded-full text-purple-600">
              <Calendar size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">New Batches</p>
              <h3 className="text-lg font-bold text-slate-800">Starting April 15</h3>
              <a href="#" className="text-sm text-primary-600 font-medium hover:underline mt-1 inline-block">View Schedule &rarr;</a>
            </div>
          </div>

          {/* Action 1 */}
          <div className="flex items-center justify-center p-2 md:pl-8">
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2">
              <Calendar size={18} /> Book Demo Class
            </button>
          </div>

          {/* Action 2 */}
          <div className="flex items-center justify-center p-2 md:pl-8">
             <button className="w-full bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Download size={18} /> Brochure
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};