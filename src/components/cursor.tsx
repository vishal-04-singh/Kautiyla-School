"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  activeCTA: string | null;  // This expects a string or null
}

const CustomCursor: React.FC<CustomCursorProps> = ({ activeCTA }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track cursor for hover effects
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block">
      <motion.div 
        className="fixed w-8 h-8 rounded-full bg-indigo-500/20 z-50 pointer-events-none"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          scale: activeCTA ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div 
        className="fixed w-4 h-4 rounded-full bg-indigo-500/40 z-50 pointer-events-none"
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
        }}
        transition={{ type: "spring", damping: 25 }}
      />
    </div>
  );
};
export default CustomCursor;
