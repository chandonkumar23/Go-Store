import React, { useState } from 'react';
import { FaHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        title: "Short Chino Denim Short",
        price: 47.60,
        oldPrice: 49.00,
        image: "https://i.ibb.co/Gv67hLTj/2eb8ef7690190ac19b5264fe4fdd682d.jpg",
        rating: 5,
    },
    {
        id: 2,
        title: "Fancy Loose Diamonds Jewelry",
        price: 35.00,
        oldPrice: 38.00,
        image: "https://i.ibb.co/wZVnsp7y/0774311b801dc4cfe99067dbadd770dc.jpg",
        rating: 5,
    },
    {
        id: 3,
        title: "Lady Comfort Sports Slip Shoes",
        price: 59.00,
        oldPrice: 62.00,
        image: "https://i.ibb.co/VWz8dhjD/4b114a41c8e6abbd2b2fc7d0b1823de0.jpg",
        rating: 4,
    },
];

// Animation for each card (cascade effect)
const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        },
    }),
    exit: {
        opacity: 0,
        x: -50,
        scale: 0.95,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const ProductCarousel = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((index + 1) % products.length);
    const prevSlide = () => setIndex((index - 1 + products.length) % products.length);

    return (
        <div className="relative py-10 bg-slate-50 w-[900px] flex justify-end mx-auto -top-80 left-72 shadow-lg">
            <div className="flex justify-center items-center px-4">
                <button onClick={prevSlide} className="p-3 bg-white shadow rounded">
                    <IoIosArrowBack size={24} />
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl"
                    >
                        {[...Array(3)].map((_, i) => {
                            const product = products[(index + i) % products.length];
                            return (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    custom={i}
                                    className="border rounded-lg p-4 relative shadow-sm bg-white"
                                >
                                    {/* SALE Badge */}
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        SALE
                                    </span>

                                    {/* Favorite */}
                                    <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                                        <FaHeart />
                                    </button>

                                    {/* Image */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-48 mx-auto my-4 object-contain"
                                    />

                                    {/* Title */}
                                    <h2 className="text-sm text-center font-medium">{product.title}</h2>

                                    {/* Rating */}
                                    <div className="flex justify-center text-yellow-400 mt-2">
                                        {[...Array(product.rating)].map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="flex justify-center gap-2 mt-2">
                                        <span className="text-red-600 font-bold">${product.price.toFixed(2)}</span>
                                        <span className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
                                    </div>

                                    {/* Add to Cart */}
                                    <div className="flex justify-center mt-4">
                                        <button className="p-2 bg-gray-100 rounded hover:bg-red-500 hover:text-white transition">
                                            <FaShoppingCart />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                <button onClick={nextSlide} className="p-3 bg-white shadow rounded">
                    <IoIosArrowForward size={24} />
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;
