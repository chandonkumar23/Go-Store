import React, { useEffect, useState } from 'react';
import { FaRocket, FaDollarSign, FaHeadset, FaChevronUp } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-3xl sm:text-4xl text-pink-500" />,
    title: "Fast & Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaDollarSign className="text-3xl sm:text-4xl text-pink-500" />,
    title: "30 Days Money Back",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaHeadset className="text-3xl sm:text-4xl text-pink-500" />,
    title: "24/7 Help Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  }
];

const SectionOne = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 sm:px-10 md:px-20 bg-white mb-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full bg-white border shadow-lg hover:bg-gray-100 transition"
        >
          <FaChevronUp className="text-black" />
        </button>
      )}
    </section>
  );
};

export default SectionOne;
