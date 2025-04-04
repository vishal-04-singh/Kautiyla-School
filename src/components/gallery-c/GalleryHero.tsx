"use client";
import { motion } from "framer-motion";

export const GalleryHero = () => {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-40 z-0" />
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our School Memories
          </h1>
          <p className="text-xl text-gray-200">
            Capturing moments, creating stories, and sharing experiences
          </p>
        </motion.div>
      </div>
    </div>
  );
}