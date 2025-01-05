"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaRocket } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {
  SiEpicgames,
  SiNintendoswitch,
  SiPlaystation,
  SiSteam,
} from "react-icons/si";
import playstationPartnersLogo from "../../public/playstation-partners.svg";

export default function Hero() {
  const starFieldRef = useRef(
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.02 + 0.01,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);

      // Smooth star movement
      starFieldRef.current = starFieldRef.current.map((star) => ({
        ...star,
        x: (star.x + e.movementX * star.speed + 100) % 100,
        y: (star.y + e.movementY * star.speed + 100) % 100,
      }));

      // Update star positions in DOM
      const starElements = document.querySelectorAll(".star");
      starElements.forEach((el, i) => {
        const star = starFieldRef.current[i];
        (
          el as HTMLElement
        ).style.transform = `translate(${star.x}%, ${star.y}%)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-space-darker overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-space-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-aurora-glow"></div>
      <div className="nebula-effect"></div>

      {/* Aurora beams */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="aurora-beam"
          style={{
            left: `${i * 15}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Enhanced star field */}
      <div className="star-field">
        {starFieldRef.current.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: Math.random() * 0.5 + 0.3,
              transition: "transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 h-screen items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="inline-block">
              <div className="cosmic-badge">
                <FaRocket className="text-xl mr-2" />
                <span>LAUNCHING INDIE GAMES TO THE STARS</span>
              </div>
            </div>

            <h1 className="font-grotesk text-7xl font-black leading-tight">
              <span className="block cosmic-text">Fennonauts</span>
              <span className="cosmic-gradient text-4xl font-bold block mt-4">
                Finnish Game Explorers
              </span>
            </h1>

            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              Join our cosmic mission to launch Finland&apos;s most innovative
              indie games into the gaming universe. We&apos;re your mission
              control for discovering the next interstellar hit.
            </p>

            <div className="flex gap-6 items-center pt-4">
              <button className="cosmic-button group">
                <span className="cosmic-glow"></span>
                <span className="relative z-10 flex items-center">
                  Launch Games
                  <IoGameController className="ml-2 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button className="cosmic-button-secondary group">
                Join Mission
                <FaRocket className="ml-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 cosmic-partners">
              <span className="text-sm text-white/60">Ground Control:</span>
              {[SiSteam, SiEpicgames, SiPlaystation, SiNintendoswitch].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="text-2xl hover:text-primary transition-all cursor-pointer transform hover:-translate-y-1"
                  />
                )
              )}
              <div className="ml-auto opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={playstationPartnersLogo}
                  alt="PlayStation Partners"
                  width={120}
                  height={24}
                  className="filter brightness-0 invert opacity-70"
                />
              </div>
            </div>
          </motion.div>

          {/* Advanced 3D Video Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative hidden lg:block perspective-container"
          >
            {/* Static tilted preview title */}
            <div
              className="absolute -top-12 left-0 right-0 text-center transform-gpu"
              style={{
                transform: "rotateX(5deg) rotateY(-10deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <span className="cosmic-gradient text-sm font-medium inline-block">
                Wormhole Preview to the Future
              </span>
            </div>

            <motion.div
              className="floating-grid"
              animate={{
                rotateX: [2, 5, 2],
                rotateY: [-5, 2, -5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="grid-3d-container">
                <div className="featured-section">
                  <motion.div
                    className="main-video-container"
                    whileHover={{
                      scale: 1.02,
                      rotateX: -2,
                      rotateY: 5,
                      z: 30,
                    }}
                  >
                    <video
                      src="/video1.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="game-video"
                    />
                    <div className="video-depth-layer" />
                    <div className="content-overlay">
                      <div className="game-info floating-content">
                        <motion.div className="game-status">
                          Featured Release
                        </motion.div>
                        <h3 className="game-name">Game Title</h3>
                        <p className="game-meta">Action RPG · 2024</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="side-section">
                  {[
                    {
                      id: 1,
                      title: "Upcoming Release",
                      genre: "Strategy",
                      depth: 20,
                    },
                    {
                      id: 2,
                      title: "Popular Now",
                      genre: "Adventure",
                      depth: 40,
                    },
                    {
                      id: 3,
                      title: "New Addition",
                      genre: "Puzzle",
                      depth: 60,
                    },
                  ].map((game, index) => (
                    <motion.div
                      key={game.id}
                      className="side-video-container"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      style={
                        {
                          "--depth": `${game.depth}px`,
                          "--index": index,
                        } as React.CSSProperties
                      }
                      whileHover={{
                        scale: 1.05,
                        rotateY: -8,
                        z: 30,
                      }}
                    >
                      <div className="video-inner">
                        <video
                          src={`/video${game.id + 1}.mp4`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="game-video"
                        />
                        <div className="depth-shadows" />
                        <div className="content-overlay">
                          <div className="game-info-compact">
                            <span className="game-genre">{game.genre}</span>
                            <h4 className="game-title">{game.title}</h4>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
