// src/components/ActivityCard.jsx
import React from "react";

export default function ActivityCard({ title, date, venue, onDetailsClick }) {
  return (
    <div
      className="bg-white p-4 rounded shadow flex justify-between items-center
      transition-all duration-300 transform hover:-translate-y-2
      hover:shadow-lg hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-400 z-10"
    >
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-500">
          {date} — {venue}
        </div>
      </div>
      <div>
        <button
          onClick={onDetailsClick}
          className="px-3 py-2 border rounded text-sm cursor-pointer transition-all duration-300
          hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-md"
        >
          Details
        </button>
      </div>
    </div>
  );
}
