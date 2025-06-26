import { motion } from "framer-motion";

const SectionTow = () => {
  const banners = [
    {
      id: 1,
      text: "Better Quality Better Service for Your Phone",
      image: "https://i.ibb.co/qVwrsj5/banner-1-removebg-preview.png",
      bgColor: "bg-pink-50",
    },
    {
      id: 2,
      text: "Better Quality Better Service for Your Phone",
      image: "https://i.ibb.co/jtF61wk/banner-2-removebg-preview.png",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mb-40">
      {banners.map((banner, index) => (
        <motion.div
          key={banner.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`group rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 ${banner.bgColor}`}
        >
          <div className="max-w-md">
            <div className="mb-2">
              <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400">
                On Sale This Week
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {banner.text}
            </h2>
            <a
              href="#"
              className="text-black font-medium flex items-center gap-1 hover:underline"
            >
              Shop Now <span>&rarr;</span>
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <motion.img
              src={banner.image}
              alt="Banner"
              className="w-full max-w-[350px] h-[350px] md:max-w-sm object-cover rounded-xl"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionTow;
