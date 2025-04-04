"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "1995",
    title: "Foundation",
    description: "School established with a vision for excellence",
  },
  {
    year: "2005",
    title: "Digital Revolution",
    description: "Introduction of smart classrooms and tech labs",
  },
  {
    year: "2015",
    title: "Sports Complex",
    description: "State-of-the-art sports facilities inaugurated",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description: "Launch of STEM innovation center",
  },
];

export const Timeline = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1" />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full" />
              <div className="flex-1 p-6">
                <div className={`bg-white rounded-xl shadow-lg p-6
                  ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                >
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    {milestone.year}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};