import React from "react";

export default function MemberCard({ member, isOpen, onClick }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <button
        onClick={onClick}
        className="rounded-full overflow-hidden w-32 h-32 flex items-center justify-center border-4 border-cyberTeal shadow-lg focus:outline-none transform transition duration-500 hover:scale-110 hover:rotate-3"
        aria-expanded={isOpen}
        title={`${member.name} — click for info`}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </button>

      <div className="mt-3">
        <div className="font-bold text-lg text-cyberBlack">{member.name}</div>
        <div className="text-md font-medium text-cyberTeal">{member.role}</div>
      </div>

      <div
        className={`mt-2 w-full transition-all duration-500 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white p-3 rounded shadow-sm border">
          <p className="text-sm">{member.bio}</p>
          <a
            className="text-sm block mt-2 underline text-cyberTeal"
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
