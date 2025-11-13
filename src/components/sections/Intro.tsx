"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [showText, setShowText] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // DETIK setelah frame abu-abu lewat → text muncul
  const THRESHOLD = 15; // bisa kamu ubah ke 3 detik kalau mau lebih lambat

  const handlePlay = () => {
    // Video mulai berjalan → tandai sebagai ready
    setVideoReady(true);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;

    if (!videoReady) return;                 // pastikan video sudah benar-benar play
    if (isNaN(v.currentTime)) return;        // anti bug next.js timeupdate

    // FRAME sudah lewat 2.2 detik → munculkan text
    if (v.currentTime >= THRESHOLD && !showText) {
      setShowText(true);
    }
  };

  return (
    <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Asset-Vintage-Architecture.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

      {/* TEXT */}
      <div
        className={`absolute z-20 text-center text-white transition-all duration-[900ms] ease-out ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="uppercase tracking-widest text-sm mb-4 font-light">
          The Wedding of
        </p>
        <h1 className="text-7xl font-serif italic">Asri</h1>
        <span className="text-3xl font-light">and</span>
        <h1 className="text-7xl font-serif italic">Arief</h1>
        <p className="mt-5 text-xl font-medium">07 · 12 · 25</p>
      </div>
    </section>
  );
}
