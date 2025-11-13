"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-screen">

      {/* === BACKGROUND (Optimized) === */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Asset_background.webp"
          alt="Background texture"
          fill
          sizes="100vw"
          priority={false}     // ❗ jangan priority: berat → cukup lazy
          quality={55}
          className="object-cover object-center"
        />
      </div>

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-white/30 -z-10"></div>

      {/* === CONTENT === */}
      <motion.div
        className="relative z-10 w-full max-w-md flex flex-col items-center mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Foto utama (optimized) */}
        <div className="relative w-[450px] h-[650px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/section4.png"
            alt="Couple posed"
            fill
            loading="lazy"
            quality={60}
            sizes="(max-width:768px) 90vw, 450px"
            className="object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
}
