import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

//? Documents
import AnnualPlanPDF from "../assets/documents/Annual Plan.pdf";
import OpeningPlanPDF from "../assets/documents/Opening Plan.pdf";
import ClubConstPDF from "../assets/documents/Club Constitution.pdf";

//? Placeholder image for cards
import docIcon from "../assets/documentImage2.png";
import clubPic2 from "../assets/clubicondark.png"; // for header icon

const docs = [
  { id: 1, name: "2025 Annual Plan (overview).pdf", href: AnnualPlanPDF, date: "Jan 1, 2025" },
  { id: 2, name: "Opening Plan of the year 2025", href: OpeningPlanPDF, date: "Jan 5, 2025" },
  { id: 3, name: "Club Constitution document", href: ClubConstPDF, date: "Jan 10, 2025" },
];

export default function AnnualPlan() {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12 relative z-10">

        {/* Page Header */}
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

        {/* Section Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Annual Plan & Documents
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-6">
            Official plans and documents for the year. Click to preview or download.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, index) => (
            <motion.div
              key={d.id}
              className="bg-white rounded-lg shadow-lg overflow-visible border border-gray-200
                         cursor-pointer relative transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Date badge */}
              <div className="absolute -top-3 left-4 bg-cyan-700 text-white px-3 py-1 rounded-full font-semibold text-sm shadow">
                {d.date}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col items-center">
                {/* Document Image */}
                <img src={docIcon} alt="Document Icon" className="w-16 h-16 mb-2"/>
                
                {/* Divider line */}
                <hr className="w-full border-t border-gray-300 mb-4"/>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-center">{d.name}</h3>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => setPreviewFile(d.href)}
                    className="px-3 py-2 border rounded text-sm text-black transition-all duration-300
                               transform hover:bg-cyan-600 hover:text-white hover:scale-105 hover:shadow-md"
                  >
                    Preview
                  </button>
                  <a
                    href={d.href}
                    download
                    className="px-3 py-2 border rounded text-sm text-black transition-all duration-300
                               transform hover:bg-cyberTeal hover:scale-105 hover:shadow-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center p-4 pt-32"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white w-full max-w-4xl h-[80vh] rounded shadow-lg flex flex-col"
            >
              <div className="flex justify-between items-center p-2 border-b">
                <h3 className="font-bold text-lg">Document Preview</h3>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="text-red-500 font-bold text-xl px-2"
                >
                  &times;
                </button>
              </div>
              <iframe
                src={previewFile}
                className="flex-1 w-full"
                title="PDF Preview"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
