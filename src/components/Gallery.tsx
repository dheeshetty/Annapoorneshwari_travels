import { motion } from "framer-motion";
import { GALLERY } from "../data";

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
        Gallery
      </motion.h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg">
        A glimpse of our best moments and projects captured beautifully.
      </p>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
        {GALLERY.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={src}
              alt={`gallery-${i}`}
              className="h-64 w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
              <p className="text-white text-sm font-medium">
                Captured Moment {i + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
