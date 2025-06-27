import React from "react";

const StatisticsSection = () => {
  return (
    <section className="p-6 bg-white">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-3 text-sm font-semibold rounded-md mb-4">
            OUR STATISTICS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Professional Service & Care <br /> In A Pleasant Ambience
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam...
          </p>

          {/* Statistics */}
          <div className="mt-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md p-6 md:p-10 flex flex-col md:flex-row justify-between text-white text-center gap-6">
            <div>
              <h3 className="text-4xl font-bold">89K+</h3>
              <p className="mt-1 text-lg">Happy Customers</p>
            </div>
            <div className="border-t md:border-t-0 md:border-l md:border-r border-white md:mx-6 py-4 md:py-0"></div>
            <div>
              <h3 className="text-4xl font-bold">27K+</h3>
              <p className="mt-1 text-lg">Products Sold</p>
            </div>
            <div className="border-t md:border-t-0 md:border-l md:border-r border-white md:mx-6 py-4 md:py-0"></div>
            <div>
              <h3 className="text-4xl font-bold">15K+</h3>
              <p className="mt-1 text-lg">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Enlarged Images Grid */}
        <div className="grid grid-cols-2 gap-6 h-full">
          <img
            src="https://i.ibb.co/hxNNVXQN/service-4.jpg"
            alt="img1"
            className="rounded-xl object-cover w-full h-64 md:h-80"
          />
          <img
            src="https://i.ibb.co/mVffQvpR/service-3.jpg"
            alt="img2"
            className="rounded-xl object-cover w-full h-64 md:h-80"
          />
          <img
            src="https://i.ibb.co/J1z91NF/service-2.jpg"
            alt="img3"
            className="rounded-xl object-cover w-full h-64 md:h-80"
          />
          <img
            src="https://i.ibb.co/YF8h6NkK/service-1.jpg"
            alt="img4"
            className="rounded-xl object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
