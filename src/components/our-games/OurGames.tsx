"use client";
import gameImageTemplate from "@/../public/static/gameImageTemplate.jpg";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSatellite } from "react-icons/fa";
import {
  SiEpicgames,
  SiNintendoswitch,
  SiPlaystation,
  SiSteam,
} from "react-icons/si";
import "./OurGames.css";

const MISSION_STATUSES = {
  PREFLIGHT: "Pre-flight Check",
  LAUNCH_READY: "Launch Ready",
  IN_DEVELOPMENT: "In Development",
  BETA: "Beta Testing",
};

const games = [
  {
    id: 1,
    title: "Space Viking Saga",
    tagline: "Norse Mythology in Space",
    status: MISSION_STATUSES.LAUNCH_READY,
    description:
      "Embark on an epic journey where Viking legends meet cosmic adventures.",
    launchDate: "2024 Q2",
    completion: 95,
    platforms: ["steam", "epic", "playstation"],
    features: ["Cosmic Raids", "Space Settlements", "Norse Magic"],
    image: gameImageTemplate.src,
    screenshots: Array(4).fill(gameImageTemplate.src),
    featured: true,
    media: [
      {
        type: "image",
        url: gameImageTemplate.src,
        alt: "Gameplay screenshot 1",
      },
      {
        type: "image",
        url: gameImageTemplate.src,
        alt: "Gameplay screenshot 2",
      },
      {
        type: "video",
        url: "/videos/trailer.mp4",
        thumbnail: gameImageTemplate.src,
      },
    ],
  },
  {
    id: 2,
    title: "Cosmic Sauna Simulator",
    status: "In Development",
    description: "The ultimate Finnish relaxation... in space!",
    platforms: ["steam", "switch"],
    releaseDate: "Q3 2024",
    image: gameImageTemplate.src,
    media: [
      {
        type: "image",
        url: gameImageTemplate.src,
        alt: "Sauna in space concept",
      },
      { type: "image", url: gameImageTemplate.src, alt: "Zero gravity löyly" },
    ],
    completion: 65,
    tagline: "Steam meets Space... literally!",
    launchDate: "2024 Q3",
  },
  {
    id: 3,
    title: "Quantum Kantele",
    status: "Coming Soon",
    description: "Musical roguelike with Finnish folk instruments",
    platforms: ["steam", "playstation", "switch"],
    releaseDate: "Q4 2024",
    image: gameImageTemplate.src,
    media: [
      {
        type: "image",
        url: gameImageTemplate.src,
        alt: "Quantum realm concert",
      },
      { type: "image", url: gameImageTemplate.src, alt: "Musical combat" },
    ],
    completion: 45,
    tagline: "Folk Music Meets Quantum Physics",
    launchDate: "2024 Q4",
  },
  {
    id: 4,
    title: "Northern Lights Racing",
    status: "Beta Testing",
    description: "Anti-gravity racing through Finnish landscapes",
    platforms: ["steam", "playstation"],
    releaseDate: "Q1 2024",
    image: gameImageTemplate.src,
    featured: true,
    screenshots: Array(4).fill(gameImageTemplate.src), // Replace with actual screenshots
    media: [
      { type: "image", url: gameImageTemplate.src, alt: "Aurora racing track" },
      {
        type: "image",
        url: gameImageTemplate.src,
        alt: "Anti-gravity vehicle",
      },
      {
        type: "video",
        url: "/videos/trailer.mp4",
        thumbnail: gameImageTemplate.src,
      },
    ],
    completion: 85,
    tagline: "Race Through the Aurora",
    launchDate: "2024 Q1",
  },
];

