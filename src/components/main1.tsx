'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBrain, FaUsers, FaRocket } from 'react-icons/fa';

export default function TeachingPractices() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const practices = [
    {
      title: "Active Learning",
      icon: <FaUsers className="text-amber-500" />,
      description: "Students engage directly with concepts through discussion, problem-solving, and collaboration rather than passive listening.",
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Expert Guidance",
      icon: <FaBrain className="text-indigo-500" />,
      description: "Teachers act as facilitators who ask thought-provoking questions, encouraging students to discover key ideas themselves.",
      color: "from-indigo-500 to-purple-400",
    },
    {
      title: "Responsibility Development",
      icon: <FaLightbulb className="text-emerald-500" />,
      description: "Students learn accountability for their choices, developing critical thinking and decision-making skills.",
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Innovation Culture", 
      icon: <FaRocket className="text-rose-500" />,
      description: "Creating an environment of curiosity and exploration that fosters lifelong learning and creative problem-solving.",
      color: "from-rose-500 to-pink-400",
    }
  ];

  const images = [
    {
      src: '/Slider/2.jpg'
     
    },
    {
      src: '/images/2.jpeg'
      
    },
    {
      src: '/images/3.jpeg'
      
    },
    {
      src: '/images/4.jpeg',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
            Educational Excellence
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-6">
            Engaging & Innovative Teaching
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Modern approaches that inspire curiosity, creativity and critical thinking in today&apos;s students.
          </p>
        </motion.div>

        {/* Featured Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-12 gap-4">
            {/* Main highlighted image */}
            <div className="col-span-12 sm:col-span-6 relative h-80 sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={images[activeTab].src} 
                alt={""}
                layout="fill" 
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  
                </div>
              </div>
            </div>

            {/* Thumbnail gallery */}
            <div className="col-span-12 sm:col-span-6 grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative h-40 sm:h-[242px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                    activeTab === idx ? 'ring-4 ring-indigo-500 scale-[1.02]' : 'grayscale hover:grayscale-0'
                  }`}
                >
                  <Image 
                    src={img.src} 
                    alt={""}
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        
        
       
      </div>
    </div>
  );
}