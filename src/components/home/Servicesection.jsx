import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ServicesSection() {
  // Temporary image placeholders (replace with your assets later)
  const services = [
    {
      img: 'https://source.unsplash.com/600x400/?fish,farm',
      icon: 'https://source.unsplash.com/100x100/?prawn',
      title: 'AQUA CONSULTING',
      text: 'Professional guidance for sustainable fish farming success.',
    },
    {
      img: 'https://source.unsplash.com/600x400/?fish,breeding',
      icon: 'https://source.unsplash.com/100x100/?fish',
      title: 'FISH BREEDING',
      text: 'Expert care is essential for promoting healthy growth in fish populations.',
    },
    {
      img: 'https://source.unsplash.com/600x400/?water,management',
      icon: 'https://source.unsplash.com/100x100/?water',
      title: 'WATER MANAGEMENT',
      text: 'Improving water quality supports healthy aquatic ecosystems.',
    },
  ];

  return (
    <section className="bg-[#E6F6FD] py-14 lg:py-[120px] relative">
      <div className="flex flex-col lg:flex-row items-center gap-6 relative z-[2] overflow-x-hidden max-md:pl-3 container mx-auto">
        {/* Left Column */}
        <div className="lg:max-w-[40%] w-full shrink-0">
          <div className="max-w-[526px]">
            <p className="uppercase text-blue-600 font-semibold">Our Service</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 xl:mb-6">
              Services We Provide
            </h2>
            <p className="text-neutral-600 mb-6 xl:mb-10">
              Providing sustainable fish farming solutions with expert care for
              quality seafood supply.
            </p>
            <a
              href="blogs.html"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
            >
              View All{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Swiper Slider */}
        <div className="flex items-center gap-4 xl:gap-6 grow w-full">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="p-4 xl:p-5"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="w-full max-w-[416px] max-sm:max-w-[310px]"
              >
                <div className="rounded-3xl bg-white shadow hover:shadow-lg transition">
                  <a href="service-details.html">
                    <img
                      src={service.img}
                      className="w-full rounded-3xl h-64 object-cover"
                      alt={service.title}
                    />
                  </a>
                  <div className="px-4 xl:px-6 pb-6 xl:pb-12">
                    <span className="size-[72px] border-4 rounded-full border-white bg-blue-100 flex items-center justify-center -translate-y-1/2">
                      <img
                        src={service.icon}
                        alt={`${service.title} icon`}
                        className="w-10 h-10 object-contain"
                      />
                    </span>
                    <h4 className="mb-4 font-semibold text-lg">
                      {service.title}
                    </h4>
                    <p className="mb-5 xl:mb-8 text-neutral-600">
                      {service.text}
                    </p>
                    <a
                      href="service-details.html"
                      className="text-blue-600 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
