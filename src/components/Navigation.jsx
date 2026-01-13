import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // 1. Simple Entrance Animation (Entire Bar slides down)
    // We only animate 'y' and 'opacity' of the container, avoiding conflicts with children
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
    );

    // 2. Scroll Listener
    const handleScroll = () => {
      // Add background earlier (at 50px) to prevent overlap issues quickly
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on mount in case we reload halfway down the page
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-4 bg-[#030014]/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'py-8 bg-transparent border-b border-transparent'
      }`}
    >
      {/* LOGO - ALWAYS VISIBLE */}
      <a href="/" className="group flex flex-col z-20">
        <span className="font-display font-bold text-xl tracking-tighter text-white group-hover:opacity-80 transition-opacity">
          TWILIGHT
        </span>
        <span className="text-[0.5rem] font-mono tracking-[0.3em] uppercase text-sunset">
          Prod. TN
        </span>
      </a>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-10">
        
        {/* WORK LINK */}
        <a 
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors relative group py-2"
        >
          Work
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sunset group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* AGENCY LINK */}
        <a 
          href="/agency"
          className="text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors relative group py-2"
        >
          Agency
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sunset group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* CONTACT BUTTON */}
        <a 
          href="/contact" 
          className={`border px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
            isScrolled 
              ? 'bg-white text-black border-white hover:bg-sunset hover:text-white hover:border-sunset' 
              : 'bg-transparent text-white border-white/30 hover:border-white'
          }`}
        >
          Start Project
        </a>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-white cursor-pointer hover:text-sunset transition-colors">
        <span className="font-mono text-xs uppercase tracking-widest">MENU</span>
      </div>
    </nav>
  );
}