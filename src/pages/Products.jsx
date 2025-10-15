import React, { useState } from "react";
import coverImage from "../assets/footer/footersea.jpg";

// 🦐 Import all Crustacean images
import crust1 from "../assets/crust/crust1.jpg";
import crust2 from "../assets/crust/crust2.jpg";
import crust3 from "../assets/crust/crust3.jpg";
import crust4 from "../assets/crust/crust4.jpg";
import crust5 from "../assets/crust/crust5.jpg";
import crust6 from "../assets/crust/crust6.jpg";
import crust7 from "../assets/crust/crust7.jpg";
import crust8 from "../assets/crust/crust8.jpg";
import crust9 from "../assets/crust/crust9.jpg";
import crust10 from "../assets/crust/crust10.jpg";
import crust11 from "../assets/crust/crust11.jpg";
import crust12 from "../assets/crust/crust12.jpg";
import crust13 from "../assets/crust/crust13.jpg";
import crust14 from "../assets/crust/crust14.jpg";
import crust15 from "../assets/crust/crust15.jpg";
import crust16 from "../assets/crust/crust16.jpg";

// 🐙 Import all Cephalopod images
import ceph1 from "../assets/ceph/ceph1.jpg";
import ceph2 from "../assets/ceph/ceph2.jpg";
import ceph3 from "../assets/ceph/ceph3.jpg";
import ceph4 from "../assets/ceph/ceph4.jpg";
import ceph5 from "../assets/ceph/ceph5.jpg";
import ceph6 from "../assets/ceph/ceph6.jpg";

// 🐟 Import all Fish images
import fish1 from "../assets/fishes/fish1.jpg";
import fish2 from "../assets/fishes/fish2.jpg";
import fish3 from "../assets/fishes/fish3.jpg";
import fish4 from "../assets/fishes/fish4.jpg";
import fish5 from "../assets/fishes/fish5.jpg";
import fish6 from "../assets/fishes/fish6.jpg";
import fish7 from "../assets/fishes/fish7.jpg";
import fish8 from "../assets/fishes/fish8.jpg";
import fish9 from "../assets/fishes/fish9.jpg";
import fish10 from "../assets/fishes/fish10.jpg";
import fish11 from "../assets/fishes/fish11.jpg";
import fish12 from "../assets/fishes/fish12.jpg";
import fish13 from "../assets/fishes/fish13.jpg";
import fish14 from "../assets/fishes/fish14.jpg";
import fish15 from "../assets/fishes/fish15.jpg";
import fish16 from "../assets/fishes/fish16.jpg";
import fish17 from "../assets/fishes/fish17.jpg";
import fish18 from "../assets/fishes/fish18.jpg";

