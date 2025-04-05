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
    { id: "christmas", label: "christmas" },
    { id: "Diwali", label: "Diwali" },
    { id: "Republic Day", label: "Republic Day" },
    { id: "Yoga", label: "Yoga" }
  ];

  // Gallery images data
  const images: GalleryImage[] = [
    { 
      src: "/diwali/1.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/diwali/2.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/diwali/3.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/diwali/4.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/diwali/5.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/diwali/6.jpg", 
      category: "Diwali",
      alt: "Diwali Celebration" 
      
    },
    { 
      src: "/yoga/1.jpg",
      category: "Yoga",
      alt: "Yoga Day Celebration" 
    },
    { 
      src: "/yoga/2.jpg",
      category: "Yoga",
      alt: "Yoga Day Celebration" 
    },
    { 
      src: "/yoga/3.jpg",
      category: "Yoga",
      alt: "Yoga Day Celebration" 
    },
    { 
      src: "/rep/1.jpg",
      category: "Republic Day",
      alt: "Republic Day Celebration"
      
    },
    { 
      src: "/rep/2.jpg",
      category: "Republic Day",
      alt: "Republic Day Celebration"
      
    },
    { 
      src: "/rep/3.jpg",
      category: "Republic Day",
      alt: "Republic Day Celebration"
      
    },
    { 
      src: "/rep/4.jpg",
      category: "Republic Day",
      alt: "Republic Day Celebration"
      
    },
    { 
      src: "/rep/5.jpg",
      category: "Republic Day",
      alt: "Republic Day Celebration"
      
    },
    { 
      src: "/christmas/1.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/2.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/3.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/4.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/5.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/6.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/7.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    { 
      src: "/christmas/8.jpg",
      category: "christmas",
      alt: "Christmas Celebration"
      
    },
    
    
    
    
    
    
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