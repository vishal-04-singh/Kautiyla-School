"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  Book,
  Bell,
} from "lucide-react";

interface SchoolSlide {
  src: string;
  alt: string;
  title: string;
  description: string;
  date?: string;
  category: "Event" | "Achievement" | "Announcement" | "Facility" | "Meeting";
  ctaText?: string;
  ctaLink?: string;
}

// Sample school-related content
const schoolSlides: SchoolSlide[] = [
  {
    src: "/Slider/1.jpg",
    alt: "Republic Day Celebration",
    title: "Republic Day Celebration",
    description:
      "Students dressed in vibrant patriotic attire celebrate Republic Day with enthusiasm, waving the Indian flag and showcasing their love for the nation.",
    date: "January 26, 2019",
    category: "Event",
    ctaText: "See Gallery",
    ctaLink: "/gallery",
  },
  {
    src: "/Slider/2.jpg",
    alt: "School Meeting & Planning",
    title: "School Meeting & Planning",
    description:
      "A discussion among school authorities and staff, strategizing for upcoming events and improvements to enhance students' educational experience.",
    date: "October 04, 2019",
    category: "Meeting",
    ctaText: "See Gallery",
    ctaLink: "/gallery",
  },
  {
    src: "/Slider/3.jpg",
    alt: "Christmas Celebration at School",
    title: "Christmas Celebration at School",
    description:
      "Young students dressed as Santa and elves celebrate the festive spirit of Christmas with fun activities, decorations, and joyful moments.",
    category: "Event",
    ctaText: "See Gallery",
    ctaLink: "/gallery",
  },
  {
    src: "/Slider/4.jpg",
    alt: "Joyful School Event",
    title: "Joyful School Event",
    description:
      "Excited students cheer and celebrate during a school function, enjoying a moment of happiness and togetherness in a lively atmosphere.",
    date: "April 27, 2020",
    category: "Event",
    ctaText: "See Gallery",
    ctaLink: "/gallery",
  },
];

const SchoolImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeRef = useRef<number>(5000); 

  // Category icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Event":
        return <Calendar className="h-5 w-5" />;
      case "Achievement":
        return <Award className="h-5 w-5" />;
      case "Facility":
        return <Book className="h-5 w-5" />;
      case "Announcement":
        return <Bell className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const goToSlide = useCallback(
    (index: number): void => {
      if (index === currentIndex) return;
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const nextSlide = useCallback((): void => {
    goToSlide((currentIndex + 1) % schoolSlides.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback((): void => {
    goToSlide((currentIndex - 1 + schoolSlides.length) % schoolSlides.length);
  }, [currentIndex, goToSlide]);

  // Handle keyboard navigation and autoplay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Space") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Autoplay logic
    if (!isPaused) {
      autoPlayRef.current = setTimeout(nextSlide, animationTimeRef.current);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex, nextSlide, prevSlide]);

  return (
    <div className="relative w-full bg-gray-100">
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Slides */}
        {schoolSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index < currentIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Full width image */}
            <div className="absolute inset-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
              <div className="w-full max-w-lg text-white">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  {getCategoryIcon(slide.category)}
                  <span>{slide.category}</span>
                  {slide.date && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{slide.date}</span>
                    </>
                  )}
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                {slide.ctaText && (
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-lg"
                  >
                    {slide.ctaText}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              {/* Slide indicators */}
              <div className="flex items-center gap-4">
                {schoolSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-blue-500 w-6"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  )}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolImageSlider;