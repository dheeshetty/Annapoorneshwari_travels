import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BUS_OPTIONS } from "../data/bus";
import emailjs from "emailjs-com";

import {
  Shield,
  Wind,
  Music,
  Armchair,
  Briefcase,
  Wifi,
  Ticket,
  CheckCircle2,
  MapPin,
  Target,
  User,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bus = BUS_OPTIONS.find((b) => b.id === Number(id));

  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    name: "",
    mobile: "",
    email: "",
    date: "",
  });
  const [isBooking, setIsBooking] = useState(false);


  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bookingForm");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingForm", JSON.stringify(formData));
  }, [formData]);

  if (!bus) {
    return (
      <>
        <Header />
        <p className="text-center mt-20 text-gray-600">Bus not found.</p>
        <Footer />
      </>
    );
  }

  const features = [
    { icon: <Wind className="w-6 h-6" />, label: "A/C", gradient: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { icon: <Shield className="w-6 h-6" />, label: "Security", gradient: "bg-gradient-to-r from-green-400 to-green-600" },
    { icon: <Music className="w-6 h-6" />, label: "JBL Sound", gradient: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { icon: <Armchair className="w-6 h-6" />, label: "Luxury", gradient: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Luggage", gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600" },
    { icon: <Wifi className="w-6 h-6" />, label: "WiFi", gradient: "bg-gradient-to-r from-teal-400 to-teal-600" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleBooking = async () => {
  const { name, mobile, source, destination, date, email } = formData;

  // Validation
  if (!name || !mobile || !source || !destination || !date) {
    toast.error("Please fill all required fields.");
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    toast.error("Please enter a valid 10-digit mobile number.");
    return;
  }

  // prevent multiple clicks
  if (isBooking) return;

  setIsBooking(true);

  try {
    // ✅ Send email once
      await emailjs.send(
      "service_parqaxt",       // e.g. "service_abc123"
      "template_udtu3xu",      // e.g. "template_booking"
      {
        busName: bus.name,
        name,
        mobile,
        email: email || "N/A",
        source,
        destination,
        date,
      },
      "UiUR8gZQCk5dxsyG0"        // e.g. "o3FasDF3Z-XXXX"
    );

    // ✅ Show confirmation UI
    setShowConfirm(true);
    toast.success("Booking confirmed! Annapoorneshwari Travels will contact you soon 🚍");
  } catch (err) {
    console.error(err);
    toast.error("Booking saved, but email failed to send.");
  } finally {
    // allow next booking after 10 sec
    setTimeout(() => setIsBooking(false), 10000);
  }
};


  return (
    <>
      <Header />
      <main className="relative py-16 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen flex justify-center px-4 overflow-hidden">
        <Toaster position="top-right" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl relative z-10"
        >
          {/* Bus Info */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-6 mb-10 border"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              {bus.name}
            </h1>
            <p className="text-gray-700 text-lg">{bus.desc}</p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-md transition cursor-default ${f.gradient}`}
                style={{ color: "white" }}
              >
                {f.icon}
                <span className="text-xs mt-2 font-medium text-white text-center">{f.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl relative z-10 border">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Book Your Bus
            </h2>

            {/* Inputs with Labels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Source City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-indigo-500" />
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination City
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-3 text-purple-500" />
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-green-500" />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-blue-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-red-500" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Live Ticket Preview */}
            {formData.name && formData.date && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-5 flex items-center justify-between shadow-lg mb-6"
              >
                <div>
                  <h4 className="font-bold text-lg">{formData.name}</h4>
                  <p className="text-sm">
                    {formData.source} → {formData.destination}
                  </p>
                  <p className="text-sm">{formData.date}</p>
                </div>
                <Ticket className="w-10 h-10 opacity-80" />
              </motion.div>
            )}

            {/* Book Now */}
            <motion.button
              onClick={handleBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isBooking}
              className={`w-full py-4 mt-4 rounded-2xl font-bold shadow-lg text-white ${
                isBooking
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600"
              }`}
            >
              {isBooking ? "Booking..." : "🚍 Book Now"}
            </motion.button>

          </div>
        </motion.div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-lg w-full flex flex-col items-center text-center"
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Booking Confirmed!</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Your trip with <span className="font-semibold">{bus.name}</span> is confirmed 🎉
                </p>

                <div className="bg-indigo-50 rounded-2xl p-6 w-full mb-6 shadow-inner border-l-4 border-indigo-600 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{formData.name}</h3>
                    <p className="text-gray-700 text-md mb-1">{formData.source} → {formData.destination}</p>
                    <p className="text-gray-600 text-sm">{formData.date}</p>
                    {formData.mobile && <p className="text-gray-600 text-sm">📞 {formData.mobile}</p>}
                    {formData.email && <p className="text-gray-600 text-sm">📧 {formData.email}</p>}
                  </div>
                  <Ticket className="w-16 h-16 text-indigo-600 opacity-90" />
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/bus-options")}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg"
                >
                  Back to Buses
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
