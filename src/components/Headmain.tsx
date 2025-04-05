"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toISOString().slice(0, 19).replace('T', ' ')
      setCurrentTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-white to-gray-50 font-sans">
      {/* Reduced padding on the container */}
      <div className="container mx-auto px-4 py-4 md:py-8 lg:py-12 bg-gray-200 rounded-lg shadow-lg">
        {/* UTC Time Display with reduced margin */}
       
        {/* Reduced gap between grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <Image
                src="/Slider/2.jpg"
                alt="Students in classroom at DPS International"
                width={800}
                height={500} // Reduced height
                className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Content Section with reduced spacing */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            A very warm welcome to  
              <span className="text-purple-800 block ">Kautilya Academy!</span>
            </h1>
            <div className="space-y-4 text-gray-700 text-base lg:text-lg">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed"
              >
                At Kautilya Academy, we take pride in offering a modern, child-centric approach to education from Nursery through Class 8. Our focus on building strong foundations in literacy and numeracy reflects how young minds learn best—through meaningful, engaging experiences.

We believe that every child is unique, and our dedicated, highly qualified educators ensure a personal approach to learning that nurtures both academic and emotional growth.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="leading-relaxed"
              >
                While literacy and numeracy remain at the heart of our program, we offer a broad and stimulating curriculum that encourages curiosity, creativity, and critical thinking. Our aim is to educate the whole child, creating a joyful and inspiring environment that fosters a love for learning to last a lifetime.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}