"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGamepad, FaRocket, FaSatellite } from "react-icons/fa";

const missions = [
  {
    icon: FaRocket,
    title: "Launch Control",
    description:
      "We're not your typical publishers - we're Finnish game astronauts (yes, Fennonauts!) on a mission to launch indie games beyond the stratosphere of success.",
  },
  {
    icon: FaSatellite,
    title: "Nordic Orbit",
    description:
      "From the land of endless summer nights and aurora borealis, we guide Finnish indie gems through the cosmic seas of the gaming universe.",
  },
  {
    icon: FaGamepad,
    title: "Space Station",
    description:
      "Our cosmic headquarters in Finland serves as mission control for the next generation of stellar indie games. No coffee breaks in zero gravity!",
  },
  {
    icon: FaGamepad,
    title: "Star Charts",
    description:
      "We map the constellations of gaming success, using our Nordic expertise to navigate your game through the gaming galaxy.",
  },
];

export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" id="about">
      <div className="absolute inset-0 bg-space-darker">
        <div className="nebula-effect opacity-10" />
        {/* Animated star field background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="cosmic-text text-4xl font-bold">
            Mission Control: Fennonauts
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We&apos;re not just game publishers - we&apos;re Finnish space
            explorers on a mission to launch indie games to the moon! 🚀 Join
            our cosmic journey through the gaming universe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10
                         bg-white/5 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 
                           transition-opacity duration-300"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
                <div className="relative z-10">
                  <mission.icon className="text-3xl text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-white/70">{mission.description}</p>
                </div>
                <div className="cosmic-glow opacity-0 group-hover:opacity-100" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            className="cosmic-button-secondary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Join Our Space Program</span>
            <FaRocket className="text-sm group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
