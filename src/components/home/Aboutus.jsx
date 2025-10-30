import React from 'react';

// import your images
import Fish1 from '../../assets/about-fish-1.png';
import Fish2 from '../../assets/about-fish-2.png';
import About1 from '../../assets/about-1.png';
import About2 from '../../assets/about-2.png';
import Prawn from '../../assets/prone.png';
import Spear from '../../assets/spear.png';
import Hook from '../../assets/hook.png';
import Boat from '../../assets/boat.png';

export default function AboutSection() {
  return (
    <section className="relative overflow-x-hidden bg-white py-12 lg:py-[120px]">
      {/* Fish Animations */}
      <img
        src={Fish1}
        alt=""
        className="hidden 2xl:block absolute top-5 left-8 animate-swim"
      />
      <img
        src={Fish2}
        alt=""
        className="hidden 2xl:block absolute -top-48 right-4 animate-swim"
      />

      <div className="grid grid-cols-12 gap-6 items-center container mx-auto px-4">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-6 relative">
          <div className="relative -translate-x-4 xl:-translate-x-8">
            <div className="relative flex justify-center">
              <img src={About1} width={670} height={670} alt="" />
              {/* Play Button */}
              
            </div>
            <img
              src={About2}
              width={240}
              height={240}
              alt=""
              className="absolute max-sm:hidden border-8 border-white rounded-full right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-6">
          <p className="text-primary-500 uppercase font-semibold tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl xl:text-4xl font-bold mb-4 xl:mb-6">
            Dedicated Fish Farming & Aqua Services
          </h2>
           <p className="text-neutral-600 mb-6 xl:mb-10 border-b border-neutral-200 pb-6 xl:pb-10">
            At <strong>Astle Sea Exports</strong>, we specialize in sourcing,
            processing, and exporting premium-quality seafood from the rich
            coastal waters of Kanyakumari. Our mission is to deliver freshness
            and quality from the Indian Ocean straight to global markets — with
            sustainability and hygiene as our core values.
          </p>


          {/* Four Services */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 mb-6 xl:mb-10 border-b border-neutral-200 pb-6 xl:pb-10">
            {[
              {
                img: Prawn,
                title: 'Prawn Feeds',
                text: 'Premium nutrition for prawns.',
              },
              {
                img: Spear,
                title: 'Spear Fishing',
                text: 'Precision hunting for seafood.',
              },
              {
                img: Hook,
                title: 'Hand Fishing',
                text: 'Traditional fishing, pure catch.',
              },
              {
                img: Boat,
                title: 'Boat Fishing',
                text: 'Deepwater fishing, fresh supply.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img src={item.img} alt={item.title} />
                <div>
                  <h5 className="font-semibold mb-1">{item.title}</h5>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Buttons */}
          <div className="flex gap-4 items-center flex-wrap mb-7 xl:mb-10">
            <a
              href="/aboutus"
              className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
            >
              About Company →
            </a>
            <a href="/aboutus" className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full border border-neutral-300 text-blue-600 flex items-center justify-center">
                📞
              </div>
              <div>
                <p className="text-neutral-500 mb-1 text-sm">Call Us Now</p>
                <p className="text-sm text-neutral-900">+91 77085 67055</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
