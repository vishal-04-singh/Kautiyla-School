"use client";

import React from 'react';
// import { AdmissionTabs } from '@/components/box';
import Ad from '@/components/box';
import Navbar from '@/components/Navbar';
import Slider from '@/components/ImageSlider';
import Footer from '@/components/footer';
import { useState } from "react";
import CustomCursor from "@/components/cursor";

const AdmissionPage = () => {
  
      const [activeCTA] = useState<string | null>(null);
  return (
    <div><CustomCursor activeCTA={activeCTA} />
    <div className='bg-gradient-to-b from-indigo-50/50 to-white w-full min-h-screen'>
      <Navbar />
      
      {/* Hero section with image slider */}
      <div className="relative">
        <Slider/>
        {/* <div className="absolute inset-0 bg-indigo-900/30 flex items-center justify-center">
          <div 
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 flex items-center justify-center">
              Admission 2025-26
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto ">
              Begin your journey of academic excellence at Kautilya Academy
            </p>
            <button
              className="mt-6 bg-white text-indigo-700 py-3 px-8 rounded-full font-medium shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div> */}
      </div>

      {/* Decorative elements */}
      <div className="relative">
        <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-indigo-200/30 blur-3xl -z-10" />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl -z-10" />
      </div>

      {/* Stats section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "98%", label: "Placement Rate" },
            { number: "15:1", label: "Student-Faculty Ratio" },
            { number: "50+", label: "Programs Offered" },
            { number: "30+", label: "Campus Activities" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-3xl font-bold text-indigo-700">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Admission tabs section */}
      {/* <div className="py-12 px-4">
        <AdmissionTabs />
      </div> */}
      <div><Ad/></div>

      {/* Testimonial section */}
      <div className="bg-indigo-900 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto relative">
                  {/* Add student image here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-5xl">
                    👨‍🎓
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="text-3xl text-indigo-100 mb-4">&quot;</div>
                <p className="text-white text-lg italic mb-6">
                  Applying to Kautilya was one of the best decisions I&apos;ve made. The admissions team was incredibly 
                  supportive throughout the process, and the scholarship opportunities made quality education accessible for me.
                </p>
                
                <h4 className="text-white font-medium">Rahul Sharma</h4>
                <p className="text-indigo-200">Computer Science, Class of 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Begin Your Academic Journey?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Applications for the 2025-26 academic year are now open. Join our community of scholars, 
          innovators, and future leaders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-medium shadow-lg"
          >
            Apply Now
          </button>
          <button
            className="bg-white border border-indigo-200 text-indigo-700 py-3 px-8 rounded-xl font-medium"
          >
            Schedule a Campus Tour
          </button>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default AdmissionPage;