import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-6 mt-12 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: copyright */}
        <div className="text-sm text-gray-300">
          &copy; {currentYear} eCyberSec Club — ENIAD. All rights reserved.
        </div>

        {/* Right: navigation links */}
        <div className="flex gap-4 text-sm">
          <a href="/" className="hover:text-cyan-300 transition-colors">Home</a>
          <a href="/members" className="hover:text-cyan-300 transition-colors">Members</a>
          <a href="/activities" className="hover:text-cyan-300 transition-colors">Activities</a>
          <a href="/annual-plan" className="hover:text-cyan-300 transition-colors">Annual Plan</a>
          <a href="/writeups" className="hover:text-cyan-300 transition-colors">Write-ups</a> {/* ✅ new link */}
        </div>
      </div>
    </footer>
  );
}
