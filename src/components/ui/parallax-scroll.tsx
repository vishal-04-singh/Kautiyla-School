"use client";
import { useScroll, useTransform, motion } from "framer-motion"; // Fixed import from framer-motion
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define proper types for the component props
interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

// Define proper type for the container ref
interface ScrollContainerElement extends HTMLDivElement {
  scrollHeight: number;
  scrollTop: number;
  clientHeight: number;
}

export const ParallaxScroll = ({
  images,
  className,
}: ParallaxScrollProps) => {
  // Use proper typing for the ref
  const gridRef = useRef<ScrollContainerElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Define motion values for each column
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Calculate the number of images per column
  const third = Math.ceil(images.length / 3);

  // Split images into three parts
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((image, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={`grid-1-${idx}`}
              className="w-full"
            >
              <Image
                src={image}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Gallery image ${idx + 1}`}
                priority={idx === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((image, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={`grid-2-${idx}`}
              className="w-full"
            >
              <Image
                src={image}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Gallery image ${idx + third + 1}`}
                priority={idx === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((image, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={`grid-3-${idx}`}
              className="w-full"
            >
              <Image
                src={image}
                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Gallery image ${idx + (2 * third) + 1}`}
                priority={idx === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};