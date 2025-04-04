"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ImageGrid } from "@/components/gallery-c/ImageGrid";
import { ImageModal } from "@/components/gallery-c/ImageModal";
import { FilterBar } from "@/components/gallery-c/FilterBar";
import { GalleryHero } from "@/components/gallery-c/GalleryHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";

// Define TypeScript interfaces for better type safety
interface Category {
  id: string;
  label: string;
}

interface GalleryImage {
  src: string;
  category: string;
  alt: string;
}

export default function GalleryPage() {
  const [activeCTA] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Categories data
  const categories: Category[] = [
    { id: "all", label: "All Photos" },
    { id: "events", label: "School Events" },
    { id: "sports", label: "Sports" },
    { id: "academic", label: "Academic" },
    { id: "arts", label: "Arts & Culture" }
  ];

  // Gallery images data
  const images: GalleryImage[] = [
    { 
      src: "/gallery/events/annual-day.jpg", 
      category: "events", 
      alt: "School Annual Day Celebration" 
    },
    { 
      src: "/gallery/sports/sports-meet.jpg", 
      category: "sports", 
      alt: "Annual Sports Meet Competition" 
    },
    { 
      src: "/gallery/academic/science-fair.jpg", 
      category: "academic", 
      alt: "Science Fair Projects Exhibition" 
    },
    { 
      src: "/gallery/arts/cultural-performance.jpg", 
      category: "arts", 
      alt: "Cultural Dance Performance" 
    },
    // Add more images as needed
  ];

  // Filter images based on selected category
  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <main className="flex min-h-screen flex-col">
      <CustomCursor activeCTA={activeCTA} />
      <Navbar />
      
      <div className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <GalleryHero />
        
        <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <FilterBar 
            categories={categories}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
          
          <ImageGrid 
            images={filteredImages}
            onImageClick={setSelectedImage}
          />

          <AnimatePresence mode="wait">
            {selectedImage && (
              <ImageModal 
                src={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}
          </AnimatePresence>
        </section>
      </div>

      <Footer />
    </main>
  );
}