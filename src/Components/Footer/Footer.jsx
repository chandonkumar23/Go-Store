import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#143d49] text-white py-6">
      <div className="max-w-7xl  px-4 flex  flex-row justify-between items-start gap-32 text-sm">
        
        {/* Address */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-white" />
          <span>Rajshahi, Bangladesh</span>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <span>
            &copy; Copyright 2025. Design by{' '}
            <a href="https://smartaddons.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
              Chandon Kumar
            </a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
