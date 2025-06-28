import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Atonio Bruce',
    image: 'https://i.ibb.co/ZpShgyKV/customer-2.jpg',
    rating: 5,
    text: `Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis...Excellent selection of products, very good prices and super fast delivery to the US.Excellent selection of products, very good prices and super fast delivery to the US.Excellent selection of products, very good prices and super fast delivery to the US.`,
  },
  {
    name: 'Yelena Belova',
    image: 'https://i.ibb.co/cSYttkK8/customer-1.jpg',
    rating: 5,
    text: `Excellent selection of products, very good prices and super fast delivery to the US.`,
  },
  {
    name: 'Jared Riley',
    image: 'https://i.ibb.co/ynT7XxVF/customer-3.jpg',
    rating: 5,
    text: `Great customer service! I had to make a change to my order and the customer service was extremely helpful and responded quickly...`,
  },
  {
    name: 'Nyla Shaw',
    image: 'https://i.ibb.co/tp4hwfTv/customer-4.jpg',
    rating: 5,
    text: `We have recommended to our friends and family in United States they have order and have been using Rumatis Cream...`,
  },
];

const StarRating = ({ count }) => (
  <div className="flex text-yellow-400 text-lg">
    {[...Array(count)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, direction = 'left' }) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
      className="bg-white rounded-2xl p-6 shadow-sm"
    >
      <div className="flex items-center gap-4 mb-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-bold text-black">{testimonial.name}</h3>
          <StarRating count={testimonial.rating} />
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-2">{testimonial.text}</p>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
   <section className="relative z-10 bg-[#f3f6fb] py-20 px-4 h-[1000px]"> 
      {/* Decorative Shapes */}
      <div className="absolute top-40 left-24 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-300 rounded-xl "></div>
      <div className="absolute  right-36 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-300 rounded-xl "></div>
      <div className="absolute top-1.5 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-300 rounded-xl "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-black">
          Over 1,000 Satisfied Customers With A 5-Star Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard testimonial={testimonials[0]} direction="left" />

          <div className="flex flex-col gap-8">
            <TestimonialCard testimonial={testimonials[1]} direction="right" />
            <TestimonialCard testimonial={testimonials[3]} direction="left" />
          </div>

          <div className="md:col-span-2 mx-auto max-w-2xl">
            <TestimonialCard testimonial={testimonials[2]} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
