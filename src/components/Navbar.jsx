import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
  {/* Logo */}
  <a href="#hero" className="font-code text-lime-400 font-bold text-xl tracking-wide">
    &lt;arif.raugir /&gt;
  </a>

  {/* Desktop Links */}
  <ul className="hidden md:flex items-center gap-1">
    {navLinks.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          onClick={() => setActive(link.label)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            active === link.label
              ? "text-lime-400 bg-lime-400/10"
              : "text-gray-400 hover:text-lime-400 hover:bg-white/5"
          }`}
        >
          {link.label}
        </a>
      </li>
    ))}
    <li>
      <a
        href="#contact"
        className="ml-2 px-4 py-1.5 bg-lime-500 hover:bg-lime-400 text-black text-sm font-bold rounded-md transition-colors"
      >
        Hire Me
      </a>
    </li>
  </ul>

  {/* Mobile toggle */}
  <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 text-xl">
    {open ? <HiX /> : <HiMenu />}
  </button>
</div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
