"use client";
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // biar musik mulai otomatis setelah user interaksi pertama
  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      window.removeEventListener("click", startMusic);
    };
    window.addEventListener("click", startMusic);
    return () => window.removeEventListener("click", startMusic);
  }, [isPlaying]);

  return (
    <>
      {/* 🎧 Elemen audio */}
      <audio ref={audioRef} src="/music/wedding-theme.mp3" loop />

      {/* 🎛 Tombol floating (fix di semua section) */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md border border-white/40 transition-all duration-300 ${
          isPlaying
            ? "bg-pink-600/80 hover:bg-pink-700/90 animate-pulse"
            : "bg-gray-700/70 hover:bg-gray-800/80"
        }`}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <FaPause className="text-white text-xl" />
        ) : (
          <FaPlay className="text-white text-xl ml-1" />
        )}
      </button>
    </>
  );
}
