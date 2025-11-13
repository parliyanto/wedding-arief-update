"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";

const images = [
  "/gallery1.png",
  "/gallery2kiri.png",
  "/gallery3kanan.png",
  "/gallery4bawah.png",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994] overflow-hidden">

      {/* === BACKGROUND PATTERN (Optimized) === */}
      <div
        className="absolute inset-0 opacity-20 bg-[length:300px] bg-repeat -z-20"
        style={{
          backgroundImage: "url('/ASSET-BG.png')",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h2
          className="text-5xl md:text-5xl font-serif italic text-white mb-6"
          style={{ fontFamily: "Bailenson, sans-serif" }}
        >
          Our Gallery
        </h2>

        {/* === VIDEO (Optimized) === */}
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
              preload="none"       // agar tidak memberatkan halaman
            />
          </div>
        </motion.div>

        {/* === GALLERY GRID (Optimized) === */}
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
                    placeholder="blur"
                    blurDataURL="/blur-placeholder.png"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* === LIGHTBOX (Optimized) === */}
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          carousel={{ preload: 1 }}       // dikurangi, lebih ringan
        />
      </div>
    </section>
  );
}
