"use client";

import { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  // === Aktif setelah Cover membuka ===
  useEffect(() => {
    const startMusic = () => {
      setVisible(true);

      if (audioRef.current) {
        audioRef.current.currentTime = 48;

        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {}); // browser block ignore
      }
    };

    window.addEventListener("start-music", startMusic);
    return () => window.removeEventListener("start-music", startMusic);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
      {/* === HIDDEN AUDIO === */}
      <audio ref={audioRef} src="/backsound.mp3" preload="auto" loop hidden />

      {/* === MUSIC BUTTON (muncul setelah Cover) === */}
      {visible && (
        <div
          onClick={togglePlay}
          className="
            fixed
            bottom-[calc(env(safe-area-inset-bottom)+24px)]
            right-6 sm:right-8
            w-14 h-14 sm:w-16 sm:h-16
            rounded-full
            bg-[#0f0f0f]/70
            backdrop-blur-xl
            border border-[#d7b97d]/40
            flex items-center justify-center
            shadow-[0_0_18px_rgba(255,220,150,0.45)]
            cursor-pointer
            transition-all duration-300
            hover:scale-105
            z-[2000]
          "
        >

          {/* === GLOW SAAT PLAY === */}
          {isPlaying && (
            <div
              className="
                absolute inset-0 
                rounded-full
                bg-[radial-gradient(circle,#ffe9b8_0%,transparent_70%)]
                opacity-60 blur-lg
                animate-pulse
              "
            ></div>
          )}

          {/* === GOLD ICON (PLAY / PAUSE) === */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 relative z-10"
          >
            <defs>
              <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF5C3" />
                <stop offset="40%" stopColor="#FFD479" />
                <stop offset="70%" stopColor="#E6B351" />
                <stop offset="100%" stopColor="#C9972D" />
              </linearGradient>
            </defs>

            {/* === PLAYING: ICON NOTE === */}
            {isPlaying ? (
              <path
                d="M9 17.5a2.5 2.5 0 1 0 1.5 2.3V9.6l7-1.4v6.7a2.5 2.5 0 1 0 1.5 2.3V6.9L9 8.6v8.9z"
                fill="url(#premiumGold)"
              />

            ) : (
              /* === PAUSE ICON === */
              <>
                <rect
                  x="6"
                  y="5"
                  width="4"
                  height="14"
                  rx="1.5"
                  fill="url(#premiumGold)"
                />
                <rect
                  x="14"
                  y="5"
                  width="4"
                  height="14"
                  rx="1.5"
                  fill="url(#premiumGold)"
                />
              </>
            )}
          </svg>
        </div>
      )}
    </>
  );
}
