"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// WAJIB: import CSS agar tidak freeze
import "yet-another-react-lightbox/styles.css";

// FIX 1: dynamic import Lightbox
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const images = [
  "/gallery1.png",
  "/gallery2kiri.png",
  "/gallery3kanan.png",
  "/gallery4bawah.png",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // FIX 2: DOM portal target (mencegah freeze)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994]">

      {/* === BACKGROUND PATTERN === */}
      <div
        className="absolute inset-0 opacity-20 bg-[length:300px] bg-repeat z-0"
        style={{ backgroundImage: "url('/ASSET-BG.png')" }}
      />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h2
          className="text-5xl md:text-5xl font-serif italic text-white mb-6"
          style={{ fontFamily: "Bailenson, sans-serif" }}
        >
          Our Gallery
        </h2>

        {/* === VIDEO === */}
        <motion.div
          className="relative w-full max-w-2xl text-center mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-xl mt-5 mb-10">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              src="/weddingvideo3.mp4"
              controls
              playsInline
              preload="none"
            />
          </div>
        </motion.div>

        {/* === GALLERY GRID === */}
        <div className="grid grid-cols-2 gap-4 relative z-20">
          {images.map((src, idx) => {
            const isBig = idx % 3 === 0;

            return (
              <div
                key={idx}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className={`cursor-pointer overflow-hidden rounded-xl shadow-lg group ${
                  isBig ? "col-span-2" : ""
                }`}
              >
                <div className={`relative w-full ${isBig ? "h-80" : "h-60"}`}>
                  <Image
                    src={src}
                    alt={`Gallery ${idx}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={65}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* === LIGHTBOX === */}
        {mounted && (
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={images.map((src) => ({
              src,
              width: 1600, // ukuran GA BISA HILANG
              height: 2400,
            }))}
            carousel={{ preload: 1 }}
          />
        )}
      </div>
    </section>
  );
}
