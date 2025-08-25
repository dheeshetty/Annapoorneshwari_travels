import { BRAND } from "../data";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 text-sm">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="mt-3 md:mt-0 space-x-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#whyus" className="hover:text-white">Why Us</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
