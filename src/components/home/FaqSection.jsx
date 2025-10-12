import React, { useState } from "react";
import faq1 from "../../assets/faq-img-1.jpg";
import faq2 from "../../assets/faq-img-2.jpg";
import faq3 from "../../assets/faq-img-3.jpg";
import author1 from "../../assets/about-fish-1.png";
import author2 from "../../assets/about-fish-1.png";
import author3 from "../../assets/about-fish-1.png";
import author4 from "../../assets/about-fish-1.png";
import { FaPlus } from "react-icons/fa";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are your opening hours and days?",
      a: "We're open every day from 12:00 PM to 11:00 PM, including weekends and holidays. We offer both home delivery and takeaway.",
    },
    {
      q: "Do you offer home delivery or takeaway options?",
      a: "Yes! We offer both home delivery and takeaway options for your convenience.",
    },
    {
      q: "Is reservation required, or can we walk in anytime?",
      a: "You can walk in anytime! However, we recommend reservations on weekends and holidays to avoid waiting.",
    },
    {
      q: "Do you have vegetarian or vegan options?",
      a: "Yes, we have a wide range of vegetarian and vegan dishes to suit all dietary preferences.",
    },
  ];

  return (
    <section className="our-faqs relative bg-gradient-to-b from-[#e6f6fd] to-[#e6f6fd] py-28 md:py-36 rounded-t-[80px] mt-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
          {/* Left Images Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="flex gap-6">
              <div className="flex flex-col gap-6 w-1/2">
                <figure className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <img
                    src={faq1}
                    alt="FAQ 1"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </figure>
                <figure className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <img
                    src={faq2}
                    alt="FAQ 2"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </figure>
              </div>
              <div className="flex flex-col gap-6 w-1/2">
                <figure className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <img
                    src={faq3}
                    alt="FAQ 3"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </figure>

                {/* Review Box */}
                <div className="faq-cta-box bg-white p-6 rounded-3xl shadow-xl flex items-center justify-between border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="flex -space-x-3">
                    {[author1, author2, author3, author4].map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Reviewer ${i + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <FaPlus className="text-gray-600" />
                    </div>
                  </div>
                  <div className="text-right">
                    <h2 className="text-2xl font-bold text-gray-800 leading-none">
                      4.9 Star
                    </h2>
                    <p className="text-sm text-gray-500">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right FAQ Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h3 className="text-indigo-600 font-semibold uppercase mb-3 tracking-widest">
                FAQs
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Frequently Asked <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Got questions about our food or bookings? Find quick answers to make your
                Seabud visit seamless and satisfying.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-gray-800 bg-white hover:bg-gray-50 transition"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 bg-gray-50 text-gray-600 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
