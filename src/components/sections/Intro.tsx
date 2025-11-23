"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [showText, setShowText] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [showScroll, setShowScroll] = useState(false);  // NEW
  const THRESHOLD = 15;

  const handlePlay = () => {
    setVideoReady(true);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;

    if (!videoReady) return;
    if (isNaN(v.currentTime)) return;

    if (v.currentTime >= THRESHOLD && !showText) {
      setShowText(true);
      setTimeout(() => setShowScroll(true), 600); // Delay biar smooth
    }
  };

  // HILANGKAN ICON saat user mulai scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Asset-Vintage-Architecture.mp4"
        autoPlay
        muted
        playsInline
        preload="none"
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

      {/* TEXT */}
        <div
          className={`absolute z-20 text-center text-white w-full px-5
          flex flex-col items-center justify-center
          transition-all duration-[900ms] ease-out
          ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        >
        <p className="uppercase tracking-widest text-sm mb-4 font-light">
          The Wedding of
        </p>
        <h1 className="text-5xl sm:text-7xl font-serif italic leading-tight">
          Asri
        </h1>

        <span className="text-xl sm:text-3xl font-light mt-2 block">
          and
        </span>

        <h1 className="text-5xl sm:text-7xl font-serif italic leading-tight">
          Arief
        </h1>
        <p className="mt-5 text-xl font-medium">07 · 12 · 25</p>
      </div>

      {/* SCROLL INDICATOR */}
      {showScroll && (
        <div className="absolute bottom-38 sm:bottom-14 flex justify-center w-full z-30 animate-bounce"
         onClick={() => {
          const el = document.getElementById("next-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M19 14l-7 7-7-7m14-5l-7 7-7-7" 
            />
          </svg>
        </div>
      )}
    </section>
  );
}
