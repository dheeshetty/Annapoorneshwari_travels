import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { BUS_OPTIONS } from "../data/bus";
import { useNavigate } from "react-router-dom";
import { Shield, Wind, Music, Armchair, Briefcase,Wifi  } from "lucide-react";

export default function BusOptionsPage() {
  const navigate = useNavigate();

  const features = [
    { icon: <Wind className="w-5 h-5 text-blue-500" />, label: "A/C" },
    { icon: <Shield className="w-5 h-5 text-green-500" />, label: "Security" },
    { icon: <Music className="w-5 h-5 text-purple-500" />, label: "JBL Sound" },
    // { icon: <Seat className="w-5 h-5 text-orange-500" />, label: "Push-back" },
    { icon: <Armchair className="w-5 h-5 text-pink-500" />, label: "Luxury" },
    { icon: <Briefcase className="w-5 h-5 text-indigo-500" />, label: "Luggage" },
     { icon: <Wifi className="w-5 h-5 text-teal-500" />, label: "WiFi" },
  ];

  return (
    <>
      <Header />

      <main className="pt-2">
        <section id="bus-options" className="w-full py-20 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
            Choose Your Bus
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
            {BUS_OPTIONS.map((bus, i) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Bus Image */}
                <div
                  className="relative h-64 w-full"
                  onClick={() => navigate(`/bus-detail/${bus.id}`)}
                >
                  <img
                    src={bus.image}
                    alt={bus.name}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white  rounded-2xl">
                    <h3 className="text-lg font-bold mb-3">Features</h3>

                    {/* Feature list */}
                    <div className="grid grid-cols-3 gap-3 mb-2">
                      {features.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center text-xs"
                        >
                          {f.icon}
                          <span className="mt-1">{f.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Seats and Book Now */}
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                      <p className="text-sm font-medium">
                        Seats: {bus.name.split(" ")[0]}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // prevent navigating on image click
                          navigate(`/bus-detail/${bus.id}`);
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-sm shadow-md hover:scale-105 transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="p-4 text-center bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">{bus.name}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{bus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
