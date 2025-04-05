"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image'; 

export default function AdmissionTabs() {
  const [activeTab, setActiveTab] = useState("Admission Instructions")

  const tabs = ["Admission Instructions", "Online Admission", "Prospectus", "School Tour"]

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-6 text-black">Admission Information</h1>
      <div className="max-w-5xl mx-auto p-4 border-3 rounded-lg bg-gray-200 shadow-lg mb-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex flex-wrap gap-1 border-b-2 border-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 text-sm rounded-lg focus:outline-none transition-all duration-200",
                activeTab === tab ? "bg-white text-purple-700 border-b-4 border-purple-700" : "bg-purple-700 text-white hover:bg-white hover:text-purple-700",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-white p-6 min-h-[500px] rounded-b-lg shadow-inner">
          {/* Content for each tab */}
          {activeTab === "Admission Instructions" && (
            <div className="text-gray-700 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4">General Information</h2>
              <p>Based on the admission test and other criteria, the school reserves the right to admit students who are found fit for admission. In all matters related to admission, the management’s decision is final.</p>
              <h2 className="text-2xl font-bold mt-6 mb-4">Document Required at the time of Admission</h2>
              <h3 className="text-xl font-semibold mb-2">Class- Pre Nursery to 8th</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Attested photocopy of birth certificate.</li>
                <li>Latest Passport Size Photographs-3</li>
                <li>Aadhaar Card Photocopy</li>
              </ul>
            </div>
          )}
          {activeTab === "Online Admission" && (
            <div className="flex flex-col md:flex-row items-center justify-center text-gray-700 mt-20 animate-fadeIn">
              <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Apply for Online Admission</h2>
                <p className="mb-6 text-center">Click the button below to start your online admission process. It&apos;s quick and easy!</p>
                <a
                  href="https://ssms.erpsonline.com/oa.php?id=41665694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
              <div className="md:w-1/2 p-4 flex justify-center">
                <Image src="/adm.gif" alt="Online Admission" width={60} height={95} className="w-60 max-w-xs h-95 rounded-lg shadow-lg" />
              </div>
            </div>
          )}
          {activeTab === "Prospectus" && (
            <div className="text-center text-gray-700 mt-20 animate-fadeIn">
              <iframe src="/BBA.pdf" className="w-full h-96 border rounded-lg mb-4"></iframe>
              <a href="/BBA.pdf" download className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Download Prospectus</a>
            </div>
          )}
          {activeTab === "School Tour" && (
            <div className="text-center text-gray-700 mt-20 animate-fadeIn">
              <video controls className="w-full h-96 rounded-lg shadow-lg">
                <source src="/sss.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}