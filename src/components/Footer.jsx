import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/src/assets/FOOTERSEA.jpg')" }} // your sea image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src="/src/assets/log.png"
              alt="Astle Sea Exports Logo"
              className="w-auto h-35 object-contain"
            />
            <h2 className="font-bold text-lg"></h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            ASTTLE SEA FOODS was established in 1931 by Asttle,
            today we are one of the largest processors of quality quick frozen
            seafood in India.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="font-semibold mb-4">Other Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Our Address</h3>
          <p className="text-sm">
            Abad Fisheries Private Limited,<br />
            1st Floor, BayPride Mall,<br />
            Marine Drive,<br />
            kanyakumari - 682031
          </p>
          <p className="mt-2 text-sm">
            E-mail:{" "}
            <a href="mailto:info@abad.in" className="hover:underline">
              info@astle.in
            </a>
          </p>
          {/* <p className="text-sm">
            Job Enquiries:{" "}
            <a href="mailto:careers@abad.in" className="hover:underline">
              careers@abad.in
            </a>
          </p> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center border-t border-white/20 py-4 text-sm bg-blue-900/70">
        © 2025 AsteleSeaExports - All Rights Reserved. | Powered by Capetech
      </div>
    </footer>
  );
}
