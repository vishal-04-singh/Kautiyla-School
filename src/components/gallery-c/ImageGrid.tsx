"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GalleryImage } from "@/types/gallery";

interface ImageGridProps {
  images: GalleryImage[];
  onImageClick: (src: string) => void;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => onImageClick(image.src)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-lg font-medium">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};