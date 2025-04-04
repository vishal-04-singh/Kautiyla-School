"use client";
import { motion } from "framer-motion";
import Image from 'next/image'; 

const faculty = [
  {
    name: "Mr. Umesh Kumar Dubey",
    role: "Director",
    image: "/d.jpeg",
    
  },
  {
    name: "Mr. vishal",
    role: "Director",
    image: "/p.jpg",
    
  }
  // Add more faculty members...
];

export const FacultySection = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Meet Our Faculty
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-80">
              <Image
                src={member.image}
                alt={member.name}
                width={60} height={95}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};