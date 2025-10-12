import React from "react";

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center 
        overflow-hidden bg-black 
        min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] 
        rounded-br-[15vw] text-center px-6
      "
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden rounded-br-[15vw] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0 w-full h-full 
            object-cover rotate-180
          "
        >
          <source
            src="https://assets.codepen.io/319606/tactus-waves-hero-sm.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div
          className="
            absolute bottom-0 w-full h-1/2
            bg-gradient-to-b from-transparent to-black
            rounded-br-[15vw]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Heading with shadow */}
        <h1
          className="
            text-white font-black leading-tight 
            text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw]
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]
          "
        >
          <span className="text-blue-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            Seafood
          </span>{" "}
          Collection
        </h1>

        {/* Subheading with shadow */}
        <h2
          className="
            text-white font-semibold mt-2
            text-[6vw] sm:text-[4.5vw] md:text-[3vw] lg:text-[2.5vw]
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]
          "
        >
          Premium &{" "}
          <span className="text-blue-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            Fresh Seafood Exports
          </span>
        </h2>

        {/* Paragraph with shadow */}
        <p
          className="
            text-white/90 mt-4 mx-auto 
            text-[4vw] sm:text-[3vw] md:text-[1.2rem] lg:text-lg
            leading-relaxed max-w-2xl
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
          "
        >
          Supplying ocean-fresh seafood worldwide  sustainably sourced,
          frozen at peak freshness, and trusted by global markets.
        </p>

        {/* Blue Button */}
        <a
          href="/products"
          className="
            inline-block mt-6 px-8 py-3 
            bg-blue-500 text-white font-semibold rounded-full 
            hover:bg-blue-600 transition duration-300 ease-in-out
            text-[4vw] sm:text-[3vw] md:text-base
            drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
          "
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}
