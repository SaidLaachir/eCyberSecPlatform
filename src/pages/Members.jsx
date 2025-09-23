import React, { useState } from "react";
import members from "../data/members";
import MemberCard from "../components/MemberCard";
import clubIcon from "../assets/clubicondark.png";
import PageWrapper from "../components/PageWrapper";

export default function Members() {
  const [openMemberId, setOpenMemberId] = useState(null);

  const handleClick = (id) => {
    setOpenMemberId(prev => (prev === id ? null : id)); // toggle current or open new
  };

  return (
    <PageWrapper>
      <section
        className="relative py-10"
        style={{
          backgroundImage: `url(${clubIcon})`,
          backgroundSize: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.95",
        }}
      >
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-white opacity-75"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center text-cyberBlack">
            Members — Bureau
          </h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Click a member's avatar to reveal role and LinkedIn.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {members.map(m => (
              <MemberCard
                key={m.id}
                member={m}
                isOpen={openMemberId === m.id}
                onClick={() => handleClick(m.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
