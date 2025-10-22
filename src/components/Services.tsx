import { motion } from "framer-motion";
import { SERVICES } from "../data";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.3 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20"
    >
      <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
        Our Services
      </motion.h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg">
        Explore the wide range of services we offer to help your business grow and thrive.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {SERVICES.map(({ icon: Icon, title, desc }, i) => {
          const cardContent = (
            <>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white text-2xl transition-transform duration-300 group-hover:scale-110">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </>
          );

          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Wrap only the first card in a Link */}
              {i === 0 ? <Link to="/bus-options">{cardContent}</Link> : cardContent}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
