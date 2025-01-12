import { BsStars } from "react-icons/bs";
import {
  FaGamepad,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaSatellite,
} from "react-icons/fa";
import "./AboutUs.css";

const missions = [
  {
    icon: FaLightbulb,
    orbitIcon: FaRocket,
    title: "Finnish Innovation",
    description:
      "We believe in the unique creativity of Finnish game developers. Like the Northern Lights inspire wonder, our indie games bring fresh ideas to the gaming universe! 🎮✨",
    status: "Our Vision",
  },
  {
    icon: FaHandshake,
    orbitIcon: FaGamepad,
    title: "Developer First",
    description:
      "Your success is our mission! We provide hands-on support in development, marketing, and publishing. Think of us as your co-pilots in this cosmic journey! 🚀",
    status: "Our Approach",
  },
  {
    icon: FaHeart,
    orbitIcon: FaSatellite,
    title: "Community Focus",
    description:
      "We're building a vibrant community of Finnish game developers. Together, we're creating an ecosystem where indie games can thrive and reach for the stars! 💫",
    status: "Our Promise",
  },
];

export default function AboutUs() {
  return (
    <section className="relative py-32 overflow-hidden about-us" id="about">
      <div className="absolute inset-0 bg-space-darker">
        <div className="cosmic-nebula-effect opacity-20" />

        {/* Enhanced particle field */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`,
                opacity: 0.3 + Math.random() * 0.7,
              }}
            >
              <BsStars className="text-primary" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="cosmic-badge mx-auto w-fit backdrop-blur-2xl">
            <FaRocket className="mr-2" />
            <span>MISSION CONTROL CENTER</span>
          </div>

          <h2 className="cosmic-text text-5xl md:text-6xl font-bold mt-8 tracking-tight">
            Meet The Fennonauts
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            We&apos;re Finland&apos;s first indie game publisher focused on
            launching local talents to global success. Our mission: Turn great
            Finnish games into interstellar hits!
          </p>
        </div>

        <div className="mission-cards-container">
          <div className="mission-cards-hex-grid max-w-5xl mx-auto">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="mission-card-wrapper"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="mission-card">
                  <div className="mission-card-inner group">
                    <div className="mission-card-content">
                      <div className="mission-card-header">
                        <div className="icon-portal">
                          <div className="icon-orbit">
                            <div className="orbit-path" />
                            <div className="orbit-icon">
                              <mission.orbitIcon />
                            </div>
                          </div>
                          <div className="icon-container">
                            <mission.icon className="mission-icon" />
                          </div>
                          <div className="space-particles">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="space-particle" />
                            ))}
                          </div>
                        </div>
                        <div className="mission-status">
                          <span className="status-dot"></span>
                          {mission.status}
                        </div>
                      </div>
                      <h3 className="mission-title">{mission.title}</h3>
                      <p className="mission-description">
                        {mission.description}
                      </p>
                      <div className="mission-footer">
                        <div className="tech-dots">
                          {[...Array(3)].map((_, i) => (
                            <span key={i} className="tech-dot"></span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="card-background" />
                    <div className="card-border" />
                    <div className="scanner-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="cosmic-button-secondary group">
            <span className="mr-2">Ready for Launch?</span>
            <FaRocket className="text-sm transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
