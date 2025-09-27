import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import ActivityCard from "../components/ActivityCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import pic1 from "../assets/clubpic.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpeg";
import clubPic2 from "../assets/clubicondark.png";

const activities = [
  { id: 1, title: "Hacking Workshop 2025", date: "2025-10-10", venue: "ENIAD Lab A", images: [pic1, pic2] },
  { id: 2, title: "Web Hacking session 2025", date: "2025-11-02", venue: "Main Auditorium", images: [pic3] },
  { id: 3, title: "Cybersecurity Hackathon", date: "2025-11-15", venue: "Lab B", images: [pic4, pic5] },
];

const galleryImages = [pic1, pic2, pic3, pic4, pic5];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Notification logic: set a timestamp for activities if not already present
  useEffect(() => {
    const notifications = JSON.parse(localStorage.getItem("notifications") || "{}");
    if (!notifications.activities) {
      notifications.activities = new Date().toISOString();
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDetails = (activityId) => {
    navigate(`/activity/${activityId}`);
  };

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12 relative z-10">

        {/* Club Header */}
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

        {/* Activities Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Activities</h2>
          <p className="text-md md:text-lg text-gray-700">
            Upcoming events where the club hosts or participates.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <ActivityCard
              key={a.id}
              title={a.title}
              date={a.date}
              venue={a.venue}
              onDetailsClick={() => handleDetails(a.id)}
            />
          ))}
        </div>

        {/* Google Form Subscription */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Subscribe for New Club Members (2025-2026)
          </h3>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1buL0nv_ulI1a_nP434H4gtskA0FEqk1AvsSmXpApl4pBSg/viewform?embedded=true"
              width="640"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full max-w-2xl rounded-lg shadow-lg"
              title="Club Subscription Form"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 relative w-full max-w-3xl mx-auto group">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
            Memories & Past Activities
          </h3>
          <div className="overflow-hidden rounded-lg shadow-lg relative h-80 bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryImages[currentIndex]}
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => window.open(galleryImages[currentIndex], "_blank")}
              />
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 text-center space-y-2">
          <h3 className="font-bold text-2xl md:text-3xl mb-3">Join our socials</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://www.instagram.com/e_cybersec_club/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded text-black border border-gray-400 transition-all duration-300 transform hover:scale-105 hover:bg-[#E4405F] hover:text-white">Instagram</a>
            <a href="https://www.linkedin.com/company/akira-club/posts/?feedView=all" target="_blank" rel="noreferrer" className="px-4 py-2 rounded text-black border border-gray-400 transition-all duration-300 transform hover:scale-105 hover:bg-[#0077B5] hover:text-white">LinkedIn</a>
            <a href="#" className="px-4 py-2 rounded text-black border border-gray-400 transition-all duration-300 transform hover:scale-105 hover:bg-[#5865F2] hover:text-white">Discord</a>
            <a href="https://chat.whatsapp.com/DBc4WdUPcVnI2z0iHGRZPC?mode=ems_wa_c" className="px-4 py-2 rounded text-black border border-gray-400 transition-all duration-300 transform hover:scale-105 hover:bg-[#25D366] hover:text-white">WhatsApp</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
