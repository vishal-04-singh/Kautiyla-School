"use client";
import { motion } from "framer-motion";

// Define the Category interface
interface Category {
  id: string;
  label: string;
}

interface FilterBarProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          aria-label={`Filter by ${category.label}`} 
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${activeFilter === category.id 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};