"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { BsStars, BsArrowRightCircleFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import Headmain from "./Headmain";

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
      videoPreload.src = "/poster.jpg";
    }
  }, []);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4
          }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdmissionClick = () => {
    window.location.href = "https://ssms.erpsonline.com/oa.php?id=41665694";
  };

  const handleExploreClick = () => {
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleSectionChange = (section: string) => {
  //   setActiveSection(section);
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
      >
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
                  <source src="/bgmian.mov" type="video/mp4" />
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
                <BsStars className="text-yellow-300" /> Admissions Open for
                2025-26
              </span>
            </motion.div>

            <h1 className="font-pretoria text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white tracking-widest drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 font">
                KAUTILYA ACADEMY
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light drop-shadow">
              Where{" "}
              <span className="font-semibold text-indigo-200">innovation</span>{" "}
              meets{" "}
              <span className="font-semibold text-purple-200">education</span> —
              Preparing tomorrow&apos;s leaders today.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveCTA("admission")}
                onMouseLeave={() => setActiveCTA(null)}
                onClick={handleAdmissionClick}
                className="relative overflow-hidden group rounded-xl py-3 px-8 text-lg md:text-xl
                  bg-white text-indigo-900 shadow-lg shadow-indigo-900/20 transition-all duration-300
                  hover:shadow-xl hover:shadow-indigo-900/30 flex items-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FaGraduationCap
                  size={22}
                  className="z-10 relative text-indigo-600 group-hover:text-white transition-colors duration-300"
                />
                <span className="z-10 relative group-hover:text-white transition-colors duration-300 font-bold">
                  JOIN NOW
                </span>
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
      <section
        id="programs"
        className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium"
            >
              Our School
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700"
            >
              KAUTILYA ACADEMY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Public School
            </motion.p>
          </div>
          <div><Headmain/></div>
        </div>
      </section>

      {/* Campus Life Section */}
      

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 bg-gradient-to-t from-indigo-900 to-purple-900 text-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Why Students <span className="text-indigo-300">Love</span>{" "}
              Kautilya
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
                title: "Caring & Expert Teachers",
                desc: "Our teachers are not only highly qualified but also warm, patient, and experienced in early childhood education. They guide young learners with care and dedication, ensuring each child feels supported and encouraged.",
                icon: "🌟",
              },
              {
                title: "Interactive Multimedia Classes",
                desc: "We bring lessons to life with colorful visuals, fun videos, and interactive tools that make learning exciting and easier for young minds to grasp.",
                icon: "🎥",
              },
              {
                title: " Art for Little Creators",
                desc: "Children explore their imagination through drawing, painting, and crafts—developing creativity and building confidence through joyful expression.",
                icon: "🎨",
              },
              {
                title: "Safe & Happy Learning Environment",
                desc: "We provide a safe, secure, and welcoming space where children feel comfortable, respected, and free to be themselves.",
                icon: "🏫",
              },
              {
                title: "Community & Parent Involvement",
                desc: "We believe in teamwork! Through school events, celebrations, and projects, we connect with families and the local community to help children learn values and build social awareness.",
                icon: "🤝",
              },
              {
                title: "Whole-Child Development",
                desc: "We focus on more than just academics. Our programs build good character, emotional understanding, healthy habits, and social skills—helping children grow into kind and capable individuals.",
                icon: "🌱",
              },
              
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
              Join the next generation of innovators, creators, and leaders at
              Kautilya Academy. Applications for 2025-26 academic year are now
              open!
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

              
            </motion.div>
          </motion.div>
        </div>
        {activeCTA === "admission" && (
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
