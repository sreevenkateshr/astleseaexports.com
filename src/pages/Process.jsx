import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import portfolio1 from "../assets/ceph/ceph1.jpg";
import portfolio2 from "../assets/ceph/ceph2.jpg";
import portfolio3 from "../assets/ceph/ceph3.jpg";

import icon1 from "../assets/crust/crust1.jpg";
import icon2 from "../assets/crust/crust10.jpg";
import icon3 from "../assets/crust/crust12.jpg";

export default function ProcessSection() {
  const processSteps = [
    {
      title: "Sourcing the Catch",
      desc: "We partner with trusted fishermen to source fresh seafood directly from the Indian Ocean, ensuring every catch meets export-grade standards.",
      img: portfolio1,
      icon: icon1,
    },
    {
      title: "Quality Inspection",
      desc: "Each batch undergoes a strict quality check for freshness, size, and species authenticity before it proceeds to processing.",
      img: portfolio2,
      icon: icon2,
    },
    {
      title: "Cleaning & Processing",
      desc: "Our team carefully cleans, de-shells, and processes the seafood using hygienic and temperature-controlled facilities.",
      img: portfolio3,
      icon: icon3,
    },
    {
      title: "Freezing & Packaging",
      desc: "Seafood is immediately blast frozen and vacuum-packed to preserve taste, texture, and nutrition until it reaches our buyers.",
      img: portfolio2,
      icon: icon2,
    },
    {
      title: "Export & Delivery",
      desc: "We handle the documentation, cold-chain logistics, and safe shipment to our international clients with complete transparency.",
      img: portfolio3,
      icon: icon3,
    },
  ];

  return (
    <section className="bg-neutral-0 relative py-28 xl:py-32">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-4 mb-10 xl:mb-14">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="sub-heading text-sm uppercase tracking-widest text-gray-500 mb-2">
              Our Best Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              An exquisite Portfolio
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 flex items-end mt-4 md:mt-0">
            <div>
              <p className="mb-5 xl:mb-7 text-gray-600">
                Step-by-step process ensuring fresh, sustainable seafood from farm to table efficiently.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {processSteps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center border border-gray-200 p-4 md:p-6 rounded-xl md:rounded-2xl gap-6 lg:gap-10">
                <div className="relative flex justify-center">
                  <img src={step.img} alt={step.title} className="rounded-xl w-full" />
                  <a href="#" className="absolute rounded-full bg-blue-700 p-3 top-2 right-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <img src={step.icon} alt="" className="mb-3 lg:mb-10" />
                  <h4 className="mb-3 lg:mb-6 text-lg font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
