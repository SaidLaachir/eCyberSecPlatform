import React from "react";
import PageWrapper from "../components/PageWrapper";
import clubPic2 from "../assets/clubicondark.png";

export default function WriteUps() {
  const posts = [
    {
      id: 1,
      title: "Latest Zero-Day Vulnerability in Chrome",
      date: "2025-09-20",
      description:
        "Google patched a critical zero-day vulnerability actively exploited in the wild. Learn how it works and why it matters.",
      link: "#",
    },
    {
      id: 2,
      title: "Deep Dive: Ransomware-as-a-Service (RaaS)",
      date: "2025-09-12",
      description:
        "A detailed exploration of the growing business model of ransomware providers, its impact, and case studies.",
      link: "#",
    },
    {
      id: 3,
      title: "OWASP Top 10: 2025 Updates",
      date: "2025-09-01",
      description:
        "Review of the most recent OWASP Top 10, highlighting new risks and mitigation strategies developers must know.",
      link: "#",
    },
  ];

  return (
    <PageWrapper>
      <section className="pt-28 pb-16 space-y-12 relative z-10">

        {/* Club Header - unified alignment */}
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

        {/* Page Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Write-ups</h2>
          <p className="text-md md:text-lg text-gray-700">
            Latest updates, security research, and vulnerability write-ups from our team.
          </p>
        </div>

        {/* Write-up posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, index) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative
                         border border-gray-200 transition-all duration-300
                         hover:scale-105 hover:shadow-cyan-500/40"
            >
              {/* Header strip */}
              <div className="bg-cyan-700 text-white px-4 py-2 flex justify-between items-center">
                <span className="font-bold text-lg">{`0${index + 1}`}</span>
                <span className="italic text-sm">{p.date}</span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <a
                  href={p.link}
                  className="inline-block px-4 py-2 text-sm rounded border border-cyan-600 text-cyan-700
                             hover:bg-cyan-600 hover:text-white transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
