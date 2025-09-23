import React from "react";
import PageWrapper from "../components/PageWrapper";
import { useParams } from "react-router-dom";

// Sample activities data (could be imported from a separate file)
const activities = [
  {
    id: 1,
    title: "Hacking Workshop 2025",
    date: "2025-10-10",
    venue: "ENIAD Lab A",
    description: "Introductory web hacking workshop with hands-on labs.",
    images: ["/assets/pic1.jpg", "/assets/pic2.jpg"]
  },
  {
    id: 2,
    title: "Web Hacking session 2025",
    date: "2025-11-02",
    venue: "Main Auditorium",
    description: "Advanced web hacking techniques and challenges.",
    images: ["/assets/pic3.jpg", "/assets/pic4.jpg"]
  },
];

export default function Activity() {
  const { id } = useParams();
  const activity = activities.find(a => a.id === parseInt(id));

  if (!activity) return <PageWrapper><p>Activity not found</p></PageWrapper>;

  return (
    <PageWrapper>
      <section className="pt-28 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">{activity.title}</h2>
        <p className="text-gray-600">{activity.date} — {activity.venue}</p>
        <p className="text-gray-700">{activity.description}</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {activity.images.map((img, idx) => (
            <img key={idx} src={img} alt={activity.title + idx} className="rounded shadow w-full h-60 object-cover" />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
