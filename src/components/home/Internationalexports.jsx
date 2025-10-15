import React from "react";

export default function InternationalExports() {
  return (
    <section className="bg-[white] text-black  py-20 md:py-20 mt-20 rounded-[80px] shadow-inner  ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              International <span className="text-blue-400">Seafood Exports</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Keeping our commitment to a global base of customers, our Export Division ensures 
              world-class quality in every shipment. Our seafood reaches shores across continents — 
              backed by certified processes and uncompromised freshness.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Right Side - Map Section */}
          <div className="relative lg:w-1/2 w-full">
            {/* ✅ Free API World Map Image (Unsplash) */}
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764b43?auto=format&fit=crop&w=1200&q=80"
              alt="World Map"
              className="w-full max-w-[800px] h-auto rounded-3xl opacity-90 mx-auto"
            />

            {/* Animated Location Markers */}
            <span
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white animate-pulse"
              style={{ top: "30%", left: "25%" }}
              title="Europe"
            ></span>

            <span
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white animate-pulse"
              style={{ top: "50%", left: "60%" }}
              title="Middle East"
            ></span>

            <span
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white animate-pulse"
              style={{ top: "70%", left: "80%" }}
              title="Asia-Pacific"
            ></span>

            <span
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white animate-pulse"
              style={{ top: "40%", left: "10%" }}
              title="North America"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
