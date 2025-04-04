export interface SchoolSlide {
    src: string;
    alt: string;
    title: string;
    description: string;
    date?: string;
    category: "Event" | "Achievement" | "Announcement" | "Facility";
    ctaText?: string;
    ctaLink?: string;
  }