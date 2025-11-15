"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* === BUTTERFLY LAYER (Optimized GIF loading) === */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <Image
          src="/Butterfly_fly.gif"
          alt="Butterfly"
          width={400}
          height={400}
          loading="lazy"
          className="absolute opacity-40 animate-float-slow"
          style={{ top: "10%", left: "5%" }}
        />
        <Image
          src="/Butterfly.gif"
          alt="Butterfly"
          width={300}
          height={300}
          loading="lazy"
          className="absolute opacity-40 animate-float-reverse"
          style={{ bottom: "10%", right: "5%" }}
        />
      </div>

      {/* === BACKGROUND (Optimized) === */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/ASSET-BG.webp"
          alt="Background"
          fill
          sizes="100vw"
          quality={55}
          priority    // section ini dekat intro → preload
          className="object-contain object-center opacity-30"
        />
      </div>

      {/* Overlay abu-abu lembut */}
      <div className="absolute inset-0 bg-[#444952]/90 -z-10"></div>

      {/* === CONTENT === */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative bg-transparent rounded-[100px] shadow-xl overflow-hidden mt-10 mx-auto w-[90%] max-w-sm">

          {/* ARCHITECTURE BG */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/ASSET-ARCHITECTURE-5.webp"
              alt="Arch pattern"
              fill
              sizes="100vw"
              loading="lazy"
              quality={55}
              className="object-cover opacity-20"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 -z-10"></div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">

            {/* TITLE */}
            <h2 className="text-5xl font-serif italic text-gray-800 mb-2"
                style={{ fontFamily: "Bailenson, sans-serif" }}>

              Bride & Groom
            </h2>
            <p className="text-gray-700 text-sm mb-6">
              The pleasure of your company is requested at the marriage of:
            </p>

            {/* === BRIDE PHOTO === */}
            <div className="relative w-56 h-72 mx-auto overflow-hidden rounded-full border border-gray-400 shadow-lg">
              <Image
                src="/asribridge.webp"
                alt="Bride"
                fill
                loading="lazy"
                quality={60}
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-6 text-2xl font-serif italic text-gray-800">
              Asri Cikita Putri, S.Ds.
            </h3>
            <p className="text-gray-700 text-lg font-semibold">The Daughter of</p>
            <p className="text-gray-600 text-sm font-semibold mt-2">
              Drs. Agus Milad Jamal
            </p>
            <p className="text-gray-600 text-sm font-semibold"
            >&</p>
            <p className="text-gray-600 text-sm font-semibold">
              Drg. Rita Febriyanti
            </p>

            {/* Separator */}
            <h2 className="text-5xl text-gray-800 mt-10"
            style={{ fontFamily: "Bailenson, sans-serif" }}>&</h2>

            {/* === GROOM PHOTO === */}
            <div className="relative w-56 h-72 mx-auto overflow-hidden rounded-full border border-gray-400 shadow-lg mt-10">
              <Image
                src="/ariefbridge.png"
                alt="Groom"
                fill
                quality={60}
                loading="lazy"
                className="object-cover"
              />
            </div>

            <h3 className="mt-6 text-2xl font-serif italic text-gray-800">
              Arief Rachman Nugraha, S.T.
            </h3>

            <p className="text-gray-700 text-lg font-semibold">The Son of</p>
            <p className="text-gray-600 text-sm font-semibold mt-2">Madih, S.Sos</p>
            <p className="text-gray-600 text-sm font-semibold">&</p>
            <p className="text-gray-600 text-sm font-semibold">
              Suminar, S.Pd
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
