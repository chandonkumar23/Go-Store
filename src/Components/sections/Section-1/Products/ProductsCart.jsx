import React from "react";
import { FaHeart, FaShoppingCart, FaEye, FaStar, FaRegStar } from "react-icons/fa";


const ProductCard = ({ product }) => {
    const {
        title,
        image,
        price,
        oldPrice,
        tag,
        rating,
    } = product;

    return (
        <div className="border rounded-md p-4 relative group shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
            {/* Bottom Line Bar */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-500 group-hover:w-full transition-all duration-500"></div>

            {/* Tag */}
            {tag && (
                <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded bg-${tag === "SALE" ? "red" : "blue"}-500 text-white`}>
                    {tag}
                </span>
            )}

            {/* Wishlist */}
            <div className="">
                <button
                    className="border-2 border-gray-300 rounded-full p-2 absolute top-2 right-2 
             text-gray-400 transition-all duration-500 
             hover:text-red-500 hover:border-red-500"
                >
                    <FaHeart />
                </button>

            </div>

            {/* Hover Eye Icon */}
            <div className="absolute top-14 right-4 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <FaEye className="text-gray-600 hover:text-black" />
            </div>

            {/* Tooltip Title */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs px-2 py-1 rounded z-10">
                {title}
            </div>

            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="h-48 mx-auto object-contain my-4"
            />

            {/* Title */}
            <h3 className="text-sm font-medium text-center">{title}</h3>

            {/* Rating */}
            <div className="flex justify-center mt-2 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) =>
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
            </div>

            {/* Price */}
            <div className="mt-2 text-center">
                {oldPrice && (
                    <span className="text-sm text-gray-400 line-through mr-2">${oldPrice}</span>
                )}
                <span className="text-red-600 font-semibold">${price.toFixed(2)}</span>
            </div>

            {/* Cart Button */}
            <button className="absolute bottom-2 right-[-50px] p-4 text-gray-500 bg-pink-100 rounded-md 
               transition-all duration-500 group-hover:right-2 hover:bg-red-500">
                <FaShoppingCart />
            </button>
        </div>


    );
};

export default ProductCard;
