"use client";
import { HeroSection } from "@/components/about/HeroSection";
import  MissionVision  from "@/components/about/MissionVision";
import { StatsSection } from "@/components/about/StatsSection";
import {FacultySection}  from "@/components/about/TeamSection";
import { ValueCards } from "@/components/about/ValueCards";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import CustomCursor from "@/components/cursor";

export default function AboutPage() {
   
  const [activeCTA] = useState<string | null>(null);

  return (
    <div>
      <CustomCursor activeCTA={activeCTA} />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    
      <HeroSection />
      <StatsSection />
      <MissionVision />
      <StatsSection />
      <ValueCards />
      <FacultySection />
      
    </div>
    <Footer/>
    </div>
  );
}