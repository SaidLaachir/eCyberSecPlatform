import React from "react";

export default function WriteUpCard({ index, title, date, description, link }) {
  return (
    <div
      className="bg-white p-4 rounded shadow flex flex-col justify-between
                 transition-all duration-300 transform hover:scale-105
                 hover:shadow-lg hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-400 z-10"
    >
      {/* Header */}
      <div className="bg-cyan-700 text-white px-3 py-1 rounded mb-3 flex justify-between items-center">
        <span className="font-bold text-sm">{`0${index + 1}`}</span>
        <span className="italic text-xs">{date}</span>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>

      {/* Read More Button */}
      <a
        href={link}
        className="px-3 py-2 border rounded text-sm text-cyan-700 border-cyan-600
                   hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-105"
      >
        Read More
      </a>
    </div>
  );
}
