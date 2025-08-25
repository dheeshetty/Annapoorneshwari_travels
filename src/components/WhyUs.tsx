import { motion } from "framer-motion";
import { WHY_US } from "../data";

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="w-full bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900"
      >
        Why Choose Us
      </motion.h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg">
        We stand out by delivering quality, innovation, and trust. Here’s why clients love working with us.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {WHY_US.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon with glow effect */}
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <Icon size={26} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
