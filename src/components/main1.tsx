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
      src: '/images/1.jpeg',
      alt: 'Collaborative classroom learning',
      caption: 'Students engaged in group problem-solving'
    },
    {
      src: '/images/2.jpeg',
      alt: 'Technology-integrated learning',
      caption: 'Digital tools enhancing education'
    },
    {
      src: '/images/3.jpeg',
      alt: 'Hands-on experimentation',
      caption: 'Learning through practical application'
    },
    {
      src: '/images/4.jpeg',
      alt: 'Creative expression',
      caption: 'Arts integration in education'
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
                alt={images[activeTab].alt}
                layout="fill" 
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{images[activeTab].alt}</h3>
                  <p className="text-white/80">{images[activeTab].caption}</p>
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
                    alt={img.alt}
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Teaching Practices Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Transforming Education for <span className="text-indigo-600">Generation Z</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our teaching practices are designed for today&apos;s learners, who expect engagement, relevance, and technology integration. 
              We focus on creating dynamic learning environments where students are active participants, not passive listeners.
              Through project-based learning, technology integration, and real-world applications, we foster the skills needed for future success.
            </p>
            
            <div className="space-y-4">
              {practices.map((practice, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`mt-1 p-3 rounded-lg bg-white shadow-md text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {practice.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600">{practice.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Stats/Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-indigo-100 blur-3xl -z-10" />
            
            <div className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach in Numbers</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "87%", label: "Student Engagement Rate", accent: "indigo" },
                  { value: "92%", label: "Project Completion Success", accent: "purple" },
                  { value: "45%", label: "Higher Critical Thinking", accent: "pink" },
                  { value: "3.8x", label: "Better Information Retention", accent: "blue" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className={`p-5 rounded-xl bg-gradient-to-br from-${stat.accent}-50 to-${stat.accent}-100 border border-${stat.accent}-200`}
                  >
                    <h4 className={`text-3xl font-bold text-${stat.accent}-600 mb-2`}>{stat.value}</h4>
                    <p className="text-gray-700 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-lg bg-indigo-50 border-l-4 border-indigo-500">
                <p className="text-indigo-900 italic">
                &quot;When students take responsibility for their learning, they transform from passive recipients into 
                  active creators of knowledge.&quot;
                </p>
                <p className="mt-2 text-indigo-700 font-medium text-sm">Dr. Emma Roberts, Education Director</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Want to learn more about our teaching methodologies?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all"
            >
              Schedule a Visit
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-medium shadow-lg border border-indigo-100 hover:border-indigo-300 transition-all"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}