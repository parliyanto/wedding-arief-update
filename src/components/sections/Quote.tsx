"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section id="next-section" className="relative min-h-screen flex items-center justify-center px-4 bg-[#7b8994] overflow-hidden">

      {/* === BACKGROUND (Optimized) === */}
      <div className="absolute inset-0">
        <Image
          src="/ASSET-BG.webp"
          alt="Background pattern"
          fill
          sizes="100vw"
          loading="eager"         // cepat di-load
          quality={60}            // kompres aman
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Overlay warna */}
      <div className="absolute inset-0 bg-[#7b8994]/60 -z-10"></div>

      {/* === CONTENT WRAPPER === */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative bg-white/80 rounded-t-[150px] shadow-lg overflow-hidden mt-10">

          {/* Background Architecture (Optimized) */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/asset_architechture.webp"
              alt="Architecture background"
              fill
              sizes="100vw"
              loading="lazy"
              quality={55}
              className="object-cover object-center opacity-40"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 -z-10"></div>

          {/* === QUOTE CONTENT === */}
          <div className="relative z-10 flex flex-col items-center p-8">

            {/* Frame + Initial */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/frame.webp"
                alt="frame"
                width={350}
                height={350}
                priority              // 🔥 supaya tidak lag waktu scroll dari intro → section 2
                className="mx-auto opacity-80 mix-blend-multiply w-44 sm:w-56 md:w-64 xl:w-80"
              />

              <div
                className="absolute inset-0 flex flex-col items-center justify-center space-y-[0.5rem]"
                style={{ transform: "translateY(-6%)" }}
              >
                <span className="text-[2rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[3rem] 
                                          font-serif italic text-gray-700 font-normal drop-shadow-md leading-none">
                            A
                          </span>
                 <span className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3rem] 
                                          font-serif italic text-gray-700 font-normal drop-shadow-md leading-none">
                            &
                          </span>
                          <span className="text-[2rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[3rem] 
                                          font-serif italic text-gray-700 font-normal drop-shadow-md leading-none">
                            A
                          </span>
      
              </div>
            </div>

            {/* Quote */}
            <motion.p className="mt-6 italic text-gray-700 leading-relaxed text-center">
              “And of His Signs is that He has created mates for you from your
              own kind that you may find peace in them and He has set between
              you love and mercy.”
              <br />
              <span className="font-semibold">Ar-Rum: 21</span>
            </motion.p>

            {/* Photo bawah (optimized) */}
            <div className="relative mt-6 w-full rounded-2xl overflow-hidden">
              <Image
                src="/section2.webp"
                alt="photo"
                width={800}
                height={800}
                loading="lazy"
                quality={60}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ornamen bunga optimized */}
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Image
          src="/ornament_flower.webp"
          alt="flower"
          width={1600}
          height={400}
          loading="lazy"
          quality={60}
          className="w-full pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
