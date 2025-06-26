import React, { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Meatball Alcatra',
    price: 47.0,
    sale: true,
    image: 'https://via.placeholder.com/150/FF6F61/fff?text=Headphones',
  },
  {
    id: 2,
    title: 'Venison Duis Jowl Pork Chop Beefribs',
    price: 78.0,
    sale: false,
    image: 'https://via.placeholder.com/150/111/fff?text=Mouse',
  },
  {
    id: 3,
    title: 'Nisi Aliqua Meatloaf Cupidatat Tongue',
    price: 29.0,
    sale: true,
    image: 'https://via.placeholder.com/150/000/fff?text=Keyboard',
  },
];

const SaleSection = () => {
  const [timer, setTimer] = useState({
    days: 99,
    hours: 22,
    minutes: 56,
    seconds: 41,
  });

  // Optionally, update timer here using setInterval if needed

  return (
    <section className="py-12 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm uppercase text-pink-600 font-semibold mb-2">Limited Offer</p>
          <h2 className="text-3xl font-bold mb-4">
            Weekly Sale on <span className="text-rose-500">35%</span>
          </h2>
          <div className="flex justify-center md:justify-start space-x-4 text-center text-black">
            {['days', 'hours', 'minutes', 'seconds'].map((key) => (
              <div key={key}>
                <p className="text-3xl font-bold">{timer[key]}</p>
                <p className="text-sm uppercase">{key}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/400x400.png?text=Model+Image"
            alt="Model"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      {/* Product Carousel */}
      <div className="mt-12 px-8">
        <div className="flex items-center justify-between mb-6">
          <button className="bg-gray-200 p-2 rounded-full">{'<'}</button>
          <button className="bg-gray-200 p-2 rounded-full">{'>'}</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-xl relative">
              {product.sale && (
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              )}
              <img src={product.image} alt={product.title} className="mx-auto mb-4 h-32" />
              <h3 className="text-sm font-medium mb-2">{product.title}</h3>
              <div className="text-yellow-400 mb-1">★★★★★</div>
              <p className="text-red-600 font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600">
                🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
