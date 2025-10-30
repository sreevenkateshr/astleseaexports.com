import React from "react";
import coverImage from "../../src/assets/founder/aboutcover.jpg";
import founder1 from "../../src/assets/founder/founder1.jpg";
import about1 from "../../src/assets/founder/about1.jpg";
export default function Aboutus() {
  return (
    <>
      {/* 🌊 Cover Banner Section */}
      <section className="relative h-[70vh] w-full">
        <img
          src={coverImage}
          alt="Astle Sea Exports - About Us cover showing premium seafood exports in Kanyakumari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase drop-shadow-lg">
            About Astle Sea Exports
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Supplying premium seafood from the shores of Kanyakumari to tables across the world.
          </p>
          <a
            href="/contactus"
            className="mt-6 px-8 py-3 border border-white text-white rounded-full tracking-widest text-sm hover:bg-white hover:text-black transition"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* 🐟 Main About Section */}
      <div className="pt-20 md:pt-28 pb-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
        {/* Left: Single Image */}
        <div className="flex flex-col">
          <img
            src={about1}
            alt="Astle Sea Exports - Premium seafood quality control in Kanyakumari"
            className="rounded-2xl shadow-lg w-auto h-auto object-cover aspect-[4/3]"
          />
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide uppercase leading-snug">
            From the Coast of Kanyakumari to the World
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif tracking-wide uppercase mt-1 leading-snug text-[#1447e6]">
            Fresh. Sustainable. Trusted.
          </h3>

          <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <strong>Astle Sea Exports</strong> is a family-driven seafood export company
            based in Kanyakumari, India. What began decades ago as a small coastal
            fish trading venture by Astle’s grandfather has evolved into a globally
            recognized seafood export brand. We specialize in sourcing, processing,
            and exporting high-quality seafood with a focus on freshness,
            sustainability, and authenticity.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
            Our facilities adhere to international quality standards, ensuring
            every shipment meets the expectations of our global customers.
            From the pristine waters of the Indian Ocean to destinations around
            the world — we deliver the taste of Kanyakumari’s coast to your plate.
          </p>

          <a
            href="/contactus"
            className="mt-8 w-fit px-8 py-3 bg-[#1447e6] text-white font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
          >
            Contact Us
          </a>

          <p className="mt-10 text-2xl italic text-[#1447e6]">
            — Team Astle Sea Exports
          </p>
        </div>
      </div>

      {/* 👨‍✈️ Founder Section */}
      <section className="bg-gradient-to-b from-[#e6f6fd] to-[#e6f6fd] py-28 md:py-36 rounded-t-[80px] mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-6">
          {/* Text Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wide">
              Astle
            </h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
              Founder & Managing Director
            </p>
            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Continuing the proud legacy of his grandfather, Astle leads the
              company with a commitment to excellence in seafood exports. His
              leadership ensures that <strong>Astle Sea Exports</strong> remains a
              symbol of trust, quality, and sustainable practices in Kanyakumari’s
              thriving seafood industry.
            </p>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src={founder1}
              alt="Founder Astle - Leading seafood exports in Kanyakumari"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
