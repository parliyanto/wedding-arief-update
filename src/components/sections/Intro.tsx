"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const THRESHOLD = 15; // dipercepat agar tidak lag

  const handleCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    if (!videoLoaded) return;

    if (v.currentTime >= THRESHOLD && !showText) {
      setShowText(true);
      setTimeout(() => setShowScroll(true), 500);
    }
  };

  useEffect(() => {
    const hide = () => {
      if (window.scrollY > 20) setShowScroll(false);
    };
    window.addEventListener("scroll", hide);
    return () => window.removeEventListener("scroll", hide);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">

      {/* VIDEO */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/Asset-Vintage-Architecture.mp4"
        autoPlay
        muted
        playsInline
        preload="metadata"    // FIX: jauh lebih cepat muncul
        onCanPlay={handleCanPlay}  // FIX: overlay hilang tepat waktu
        onTimeUpdate={handleTimeUpdate}
      />

      {/* OVERLAY MUNCUL SETELAH VIDEO READY */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* TEXT */}
      <div
        className={`absolute z-20 text-center text-white w-full px-5 flex flex-col items-center justify-center
        transition-all duration-[800ms] ease-out
        ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <p className="uppercase tracking-widest text-sm mb-4 font-light">
          The Wedding Of
        </p>

        <h1 className="text-5xl sm:text-7xl font-serif italic">Asri</h1>
        <span className="text-xl sm:text-3xl font-light mt-2 block">and</span>
        <h1 className="text-5xl sm:text-7xl font-serif italic">Arief</h1>

        <p className="mt-5 text-xl font-medium">07 · 12 · 25</p>
      </div>

      {/* SCROLL ICON */}
      {videoLoaded && showScroll && (
        <div
          className="absolute bottom-20 sm:bottom-14 flex justify-center w-full z-30 animate-bounce"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7-7-7m14-5l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
