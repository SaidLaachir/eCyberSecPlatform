import React, { useState, useEffect } from "react";
import clubPic from "../assets/clubpic2.jpg";
import schoolPic from "../assets/schoolpic.jpeg";
import clubPic2 from "../assets/clubicondark.png";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  const [hoverClub, setHoverClub] = useState(false);
  const [hoverSchool, setHoverSchool] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  // Auto-hide popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      {/* In-page popup message */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500
          ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        <div className="bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-4 min-w-[280px]">
          <span className="flex-1 font-semibold">Welcome to eCyberSec Club — ENIAD!</span>
          <button
            onClick={() => setShowPopup(false)}
            className="text-white font-bold text-lg hover:text-gray-200"
          >
            ×
          </button>
        </div>
      </div>

      <section className="pt-28 space-y-12">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <img
            src={clubPic2}
            alt="Club Icon"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{ backgroundColor: "transparent" }}
          />
          <div>
            <h1 className="text-3xl font-bold text-cyberBlack">
              eCyberSec Club — ENIAD
            </h1>
            <p className="text-base text-gray-700">
              Building practical cybersecurity skills, ethically and collaboratively.
            </p>
          </div>
        </header>

        {/* About Club */}
        <article
          className="bg-white rounded-xl shadow p-6 overflow-hidden"
          onMouseEnter={() => setHoverClub(true)}
          onMouseLeave={() => setHoverClub(false)}
        >
          <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${hoverClub ? 'max-h-[1000px]' : 'max-h-[200px]'}`}>
            <h2 className="font-semibold text-xl text-cyberBlack cursor-pointer">
              About the Club
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              eCyberSec Club is a student-led organization focused on hands-on cybersecurity training: CTFs, workshops,
              guest talks, and industry partnerships. We value ethics, continuous learning, and operational excellence.
            </p>
            <ul className="mt-4 list-disc pl-5 text-base">
              <li><strong>Mission:</strong> Empower students with practical cyber skills and responsible disclosure practice.</li>
              <li><strong>Vision:</strong> Create a local talent pipeline for secure-by-design thinking.</li>
            </ul>

            <img
              src={clubPic}
              alt="Club"
              className={`w-full h-64 object-cover rounded mt-4 transition-all duration-1000 ease-in-out ${hoverClub ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </div>
        </article>

        {/* About ENIAD */}
        <article
          className="bg-white rounded-xl shadow p-6 overflow-hidden"
          onMouseEnter={() => setHoverSchool(true)}
          onMouseLeave={() => setHoverSchool(false)}
        >
          <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${hoverSchool ? 'max-h-[1000px]' : 'max-h-[200px]'}`}>
            <h3 className="font-semibold text-xl text-cyberBlack cursor-pointer">
              About ENIAD
            </h3>
            <p className="mt-2 text-base leading-relaxed">
              ENIAD is our engineering school — a hub for applied learning and innovation. We run bootcamps and lab sessions
              to bridge theory and real security operations.
            </p>

            <div className="mt-4 flex gap-3 items-center justify-center md:justify-start">
              <a 
                href="https://eniad.ump.ma/" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 bg-blue-800 text-white rounded font-semibold transition-all duration-300 hover:bg-white hover:text-blue-900 hover:scale-105 shadow-md"
              >
                ENIAD Website
              </a>
            </div>

            <img
              src={schoolPic}
              alt="ENIAD"
              className={`w-full h-64 object-cover rounded mt-4 transition-all duration-1000 ease-in-out ${hoverSchool ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}
