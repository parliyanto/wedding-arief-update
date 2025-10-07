"use client";

<<<<<<< HEAD
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
=======
import { useState, useEffect, useRef } from "react";
>>>>>>> 8e5a35a3 (first commit)
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Playfair_Display } from "next/font/google";

<<<<<<< HEAD
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });
=======
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});


>>>>>>> 8e5a35a3 (first commit)

export default function InvitationDetail() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const [wishes, setWishes] = useState<Wish[]>([]);

  const [mounted, setMounted] = useState(false); // ✅ add
  const [showText, setShowText] = useState(false);
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    "/gallery1.webp",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.webp",
    "/gallery5.webp",
    "/gallery6.webp",
  ]
  
  // State untuk countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

=======
  const nextSectionRef = useRef<HTMLDivElement>(null); // 🔹 section berikutnya
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    "/gallery1.png",
    "/gallery2kiri.png",
    "/gallery3kanan.png",
    "/gallery4bawah.png",
  ]

  // state untuk button section 1
   const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
>>>>>>> 8e5a35a3 (first commit)
 

    // Fetch wishes saat load
    useEffect(() => {
        setMounted(true); // ✅ only render client
<<<<<<< HEAD
=======
          if (!mounted) return;
>>>>>>> 8e5a35a3 (first commit)
        fetchWishes();
      }, []);

  const fetchWishes = async () => {
    const { data } = await supabase
      .from("best_wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setWishes(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    await supabase.from("best_wishes").insert([{ name, message }]);
    setName("");
    setMessage("");
    fetchWishes();
  };

<<<<<<< HEAD
   useEffect(() => {
      // 🎯 Tanggal acara
  const weddingDate = new Date("2025-10-20T16:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // Jika waktu sudah lewat, set ke 0 semua
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    if (!mounted) return null; // ⛔ hindari SSR render mismatch
=======


    // ✅ Tambahkan ini dulu
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

    
  useEffect(() => {
  // Target: 7 Desember 2025 pukul 00:00 WIB
  const targetDate = new Date("2025-12-07T00:00:00+07:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval );
}, []);


// 🎵 Musik & Control
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  const audio = new Audio("/backsound.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audioRef.current = audio;

  // Mulai otomatis (kalau user udah interaksi di browser)
  const playAfterInteraction = () => {
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
    window.removeEventListener("click", playAfterInteraction);
  };

  window.addEventListener("click", playAfterInteraction);

  return () => {
    audio.pause();
    window.removeEventListener("click", playAfterInteraction);
  };
}, []);

const togglePlay = () => {
  if (!audioRef.current) return;
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setIsPlaying(!isPlaying);
};
>>>>>>> 8e5a35a3 (first commit)




  return (
      <div className="grid md:grid-cols-[65%_35%] grid-cols-1 w-full h-screen">
      {/* === Kiri: gambar fix === */}
      <div className="h-screen sticky top-0 hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
<<<<<<< HEAD
          style={{ backgroundImage: "url('/section1.webp')" }}
=======
          style={{ backgroundImage: "url('/sidebar.png')" }}
>>>>>>> 8e5a35a3 (first commit)
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>



      {/* === Kanan: konten scroll === */}
      <div className="relative h-screen overflow-y-auto shadow-[-8px_0_20px_rgba(0,0,0,0.5)] w-full">
          {/* Section 1: video intro */}
          <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/Asset-Vintage-Architecture.mp4"
              autoPlay
              muted
              playsInline
              onTimeUpdate={(e) => {
              const video = e.currentTarget as HTMLVideoElement; // ✅ kasih tau TS
              if (video.currentTime >= 15 && !showText) {
                setShowText(true);
              }
            }}
            ></video>

            <div className="absolute inset-0"></div>

            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center text-white px-6"
              >
                <p className="uppercase tracking-widest text-sm md:text-base mb-4">
                  The Wedding of
                </p>
<<<<<<< HEAD
                <h1 className="text-4xl md:text-6xl font-serif italic">Arif</h1>
                <span className="text-lg md:text-xl my-2">and</span>
                <h1 className="text-4xl md:text-6xl font-serif italic">Pasangan</h1>
                <p className="mt-6 text-lg md:text-xl tracking-wide">20 · 10 · 25</p>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-3xl text-white cursor-pointer border-2 rounded-full w-12 h-12 flex items-center justify-center"
=======
                <h1 className="text-4xl md:text-6xl font-serif italic">Asri</h1>
                <span className="text-lg md:text-xl my-2">and</span>
                <h1 className="text-4xl md:text-6xl font-serif italic">Arief</h1>
                <p className="mt-6 text-lg md:text-xl tracking-wide">07 · 12 · 25</p>

                <motion.div
                  onClick={handleScrollDown}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-3xl text-white cursor-pointer border-2 rounded-full w-12 h-12 flex items-center justify-center"
                  title="Scroll Down"
>>>>>>> 8e5a35a3 (first commit)
                >
                  ⬇
                </motion.div>
              </motion.div>
            )}
<<<<<<< HEAD
          </section>

        {/* Section 2: quote dengan background */}
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: "url('/ASSET-BG.png')" }}
          >
            {/* 🔥 Overlay warna tambahan */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#b3bdc4", opacity: 0.6 }}
            ></div>

             <motion.div className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // sekali muncul pas scroll 30% masuk
              >
              {/* Card dengan arch top */}
              <div className="relative bg-white/80 rounded-t-[150px] shadow-lg overflow-hidden mt-10">
                {/* Background arsitektur */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: "url('/asset_architechture.webp')" }}
                ></div>

                {/* Overlay tipis */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80"></div>

                {/* Konten */}
                <div className="relative z-10 flex flex-col items-center text-center p-8">
                  {/* Frame + Initial */}
                  <div className="relative">
                    <img
                      src="/frame.png"
                      alt="frame"
                      className="mx-auto w-40 opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl font-serif text-gray-800">A A</h2>
                    </div>
                  </div>

                  {/* Quote */}
                  <motion.p className="mt-6 italic text-gray-700 leading-relaxed">
                    “And of His Signs is that He has created mates for you from your own kind that you may find peace in them and He has set between you love and mercy.”
                  </motion.p>

                  {/* Gambar bawah */}
                  <div className="relative mt-6">
                    {/* Foto pasangan */}
                    <img
                      src="/cover.webp"
                      alt="photo"
                      className="w-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
                  {/* Ornamen bunga */}
                <img
                  src="/ornament_flower.webp"
                  alt="flower decoration"
                  className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-50"
                />
        </section>

       {/* === Section 3: Bride & Groom === */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* BG Fixed Layer */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: "url('/ASSET-BG.png')" }}
          ></div>
          {/* Overlay tipis */}
          <div className="absolute inset-0 bg-[#444952] -z-10"></div>

          {/* Konten */}
          <motion.div
            className="relative z-10 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-transparent rounded-[100px] shadow-xl overflow-hidden mt-10 mx-auto w-[90%] max-w-sm">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/ASSET-ARCHITECTURE-5.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>

              <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
                <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800 mb-2">
                  Bride & Groom
                </h2>
                <p className="text-gray-700 text-sm mb-6">
                  The pleasure of your company is requested at the marriage of:
                </p>

                {/* Groom */}
                <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg">
                  <img src="/pria.jpg" alt="Groom" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-2xl font-serif italic text-gray-800">[Nama Mempelai Pria]</h3>
                <p className="text-gray-700 text-lg">[Nama Lengkap]</p>
                <p className="text-gray-600 text-sm mt-2">[Nama Ayah] <br /> & [Nama Ibu]</p>
                <a href="https://instagram.com/" target="_blank" className="mt-4 mb-2 text-pink-600 hover:text-pink-800">
                  <FaInstagram size={28} />
                </a>

                {/* Simbol & */}
                <h2 className="text-5xl font-serif italic text-gray-800 my-6">&</h2>

                {/* Bride */}
                <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg mt-10">
                  <img src="/wanita.jpg" alt="Bride" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-2xl font-serif italic text-gray-800">[Nama Mempelai Wanita]</h3>
                <p className="text-gray-700 text-lg">[Nama Lengkap]</p>
                <p className="text-gray-600 text-sm mt-2">[Nama Ayah] <br /> & [Nama Ibu]</p>
                <a href="https://instagram.com/" target="_blank" className="mt-4 mb-2 text-pink-600 hover:text-pink-800">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>


       {/* === Section 4: Foto Pasangan === */}
       <section className="relative flex items-center justify-center overflow-hidden min-h-screen">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/Asset_background.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-white/30 -z-10"></div>

        <motion.div
          className="relative z-10 w-full max-w-md flex flex-col items-center mt-20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/pasangan.webp"
            alt="Pasangan"
            className="w-[500px] h-[700px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
       </section>


        {/* === Section 5: Event Details === */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: "url('/Asset_background.webp')" }}
          ></div>
          <div className="absolute inset-0 bg-white/40 -z-10"></div>

          <motion.div
            className="relative z-10 w-full max-w-md space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Card Event */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-2xl font-serif italic text-gray-800 mb-3">
                Wedding Ceremony
              </h2>
              <p className="text-gray-600 mb-1">Sunday, December 7<sup>th</sup> 2025</p>
              <p className="text-gray-800 font-medium mb-4">
                AR-RODA Functional Hall Darussalam
              </p>

              {/* Google Maps Embed */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-md border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0535060440734!2d106.95895547316785!3d-6.256682061253435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d1c62f0a44b%3A0x3d6e710a4fa402a5!2sAR-RODA%20Function%20Hall%20Darussalam!5e0!3m2!1sid!2sid!4v1759079766046!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Show Location Button */}
              <a
                href="https://maps.app.goo.gl/RG6wWQ84VL1Zx4VE9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Show Location
              </a>

              {/* Jadwal Detail */}
              <div className="mt-6 space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Akad</span> <br />
                  08:30 – 11:00 WIB
                </p>
                <p>
                  <span className="font-semibold">Reception</span> <br />
                  11:00 – 13:00 WIB
                </p>
              </div>
            </div>
          </motion.div>
        </section>




        {/* === Section 6: Trailer Embed Youtube === */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-12">
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: "url('/Asset_background.webp')" }}
          ></div>
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          <motion.div
            className="relative z-10 w-full max-w-2xl text-center mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg mt-10">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/CSN72Je7Hlg?rel=0&modestbranding=1"
                title="Teaser Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </section>


        {/* === Section 7: Our Gallery === */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#353940] bg-cover bg-center">
        {/* Overlay abu + pattern */}
        <div
          className="absolute inset-0 opacity-40 bg-contain"
          style={{ backgroundImage: "url('/ASSET-BG.png')" }}
        ></div>

        <div className="relative z-10 w-full max-w-4xl text-center">
          <h2 className="text-4xl md:text-4xl font-serif italic text-white mb-6">
            Our Gallery
          </h2>

          {/* ✅ Grid Gallery pola big + 2 small */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, idx) => {
              // Pola: kalau index kelipatan 3 → tampil full width (big image)
              if (idx % 3 === 0) {
=======

            

          </section>

          {/* Section 2: quote dengan background */}
          <section
              ref={nextSectionRef}
              className="relative min-h-screen flex items-center justify-center bg-contain bg-center px-4 bg-[#7b8994] "
              style={{ backgroundImage: "url('/ASSET-BG.png')" }}
            >
              {/* 🔥 Overlay warna tambahan */}
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundColor: "#7b8994", opacity: 0.6 }}
              ></div>

              <motion.div className="relative z-10 w-full max-w-md"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }} // sekali muncul pas scroll 30% masuk
                >
                {/* Card dengan arch top */}
                <div className="relative bg-white/80 rounded-t-[150px] shadow-lg overflow-hidden mt-10">
                  {/* Background arsitektur */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/asset_architechture.webp')" }}
                  ></div>

                  {/* Overlay tipis */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80"></div>

                  {/* Konten */}
                  <div className="relative z-10 flex flex-col items-center p-8">
                    {/* Frame + Initial */}
                    <div className="relative">
                   
                      {/* Tulisan Vertikal */}
                     <div className="relative flex items-center justify-center">
                          {/* Frame */}
                          <img
                            src="/frame.png"
                            alt="frame"
                            className="mx-auto opacity-80 mix-blend-multiply 
                                      w-56 sm:w-72 md:w-80 lg:w-[250px] 
                                      transition-all duration-500 ease-in-out"
                          />
                        {/* Tulisan Vertikal */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center leading-none"
                          style={{
                            transform: "rotate(-10deg)",
                          }}
                        >
                          <span
                            className="text-5xl sm:text-6xl md:text-5xl font-serif italic text-gray-700 font-normal"
                            style={{
                              transform: "rotate(10deg)",
                              lineHeight: "1",
                            }}
                          >
                            A
                          </span>
                          <span
                            className="text-4xl sm:text-5xl md:text-3xl font-serif italic text-gray-700 font-normal"
                            style={{
                              transform: "rotate(10deg)",
                              lineHeight: "1",
                            }}
                          >
                            &
                          </span>
                          <span
                            className="text-5xl sm:text-6xl md:text-5xl font-serif italic text-gray-700 font-normal"
                            style={{
                              transform: "rotate(10deg)",
                              lineHeight: "1",
                            }}
                          >
                            A
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <motion.p className="mt-6 italic text-gray-700 leading-relaxed text-center">
                      “And of His Signs is that He has created mates for you from your own kind that you may find peace in them and He has set between you love and mercy.”
                      <span className="font-semibold">Ar-Rum: 21</span>
                    </motion.p>

                    {/* Gambar bawah */}
                    <div className="relative mt-6">
                      {/* Foto pasangan */}
                      <img
                        src="/section2.png"
                        alt="photo"
                        className="w-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
                    {/* Ornamen bunga */}
                  <img
                    src="/ornament_flower.webp"
                    alt="flower decoration"
                    className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-50"
                  />
          </section>

          {/* === Section 3: Bride & Groom === */}
          <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
              {/* BG Fixed Layer */}
              <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: "url('/ASSET-BG.png')" }}
              ></div>
              {/* Overlay tipis */}
              <div className="absolute inset-0 bg-[#444952] -z-10"></div>

              {/* Konten */}
              <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-transparent rounded-[100px] shadow-xl overflow-hidden mt-10 mx-auto w-[90%] max-w-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/ASSET-ARCHITECTURE-5.webp')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>

                  <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
                    <h2 className="text-5xl md:text-5xl font-serif italic text-gray-800 mb-2" style={{ fontFamily: "Bailenson, sans-serif" }}>
                      Bride & Groom
                    </h2>
                    <p className="text-gray-700 text-sm mb-6">
                      The pleasure of your company is requested at the marriage of:
                    </p>

                    {/* Groom */}
                    <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg">
                      <img src="/asribridge.png" alt="Groom" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="mt-6 text-2xl font-serif italic text-gray-800 font-normal">Asri Cikita Putri, S.Ds.</h3>
                    <p className="text-gray-700 text-lg">Putri dari</p>
                    <p className="text-gray-600 text-sm font-semibold">Drs. Agus Milad Jamal <br /> & Drg. Rita Febriyanti</p>

                    {/* Simbol & */}
                    <h2 className="text-5xl font-serif italic text-gray-800 mt-10">&</h2>

                    {/* Bride */}
                    <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg mt-10">
                      <img src="/ariefbridge.png" alt="Bride" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="mt-6 text-2xl font-serif italic text-gray-800">Arief Rachman Nugraha, S.T.</h3>
                    <p className="text-gray-700 text-lg">Putra dari</p>
                    <p className="text-gray-600 text-sm font-semibold">Madih, S.Sos.<br /> & Suminar, S.Pd</p>
                  </div>
                </div>
              </motion.div>
          </section>

          {/* === Section 4: Foto Pasangan === */}
          <section className="relative flex items-center justify-center overflow-hidden min-h-screen">
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
              style={{ backgroundImage: "url('/Asset_background.webp')" }}
            ></div>
            <div className="absolute inset-0 bg-white/30 -z-10"></div>

            <motion.div
              className="relative z-10 w-full max-w-md flex flex-col items-center mt-20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/section4.png"
                alt="Pasangan"
                className="w-[500px] h-[700px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </section>

          {/* === Section 5: Wedding ceremony === */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
              style={{ backgroundImage: "url('/Asset_background.webp')" }}
            ></div>
            <div className="absolute inset-0 bg-white/40 -z-10"></div>

            <motion.div
              className="relative z-10 w-full max-w-md space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Card Event */}
              <div className="bg-white/90 rounded-2xl shadow-lg p-6 text-center">
                <h2 className="text-2xl font-serif italic text-gray-800 mb-3 font-semibold">
                  Wedding Ceremony
                </h2>
                <p className="text-gray-600 mb-1">Sunday, December 7<sup>th</sup> 2025</p>
                <p className="text-gray-800 font-medium mb-4">
                  AR-RODA Functional Hall Darussalam
                </p>

                {/* Google Maps Embed */}
                <div className="w-full h-48 mb-4 overflow-hidden rounded-md border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0535060440734!2d106.95895547316785!3d-6.256682061253435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d1c62f0a44b%3A0x3d6e710a4fa402a5!2sAR-RODA%20Function%20Hall%20Darussalam!5e0!3m2!1sid!2sid!4v1759079766046!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Show Location Button */}
                <a
                  href="https://maps.app.goo.gl/RG6wWQ84VL1Zx4VE9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Show Location
                </a>

                {/* Jadwal Detail */}
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

          {/* === Section 7: Our Gallery === */}
          <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994] bg-cover bg-center">
          {/* Overlay abu + pattern */}
          <div
            className="absolute inset-0 opacity-5 bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/ASSET-BG.png')" }}
          ></div>

          <div className="relative z-10 w-full max-w-4xl text-center">
            <h2 className="text-5xl md:text-5xl font-serif italic text-white mb-6" style={{ fontFamily: "Bailenson, sans-serif" }}>
              Our Gallery
            </h2>

             <motion.div
              className="relative z-10 w-full max-w-2xl text-center mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg mt-5 mb-10">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl mb-10"
                  src="weddingvideo3.mp4"
                  title="Teaser Video"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* ✅ Grid Gallery pola big + 2 small */}
            <div className="grid grid-cols-2 gap-4 relative z-20">
              {images.map((src, idx) => {
                // Pola: kalau index kelipatan 3 → tampil full width (big image)
                if (idx % 3 === 0) {
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setIndex(idx);
                        setOpen(true);
                      }}
                      className="col-span-2 cursor-pointer overflow-hidden rounded-xl shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  );
                }

                // Kalau bukan kelipatan 3 → tampil 2 kecil samping-samping
>>>>>>> 8e5a35a3 (first commit)
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setIndex(idx);
                      setOpen(true);
                    }}
