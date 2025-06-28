import React from "react";
import {
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaPinterestP,
} from "react-icons/fa";

const Sub = () => {
    const galleryImages = [
        "https://i.ibb.co/0Rj6bk7G/g7.jpg",
        "https://i.ibb.co/mVKGJHYB/g5.jpg",
        "https://i.ibb.co/84YZzZgT/g4.jpg",
        "https://i.ibb.co/Z6RC2Dwm/g3.jpg",
        "https://i.ibb.co/LVmJZsd/g1.jpg",
        "https://i.ibb.co/5XmjRncz/g2.png",
    ];

    return (
        <footer className="relative -mt-32 overflow-hidden bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
                {/* Logo + Description + Socials */}
                <div>
                    <div className="text-3xl font-bold mb-4">
                        <div>
                            <img src="https://i.ibb.co/b5M2dtxb/logo-footer.png" alt="logo" />
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vel fringilla enim. Cras eget tellus vestibulum, varius diam eu,
                        tempus odio.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaTwitter /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaInstagram /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaFacebookF /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaPinterestP /></a>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Market Review</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Site Map</li>
                    </ul>
                </div>

                {/* Galleries */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Galleries</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((url, i) => (
                            <div key={i} className="h-20 w-full rounded-lg bg-white/30 overflow-hidden">
                                <img src={url} alt={`gallery-${i}`} className="object-cover h-full w-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Information */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Information</h3>
                    <ul className="space-y-2">
                        <li>Shipping Policy</li>
                        <li>Compensation First</li>
                        <li>My Account</li>
                        <li>Return Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Sub;
