"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function Wishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<any[]>([]);
  const [toast, setToast] = useState("");

  // === Ambil nama dari URL ===
  useEffect(() => {
    if (typeof window === "undefined") return;

    const param = new URL(window.location.href).searchParams.get("guest_name");
    if (param) {
      const formatted = param
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setName(formatted);
    }
  }, []);

  // === Ambil Wishes ===
  const fetchWishes = async () => {
    const { data } = await supabase
      .from("best_wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setWishes(data);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  // === Auto Hide Toast ===
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  // === Submit Wishes ===
  const submitWish = async (e: any) => {
    e.preventDefault();
    if (!name || !message) return setToast("Please fill all fields");

    const { error } = await supabase.from("best_wishes").insert([
      { name, message }
    ]);

    if (!error) {
      setMessage("");
      setToast("Thank you for your beautiful wish!");
      fetchWishes();
    }
  };

  const hasUrlName =
  typeof window !== "undefined" &&
  !!new URL(window.location.href).searchParams.get("guest_name");


  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 overflow-hidden">

      {/* === BACKGROUND OPTIMAL === */}
      <div className="absolute inset-0 -z-20">
        {/* Base color */}
        <div className="absolute inset-0 bg-[#7b8994]" />

        {/* Pattern contain (tidak nge-zoom) */}
        <Image
          src="/ASSET-BG.png"
          alt="pattern"
          fill
          quality={55}
          sizes="100vw"
          loading="lazy"
          className="object-contain opacity-20"
        />

        {/* Blur overlay cover (isi area kosong) */}
        <Image
          src="/ASSET-BG.png"
          alt="pattern blur"
          fill
          quality={22}
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-10 blur-sm"
        />
      </div>

      {/* Overlay hitam elegan */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* === CARD FORM === */}
      <div className="relative z-10 w-full max-w-lg text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <h2
          className="text-5xl md:text-5xl mb-4 text-black"
          style={{ fontFamily: "Bailenson, sans-serif" }}
        >
          Best Wishes
        </h2>

        <p className="text-gray-700 mb-8">Leave your beautiful message 💖</p>

        <form onSubmit={submitWish} className="space-y-4">
          <input
            value={name}
            onChange={(e) => {
              if (!hasUrlName) setName(e.target.value);
            }}
            readOnly={hasUrlName}
            placeholder="Masukkan Nama Anda"
            className="w-full border border-black bg-gray-100 rounded-md px-4 py-2 text-black"
          />
          <textarea
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your best wishes"
            className="w-full border border-black rounded-md px-4 py-2 text-black"
          ></textarea>

          <button className="bg-gray-800 text-white px-6 py-2 rounded-md w-full hover:bg-gray-900 cursor-pointer">
            Send Wish
          </button>
        </form>

        {/* === TOAST === */}
        {toast && (
          <div className="fixed top-6 right-6 bg-white/80 backdrop-blur-md border border-gray-300 text-gray-800 px-4 py-2 rounded-xl shadow-lg animate-fade-in-up z-[9999]">
            {toast}
          </div>
        )}

        <style jsx>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.35s ease-out;
          }
        `}</style>
      </div>

      {/* === LIST WISHES (LIGHT & SMOOTH) === */}
      <div
        className="relative z-10 w-full max-w-lg mt-8 space-y-4 overflow-y-auto scroll-smooth"
        style={{
          maxHeight: "300px",
          scrollbarWidth: "thin"
        }}
      >
        {wishes.map((w) => (
          <div
            key={w.id}
            className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow"
          >
            <p className="font-semibold text-gray-900">{w.name}</p>
            <p className="text-gray-800">{w.message}</p>
            <p className="text-xs text-gray-600">
              {new Date(w.created_at).toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
