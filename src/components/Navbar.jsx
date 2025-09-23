import React from "react";
import { Link, useLocation } from "react-router-dom";
import clubIcon from "../assets/clubicon.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/annual-plan", label: "Annual Plan" },
  { to: "/activities", label: "Activities" }
];

export default function Navbar() {
  const loc = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 text-white shadow-xl z-50 h-24">
      {/* Scratches / Crack Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[length:3px_3px] opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-4 z-20">
          <img
            src={clubIcon}
            alt="Club Logo"
            className="w-16 h-16 object-cover shadow-md drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{ backgroundColor: "transparent" }} // transparent frame
          />
          <div>
            <div className="font-extrabold text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]">
              eCyberSec Club
            </div>
            <div className="text-sm text-gray-300 italic tracking-wide">
              ENIAD — Cybersecurity Society
            </div>
          </div>
        </div>

        {/* Centered Menu Links */}
<div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-10 text-lg font-semibold z-10">
  {links.map((l) => (
    <Link
      key={l.to}
      to={l.to}
      className={`transition-all duration-300 ease-in-out hover:scale-110 hover:text-cyan-200 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${
        loc.pathname === l.to
          ? "text-cyan-300 font-bold"
          : "text-white"
      }`}
    >
      {l.label}
    </Link>
  ))}
</div>


        {/* Mobile Menu */}
        <div className="ml-auto md:hidden z-20">
          <MobileMenu links={links} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ links }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen((s) => !s)} className="p-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-white drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]"
        >
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow p-4 w-44 z-40">
          {links.map((l) => (
            <div key={l.to} className="py-2 border-b last:border-b-0">
              <Link to={l.to} onClick={() => setOpen(false)} className="font-medium">
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