const productsData = [
  // 🦐 Crustaceans (16)
  { id: 1, name: "Crustacean Item 1", category: "Crustaceans", image: crust1, desc: "High-quality crustacean product." },
  { id: 2, name: "Crustacean Item 2", category: "Crustaceans", image: crust2, desc: "High-quality crustacean product." },
  { id: 3, name: "Crustacean Item 3", category: "Crustaceans", image: crust3, desc: "High-quality crustacean product." },
  { id: 4, name: "Crustacean Item 4", category: "Crustaceans", image: crust4, desc: "High-quality crustacean product." },
  { id: 5, name: "Crustacean Item 5", category: "Crustaceans", image: crust5, desc: "High-quality crustacean product." },
  { id: 6, name: "Crustacean Item 6", category: "Crustaceans", image: crust6, desc: "High-quality crustacean product." },
  { id: 7, name: "Crustacean Item 7", category: "Crustaceans", image: crust7, desc: "High-quality crustacean product." },
  { id: 8, name: "Crustacean Item 8", category: "Crustaceans", image: crust8, desc: "High-quality crustacean product." },
  { id: 9, name: "Crustacean Item 9", category: "Crustaceans", image: crust9, desc: "High-quality crustacean product." },
  { id: 10, name: "Crustacean Item 10", category: "Crustaceans", image: crust10, desc: "High-quality crustacean product." },
  { id: 11, name: "Crustacean Item 11", category: "Crustaceans", image: crust11, desc: "High-quality crustacean product." },
  { id: 12, name: "Crustacean Item 12", category: "Crustaceans", image: crust12, desc: "High-quality crustacean product." },
  { id: 13, name: "Crustacean Item 13", category: "Crustaceans", image: crust13, desc: "High-quality crustacean product." },
  { id: 14, name: "Crustacean Item 14", category: "Crustaceans", image: crust14, desc: "High-quality crustacean product." },
  { id: 15, name: "Crustacean Item 15", category: "Crustaceans", image: crust15, desc: "High-quality crustacean product." },
  { id: 16, name: "Crustacean Item 16", category: "Crustaceans", image: crust16, desc: "High-quality crustacean product." },

  // 🐙 Cephalopods (6)
  { id: 101, name: "Cephalopod Item 1", category: "Cephalopods", image: ceph1, desc: "Premium cephalopod product." },
  { id: 102, name: "Cephalopod Item 2", category: "Cephalopods", image: ceph2, desc: "Premium cephalopod product." },
  { id: 103, name: "Cephalopod Item 3", category: "Cephalopods", image: ceph3, desc: "Premium cephalopod product." },
  { id: 104, name: "Cephalopod Item 4", category: "Cephalopods", image: ceph4, desc: "Premium cephalopod product." },
  { id: 105, name: "Cephalopod Item 5", category: "Cephalopods", image: ceph5, desc: "Premium cephalopod product." },
  { id: 106, name: "Cephalopod Item 6", category: "Cephalopods", image: ceph6, desc: "Premium cephalopod product." },

  // 🐟 Fishes (18)
  { id: 201, name: "Fish Item 1", category: "Fishes", image: fish1, desc: "Fresh fish product." },
  { id: 202, name: "Fish Item 2", category: "Fishes", image: fish2, desc: "Fresh fish product." },
  { id: 203, name: "Fish Item 3", category: "Fishes", image: fish3, desc: "Fresh fish product." },
  { id: 204, name: "Fish Item 4", category: "Fishes", image: fish4, desc: "Fresh fish product." },
  { id: 205, name: "Fish Item 5", category: "Fishes", image: fish5, desc: "Fresh fish product." },
  { id: 206, name: "Fish Item 6", category: "Fishes", image: fish6, desc: "Fresh fish product." },
  { id: 207, name: "Fish Item 7", category: "Fishes", image: fish7, desc: "Fresh fish product." },
  { id: 208, name: "Fish Item 8", category: "Fishes", image: fish8, desc: "Fresh fish product." },
  { id: 209, name: "Fish Item 9", category: "Fishes", image: fish9, desc: "Fresh fish product." },
  { id: 210, name: "Fish Item 10", category: "Fishes", image: fish10, desc: "Fresh fish product." },
  { id: 211, name: "Fish Item 11", category: "Fishes", image: fish11, desc: "Fresh fish product." },
  { id: 212, name: "Fish Item 12", category: "Fishes", image: fish12, desc: "Fresh fish product." },
  { id: 213, name: "Fish Item 13", category: "Fishes", image: fish13, desc: "Fresh fish product." },
  { id: 214, name: "Fish Item 14", category: "Fishes", image: fish14, desc: "Fresh fish product." },
  { id: 215, name: "Fish Item 15", category: "Fishes", image: fish15, desc: "Fresh fish product." },
  { id: 216, name: "Fish Item 16", category: "Fishes", image: fish16, desc: "Fresh fish product." },
  { id: 217, name: "Fish Item 17", category: "Fishes", image: fish17, desc: "Fresh fish product." },
  { id: 218, name: "Fish Item 18", category: "Fishes", image: fish18, desc: "Fresh fish product." },


//dry fishes
  { id: 301,   name: "Fish Item 1", category: "Dry Fishes", image: fish1, desc: "Fresh fish product." },
  { id: 302, name: "Fish Item 2", category: "Dry Fishes", image: fish2, desc: "Fresh fish product." },
  { id: 303, name: "Fish Item 3", category: "Dry Fishes", image: fish3, desc: "Fresh fish product." },
  { id: 304, name: "Fish Item 4", category: "Dry Fishes", image: fish4, desc: "Fresh fish product." },
  { id: 305, name: "Fish Item 5", category: "Dry Fishes", image: fish5, desc: "Fresh fish product." },
  { id: 306, name: "Fish Item 6", category: "Dry Fishes", image: fish6, desc: "Fresh fish product." },
  { id: 307, name: "Fish Item 7", category: "Dry Fishes", image: fish7, desc: "Fresh fish product." },
  { id: 308, name: "Fish Item 8", category: "Dry Fishes", image: fish8, desc: "Fresh fish product." },
  { id: 309, name: "Fish Item 9", category: "Dry Fishes", image: fish9, desc: "Fresh fish product." },
  { id: 310, name: "Fish Item 10", category: "Dry Fishes", image: fish10, desc: "Fresh fish product." },

];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const categories = ["Show All", "Crustaceans", "Cephalopods", "Fishes", "Dry Fishes"];

  const filteredProducts =
    selectedCategory === "Show All"
      ? productsData
      : productsData.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-gradient-to-br from-gray-100 to-white">
      {/* Cover Image Section */}
      <div
        className="w-full h-64 sm:h-80 md:h-96 bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white px-4 py-2 rounded text-center bg-black/40">
          Our Premium Seafood Collection
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600 mb-6">
          Explore our premium export range — freshly caught and expertly processed.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition 
                ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-60  transform hover:scale-105 transition"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  HOT SALE
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 flex-grow">{product.desc}</p>

                <div className="flex justify-end items-center mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
