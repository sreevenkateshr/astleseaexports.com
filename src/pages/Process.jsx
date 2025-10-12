import React from "react";
import coverImage from "../assets/footersea.jpg"; 

export default function Process() {
  const processSteps = [
    {
      title: "1. Sourcing the Catch",
      desc: "We partner with trusted fishermen to source fresh seafood directly from the Indian Ocean, ensuring every catch meets export-grade standards.",
      icon: "🌊",
    },
    {
      title: "2. Quality Inspection",
      desc: "Each batch undergoes a strict quality check for freshness, size, and species authenticity before it proceeds to processing.",
      icon: "🔍",
    },
    {
      title: "3. Cleaning & Processing",
      desc: "Our team carefully cleans, de-shells, and processes the seafood using hygienic and temperature-controlled facilities.",
      icon: "🧊",
    },
    {
      title: "4. Freezing & Packaging",
      desc: "Seafood is immediately blast frozen and vacuum-packed to preserve taste, texture, and nutrition until it reaches our buyers.",
      icon: "📦",
    },
    {
      title: "5. Export & Delivery",
      desc: "We handle the documentation, cold-chain logistics, and safe shipment to our international clients with complete transparency.",
      icon: "🚢",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Cover Image Section */}
      <div
        className="w-full h-64 sm:h-80 md:h-96 bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white px-4 py-2 rounded text-center bg-black/40">
          Our Export Process
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600 mb-12 text-lg">
          From ocean to overseas — every step of our export process is crafted
          with precision, hygiene, and care to deliver world-class seafood.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 border-t-4 border-blue-500 flex flex-col sm:flex-row gap-4 items-start"
            >
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
