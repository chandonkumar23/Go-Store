import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaEye, FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const {
        title,
        image,
        price,
        oldPrice,
        tag,
        rating,
        description = "Lorem khaled ipsum is a major key to success. Eliptical talk. The key to more success is to get a massage once a week, very important, major key, cloth talk. Mogul talk.",
        deliveryTime = "2-5 days"
    } = product;

    const [showModal, setShowModal] = useState(false);

    return (
        <>
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
                <button
                    className="border-2 border-gray-300 rounded-full p-2 absolute top-2 right-2 
                    text-gray-400 transition-all duration-500 
                    hover:text-red-500 hover:border-red-500"
                >
                    <FaHeart />
                </button>

                {/* Hover Eye Icon */}
                <button
                    onClick={() => setShowModal(true)}
                    className="border-2 border-gray-300 rounded-full p-2 absolute top-14 right-2 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500
                       hover:text-red-500 hover:border-red-500"
                >
                    <FaEye className="text-gray-600 hover:text-black" />
                </button>

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
                   transition-all duration-500 group-hover:right-2 hover:bg-red-500 hover:text-white">
                    <FaShoppingCart />
                </button>
            </div>


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative min-h-[400px]">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-600 z-10"
                        >
                            &times;
                        </button>

                        {/* Left - Image */}
                        <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-gray-50">
                            <img
                                src={image}
                                alt={title}
                                className="max-h-80 object-contain transition-transform duration-500 transform hover:scale-110"
                            />
                        </div>


                        {/* Right - Details */}
                        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between items-start text-left">
                            <div>
                                <h2 className="text-xl font-semibold">{title}</h2>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: 5 }, (_, i) =>
                                            i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500">Review (1)</span>
                                </div>

                                {/* Description */}
                                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                    {description}
                                </p>

                                {/* Stock */}
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="text-green-600 font-medium flex items-center">
                                        ✅ In stock
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mt-2 text-red-600 text-lg font-semibold">
                                    ${price.toFixed(2)}
                                </div>

                                {/* Delivery Time */}
                                <p className="text-sm text-gray-600 mt-1">
                                    Delivery time: {deliveryTime}
                                </p>
                            </div>

                            {/* Quantity & Actions */}
                            <div className="flex items-center gap-4 mt-6 flex-wrap">
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="w-16 h-10 border rounded-md text-center"
                                />
                                <button className="px-6 h-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-md font-semibold hover:opacity-90">
                                    Add To Cart
                                </button>
                                <button className="text-xl text-gray-400 hover:text-red-500">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default ProductCard;
