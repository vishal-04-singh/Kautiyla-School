"use client";

import { useState } from "react";
import CustomCursor from "@/components/cursor";
import Navbar from "@/components/Navbar";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [activeCTA] = useState<string | null>(null);

  return (
    <div>
      <CustomCursor activeCTA={activeCTA} />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {children}
      </div>
    </div>
  );
}