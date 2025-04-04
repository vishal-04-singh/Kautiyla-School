"use client";
import React from "react";

 import Main from "@/components/main";
import TeachingPractices from "@/components/main1";
import { useState } from "react";
import CustomCursor from "@/components/cursor";

const HomePage = () => {
  const [activeCTA] = useState<string | null>(null);
  return (
    <div>
      <CustomCursor activeCTA={activeCTA} />
      <Main />
      <TeachingPractices/>
    </div>
  );
};

export default HomePage;