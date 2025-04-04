"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from '@/components/footer';
import CustomCursor from "@/components/cursor";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);
  const [activeCTA] = useState<string | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div> <CustomCursor activeCTA={activeCTA} />
      <Navbar/>
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-rose-100/40 rounded-full blur-3xl -z-10" />
      
      {/* Hero section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 py-12 md:py-20 mt-19">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-blue-100 text-lg">
            We invite you to visit our school and experience our welcoming classrooms and supportive learning environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Visit <span className="text-blue-600">Kautilya</span> Academy
              </h2>
              <p className="mt-3 text-gray-600">
                We welcome you to visit our campus and experience our state-of-the-art facilities and vibrant learning environment.
              </p>
            </div>

            {/* Google Maps Integration */}
            <div className="relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.004288290015!2d76.83586084868041!3d28.193848376559252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37bdbdf8f7e7%3A0x9826ce5cf8796439!2sKautilya%20Academy%20Public%20School!5e0!3m2!1sen!2sin!4v1743583253765!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Presidency International School Location"
                className="absolute inset-0"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kautilya Academy</h3>
                    <p className="text-sm text-gray-600">Mohan Encalve,Sector-7 RHB, Bhiwadi, Distt-Alwar, Rajasthan</p>
                    <p className="text-xs text-blue-600 mt-1 font-medium">
                      <a href="https://g.co/kgs/sx8gaXF" target="_blank" rel="noreferrer" className="flex items-center gap-1">
                        Get Directions 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info cards grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="bg-blue-600 h-2" />
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact Numbers</h3>
                      <p className="text-sm text-gray-500">Reach out directly</p>
                    </div>
                  </div>
                  <div className="space-y-2 pl-2">
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-700">Main Office:</span> 
                      <a href="tel:+918875432490" className="text-blue-600 hover:underline">+91-9602255900</a>
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-700">Admissions:</span> 
                      <a href="tel:+918875432487" className="text-blue-600 hover:underline">+91-6386445105</a>
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-700">Admin:</span> 
                      <a href="tel:+918875432485" className="text-blue-600 hover:underline">+91-8209056542</a>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="bg-blue-600 h-2" />
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                      <p className="text-sm text-gray-500">Write to us anytime</p>
                    </div>
                  </div>
                  <div className="space-y-2 pl-2">
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-700">Principal:</span> 
                      <a href="mailto:umeshkumar_ka@yahoo.com" className="text-blue-600 hover:underline">umeshkumar_ka@yahoo.com</a>
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-700">Admissions:</span> 
                      <a href="mailto:umeshkumar_ka@yahoo.com" className="text-blue-600 hover:underline">umeshkumar_ka@yahoo.com</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* School hours and additional info */}
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="bg-blue-600 h-2" />
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">School Hours</h3>
                      <p className="text-sm text-gray-500">When to find us</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-2">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Academic Hours:</p>
                      <p className="text-sm text-gray-600">Monday-Saturday: 8:30 AM - 1:30 PM</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Administrative Office:</p>
                      <p className="text-sm text-gray-600">Monday-Saturday: 8:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="bg-blue-600 h-2" />
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visiting Information</h3>
                      <p className="text-sm text-gray-500">Plan your visit</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-2">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Campus Tours:</p>
                      <p className="text-sm text-gray-600">Monday-Saturday: 8:00 AM - 3:00 PM</p>
                      <p className="text-sm text-gray-600">By appointment only</p>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-8">
              <div className="bg-white border-0 shadow-xl rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 w-full" />
                <div className="bg-gradient-to-b from-blue-50 to-transparent p-6 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Have a question or want to schedule a visit? Fill out the form below and our team will respond promptly.
                  </p>
                </div>
                <div className="p-6 pt-4">
                  <form className="grid gap-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First name</label>
                        <input 
                          id="first-name" 
                          placeholder="Enter your first name" 
                          required 
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last name</label>
                        <input 
                          id="last-name" 
                          placeholder="Enter your last name" 
                          required 
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        required 
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="inquiry-type" className="text-sm font-medium text-gray-700">Inquiry Type</label>
                      <select 
                        id="inquiry-type"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors bg-white text-black font-medium"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="fees">Fee Structure</option>
                        <option value="campus">Campus Tour</option>
                        <option value="curriculum">Curriculum Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        placeholder="Please describe your inquiry in detail..."
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-colors min-h-[120px] resize-none text-gray-700"
                        required
                      />
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-rose-500 rounded-full"></span> All fields are required
                      </p>
                      <button 
                        type="submit" 
                        disabled={formStatus === "submitting"}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium disabled:opacity-70"
                      >
                        {formStatus === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : formStatus === "success" ? (
                          <span className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Sent!
                          </span>
                        ) : (
                          "Submit Message"
                        )}
                      </button>
                    </div>
                    
                    {formStatus === "success" && (
                      <div className="mt-3 bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                        Thank you for your message! Our team will get back to you soon.
                      </div>
                    )}
                    
                    {formStatus === "error" && (
                      <div className="mt-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg p-3 text-sm">
                        There was a problem sending your message. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional information section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kautilya Academy
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            Kautilya Academy is committed to providing a nurturing environment
              where students can excel academically and develop into well-rounded individuals.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 7v10l10 5 10-5V7"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                ),
                title: "Teaching Quality",
                description: "Dedicated and experienced committed to student success."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                ),
                title: "Extracurricular Activities",
                description: "A wide range of Art programs and sports to foster teamwork and leadership."
              },

              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                ),
                title: "NEP Curriculum",
                description: "The Curriculum aim to develop students cognative, social, emotional, creative and physical abilities."
              },
              {
                icon: <div className="text-4xl">👨‍👩‍👧‍👦</div>,
                title: "Supportive Community",
                description: "Warm, inclusive environment where every student receives individual attention."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            {/* <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all">
              Schedule a Campus Visit
            </button> */}
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
}