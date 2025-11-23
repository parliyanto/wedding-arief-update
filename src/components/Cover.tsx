"use client";

import {  useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <CoverContent onOpen={onOpen} />
  );
}

function CoverContent({ onOpen }: CoverProps) {
  const [guestName, setGuestName] = useState<string>("");
  const searchParams = useSearchParams();

  // === Ambil nama tamu dari URL ===
  useEffect(() => {
    const guestNameParam = searchParams.get("guest_name");
    const isPartner = searchParams.get("partner") === "true";

    const formattedName = guestNameParam
      ? guestNameParam
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";

    const finalName = isPartner ? `${formattedName} & Partner` : formattedName;
    setGuestName(finalName);
  }, [searchParams]);


  return (
    <section
      className="absolute inset-0 flex flex-col justify-center items-center gap-10 text-white text-center bg-cover bg-center px-4">
         <Image
            src="/BG-match.webp"
            alt="bg"
            fill
            priority
            className="object-cover z-[-1]"
          />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mt-8">
        <h2 className="text-4xl sm:text-5xl font-serif italic text-[#ffb5b5]">
          It’s a Match!
        </h2>
        <p className="mt-2 text-lg drop-shadow-md">
          Asri & Arief are getting married!
        </p>
      </div>

      <div className="relative z-10 flex gap-6 mt-4">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/Asri.webp"
            alt="Asri"
            width={144}
            height={144}
            className="rounded-full object-cover"
          />
        </div>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/Arief.webp"
            alt="Arief"
            width={144}
            height={144}
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mt-6 mb-8">
        <p className="text-lg mb-2">Dear,</p>
        <p className="text-2xl font-semibold">{guestName}</p>
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
