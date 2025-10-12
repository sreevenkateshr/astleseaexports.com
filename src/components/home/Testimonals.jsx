import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import logo from "../../assets/ASTLE.png";


const testimonials = [
  {
    name: "Divya Nair",
    img: "third.jpg",
    text: "Absolutely the best photography experience. The team made us feel so comfortable and captured magical moments.",
    rating: 5,
  },
  {
    name: "Nikhil Raj",
    img: "second.jpg",
    text: "I’ve worked with many photographers, but Snappy Phot stood out with creativity and passion.",
    rating: 5,
  },
  {
    name: "Swathi Pillai",
    img: "four.jpg",
    text: "Snappy Phot exceeded our expectations. Our pre-wedding shoot turned into a fairytale.",
    rating: 5,
  },
  {
    name: "Harsh Sinha",
    img: "five.jpg",
    text: "They handled our baby shoot with so much care and creativity. Loved the photos!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Featured Testimonials
        </h2>
        <p className="text-center text-blue-600 mb-12">
          Real stories from our happy clients who trusted us with their special moments.
        </p>

        {/* Google Maps Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SnappyTimes Logo" className="w-20 h-20 border rounded-lg" />
            <div>
              <h5 className="font-bold text-lg text-blue-900">ASTLE SEA EXPORTS</h5>
              <p className="text-sm text-gray-600">
                123 Main Street, Anna Nagar Near Tower Junction, Nagercoil, Kanyakumari District, Tamil Nadu – 629001
              </p>
              <div className="flex items-center mt-2 text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <span className="ml-2 font-semibold text-gray-700">4.9</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Nagercoil,+Kanyakumari,+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-2 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition"
          >
            VIEW ON GOOGLE MAPS
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full shadow object-cover"
              />
              <div>
                <h5 className="font-bold text-lg text-blue-900">{t.name}</h5>
                <p className="text-gray-600">{t.text}</p>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