export default function OurGames() {
  const [activeGame, setActiveGame] = useState(games[0]);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % (activeGame.media?.length || 1));
  };

  const prevMedia = () => {
    setActiveMediaIndex((prev) =>
      prev === 0 ? (activeGame.media?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden our-games"
      id="games"
    >
      <div className="absolute inset-0 bg-space-darker">
        <div className="cosmic-nebula-effect opacity-30" />
        <div className="mission-control-grid" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="mission-badge">
            <FaSatellite className="animate-pulse" />
            <span className="text-sm">MISSION CONTROL</span>
          </div>

          <h2 className="cosmic-text text-5xl md:text-6xl font-bold mt-8 tracking-tight">
            Launch Schedule
          </h2>

          <div className="launch-stats">
            <div className="stat-item">
              <span className="stat-value text-2xl md:text-4xl">04</span>
              <span className="stat-label text-xs">In Development</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value text-2xl md:text-4xl">02</span>
              <span className="stat-label text-xs">Launch Ready</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value text-2xl md:text-4xl">06</span>
              <span className="stat-label text-xs">Planned</span>
            </div>
          </div>
        </div>

        <div className="mission-control-layout">
          <div className="featured-mission min-h-[450px] md:h-[500px]">
            <div className="mission-viewport">
              <div className="viewport-frame">
                <div className="media-carousel">
                  {activeGame.media?.map((media, index) => (
                    <div
                      key={index}
                      className={`media-item ${
                        index === activeMediaIndex ? "active" : ""
                      }`}
                    >
                      {media.type === "video" ? (
                        <video
                          src={media.url}
                          poster={
                            "thumbnail" in media ? media.thumbnail : undefined
                          }
                          controls
                          className="mission-preview"
                          playsInline
                        />
                      ) : (
                        <Image
                          src={media.url}
                          alt={media.alt || "Gameplay screenshot"}
                          className="mission-preview"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 66vw"
                          priority
                          quality={90}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mission-overlay">
                  <div className="mission-status">
                    <div className="status-indicator">
                      <div className="pulse-dot" />
                      <span>{activeGame.status}</span>
                    </div>
                  </div>

                  <div className="mission-brief">
                    <h3 className="mission-title text-2xl md:text-3xl">
                      {activeGame.title}
                    </h3>
                    <p className="mission-tagline text-sm md:text-base">
                      {activeGame.tagline}
                    </p>

                    <div className="mission-details mt-2">
                      <div className="progress-track w-full max-w-[200px]">
                        <div
                          className="progress-bar"
                          style={{ width: `${activeGame.completion}%` }}
                        />
                        <span className="progress-label text-xs">
                          {activeGame.completion}%
                        </span>
                      </div>

                      <div className="platform-dock">
                        {activeGame.platforms.map((platform) => {
                          const Icon =
                            platformIcons[
                              platform as keyof typeof platformIcons
                            ];
                          return (
                            <div key={platform} className="dock-item text-sm">
                              <Icon />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="media-controls">
                      <button onClick={prevMedia} className="media-nav-button">
                        <FaChevronLeft />
                      </button>
                      <div className="media-indicators">
                        {activeGame.media?.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator-dot ${
                              index === activeMediaIndex ? "active" : ""
                            }`}
                            onClick={() => setActiveMediaIndex(index)}
                          />
                        ))}
                      </div>
                      <button onClick={nextMedia} className="media-nav-button">
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-timeline h-[250px] md:h-[500px]">
            <div className="timeline-scroll">
              {games.map((game) => (
                <div
                  key={game.id}
                  className={`timeline-mission ${
                    activeGame.id === game.id ? "active" : ""
                  }`}
                  onClick={() => setActiveGame(game)}
                >
                  <div className="mission-marker" />
                  <div className="mission-card">
                    <div className="card-content">
                      <h4 className="text-base md:text-lg">{game.title}</h4>
                      <div className="mission-meta">
                        <span className="launch-date text-xs">
                          {game.launchDate}
                        </span>
                        <span className="mission-type text-xs">
                          {game.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const platformIcons = {
  steam: SiSteam,
  epic: SiEpicgames,
  playstation: SiPlaystation,
  switch: SiNintendoswitch,
};
