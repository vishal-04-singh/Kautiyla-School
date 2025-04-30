import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/favicon.ico"
                  alt="Kautilya logo"
                  width={24}
                  height={20}
                  className="text-indigo-900"
                />
              </div>
              <span className="font-bold text-lg">Kautilya Academy</span>
            </div>
            <p className="text-indigo-300 text-sm">
              Empowering the next generation through innovative education since
              1998.
            </p>
          </div>

          {[
            {
              title: "Quick Links",
              links: ["Home", "Admission", "Gallery", "About Us", "Contact Us"],
              href: ["/", "/admission", "/gallery", "/about-us", "/contact"],
            },
            {
              title: "Resources",
              links: [
                "Student Portal",
                "Parents Corner",
                "Career Services",
                "Alumni Network",
              ],
              href: [
                "/student-portal",
                "/parents-corner",
                "/career-services",
                "/alumni-network",
              ],
            },
            {
              title: "Connect",
              links: [
                "Contact Us",
                "Directions",
                "Social Media",
                "News & Updates",
              ],
              href: ["/contact", "/contact", "/contact", "/contact"],
            },
          ].map((col, idx) => (
            <div key={idx}>
              <h3 className="font-bold mb-4 text-lg">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={col.href[i]}
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-400 text-sm">
            © 2025 Vishal Singh. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="https://vishal-singh-pi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="text-sm">Developer Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
