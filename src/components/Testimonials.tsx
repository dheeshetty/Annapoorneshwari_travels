import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000); // every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Trusted by hundreds of happy travelers who experienced comfort,
          reliability, and care with us.
        </motion.p>

        {/* Testimonial Card Slider */}
        <div className="mt-14 relative h-[280px] md:h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-lg w-full rounded-2xl bg-white p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Quote */}
                <p className="text-gray-700 text-base leading-relaxed italic">
                  “{TESTIMONIALS[index].text}”
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  {TESTIMONIALS[index].avatar ? (
                    <img
                      src={TESTIMONIALS[index].avatar}
                      alt={TESTIMONIALS[index].name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-200"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold ring-2 ring-indigo-200">
                      {TESTIMONIALS[index].name.charAt(0)}
                    </div>
                  )}
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {TESTIMONIALS[index].name}
                    </div>
                    {TESTIMONIALS[index].role && (
                      <div className="text-sm text-gray-500">
                        {TESTIMONIALS[index].role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-indigo-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
