"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: "🎯",
    title: "Aims & Obiectives",
    description: "To provide quality education at affordable fees by using Modern & Progressive techniques to achieve excellence in studies and all-round development of students to make them good citizen of our country."
  },
  {
    icon: "🌱",
    title: "Admission Policy",
    description: "Admission to various classes starts at the beginning of the academic session in March / April & July every year. If of a child get admission in the mid of the session. He / She will have to pay the fees for full session."
  },
  {
    icon: "🤝",
    title: "Age Limit",
    description: "P.G.-2½ year, Nursery-3+ years and LKG 4+ and, Prep-5 + years, Ist -6 + years, 2nd - 7+, 3rd-8+, 4th -9 + years, 5th-10 + years, 6th-11 + years, 7th-12 + years, 8th - 13 + years."
  },
  {
    icon: "💡",
    title: "Academics",
    description: "The School Curriculum is based on the recommendation of NCERT & RBSE."
  },
  {
    icon: "⭐",
    title: "Scheme of Examination",
    description: "The Academic year is divided in to two terms. In order to develop in the students the habit of regular studies the two terms include two rounds of unit test and Projects work in addition to the half yearly & Annual examination."
  },
  {
    icon: "🌍",
    title: "Inter Class Activity",
    description: "The school has an activity schedule for the whole year. These are conducted on every Saturday under the supervision of teachers. These activities aims to develop physical, literary and artistic skills of the students."
  }
  
  
];

export const ValueCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">ABOUT SCHOOL</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide our approach to education and shape our school community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className={`
                  text-gray-600 group-hover:text-Black/90 transition-colors duration-300
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}
                `}>
                  {value.description}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 
                    rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </div>
  );
};