"use client";
import { useEffect, useMemo, useRef } from "react";

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
