import React from "react";
import crust1 from "../../assets/crust/crust1.jpg";
import ceph1 from "../../assets/ceph/ceph1.jpg";
import fish1 from "../../assets/fishes/fish1.jpg";
import fish2 from "../../assets/fishes/fish2.jpg";

export default function RecentWorks() {
  const works = [
    {
      id: 1,
      img: fish1,
      title: "Fresh Mackerel",
      desc: "Rich in taste, freshly sourced from coastal waters.",
    },
    {
      id: 2,
      img: fish2,
      title: "Ribbon Fish",
      desc: "High-quality ribbon fish, frozen for extended freshness.",
    },
    {
      id: 3,
      img: ceph1,
      title: "Squid Collection",
      desc: "Expertly cleaned and processed squid selections.",
    },
    {
      id: 4,
      img: crust1,
      title: "Tiger Prawns",
      desc: "Juicy tiger prawns ready for export-grade quality.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#e6f6fd] to-[#e6f6fd] py-28 md:py-36 mt-20 rounded-[80px] shadow-inner">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h3 className="text-blue-700 font-semibold uppercase tracking-widest">
            Recent Works
          </h3>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            Showcasing Our <span className="text-blue-700">Coastal Creations</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From the shore to your plate — a glimpse of our finest seafood craftsmanship.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-56 object-cover rounded-t-[2rem]"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-md hover:bg-blue-800 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
