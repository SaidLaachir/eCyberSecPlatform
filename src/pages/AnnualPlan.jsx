import React from "react";
import PageWrapper from "../components/PageWrapper";

const docs = [
  {id:1, name: "2025 Annual Plan (overview).pdf", href: "/docs/2025-annual-plan.pdf"},
  {id:2, name: "Workshop Calendar 2025.xlsx", href: "/docs/workshop-calendar-2025.xlsx"},
  {id:3, name: "Club Constitution.pdf", href: "/docs/constitution.pdf"}
];

export default function AnnualPlan(){
  return (
    <PageWrapper>

    <section className="pt-28 space-y-12">

    <section>
      <h2 className="text-2xl font-bold mb-4">Annual Plan & Documents</h2>
      <p className="text-sm text-gray-700 mb-6">Official plans and documents. Click to download or preview.</p>

      <div className="space-y-3">
        {docs.map(d => (
          <div key={d.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <div className="font-semibold">{d.name}</div>
              <div className="text-xs text-gray-500">Last updated: Jan 1, 2025</div>
            </div>
            <div className="flex gap-2">
              <a href={d.href} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded text-sm">Preview</a>
              <a href={d.href} download className="px-3 py-2 bg-cyberTeal text-white rounded text-sm">Download</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
    </PageWrapper>
  );
}
