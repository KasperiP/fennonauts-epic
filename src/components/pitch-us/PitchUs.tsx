"use client";
import { useState } from "react";
import { FaGamepad, FaRocket, FaSatellite } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { PiGameControllerFill } from "react-icons/pi";
import "./PitchUs.css";

const DEVELOPMENT_STAGES = [
  "Concept",
  "Prototype",
  "Alpha",
  "Beta",
  "Near Complete",
] as const;

const PLATFORMS = ["PC", "Console", "Mobile", "VR", "Other"] as const;

export default function PitchUs() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    gameTitle: "",
    elevatorPitch: "",
    developmentStage: "",
    platforms: [] as string[],
    demoLink: "",
    email: "",
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-32 overflow-hidden pitch-us" id="pitch">
      <div className="section-transition" />
      <div className="section-bg">
        <div className="space-particles" />
        <div className="mission-control-grid opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="flex justify-center">
            <div className="cosmic-badge mx-auto inline-flex">
              <FaSatellite className="animate-cosmic-pulse" />
              <span>MISSION PROPOSAL</span>
            </div>
          </div>

          <h2 className="cosmic-text text-5xl md:text-6xl font-bold mt-8">
            Pitch Your Game
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">
            Ready to launch your game into the cosmos? Join forces with the
            Fennonauts and let&apos;s make your game an interstellar success!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mission-terminal">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="terminal-title">
                <FaRocket className="text-primary" />
                <span>New Mission Registration</span>
              </div>
              <div className="terminal-status">
                <div className="status-indicator">
                  <div className="pulse-dot" />
                  <span>READY</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="terminal-content">
              <div className="mission-form">
                <div className="form-grid">
                  {/* Commander Details */}
                  <div className="form-section">
                    <div className="section-header">
                      <PiGameControllerFill className="section-icon" />
                      <h3>Commander Details</h3>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="cosmic-input"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your Role"
                        value={formData.role}
                        onChange={(e) => updateFormData("role", e.target.value)}
                        className="cosmic-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Mission Details */}
                  <div className="form-section">
                    <div className="section-header">
                      <FaGamepad className="section-icon" />
                      <h3>Mission Details</h3>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Game Title"
                        value={formData.gameTitle}
                        onChange={(e) =>
                          updateFormData("gameTitle", e.target.value)
                        }
                        className="cosmic-input"
                        required
                      />
                      <textarea
                        placeholder="Elevator Pitch (1-2 sentences)"
                        value={formData.elevatorPitch}
                        onChange={(e) =>
                          updateFormData("elevatorPitch", e.target.value)
                        }
                        className="cosmic-input min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="form-section">
                    <div className="section-header">
                      <IoSparkles className="section-icon" />
                      <h3>Technical Specifications</h3>
                    </div>
                    <div className="specs-grid">
                      <div className="stage-selector">
                        <label className="cosmic-label">
                          Development Stage
                        </label>
                        <div className="stage-options">
                          {DEVELOPMENT_STAGES.map((stage) => (
                            <label
                              key={stage}
                              className={`stage-option ${
                                formData.developmentStage === stage
                                  ? "selected"
                                  : ""
                              }`}
                            >
                              <input
                                type="radio"
                                name="developmentStage"
                                value={stage}
                                checked={formData.developmentStage === stage}
                                onChange={(e) =>
                                  updateFormData(
                                    "developmentStage",
                                    e.target.value
                                  )
                                }
                                className="sr-only"
                              />
                              {stage}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="platform-selector">
                        <label className="cosmic-label">Platforms</label>
                        <div className="platform-options">
                          {PLATFORMS.map((platform) => (
                            <label
                              key={platform}
                              className={`platform-option ${
                                formData.platforms.includes(platform)
                                  ? "selected"
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={platform}
                                checked={formData.platforms.includes(platform)}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setFormData((prev) => ({
                                    ...prev,
                                    platforms: prev.platforms.includes(value)
                                      ? prev.platforms.filter(
                                          (p) => p !== value
                                        )
                                      : [...prev.platforms, value],
                                  }));
                                }}
                                className="sr-only"
                              />
                              {platform}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="form-section">
                    <div className="input-group">
                      <input
                        type="url"
                        placeholder="Link to Demo/Materials"
                        value={formData.demoLink}
                        onChange={(e) =>
                          updateFormData("demoLink", e.target.value)
                        }
                        className="cosmic-input"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Contact Email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        className="cosmic-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-footer">
                  <button type="submit" className="cosmic-button group">
                    <span className="cosmic-glow"></span>
                    <span className="relative z-10 flex items-center">
                      Launch Mission
                      <FaRocket className="ml-2 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
