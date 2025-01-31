import Image from "next/image";
import { FaRocket } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import {
  SiEpicgames,
  SiNintendoswitch,
  SiPlaystation,
  SiSteam,
} from "react-icons/si";
import playstationPartnersLogo from "../../../public/static/playstation-partners.svg";
import "./Hero.css";
import { Starfield } from "./Starfield";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-space-darker overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-space-gradient opacity-100"></div>
      <div className="absolute inset-0 bg-aurora-glow opacity-50"></div>
      <div className="cosmic-nebula-effect"></div>

      {/* Aurora Beam Effects */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="aurora-beam"
          style={{
            left: `${i * 28 + 10}%`,
            animationDelay: `${i * 1.5}s`,
            opacity: "0.12",
            willChange: "transform, opacity",
          }}
        />
      ))}

      <Starfield />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 min-h-[100dvh] items-start lg:items-center py-24 lg:py-0">
          {/* Hero Content - Left Side */}
          <div className="text-left space-y-4 lg:space-y-8 animate-fade-in-up content-wrapper max-lg:mt-8 z-10">
            <div className="inline-block">
              <div className="cosmic-badge text-xs sm:text-sm">
                <FaRocket className="text-xl mr-2" />
                <span>LAUNCHING INDIE GAMES TO THE STARS</span>
              </div>
            </div>

            <h1 className="font-grotesk text-5xl sm:text-7xl font-black leading-tight">
              <span className="block cosmic-text">Fennonauts</span>
              <span className="cosmic-gradient text-4xl font-bold block mt-4">
                Finnish Game Explorers
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
              Join our cosmic mission to launch Finland&apos;s most innovative
              indie games into the gaming universe. We&apos;re your mission
              control for discovering the next interstellar hit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pt-4">
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

            <div className="space-y-6">
              <div className="flex items-center gap-4 sm:gap-6 cosmic-partners">
                <span className="text-sm text-white/60">Ground Control:</span>
                {[SiSteam, SiEpicgames, SiPlaystation, SiNintendoswitch].map(
                  (Icon, index) => (
                    <Icon
                      key={index}
                      className="text-2xl hover:text-primary transition-all cursor-pointer transform hover:-translate-y-1"
                    />
                  )
                )}
              </div>

              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={playstationPartnersLogo}
                  alt="PlayStation Partners"
                  width={120}
                  height={24}
                  className="filter brightness-0 invert opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Featured Games Grid - Right Side */}
          <div className="relative w-full perspective-container will-change-transform lg:mx-0 mt-16 max-lg:mt-28">
            <div className="absolute lg:-top-[5.5rem] left-0 right-0 z-30 max-lg:-top-24">
              <div className="floating-title">
                <div className="space-y-2 text-center transform-gpu">
                  <div className="inline-flex items-center space-x-3 transform-gpu">
                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="cosmic-badge py-1 px-3 text-[0.65rem] tracking-widest">
                      <FaRocket className="mr-1.5 text-xs" />
                      <span>EXPLORE THE GAMES</span>
                    </div>
                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  </div>

                  <div className="title-card-main group transform-gpu">
                    <span className="fennoverse-title">
                      Through the Fennoverse
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="floating-grid animate-float"
              style={{
                animationDuration: "15s",
                willChange: "transform",
              }}
            >
              <div className="grid-3d-container">
                <div className="featured-section">
                  <div className="main-video-container video-inner">
                    <video
                      src="/static/video1.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="game-video"
                    />
                    <div className="video-depth-layer" />
                    <div className="content-overlay">
                      <div className="game-info floating-content">
                        <div className="game-status">Adventure</div>
                        <h3 className="game-name">
                          Mauri Mursu&apos;s Odyssey
                        </h3>
                        <p className="game-meta">Adventure · 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side-section flex-shrink-0 overflow-x-auto lg:overflow-visible">
                  <div className="side-section-wrapper">
                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 p-2 lg:p-0">
                      {[
                        {
                          id: 1,
                          title: "Egg Racing",
                          genre: "Arcade Racing",
                        },
                        {
                          id: 2,
                          title: "Mythargia",
                          genre: "Puzzle/Adventure",
                        },
                        {
                          id: 3,
                          title: "DESTROYER BURGER",
                          genre: "Satirical Simulator",
                        },
                      ].map((game, index) => (
                        <div
                          key={game.id}
                          className="side-video-container animate-slide-in flex-shrink-0 w-[280px] lg:w-auto"
                          style={
                            {
                              animationDelay: `${index * 0.1}s`,
                            } as React.CSSProperties
                          }
                        >
                          <div className="video-inner">
                            <video
                              src={`/static/video${game.id + 1}.mp4`}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="none"
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
