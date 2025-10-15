import React from "react";
import coverImage from "../assets/footer/footersea.jpg"; // ✅ your featured background image
import blog1 from "../assets/footer/footersea.jpg";
import blog2 from "../assets/footer/footersea.jpg";
import blog3 from "../assets/footer/footersea.jpg";

export default function FeaturedBlogs() {
  const blogs = [
    {
      img: blog1,
      title: "Sourcing the Freshest Catch",
      desc: "We partner with local fishermen to bring export-grade seafood straight from the Indian Ocean to your plate.",
      link: "#",
    },
    {
      img: blog2,
      title: "Behind Our Quality Standards",
      desc: "Learn how every product undergoes multi-level inspection to ensure purity, sustainability, and unmatched freshness.",
      link: "#",
    },
    {
      img: blog3,
      title: "From Ocean to Export",
      desc: "Explore how we process, freeze, and deliver seafood globally — maintaining taste and texture at every step.",
      link: "#",
    },
  ];

  return (
    <section id="blogs" className="bg-white">
      {/* ✅ Featured Cover Section */}
      <div
        className="w-full h-64 sm:h-80 md:h-96 bg-center bg-cover flex items-center justify-center relative"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Text */}
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
          Our Premium Seafood Collection
        </h2>
      </div>

      {/* ✅ Blog Cards Section */}
      <div className="py-20 px-5 md:px-10 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Our Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
            Featured Blogs
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay updated with our latest news, processes, and industry insights.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-[2rem]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.desc}</p>
                <a
                  href={blog.link}
                  className="inline-block bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-all duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