<<<<<<< HEAD
                    className="col-span-2 cursor-pointer overflow-hidden rounded-xl shadow-lg"
=======
                    className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
>>>>>>> 8e5a35a3 (first commit)
                  >
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
<<<<<<< HEAD
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              }

              // Kalau bukan kelipatan 3 → tampil 2 kecil samping-samping
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Lightbox */}
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
        />
        </section>


        {/* === Section 8: Wedding Gift === */}
        {/* === Section Wedding Gift === */}
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-white/40 -z-10"></div>

  <div className="relative z-10 w-full max-w-md">
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-3">Wedding Gift</h2>
      <p className="text-gray-600 text-sm mb-6">
        We are beyond grateful to have your presence but if youd like to send us a gift, 
        please transfer to one of these bank accounts:
      </p>

      {/* 🔥 List rekening */}
      <div className="space-y-3 text-left">
        {[
          { name: "Asri Cikita Putri", bank: "BCA 1234567" },
          { name: "Arief Rachman Nugraha", bank: "BCA 1234567" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2"
          >
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">{item.bank}</p>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(item.bank);
                alert(`${item.bank} copied!`);
              }}
              className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

       


        {/* === Section 9: Countdown + RSVP === */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">
          {/* BG Fixed */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
            style={{ backgroundImage: "url('/asset_architechture.webp')" }}
          ></div>
          <div className="absolute inset-0 bg-gray-400/60 -z-10"></div>

          <div className="relative z-10 w-full max-w-md text-center">
            {/* Card Foto + Countdown */}
            <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
              <img src="/rsvp.webp" alt="Save the Date" className="w-full h-[500px] object-cover" />

              {/* Countdown di atas foto */}
              <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-6">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                    <h3 className="text-lg font-bold">{timeLeft.days}</h3>
                    <p className="text-xs">Days</p>
                  </div>
                  <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                    <h3 className="text-lg font-bold">{timeLeft.hours}</h3>
                    <p className="text-xs">Hours</p>
                  </div>
                  <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                    <h3 className="text-lg font-bold">{timeLeft.minutes}</h3>
                    <p className="text-xs">Minutes</p>
                  </div>
                  <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                    <h3 className="text-lg font-bold">{timeLeft.seconds}</h3>
                    <p className="text-xs">Seconds</p>
                  </div>
                </div>

                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-6 py-2 rounded-full shadow hover:bg-gray-700 transition"
                >
                  📅 Save The Date
                </a>
              </div>
            </div>

            {/* RSVP Form */}
            <div className="bg-white shadow-lg p-6 text-center rounded-b-2xl">
              <h2 className="text-2xl font-serif italic text-gray-800 mb-3">RSVP FORM</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full border rounded-lg p-2 text-black" />
                <input type="text" placeholder="Address" className="w-full border rounded-lg p-2 text-black" />
                <select className="w-full border rounded-lg p-2 text-black">
                  <option>Will you attend?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <input type="number" placeholder="Amount of Guest" className="w-full border rounded-lg p-2 text-black" />
                <button type="submit" className="bg-gray-600 text-white px-6 py-2 hover:bg-gray-700 transition w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>


        {/* === Section 10: Our Love Story === */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#4f5766] bg-cover bg-center">
        {/* Overlay abu + pattern */}
        <div
          className="absolute inset-0 opacity-40 bg-contain"
          style={{ backgroundImage: "url('/ASSET-BG.png')" }}
        ></div>
          <div className="absolute inset-0 bg-gray-700/60 -z-10"></div>

          <motion.div
            className="relative z-10 w-full max-w-md text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6 mt-10">Our Love Story</h2>

            {/* Foto */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img src="/ourstory.webp" alt="Our Story" className="w-full h-64 object-cover" />
            </div>

            {/* Timeline */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-3xl font-serif italic mb-2">First Meeting</h3>
                <p className="text-sm leading-relaxed">At the beginning of our accquaintance. we were in the same class when we were in college. He sent a private chat because he knew that we were from the same city. From there we got to know each other.</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif italic mb-2">Two Become One</h3>
                <p className="text-sm leading-relaxed">After getting closer when we met at the chancellors cup we started communicating and meeting up frequently. Then he expressed his feelings and said he wanted to commit.</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif italic mb-2">New Journey</h3>
                <p className="text-sm leading-relaxed mb-10">Year after year passed and brought us closer. we became convinced that we were meant to be together. It wasnt easy for us to get to this point. but it was all worth it</p>
              </div>
            </div>
          </motion.div>
        </section>


        {/* === Section 11: Full Width Photo Only === */}
        <section className="w-full relative overflow-hidden">
          <img src="/afterourstory.webp" alt="Couple with Balloon" className="w-full h-auto object-cover" />
        </section>
       


        {/* === Section 13: Best Wishes === */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#4f5766] bg-cover bg-center">
      {/* Overlay abu + pattern */}
      <div
        className="absolute inset-0 opacity-40 bg-contain"
        style={{ backgroundImage: "url('/ASSET-BG.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <motion.div
        className="relative z-10 w-full max-w-lg text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl mb-4 text-black">Best Wishes</h2>
        <p className="text-gray-700 mb-8">Leave us your beautiful wishes here:</p>

        {/* Form input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-black px-4 py-2 text-black"
          />
          <textarea
            rows={4}
            maxLength={500}
            placeholder="Your Best Wishes"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border border-black px-4 py-2 text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Send Wishes
          </button>
        </form>
      </motion.div>

     
    {/* Daftar Wishes */}
      <div className="relative z-10 w-full max-w-lg mt-8 space-y-4">
        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow"
          >
            <p className="font-semibold text-gray-900">{wish.name}</p>
            <p className="text-gray-700">{wish.message}</p>
            <p className="text-xs text-gray-500">
              {new Date(wish.created_at).toLocaleString("id-ID", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
          </div>
        ))}
      </div>
    </section>


        {/* === Section 14: Closing === */}
        <section className="relative w-full"> 
          {/* Foto background full container */}
          <div className="relative w-full overflow-hidden">
            <img
              src="/footer.webp" // 👉 ganti dengan foto kamu
              alt="Closing Photo"
              className="w-full h-full object-contain"
            />

          {/* overlay biar gambar agak gelap sedikit */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Overlay text di dalam foto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 font-['Playfair_Display']">
              <p className="text-l mt-40">
                It is a pleasure and honor for us, if you are willing to attend and give us your blessing.
              </p>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display']">
                [Nama Mempelai Pria] & [Nama Mempelai Wanita]
              </h2>
            </div>

            {/* Ornamen bunga di bagian bawah */}
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src="/ornament_flower.webp" // 👉 gambar ornamen bunga biru
                alt="Flower Ornament"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>









        












        
=======
                      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ✅ Lightbox */}
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={images.map((src) => ({ src }))}

            // ✅ Tambahkan ini supaya bisa swipe atau pakai arrow
            carousel={{
              finite: false,
              preload: 2, // biar next/prev siap duluan
            }}

            // ✅ Pastikan index ikut berubah ketika user navigasi Lightbox
            on={{
              view: ({ index: currentIndex }) => setIndex(currentIndex),
            }}
          />
          </section>

          {/* === Section 8: Countdown + RSVP === */}F
          <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">
            {/* BG Fixed */}
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
              style={{ backgroundImage: "url('/asset_architechture.webp')" }}
            ></div>
            <div className="absolute inset-0 bg-gray-400/60 -z-10"></div>

            <div className="relative z-10 w-full max-w-md text-center">
              {/* Card Foto + Countdown */}
              <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
                <img src="/rsvp.png" alt="Save the Date" className="w-full h-[500px] object-cover" />

                {/* Countdown di atas foto */}
                <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-6">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                      <h3 className="text-lg font-bold">{timeLeft.days}</h3>
                      <p className="text-xs">Days</p>
                    </div>
                    <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                      <h3 className="text-lg font-bold">{timeLeft.hours}</h3>
                      <p className="text-xs">Hours</p>
                    </div>
                    <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                      <h3 className="text-lg font-bold">{timeLeft.minutes}</h3>
                      <p className="text-xs">Minutes</p>
                    </div>
                    <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
                      <h3 className="text-lg font-bold">{timeLeft.seconds}</h3>
                      <p className="text-xs">Seconds</p>
                    </div>
                  </div>

               <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Asri+and+Arief&details=Save+this+day+and+celebrate+with+us!&dates=20251207T020000Z/20251207T060000Z&location=AR-RODA Functional Hall Darussalam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition"
                  > 
                    📅 Save The Date
                  </a>
                </div>
              </div>

              {/* RSVP Form */}
              <div className="bg-white shadow-lg p-6 text-center rounded-b-2xl">
                <h2 className="text-2xl font-serif italic text-gray-800 mb-3">RSVP FORM</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full border rounded-lg p-2 text-black" />
                  <input type="text" placeholder="Address" className="w-full border rounded-lg p-2 text-black" />
                  <select className="w-full border rounded-lg p-2 text-black">
                    <option>Will you attend?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <input type="number" placeholder="Amount of Guest" className="w-full border rounded-lg p-2 text-black" />
                  <button type="submit" className="bg-gray-600 text-white px-6 py-2 hover:bg-gray-700 transition w-full">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* === Section 9: `Our Love` Story === */}
          <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994] bg-cover bg-center">
            {/* Overlay pattern tipis */}
            <div
              className="absolute inset-0 opacity-5 bg-contain"
              style={{ backgroundImage: "url('/ASSET-BG.png')" }}
            ></div>
            {/* Hapus overlay gelap, ganti lebih soft */}
            <div className="absolute inset-0 bg-white/20 -z-10"></div>

            <motion.div
              className="relative z-10 w-full max-w-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl  text-white mb-6 mt-10" style={{ fontFamily: "Bailenson, sans-serif" }}>
                Our Love Story
              </h2>

              {/* Foto */}
              <div className="relative rounded-2xl overflow-hidden p-[6px] bg-gray-400/30">
                <img
                  src="/ourlove.png"
                  alt="Our Story"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Timeline */}
              <div className={'space-y-8 text-white ${playfair.className}'}>
                <div>
                  <h3 className="text-3xl font-serif italic mb-2 mt-5">First Meeting</h3>
                  <p className="text-sm leading-relaxed">
                    At the beginning of our accquaintance, we were in the same class when
                    we were in college. He sent a private chat because he knew that we
                    were from the same city. From there we got to know each other.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic mb-2">Two Become One</h3>
                  <p className="text-sm leading-relaxed">
                    After getting closer when we met at the chancellors cup we started
                    communicating and meeting up frequently. Then he expressed his
                    feelings and said he wanted to commit.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic mb-2">New Journey</h3>
                  <p className="text-sm leading-relaxed mb-10">
                    Year after year passed and brought us closer. we became convinced that
                    we were meant to be together. It wasnt easy for us to get to this
                    point. but it was all worth it
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* === Section 10: Full Width Photo Only === */}
          <section className="w-full relative overflow-hidden">
            <img src="/section10.png" alt="Couple with Balloon" className="w-full h-auto object-cover" />
          </section>

          {/* === Section 11: Wedding Gift === */}
          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
            <div
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
              style={{ backgroundImage: "url('/Asset_background.webp')" }}
            ></div>
            <div className="absolute inset-0 bg-white/40 -z-10"></div>

            <div className="relative z-10 w-full max-w-md">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
                <h2 className="text-2xl font-serif italic text-gray-800 mb-3">Wedding Gift</h2>
                <p className="text-gray-600 text-sm mb-6">
                  We are beyond grateful to have your resence, but if you would like to send us a gift, 
                  please transfer to one of these bank accounts:
                </p>

                {/* 🔥 List rekening */}
                <div className="space-y-3 text-left">
                  {[
                    { name: "Asri Cikita Putri", bank: "BCA 5771426574" },
                    { name: "Arief Rachman Nugraha", bank: "BCA 4670089164" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.bank}</p>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(item.bank);
                          alert(`${item.bank} copied!`);
                        }}
                        className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* === Section 12: Best Wishes === */}
          <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#7b8994] bg-cover bg-center">
        {/* Overlay abu + pattern */}
        <div
          className="absolute inset-0 opacity-5 bg-contain"
          style={{ backgroundImage: "url('/ASSET-BG.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <motion.div
          className="relative z-10 w-full max-w-lg text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-5xl mb-4 text-black" style={{ fontFamily: "Bailenson, sans-serif" }}>Best Wishes</h2>
          <p className="text-gray-700 mb-8">Leave us your beautiful wishes here:</p>

          {/* Form input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-black px-4 py-2 text-black"
            />
            <textarea
              rows={4}
              maxLength={500}
              placeholder="Your Best Wishes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-black px-4 py-2 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
            >
              Send Wishes
            </button>
          </form>
        </motion.div>

      
      {/* Daftar Wishes */}
        <div className="relative z-10 w-full max-w-lg mt-8 space-y-4">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow"
            >
              <p className="font-semibold text-gray-900">{wish.name}</p>
              <p className="text-gray-700">{wish.message}</p>
              <p className="text-xs text-gray-500">
                {new Date(wish.created_at).toLocaleString("id-ID", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </p>
            </div>
          ))}
        </div>
          </section>

          {/* === Section 13: Closing === */}
          <section className="relative w-full"> 
            {/* Foto background full container */}
            <div className="relative w-full overflow-hidden">
              <img
                src="/footer.png" // 👉 ganti dengan foto kamu
                alt="Closing Photo"
                className="w-full h-full object-contain"
              />

            {/* overlay biar gambar agak gelap sedikit */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Overlay text di dalam foto */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 font-['Playfair_Display']">
                <p className="text-l mt-40">
                  It is a pleasure and honor for us, if you are willing to attend and give us your blessing.
                </p>
                <h2 className="text-2xl md:text-3xl font-['Playfair_Display']">
                  Asri & Arief
                </h2>
              </div>

              {/* Ornamen bunga di bagian bawah */}
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  src="/ornament_flower.webp" // 👉 gambar ornamen bunga biru
                  alt="Flower Ornament"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>
    
                {/* Tombol Kontrol Musik */}
          <motion.button
            onClick={togglePlay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-6 right-6 z-[9999] bg-white/70 backdrop-blur-md border border-gray-400 shadow-lg 
                  rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </motion.button>
>>>>>>> 8e5a35a3 (first commit)

        </div>
    </div>
  );
}
