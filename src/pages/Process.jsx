import React from "react";
import person1 from "../assets/crust/crust1.jpg";
import person2 from "../assets/fishes/fish1.jpg";
import person3 from "../assets/crust/crust1.jpg";

export default function ProcessSection() {
  const steps = [
    {
      number: "1.",
      title: "Discover your vision",
      desc: "In this phase, we work closely with you to uncover your unique vision and understand your brand identity.",
      img: person1,
    },
    {
      number: "2.",
      title: "Design Alchemy in Progress",
      desc: "Once your vision is crystal clear, our design wizards swing into action.",
      img: person2,
    },
    {
      number: "3.",
      title: "Polish and Perfect",
      desc: "The final step is all about refinement and perfection — ensuring the design aligns seamlessly with your expectations.",
      img: person3,
    },
  ];

  return (
    <section className="bg-white py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          How it <span className="text-purple-600 relative">
            goes
            <span className="block h-1 w-16 bg-purple-300 rounded-full mx-auto mt-2"></span>
          </span>
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-purple-600 font-bold text-2xl mb-3">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 mb-6">{step.desc}</p>
            <img
              src={step.img}
              alt={step.title}
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-gray-900 text-white rounded-3xl max-w-5xl mx-auto text-center px-8 py-16">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          Need more convincing?{" "}
          <span className="text-purple-400">Let’s talk.</span>
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We’re delighted to guide you through our comprehensive process,
          ensuring successful outcomes for all our campaigns.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition"
        >
          Mail us →
        </a>
      </div>
    </section>
  );
}
