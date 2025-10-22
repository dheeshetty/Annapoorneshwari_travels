import { useState } from "react";
import { BRAND } from "../data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Annpoorneshwari_Logo.png";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { href: "services", label: "Services" },
  { href: "whyus", label: "Why Us" },
  { href: "gallery", label: "Gallery" },
  { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    navigate("/"); // Go to main page
    setTimeout(() => {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50); // Wait for DOM
    setOpen(false); // close mobile menu
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-indigo-900 text-white shadow-md font-poppins">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-[2px] rounded-full bg-yellow-400">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>
          <span className="text-2xl font-bold tracking-wide">{BRAND.name}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="bg-transparent relative group transition-colors hover:text-yellow-400"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-400 transition-all group-hover:w-full" />
          </button>
        ))}
      </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 hover:bg-indigo-800 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-indigo-900/95 shadow-lg border-t border-indigo-800"
          >
            <div className="flex flex-col items-start space-y-4 px-6 py-5 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left rounded-md py-2 px-3 hover:bg-indigo-800 transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
