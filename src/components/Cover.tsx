"use client";

import { useState, useEffect } from "react";

type CoverProps = { onOpen: () => void };

export default function Cover({ onOpen }: CoverProps) {
  return <CoverContent onOpen={onOpen} />;
}

function CoverContent({ onOpen }: CoverProps) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const raw = params.get("guest_name");
    const isPartner = params.get("partner") === "true";

    const formatted = raw
      ? raw
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "";

    setGuestName(isPartner ? `${formatted} & Partner` : formatted);
  }, []);

  return (
    <section className="fixed inset-0 flex flex-col justify-center items-center gap-10 text-white text-center px-4">

      {/* Background */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url('/BG-match.webp')",
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      {/* Title */}
      <div className="relative z-10 mt-8">
        <h2 className="text-4xl sm:text-5xl font-serif italic text-[#ffb5b5]">
          It’s a Match!
        </h2>
        <p className="mt-2 text-lg drop-shadow-md">
          Asri & Arief are getting married!
        </p>
      </div>

      {/* Photos */}
      <div className="relative z-10 flex gap-6 mt-4">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/Asri.webp"
            alt="Asri"
            className="w-full h-full object-cover aspect-square"
            loading="lazy"
          />
        </div>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/Arief.webp"
            alt="Arief"
            className="w-full h-full object-cover aspect-square"
            loading="lazy"
          />
        </div>
      </div>

      {/* Guest */}
      <div className="relative z-10 mt-6 mb-8">
        <p className="text-lg mb-2">Dear,</p>
        <p className="text-2xl font-semibold min-h-[32px]">{guestName}</p>

        <button
          onClick={() => {
            window.dispatchEvent(new Event("start-music"));
            onOpen();
          }}
          className="mt-6 px-6 py-3 border-2 border-white rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Open Invitation
        </button>
      </div>
    </section>
  );
}
