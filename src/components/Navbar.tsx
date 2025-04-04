"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Bell, Search, Home, Users, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Modified navigation structure without dropdown support
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navigationItems: NavItem[] = [
  {
    label: "HOME",
    href: "/",
    icon: <Home size={18} />,
  },
  {
    label: "ADMISSION",
    href: "/admission",
    icon: <Users size={18} />,
  },
  {
    label: "GALLERY",
    href: "/gallery",
    icon: <Calendar size={18} />,
  },
  {
    label: "ABOUT US",
    href: "/about-us",
    icon: <Users size={18} />,
  },
  {
    label: "CONTACT US",
    href: "/contact",
    icon: <Bell size={18} />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    scrolled: {
      height: "70px",
      background: "linear-gradient(90deg, #3F3D99 0%, #6A5ACD 100%)",
    },
    top: {
      height: "90px", 
      background: "linear-gradient(90deg, #3F3D99 0%, #6A5ACD 100%)",
    }
  };

  const logoVariants = {
    scrolled: {
      scale: 0.85,
    },
    top: {
      scale: 1,
    }
  };

  return (
    <motion.nav 
      className="sticky top-0 left-0 w-full shadow-lg flex items-center justify-between z-50 font-['Nunito', sans-serif]"
      variants={navbarVariants}
      animate={scrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center z-20">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
          <motion.div
            variants={logoVariants}
            animate={scrolled ? "scrolled" : "top"}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" passHref>
              <div className="relative">
                <div className="  ">
                  <Image
                    src="/klogo.png"
                    alt="Kautilya Academy Logo"
                    width={150}
                    height={90}
                    priority
                    className="cursor-pointer transition-transform duration-300 hover:scale-125"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        {/* Left Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center justify-start flex-1 ml-6">
          {navigationItems.slice(0, Math.ceil(navigationItems.length / 2)).map((item) => (
            <NavItemDesktop 
              key={item.label}
              item={item}
            />
          ))}
        </div>
        
        {/* Right Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center justify-end flex-1 mr-6">
          {navigationItems.slice(Math.ceil(navigationItems.length / 2)).map((item) => (
            <NavItemDesktop 
              key={item.label}
              item={item}
            />
          ))}
          
          {/* Search Button */}
          <div className="relative ml-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSearchActive(!searchActive);
              }}
              className="p-2 text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Search size={20} />
            </button>
            
            {/* Search Input */}
            <AnimatePresence>
              {searchActive && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "250px" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="absolute right-0 top-full mt-2 z-50"
                >
                  <input
                    type="text"
                    placeholder="Search our website..."
                    className="w-full p-3 rounded-lg border-2 border-purple-300 focus:border-purple-500 outline-none shadow-lg text-gray-800"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Announcement Button */}
          <Link href="/announcements" className="ml-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors">
              <Bell size={16} className="mr-1" />
              <span>UPDATES</span>
            </button>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white flex flex-col lg:hidden shadow-xl rounded-b-xl overflow-hidden z-40"
            >
              <div className="py-4">
                {navigationItems.map((item) => (
                  <NavItemMobile 
                    key={item.label}
                    item={item}
                    closeMenu={() => setIsOpen(false)}
                  />
                ))}
                
                {/* Mobile search */}
                <div className="px-6 py-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search our website..."
                      className="w-full p-3 pl-10 rounded-lg border-2 border-purple-200 focus:border-purple-500 outline-none text-gray-800 text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  </div>
                </div>
                
                {/* Quick links for parents and students */}
                <div className="px-6 py-4 bg-gray-50 mt-2">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">QUICK LINKS</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <QuickLink label="Parent Portal" href="/parent-portal" />
                    <QuickLink label="Student Login" href="/student-login" />
                    <QuickLink label="Calendar" href="/calendar" />
                    <QuickLink label="News" href="/news" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Desktop Navigation Item - Removed dropdown functionality
const NavItemDesktop = ({ item }: { item: NavItem }) => {
  return (
    <div className="relative mx-2 group">
      <a href={item.href} className="flex items-center text-white text-sm font-bold hover:text-orange-600 py-2 px-2 transition-colors">
        <span className="mr-1">{item.icon}</span>
        <span>{item.label}</span>
      </a>
    </div>
  );
};

// Mobile Navigation Item - Removed dropdown functionality
const NavItemMobile = ({ 
  item, 
  closeMenu
}: { 
  item: NavItem;
  closeMenu: () => void;
}) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <a 
        href={item.href}
        onClick={closeMenu}
        className="flex items-center px-6 py-3 text-gray-800 font-semibold text-sm hover:bg-purple-50"
      >
        <span className="text-purple-600 mr-3">{item.icon}</span>
        {item.label}
      </a>
    </div>
  );
};

// Quick link component for mobile menu
const QuickLink = ({ label, href }: { label: string; href: string }) => (
  <a 
    href={href}
    className="bg-white p-2 rounded text-xs text-center font-medium text-purple-700 border border-purple-100 hover:bg-purple-50 transition-colors"
  >
    {label}
  </a>
);

export default Navbar;