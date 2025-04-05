"use client";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src="/bgmian.mov" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Shaping Tomorrow&apos;s Leaders
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white">
            Since 1995, we&apos;ve been nurturing minds and building futures
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gray-100 border-3 text-purple-600 rounded-full font-semibold hover:bg-purple-200 transition-colors"
          >
            Take a Virtual Tour
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
};