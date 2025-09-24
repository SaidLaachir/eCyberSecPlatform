import React from "react";

export default function ActivityCard({ title, date, venue, onDetailsClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between
                 border border-gray-200 transition-all duration-300
                 hover:scale-105 hover:shadow-cyan-500/40 cursor-pointer z-10"
    >
      {/* Header strip */}
      <div className="bg-cyan-700 text-white px-4 py-2 flex justify-between items-center">
        <span className="font-bold text-lg">Activity</span>
        <span className="italic text-sm">{date}</span>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{venue}</p>
        </div>

        {/* Details Button */}
        <button
          onClick={onDetailsClick}
          className="px-3 py-2 border rounded text-sm text-cyan-700 border-cyan-600
                     hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-105"
        >
          Details
        </button>
      </div>
    </div>
  );
}
