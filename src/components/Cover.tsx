"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoverContent onOpen={onOpen} />
    </Suspense>
  );
}

function CoverContent({ onOpen }: CoverProps) {
  const searchParams = useSearchParams();
  const namaTamu = searchParams.get("tamu") || "Guest Name";
  const adaPartner = searchParams.get("partner") === "true";

  // Format nama tamu
  const formatNama = namaTamu
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const tampilNama = adaPartner ? `${formatNama} & Partner` : formatNama;

  return (
    <section
      className="absolute inset-0 flex flex-col justify-center items-center gap-10 text-white text-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/BG-match.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Judul */}
      <div className="relative z-10 mt-8">
        <h2 className="text-4xl sm:text-5xl font-serif italic text-[#ffb5b5]">
          It’s a Match!
        </h2>
        <p className="mt-2 text-lg drop-shadow-md">
          Asri & Arief are getting married!
        </p>
      </div>

      {/* Foto pasangan */}
      <div className="relative z-10 flex gap-6 mt-4">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/Asri.png" alt="Asri" className="w-full h-full object-cover" />
        </div>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/Arief.png" alt="Arief" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Dear section */}
      <div className="relative z-10 mt-6 mb-8">
        <p className="text-lg mb-2">Dear,</p>
        <p className="text-2xl font-semibold">{tampilNama}</p>
        <button
          onClick={onOpen}
          className="mt-6 px-6 py-3 border-2 border-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Open Invitation
        </button>
      </div>
    </section>
  );
}
