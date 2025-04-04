'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { BsStars, BsArrowRightCircleFill } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import Image from 'next/image';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  // Fix: Properly declare both the state and setter
  const [activeCTA, setActiveCTA] = useState<string | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle video loading optimization
  useEffect(() => {
    setIsLoaded(true);
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      const videoPreload = new window.Image();
      videoPreload.onload = () => setVideoLoaded(true);
      videoPreload.src = '/poster.jpg';
    }
    
  }, []);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdmissionClick = () => {
    window.location.href = 'https://ssms.erpsonline.com/oa.php?id=41665694';
  };
  
  const handleExploreClick = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  // const handleSectionChange = (section: string) => {
  //   setActiveSection(section);
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      


      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-pink-200/20 blur-2xl" />
        </div>

        {/* Optimized video background */}
        {isLoaded && (
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-purple-900/50 z-10" />
            <div ref={heroRef} className="absolute inset-0">
              <picture>
                <source srcSet="/bg.webm" type="video/webm" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/poster.jpg"
                  className="object-cover w-full h-full scale-110"
                  preload="metadata"
                  onCanPlay={() => setVideoLoaded(true)}
                >
                  <source src="/sss.mp4" type="video/mp4" />
                </video>
              </picture>
              {!videoLoaded && (
                <div className="absolute inset-0 bg-indigo-50 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
            >
              <span className="text-white text-sm font-medium flex items-center gap-2">
                <BsStars className="text-yellow-300" /> Admissions Open for 2025-26
              </span>
            </motion.div>
            
            <h1 className="font-pretoria text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white tracking-widest drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                KAUTILYA ACADEMY
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light drop-shadow">
              Where <span className="font-semibold text-indigo-200">innovation</span> meets <span className="font-semibold text-purple-200">education</span> — Preparing tomorrow&apos;s leaders today.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveCTA('admission')}
                onMouseLeave={() => setActiveCTA(null)}
                onClick={handleAdmissionClick}
                className="relative overflow-hidden group rounded-xl py-3 px-8 text-lg md:text-xl
                  bg-white text-indigo-900 shadow-lg shadow-indigo-900/20 transition-all duration-300
                  hover:shadow-xl hover:shadow-indigo-900/30 flex items-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FaGraduationCap size={22} className="z-10 relative text-indigo-600 group-hover:text-white transition-colors duration-300" />
                <span className="z-10 relative group-hover:text-white transition-colors duration-300 font-bold">JOIN NOW</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveCTA('explore')}
                onMouseLeave={() => setActiveCTA(null)}
                onClick={handleExploreClick}
                className="relative overflow-hidden group rounded-xl py-3 px-8 text-lg md:text-xl
                  bg-indigo-600/20 backdrop-blur-md text-white border border-white/30 shadow-lg transition-all duration-300
                  hover:bg-indigo-600/30 flex items-center gap-2"
              >
                <IoRocketSharp size={22} className="z-10 relative" />
                <span className="z-10 relative font-bold">EXPLORE PROGRAMS</span>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Quick Stats */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: <FaChalkboardTeacher />, stat: "100+", label: "Expert Faculty" },
              { icon: <FaGraduationCap />, stat: "98%", label: "Success Rate" },
              { icon: <FaLaptop />, stat: "50+", label: "Tech Labs" },
              { icon: <FaPalette />, stat: "30+", label: "Creative Spaces" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300"
              >
                <div className="text-white text-2xl mb-2">{item.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-white">{item.stat}</p>
                <p className="text-indigo-100 text-sm md:text-base">{item.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium"
            >
              Our Curriculum
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700"
            >
              Choose Your Path
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Designed for Gen Z learners with interactive tech-integrated curriculum, creativity, and real-world skills.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Science & Innovation",
                desc: "Hands-on experiments, coding, and cutting-edge research projects.",
                icon: "🧪",
                color: "from-blue-500 to-cyan-400",
                features: ["Robotics Lab", "AI Workshops", "Science Olympiads"]
              },
              {
                title: "Creative Arts & Design",
                desc: "Express yourself through digital media, traditional arts, and design thinking.",
                icon: "🎨",
                color: "from-purple-500 to-pink-400",
                features: ["Digital Studio", "3D Printing", "Creative Portfolio"]
              },
              {
                title: "Business & Entrepreneurship",
                desc: "Develop leadership skills, business acumen, and launch your own startup.",
                icon: "💼",
                color: "from-amber-500 to-orange-400",
                features: ["Startup Incubator", "Pitch Competitions", "Mentor Network"]
              },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-2xl bg-white p-1 shadow-xl group"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    ['--tw-gradient-from' as string]: program.color.split(' ')[0].split('-')[1],
                    ['--tw-gradient-to' as string]: program.color.split(' ')[2],
                  } as React.CSSProperties} />
                
                <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{program.desc}</p>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-sm font-medium mt-6 text-indigo-600 group-hover:text-indigo-800 transition-colors"
                  >
                    Learn more <BsArrowRightCircleFill className="text-base" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
                Campus Life
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                Experience <span className="text-indigo-600">vibrant</span> student life
              </h2>
              
              <p className="text-gray-600 mt-4">
                Our campus is designed for the modern student. With spaces that inspire creativity, 
                collaboration, and innovation, you&apos;ll find yourself in an environment that nurtures 
                both academic excellence and personal growth.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Tech-Enabled Spaces",
                    desc: "Smart classrooms, high-speed WiFi, and digital collaboration tools."
                  },
                  {
                    title: "Creative Commons",
                    desc: "Dedicated spaces for art, music, podcasting, and digital content creation."
                  },
                  {
                    title: "Student Hub",
                    desc: "A central space for socializing, events, and student-led activities."
                  }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/20"
              >
                Virtual Campus Tour
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, zIndex: 20 }}
                  className={`overflow-hidden rounded-2xl shadow-lg ${
                    idx % 2 === 0 ? 'transform translate-y-8' : ''
                  }`}
                >
                  <div className="bg-gradient-to-br from-indigo-200 to-purple-200 aspect-square rounded-2xl flex items-center justify-center">
                    <Image src="/images/1.jpeg" alt="" width={400} height={400}/>
                    {/* Replace with actual campus images */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-t from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Why Students <span className="text-indigo-300">Love</span> Kautilya
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-indigo-200 mt-4 max-w-2xl mx-auto"
            >
              Education reimagined for the next generation
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Future-Ready Curriculum",
                desc: "Courses designed around emerging technologies and future career paths.",
                icon: "🚀"
              },
              {
                title: "Industry Connections",
                desc: "Regular interaction with industry leaders and real-world project opportunities.",
                icon: "🔗"
              },
              {
                title: "Global Exposure",
                desc: "Virtual exchange programs and international collaborative projects.",
                icon: "🌍"
              },
              {
                title: "Personalized Learning",
                desc: "Adaptive learning paths tailored to individual strengths and interests.",
                icon: "🎯"
              },
              {
                title: "Mental Health Focus",
                desc: "Dedicated wellness programs and support systems for student wellbeing.",
                icon: "🧠"
              },
              {
                title: "Community Impact",
                desc: "Opportunities to apply learning through meaningful social projects.",
                icon: "💫"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-indigo-100">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAdmissionClick}
              className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-medium text-lg 
                hover:bg-indigo-100 transition-all duration-300 shadow-lg shadow-indigo-900/30"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-1"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-20 h-20 text-5xl">💬</div>
                    <div className="w-full aspect-square rounded-2xl bg-indigo-100 overflow-hidden">
                      {/* Student image placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                        <span className="text-6xl">👩‍🎓</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-800 italic mb-6">
                    &quot;Kautilya Academy transformed my education experience. The tech-focused curriculum and 
                    creative learning spaces helped me discover my passion for digital design and launch my own 
                    social media brand while still in school!&quot;
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-indigo-800">Aanya Sharma</h4>
                    <p className="text-gray-600">Class of 2024, Digital Media Student</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-12 text-center"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-xl" />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Shape Your Future?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-indigo-100 max-w-2xl mx-auto mb-8"
            >
              Join the next generation of innovators, creators, and leaders at Kautilya Academy. 
              Applications for 2025-26 academic year are now open!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdmissionClick}
                className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-medium text-lg 
                  hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Apply Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white/70 px-8 py-3 rounded-xl font-medium text-lg 
                  hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Visit
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        {activeCTA === 'admission' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-white mt-4 bg-indigo-600/20 backdrop-blur-md px-4 py-2 rounded-lg inline-block"
          >
            Admission is active
          </motion.p>
        )}  
      </section>

      
    </main>
  );
};

export default Home;