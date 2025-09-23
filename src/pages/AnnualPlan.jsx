// src/pages/AnnualPlan.jsx
import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

//? Documents
import AnnualPlanPDF from "../assets/documents/Annual Plan.pdf";
import OpeningPlanPDF from "../assets/documents/Opening Plan.pdf";
import ClubConstPDF from "../assets/documents/Club Constitution.pdf";

const docs = [
  { id: 1, name: "2025 Annual Plan (overview).pdf", href: AnnualPlanPDF },
  { id: 2, name: "Opening Plan of the year 2025", href: OpeningPlanPDF },
  { id: 3, name: "Club Constitution document", href: ClubConstPDF },
];

export default function AnnualPlan() {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <PageWrapper>
      <section className="pt-28 space-y-12 relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Annual Plan & Documents
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-6">
            Official plans and documents. Click to download or preview.
          </p>
        </div>

        <div className="space-y-4">
          {docs.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow
                         transition-all duration-300 transform hover:-translate-y-2 
                         hover:shadow-lg hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-400"
            >
              <div>
                <div className="font-semibold text-lg md:text-xl">{d.name}</div>
                <div className="text-xs md:text-sm text-gray-500">
                  Last updated: Jan 1, 2025
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewFile(d.href)}
                  className="px-3 py-2 border rounded text-sm text-black transition-all duration-300
                             transform hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-md"
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
