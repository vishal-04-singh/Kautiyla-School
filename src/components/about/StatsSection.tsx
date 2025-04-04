"use client";
import { useRef } from "react";

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const {  } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const stats = [
  //   { number: "1500+", label: "Students" },
  //   { number: "120+", label: "Teachers" },
  //   { number: "95%", label: "Pass Rate" },
  //   { number: "50+", label: "Activities" },
  // ];

  return (
    <div ref={ref} className="py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      {/* <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.h3
                className="text-5xl font-bold mb-2"
                style={{
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
                }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  );
};