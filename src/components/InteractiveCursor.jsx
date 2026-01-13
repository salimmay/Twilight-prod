import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function InteractiveCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // 1. Move logic
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power2.out" });
    };

    // 2. Hover Interaction logic
    const onHover = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0 }); // Hide inner dot
      gsap.to(followerRef.current, { scale: 3, backgroundColor: '#ff4b1f', opacity: 0.5, mixBlendMode: 'screen' });
    };
    
    const onLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1 });
      gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', opacity: 1, mixBlendMode: 'normal' });
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add magnetic effect to all links and buttons
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}