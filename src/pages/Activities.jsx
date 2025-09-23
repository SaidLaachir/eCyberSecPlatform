import React from "react";
import PageWrapper from "../components/PageWrapper";

const activities = [
  {
    id:1,
    title: "CTF Workshop — Intro to Web Hacking",
    date: "2025-10-10",
    venue: "ENIAD Lab A",
    link: "#"
  },
  {
    id:2,
    title: "Guest Talk: Secure DevOps",
    date: "2025-11-02",
    venue: "Main Auditorium",
    link: "#"
  },
];

export default function Activities(){
  return (
    <PageWrapper>

    <section className="pt-28 space-y-12">

    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Activities</h2>
        <p className="text-sm text-gray-700">Upcoming events where the club hosts or participates.</p>
      </div>

      <div className="space-y-4">
        {activities.map(a => (
          <div key={a.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-gray-500">{a.date} — {a.venue}</div>
            </div>
            <div>
              <a href={a.link} className="px-3 py-2 border rounded text-sm">Details</a>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t">
        <h3 className="font-semibold">Join our socials</h3>
        <div className="mt-3 flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-3 py-2 bg-cyberTeal text-white rounded">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">LinkedIn</a>
          <a href="#" className="px-3 py-2 border rounded">Discord</a>
        </div>
      </div>
    </section>
    </section>
    </PageWrapper>
  );
}
