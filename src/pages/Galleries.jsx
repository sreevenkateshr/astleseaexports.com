import React from "react";
import coverImage from "../../src/assets/fishess/016.jpg"; // your banner image
import img1 from "../../src/assets/fishess/014.jpg";
import img2 from "../../src/assets/fishess/012.jpg";
import img3 from "../../src/assets/fishess/011.jpg";
import img4 from "../../src/assets/fishess/012.jpg";
import img5 from "../../src/assets/fishess/010.jpg";

const Gallery = () => {
  const localImages = [img1, img2, img3, img4, img5];

  return (
    <>
      {/* 🏖️ Cover Banner */}
      <section className="relative h-[60vh] w-full">
        <img
          src={coverImage}
          alt="Astle Sea Exports Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore the journey of Astle Sea Exports — from Kanyakumari’s shores to global seafood markets.
          </p>
        </div>
      </section>

      {/* 🐟 Image Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Fresh Catch • Modern Processing • Global Delivery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {localImages.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl relative group shadow-lg"
              >
                <img
                  src={src}
                  alt={`Astle Sea Exports seafood gallery image ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                  Seafood Export #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
