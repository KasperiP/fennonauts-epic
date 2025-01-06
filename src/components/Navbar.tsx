"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-space-darker/95 backdrop-blur-md"
            : "bg-space-darker/50 backdrop-blur-md"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white hover:scale-105 transition-transform"
          >
            <FaRocket className="text-primary w-6 h-6" />
            <span className="font-grotesk font-bold text-lg">Fennonauts</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Games", "About", "News", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors relative px-2 hover:-translate-y-0.5 inline-block"
              >
                <span className="relative z-10">{item}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex cosmic-button-secondary py-2 hover:scale-105 transition-transform">
            <span className="mr-2">Launch Game</span>
            <FaRocket className="text-sm" />
          </button>
        </div>
      </div>
    </nav>
  );
}
