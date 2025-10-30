import React from "react";

// 🖼️ Local Images
import coverImage from "../assets/fishess/08.jpg"; // cover image for the top
import step1 from "../assets/fishess/016.jpg"; // boat reaching shore
import step2 from "../assets/fishess/05.jpg"; // fish packed with ice
import step3 from "../assets/fishess/06.jpg"; // loading/export

export default function ProcessSection() {
const steps = [
  {
    number: "1.",
    title: "Fresh Catch from the Sea",
    desc: "When the fishing boats reach the shore, our expert team carefully unloads and sorts the fresh catch. Every fish is immediately transferred for cleaning to preserve natural taste, texture, and freshness before packing begins.",
    img: step1,
  },
  {
    number: "2.",
    title: "Icing and Hygienic Packing",
    desc: "Each batch is skillfully cleaned, graded, and packed with premium ice in hygienic conditions. Our modern facilities in Kanyakumari ensure freshness, quality, and compliance with international export standards.",
    img: step2,
  },
  {
    number: "3.",
    title: "Export & Global Delivery",
    desc: "Once packed, the seafood is stored in temperature-controlled containers and shipped worldwide. We guarantee that every delivery reflects the same ocean-fresh quality our customers have trusted for generations.",
    img: step3,
  },
];


  return (
    <>
      {/* 🌊 Cover Banner */}
      <section className="relative h-[60vh] w-full">
        <img
          src={coverImage}
          alt="Astle Sea Exports Processing Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase drop-shadow-lg">
            Our Process
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            From the moment the boats arrive to global seafood delivery — 
            Astle Sea Exports ensures freshness, quality, and care in every step.
          </p>
        </div>
      </section>

      {/* ⚓ Process Steps */}
      <section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How Our <span className="text-[#1E90FF] relative">
              Seafood Journey Flows
              <span className="block h-1 w-20 bg-[#87CEFA] rounded-full mx-auto mt-2"></span>
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="text-[#1E90FF] font-bold text-2xl mb-3">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {step.desc}
              </p>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-56 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>

        {/* ✅ Final Note */}
        <div className="mt-24 bg-[#1E90FF] text-white rounded-3xl max-w-5xl mx-auto text-center px-8 py-16 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Committed to <span className="text-yellow-300">Quality & Sustainability</span>
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Every catch tells the story of our dedication  from the shores of Kanyakumari 
            to the plates of seafood lovers around the world.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center bg-white text-[#1E90FF] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-gray-900 transition"
          >
            Contact Us →
          </a>
        </div>
      </section>
    </>
  );
}
