import React from 'react';

export default function ContactButton() {
  return (
    <a 
      href="https://wa.me/21654615700"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[80] group flex items-center gap-4 cursor-pointer mix-blend-difference"
    >
      <span className="hidden md:block text-white text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        Start Project
      </span>
      
      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-void/50 backdrop-blur-sm group-hover:border-sunset group-hover:scale-110 transition-all duration-300">
        {/* Simple Message Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-sunset transition-colors">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </a>
  );
}