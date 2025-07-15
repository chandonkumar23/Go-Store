import React, { useState } from "react";
import ProductCard from "./ProductsCart";


const tabs = ["Accessories", "Electronics", "Tablets", "Watches"];

const products = [
    {
        id: 1,
        title: "Meatball Alcatra",
        category: "Accessories",
        price: 47.0,
        oldPrice: 52.99,
        tag: "SALE",
        image: "https://i.ibb.co/wZVnsp7y/0774311b801dc4cfe99067dbadd770dc.jpg",
        rating: 4,
    },
    {
        id: 2,
        title: "Meatball Alcatra",
        category: "Accessories",
        price: 47.0,
        oldPrice: 52.99,
        tag: "SALE",
        image: "https://i.ibb.co/VWz8dhjD/4b114a41c8e6abbd2b2fc7d0b1823de0.jpg",
        rating: 4,
    },
    {
        id: 3,
        title: "Meatball Alcatra",
        category: "Accessories",
        price: 47.0,
        oldPrice: 52.99,
        tag: "SALE",
        image: "https://i.ibb.co/JFgxz0cf/9b9da2e537a3f961d5f96c1e096f744d.jpg",
        rating: 4,
    },
    {
        id: 4,
        title: "Meatball Alcatra",
        category: "Accessories",
        price: 47.0,
        oldPrice: 52.99,
        tag: "SALE",
        image: "https://i.ibb.co/Gv67hLTj/2eb8ef7690190ac19b5264fe4fdd682d.jpg",
        rating: 4,
    },
    {
        id: 5,
        title: "Meatball Alcatra",
        category: "Accessories",
        price: 47.0,
        oldPrice: 52.99,
        tag: "SALE",
        image: "https://i.ibb.co/39vR4hY8/38295a8fa5d9cb2d37fdfc91c2ff0010.jpg",
        rating: 4,
    },
    {
        id: 6,
        title: "Lady Comfort Sports Slip",
        category: "Tablets",
        price: 59.0,
        oldPrice: 62.99,
        tag: "SALE",
        image: "https://i.ibb.co/SXdBcyGF/4b447631dbf362dae4ad81b7eff1df3f.jpg",
        rating: 3,
    },
    {
        id: 7,
        title: "Lady Comfort Sports Slip",
        category: "Tablets",
        price: 59.0,
        oldPrice: 62.99,
        tag: "SALE",
        image: "https://i.ibb.co/Gv67hLTj/2eb8ef7690190ac19b5264fe4fdd682d.jpg",
        rating: 3,
    },
    {
        id: 8,
        title: "Lady Comfort Sports Slip",
        category: "Tablets",
        price: 59.0,
        oldPrice: 62.99,
        tag: "SALE",
        image: "https://i.ibb.co/JFgxz0cf/9b9da2e537a3f961d5f96c1e096f744d.jpg",
        rating: 3,
    },
    {
        id: 9,
        title: "Lady Comfort Sports Slip",
        category: "Tablets",
        price: 59.0,
        oldPrice: 62.99,
        tag: "SALE",
        image: "https://i.ibb.co/q3GPFJ3Y/85c1d6b6fe2d833d9d72968e776fe4f6.jpg",
        rating: 3,
    },
    {
        id: 10,
        title: "Lady Comfort Sports Slip",
        category: "Tablets",
        price: 59.0,
        oldPrice: 62.99,
        tag: "SALE",
        image: "https://i.ibb.co/VWz8dhjD/4b114a41c8e6abbd2b2fc7d0b1823de0.jpg",
        rating: 3,
    },
    {
        id: 11,
        title: "Skin Care Deep Cleansing",
        category: "Watches",
        price: 47.8,
        tag: "NEW",
        image: "https://i.ibb.co/HTfSrfGf/c1a9f67b68f91c1bebc167c27e09c9a4.jpg",
        rating: 0,
    },
    {
        id: 12,
        title: "Skin Care Deep Cleansing",
        category: "Watches",
        price: 47.8,
        tag: "NEW",
        image: "https://i.ibb.co/B2jQ9z2G/9b1cbf55cdf0101b36aaebc09993ccf0.jpg",
        rating: 0,
    },
    {
        id: 13,
        title: "Skin Care Deep Cleansing",
        category: "Watches",
        price: 47.8,
        tag: "NEW",
        image: "https://i.ibb.co/wZVnsp7y/0774311b801dc4cfe99067dbadd770dc.jpg",
        rating: 0,
    },
    {
        id: 14,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/M5sdhF1q/95da0edd4ca89ea9850d6befc1e5408e.jpg",
        rating: 4,
    },
    {
        id: 15,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/k6hgvHYj/ae229fc24389bfeb5d573e3bf9666a6d.jpg",
        rating: 4,
    },
    {
        id: 16,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/xtvYxnR6/b442a3926e7bc63a1fe6cddacffd22af.jpg",
        rating: 4,
    },
    {
        id: 17,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/mrGyvSNg/3979572a8f33652ff4764e3c9be3ead2.jpg",
        rating: 4,
    },
    {
        id: 18,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/HWVytHH/00e5b3691719571bb5999119bd18c61e.jpg",
        rating: 4,
    },
    {
        id: 19,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/HWVytHH/00e5b3691719571bb5999119bd18c61e.jpg",
        rating: 4,
    },
    {
        id: 20,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/HWVytHH/00e5b3691719571bb5999119bd18c61e.jpg",
        rating: 4,
    },
    {
        id: 21,
        title: "Short Chino Denim Short",
        category: "Electronics",
        price: 47.6,
        oldPrice: 49.99,
        tag: "SALE",
        image: "https://i.ibb.co/HWVytHH/00e5b3691719571bb5999119bd18c61e.jpg",
        rating: 4,
    },
    // Add more...
];

const FeaturedTabs = () => {
    const [activeTab, setActiveTab] = useState("Tablets");

    const filteredProducts = products.filter(p => p.category === activeTab);

    return (
     <div className="text-center mb-10 px-4 sm:px-6 lg:px-10">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
    Featured Products
  </h2>

  {/* Tabs */}
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 sm:px-6 py-2 border rounded-full text-sm transition duration-300 ${
          activeTab === tab
            ? "bg-red-500 text-white border-red-500"
            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

    );
};

export default FeaturedTabs;
