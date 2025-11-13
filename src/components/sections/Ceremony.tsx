"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Ceremony() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">

      {/* === BACKGROUND (Optimized) === */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/Asset_background.webp"
          alt="Background texture"
          fill
          sizes="100vw"
          quality={55}
          loading="lazy"          // tidak perlu priority → bukan hero section
          className="object-cover object-center"
        />
      </div>

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-white/40 -z-10"></div>

      {/* === CONTENT === */}
      <motion.div
        className="relative z-10 w-full max-w-md space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 text-center backdrop-blur-sm">

          <h2
            className="text-4xl md:text-5xl font-serif italic text-gray-800 mb-3 font-semibold"
            style={{ fontFamily: "Bailenson, sans-serif" }}
          >
            Wedding Ceremony
          </h2>

          <p className="text-gray-600 mb-1">
            Sunday, December 7<sup>th</sup> 2025
          </p>

          <p className="text-gray-800 font-medium mb-4">
            AR-RODA Functional Hall Darussalam
          </p>

          {/* === MAP WRAPPER (Optimized) === */}
          <div className="w-full h-48 mb-4 overflow-hidden rounded-md border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0535060440734!2d106.95895547316785!3d-6.256682061253435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d1c62f0a44b%3A0x3d6e710a4fa402a5!2sAR-RODA%20Function%20Hall%20Darussalam!5e0!3m2!1sid!2sid!4v1759079766046!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // optimasi tambahan
            />
          </div>

          <a
            href="https://maps.app.goo.gl/RG6wWQ84VL1Zx4VE9"
            target="_blank"
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Show Location
          </a>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Akad</span> <br />
              07:30 – 09:30 WIB
            </p>
            <p>
              <span className="font-semibold">Reception</span> <br />
              11:00 – 13:00 WIB
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
