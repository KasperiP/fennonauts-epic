"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 7, 17, 0)", "rgba(3, 7, 17, 0.85)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ background }}
      className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 
                 ${isScrolled ? "border-b border-white/10" : ""}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="text-primary w-6 h-6" />
            <span className="font-grotesk font-bold text-lg">Fennonauts</span>
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Games", "About", "News", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors relative px-2"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.span
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:flex cosmic-button-secondary py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Launch Game</span>
            <FaRocket className="text-sm" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
