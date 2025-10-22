import { motion } from "framer-motion";
import { GALLERY } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900"
      >
        Bus Gallery
      </motion.h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg">
        Explore all our buses in a smooth, automatic gallery.
      </p>

      {/* Auto Sliding Swiper */}
      <div className="mt-12 px-6 md:px-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2} // small part of next slide visible
          centeredSlides={true}
          loop={true}
          speed={2500} // smooth transition
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {GALLERY.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`bus-${i}`}
                  className="h-72 w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">
                    Bus {i + 1}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
