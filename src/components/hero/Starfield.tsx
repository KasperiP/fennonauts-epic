"use client";
import { useMemo, useRef } from "react";
import "./Starfield.css";

export const Starfield = () => {
  const starFieldRef = useRef(
    useMemo(
      () =>
        Array.from({ length: 50 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.02 + 0.01,
        })),
      []
    )
  );

  return (
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
  );
};
