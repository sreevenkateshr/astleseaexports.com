import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/send-email", formData);
      if (res.status === 200) {
        alert("✅ Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phonenumber: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-blue-100 mb-10">
              Any question? We would be happy to help you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-2xl" />
                <span className="text-lg">+91 98765 43210</span>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl" />
                <span className="text-lg">example@email.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl" />
                <span className="text-lg">775 Rolling Green Rd, Nagercoil</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 mt-10">
            <a
              href="#"
              className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-blue-100"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-blue-100"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-blue-100"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-gray-700 font-medium">
                First Name
              </label>
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                type="text"
                placeholder="Your first name"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Last Name
              </label>
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                type="text"
                placeholder="Your last name"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@email.com"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-32 resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Send Message ✈️
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
