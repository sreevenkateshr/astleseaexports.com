import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RecentWorks() {
  const works = [
    {
      id: 1,
      img: "https://source.unsplash.com/600x400/?seafood,fish",
      title: "Ocean Feast",
      desc: "Fresh catches crafted into culinary delights.",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/600x400/?boat,fish-market",
      title: "Coastal Cuisine",
      desc: "Blending traditional flavors with modern presentation.",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/600x400/?shrimp,food",
      title: "Marine Delights",
      desc: "Curated seafood specialties from our local coast.",
    },
    {
      id: 4,
      img: "https://source.unsplash.com/600x400/?fish,restaurant",
      title: "Seafood Platters",
      desc: "Perfectly seasoned and beautifully plated.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-primary font-semibold uppercase tracking-widest">
            Recent Works
          </h3>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            Showcasing Our <span className="text-primary">Coastal Creations</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From the shore to your plate a glimpse of our finest culinary craftsmanship.
          </p>
        </div>

        {/* Swiper Gallery */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{work.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-primary">Free</span> — Experience the
            taste everyone’s talking about.{" "}
            <a href="/contact" className="text-primary underline font-medium">
              Come in or order online!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
