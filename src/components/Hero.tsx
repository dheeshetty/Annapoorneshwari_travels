import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bus, Car, Plane, MapPin, Luggage } from "lucide-react"; 
import { BRAND } from "../data";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 600,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.4,
      });
    }
    setParticles(newParticles);

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let nx = p.x + p.dx;
          let ny = p.y + p.dy;

          if (nx < 0 || nx > window.innerWidth) p.dx *= -1;
          if (ny < 0 || ny > 600) p.dy *= -1;

          return { ...p, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 font-poppins">
      {/* Particle Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill="rgba(99,102,241,0.3)"
          />
        ))}
      </svg>

      {/* Travel Icons Floating */}
      <motion.div
        className="absolute top-24 left-12 text-indigo-400 opacity-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bus size={60} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-24 text-pink-400 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane size={70} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-purple-400 opacity-20"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Car size={55} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-32 text-orange-400 opacity-20"
        animate={{ y: [0, 15, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Luggage size={50} />
      </motion.div>

      <motion.div
        className="absolute top-80 right-10 text-teal-400 opacity-20"
        animate={{ rotate: [0, 20] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <MapPin size={65} />
      </motion.div>

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-300 opacity-40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-64 right-16 w-56 h-56 rounded-full bg-gradient-to-tr from-yellow-300 via-orange-400 to-pink-300 opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-28 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            {BRAND.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
          >
            🚍 Book Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="rounded-xl border border-gray-900 px-8 py-3 font-semibold text-gray-900 hover:bg-gray-100 transition shadow-sm"
          >
            Learn More →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
