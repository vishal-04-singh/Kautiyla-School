"use client";
import { motion } from "framer-motion";

export default function MissionVision (){
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">Introduction</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is to equip students with the knowledge, skills, and values needed to thrive in a rapidly evolving world. We foster creativity, critical thinking, and problem-solving abilities, encouraging students to explore new ideas with confidence. Beyond academics, we emphasize ethical values, social responsibility, and emotional intelligence to shape well-rounded individuals. By nurturing curiosity and a lifelong love for learning, we prepare students to adapt, innovate, and succeed in the modern world.
          </p>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Our Primary duty is to inculcate positive
          Virtures like courage, vitality, sensitiveness and creativities in children so that they can grow in to visionary leaders of upright character.
          Education in its real sense implies acquisition of knowledge, developing powers of reasoning and character building there by, transforming one into an enlightened human being.
          We at the Kautilya Academy, impart education in English Medium based on Indian Culture, Endeavour to build upright citizens who aspire for a high & a better life.
          </p>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Our Primary duty is to inculcate positive
          Virtures like courage, vitality, sensitiveness and creativities in children so that they can grow in to visionary leaders of upright character.
          Education in its real sense implies acquisition of knowledge, developing powers of reasoning and character building there by, transforming one into an enlightened human being.
          We at the Kautilya Academy, impart education in English Medium based on Indian Culture, Endeavour to build upright citizens who aspire for a high & a better life.
          </p>
          
        </motion.div>
      </div>
    </div>
  );
};