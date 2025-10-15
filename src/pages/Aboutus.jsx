import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import founderimg from "../../src/assets/founder/Founder.jpg";


const images = [
  "https://i0.wp.com/paperboatweddingphotography.com/wp-content/uploads/2024/07/Thumb-Size-4.jpg?fit=2000%2C1325&ssl=1",
  "https://i0.wp.com/paperboatweddingphotography.com/wp-content/uploads/2024/07/DSC00663.jpg?fit=1920%2C1280&ssl=1",
  "https://i0.wp.com/paperboatweddingphotography.com/wp-content/uploads/2024/07/13-2.jpg?fit=1920%2C1280&ssl=1",
];

export default function Aboutus() {
  return (
    <>
      {/* 🔥 Featured Banner Section */}
      <section className="relative h-[80vh] w-full">
        <img
          src="https://i0.wp.com/paperboatweddingphotography.com/wp-content/uploads/2024/07/DSC00663.jpg?fit=1920%2C1280&ssl=1"
          alt="Featured Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
            Celebrating your special moments with elegance and timeless style.
          </p>
          <button href="/src/pages/Contactus.jsx" className="mt-6 px-8 py-3 border border-white text-white rounded-full tracking-widest text-sm hover:bg-white hover:text-black transition">
            Explore More
          </button>
        </div>
      </section>

      {/* Main About Section */}
      <div className="pt-20 md:pt-28 pb-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
        {/* Left: Image Slider */}
        <div className="flex flex-col">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-2xl shadow-lg overflow-hidden w-full aspect-[4/3]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
            Paperboat is a wedding photography studio based in Kerala. We
            specialize in creative and artistic wedding photography with a
            natural relaxed style. Since 2010, couples have chosen Paper Boat
            Wedding Studio for our breathtaking photography, relentless
            professionalism, and personalized service. Our style is romantic,
            timeless, and authentic.
          </p>

          <p className="mt-4 text-sm uppercase tracking-wide text-gray-500">
            Have a look through our website at what we can offer you to make
            your wedding day the most memorable of your life.
          </p>
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide uppercase leading-snug">
            Come to us as you are
          </h2>
          <h2 className="text-3xl md:text-4xl font-serif tracking-wide uppercase mt-1 leading-snug text-[#B78D7C]">
            We’ll do the rest!
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
            Our mission is simple – to tell your story by creating images that
            burst with the passion and love that you as a couple share. We
            promise not to spend hours posing or forcing you into something that
            isn’t representative of your day. Sure, there is time for some
            naturally posed images, but our drive is to be in the right place at
            the right time, soaking up the atmosphere and preserving those
            memories for you to keep forever.
          </p>

          <a
            href="https://paperboatweddingphotography.com/contact-paperboat/"
            className="mt-8 w-fit px-8 py-3 bg-[#B78D7C] text-white font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
          >
            Contact Us
          </a>

          <p className="mt-8 text-gray-700 leading-relaxed text-base md:text-lg">
            In 2017 we announced our new arrival – the Docu-Film, a perfect
            completion of your photographic needs.
          </p>

          {/* Signature */}
          <p className="mt-10 text-2xl italic text-[#B78D7C]">
            — Team Studio.in
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Text Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wide">
              Manikandan
            </h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
              Founder
            </p>
            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              With over a decade of storytelling through wedding photography,
              Roshan’s vision is to blend artistry and authenticity, ensuring
              every couple’s love story is preserved beautifully for
              generations.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={founderimg}
              alt="Manikandan"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
