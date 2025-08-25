import { BRAND } from "../data";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-gray-600 max-w-xl mx-auto text-lg"
        >
          We’re here to answer your questions and assist with your travel needs.
        </motion.p>

        {/* Contact Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg"
          >
            <div className="flex items-center space-x-4 hover:translate-x-2 transition">
              <Phone className="text-indigo-600" size={22} />
              <a
                href={`tel:${BRAND.phone}`}
                className="text-gray-800 hover:text-indigo-600 transition"
              >
                {BRAND.phone}
              </a>
            </div>
            <div className="flex items-center space-x-4 hover:translate-x-2 transition">
              <MessageCircle className="text-green-600" size={22} />
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center space-x-4 hover:translate-x-2 transition">
              <Mail className="text-indigo-600" size={22} />
              <a
                href={`mailto:${BRAND.email}`}
                className="text-gray-800 hover:text-indigo-600 transition"
              >
                {BRAND.email}
              </a>
            </div>
            <div className="flex items-center space-x-4 hover:translate-x-2 transition">
              <MapPin className="text-indigo-600" size={22} />
              <a
                href={BRAND.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-indigo-600 transition"
              >
                {BRAND.address}
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm h-32 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
