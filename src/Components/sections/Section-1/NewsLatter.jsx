// NewsletterSection.jsx
import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <div className="p-4">
      <motion.section
        initial={{ opacity: 0, y: 200 }} // was y: 100, now it's 200 for deeper scroll-up effect
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="-mt-72 z-20 relative bg-[#fbeee6] md:px-12 lg:p-6 rounded-b-2xl flex flex-col md:flex-row items-center justify-between min-h-[600px] overflow-hidden"
      >
        {/* Left Text Block */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
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

        {/* Right-Pinned Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 z-0">
          <img
            src="https://i.ibb.co/qVwrsj5/banner-1-removebg-preview.png"
            alt="Newsletter Promo"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.section>
    </div>





  );
};

export default NewsletterSection;
