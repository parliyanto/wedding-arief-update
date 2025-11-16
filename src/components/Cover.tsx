"use client";

import {  useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  console.log("🔥🔥🔥 COVER CONTENT LOADED 🔥🔥🔥");
  console.log("🔍 SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("🔍 SUPABASE KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


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

  // === LOG VISITOR ===
  useEffect(() => {
  if (!guestName) return;

  const logVisitor = async () => {
    const userAgent = navigator.userAgent;
    const device =
      /mobile/i.test(userAgent) ? "Mobile" :
      /tablet/i.test(userAgent) ? "Tablet" :
      "Desktop";

    const ip = await fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => data.ip)
      .catch(() => null);

    const sessionId = crypto.randomUUID();

    const { error } = await supabase.from("visitor_logs").insert({
      guest_name: guestName,
      opened_at: new Date().toISOString(),
      user_agent: userAgent,
      device: device,
      ip: ip,
      session_id: sessionId,
      duration_seconds: 0, // default dulu
    });

    if (error) {
      console.log("❌ Visitor log error:", error);
    } else {
      console.log("✅ Visitor logged successfully");
    }
  };

  logVisitor();
}, [guestName]);


  return (
    <section
      className="absolute inset-0 flex flex-col justify-center items-center gap-10 text-white text-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/BG-match.webp')" }}
    >
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
          <img src="/Asri.webp" alt="Asri" className="w-full h-full object-cover" />
        </div>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/Arief.webp" alt="Arief" className="w-full h-full object-cover" />
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
