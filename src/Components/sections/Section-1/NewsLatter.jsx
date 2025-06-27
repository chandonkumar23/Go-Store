// NewsletterSection.jsx
import React from "react";


const NewsletterSection = () => {
  return (
    <section className="bg-[#fbeee6] p-6
      md:flex flex-col-reverse md:flex-row items-center justify-between h-[600px] mb-10">
      {/* Left Text Block */}
      <div className="md:w-1/2 space-y-6">
        <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold px-4 py-2 rounded">
          SIGNUP FOR NEWSLETTER
        </button>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Don't Miss Out On <br />
          <span className="text-black">Exciting Promotions</span>
        </h2>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <input
            type="email"
            placeholder="Your email address..."
            className="px-4 py-3 rounded w-full sm:w-[300px] outline-none border border-gray-300"
          />
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded font-semibold flex items-center justify-center">
            Subscribe →
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-end">
        <img src="https://i.ibb.co/qVwrsj5/banner-1-removebg-preview.png" alt="Newsletter Promo" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default NewsletterSection;
