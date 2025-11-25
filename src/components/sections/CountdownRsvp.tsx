"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function CountdownRsvp() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [rsvpData, setRsvpData] = useState<any>(null);
  const [attend, setAttend] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [guestName, setGuestName] = useState("");

  // ==== GET GUEST FROM URL ====
  useEffect(() => {
    if (typeof window === "undefined") return;

    const param = new URL(window.location.href).searchParams.get("guest_name");
    if (param) {
      const formatted = param
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setGuestName(formatted);
    }
  }, []);

  // ==== COUNTDOWN TIMER ====
  useEffect(() => {
    const target = new Date("2025-12-07T00:00:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hasUrlName = typeof window !== "undefined" &&
  !!new URL(window.location.href).searchParams.get("guest_name");


  // ==== FETCH RSVP DATA ====
  useEffect(() => {
    if (!guestName) return;

    const fetchRSVP = async () => {
      const { data } = await supabase
        .from("rsvp_guest")
        .select("*")
        .eq("name", guestName)
        .maybeSingle();

      setRsvpData(data);
    };

    fetchRSVP();
  }, [guestName]);

  // ==== SUBMIT RSVP ====
  const submitRSVP = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("rsvp_guest").insert([
      {
        name: guestName,
        status: attend,
        guest_count: guestCount,
      },
    ]);

    if (!error) {
      setRsvpData({
        name: guestName,
        status: attend,
        guest_count: guestCount,
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">

      {/* === BACKGROUND (Optimized) === */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/asset_architechture.webp"
          alt="RSVP background"
          fill
          sizes="100vw"
          quality={55}
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-400/60 -z-10"></div>

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-md text-center">

        {/* ==== CARD WITH IMAGE ==== */}
        <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[500px]">
            <Image
              src="/rsvp.png"
              alt="RSVP header"
              fill
              quality={65}
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* ==== COUNTDOWN ==== */}
          <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-6">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {["days", "hours", "minutes", "seconds"].map((key, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2"
                >
                  <h3 className="text-lg font-bold">{(timeLeft as any)[key]}</h3>
                  <p className="text-xs capitalize">{key}</p>
                </div>
              ))}
            </div>

            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Asri+and+Arief&details=Save+this+day+and+celebrate+with+us!&dates=20251207T020000Z/20251207T060000Z&location=AR-RODA Functional Hall Darussalam"
              target="_blank"
              className="bg-gray-600 text-white px-6 py-2 rounded-2xl shadow"
            >
              📅 Save The Date
            </a>
          </div>
        </div>

        {/* ==== RSVP FORM ==== */}
        <div className="bg-white shadow-lg p-6 text-center rounded-b-2xl">
          {!rsvpData ? (
            <form onSubmit={submitRSVP} className="space-y-4">

              {/* === INPUT NAME === */}
              {/* === INPUT NAME === */}
        <input
          value={guestName}
          onChange={(e) => {
            if (!hasUrlName) setGuestName(e.target.value); 
          }}
          readOnly={hasUrlName}
          placeholder="Masukkan Nama Anda"
          className="w-full border rounded-lg p-2 text-black bg-gray-100"
        />


      {/* === SELECT ATTEND === */}
      <select
        value={attend}
        onChange={(e) => setAttend(e.target.value)}
        className="w-full border rounded-lg p-2 text-black"
      >
        <option value="">Will you attend?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {/* === GUEST COUNT === */}
      <input
        type="number"
        placeholder="Amount of Guest"
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
        className="w-full border rounded-lg p-2 text-black"
      />

      {/* === SUBMIT === */}
      <button
        type="submit"
        className="bg-gray-600 text-white px-6 py-2 w-full rounded-lg cursor-pointer"
      >
        Submit
      </button>
    </form>
  ) : (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border rounded-xl px-5 py-4 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <p className="text-gray-800 font-medium text-sm">
          Thank you for confirming your presence.
        </p>
      </div>
    </div>
  )}
</div>
      </div>
    </section>
  );
}
