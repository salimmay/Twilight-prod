import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // <--- New State for Mobile Menu
  const navRef = useRef(null);

  // 1. Scroll Animation Logic
  useEffect(() => {
    // Entrance
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
    );

    // Scroll Listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Toggle Function
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'py-4 bg-[#030014]/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'py-8 bg-transparent border-b border-transparent'
        }`}
      >
        {/* LOGO */}
        <a href="/" className="group flex flex-col z-20">
          <span className="font-display font-bold text-xl tracking-tighter text-white group-hover:opacity-80 transition-opacity">
            TWILIGHT
          </span>
          <span className="text-[0.5rem] font-mono tracking-[0.3em] uppercase text-sunset">
            Prod. TN
          </span>
        </a>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10">
          {['WORK', 'AGENCY'].map((item) => (
            <a 
              key={item}
              href={item === 'WORK' ? '/work' : `/${item.toLowerCase()}`}
              className="text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sunset group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a href="/contact" className={`border px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${isScrolled ? 'bg-white text-black hover:bg-sunset hover:text-white' : 'bg-transparent text-white border-white/30 hover:border-white'}`}>
            Start Project
          </a>
        </div>

        {/* MOBILE MENU BUTTON (Visible on Mobile) */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white z-20 focus:outline-none"
        >
          <span className="font-mono text-xs uppercase tracking-widest hover:text-sunset transition-colors">
            {mobileOpen ? 'CLOSE' : 'MENU'}
          </span>
        </button>
      </nav>


      {/* --- MOBILE FULL SCREEN OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-[#030014] z-[90] flex flex-col justify-center px-8 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mobile Links */}
        <div className="flex flex-col gap-8">
           {['WORK', 'AGENCY', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={item === 'WORK' ? '/work' : `/${item.toLowerCase()}`}
              onClick={toggleMobileMenu} // Close menu when clicked
              className="text-5xl font-display font-bold text-white hover:text-stroke-sunset hover:text-transparent transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">Get in touch</p>
          <a href="tel:+21654615700" className="block text-xl text-white mb-2">+216 54 615 700</a>
          <a href="mailto:contact@twilight.tn" className="block text-xl text-white">contact@twilight.tn</a>
        </div>

        {/* Decoration */}
        <div className="absolute bottom-8 left-8 text-[10px] font-mono uppercase tracking-widest text-white/20">
          Twilight Production © 2026
        </div>
      </div>
    </>
  );
}