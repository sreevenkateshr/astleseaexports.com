import React from "react";

const Gallery = () => {
  // Generate 40+ image URLs
  const images = Array.from({ length: 40 }, (_, i) => 
    `https://source.unsplash.com/random/800x600?sig=${i}`
  );

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl relative group shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
              Photo {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
