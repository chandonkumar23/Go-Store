import React from 'react';
import { FaRocket, FaDollarSign, FaHeadset } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
const features = [
  {
    icon: <FaRocket className="text-4xl text-pink-500" />,
    title: "Fast & Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaDollarSign className="text-4xl text-pink-500" />,
    title: "30 Days Money Back",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaHeadset className="text-4xl text-pink-500" />,
    title: "24/7 Help Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  }
];


const SectionOne = () => {
 const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:px-20 bg-white mb-20 relative">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex justify-start items-start gap-4">
            <div className="p-3 rounded-full">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full bg-white border shadow-lg hover:bg-gray-100 transition"
        >
          <FaChevronUp className="text-black" />
        </button>
      )}
    </section>
  );
};

export default SectionOne;
