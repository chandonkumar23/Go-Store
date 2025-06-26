import React from 'react';
import { FaRocket, FaDollarSign, FaHeadset } from 'react-icons/fa';

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
  return (
    <section className="py-16  md:px-20 bg-white mb-20  ">
      <div className="grid md:grid-cols-3 gap-12 ">
        {features.map((feature, idx) => (
          <div key={idx} className="flex justify-start items-start gap-4">
            <div className="p-3 rounded-full ">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
