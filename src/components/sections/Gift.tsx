"use client";

import { useState } from "react";

export default function Gift() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    } catch (e) {
      setCopied("fail");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/Asset_background.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-white/40 -z-10"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
          <h2
            className="text-5xl md:text-5xl font-serif italic text-gray-800 mb-3"
            style={{ fontFamily: "Bailenson, sans-serif" }}
          >
            Wedding Gift
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            We are beyond grateful to have your presence.  
            If you would like to send us a gift:
          </p>

          {[ 
            { name: "Asri Cikita Putri", bank: "5771426574" },
            { name: "Arief Rachman Nugraha", bank: "4670089164" },
          ].map((x, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 mb-3 gap-3"
            >
              <div className="text-left">
                <p className="font-medium text-gray-800">{x.name}</p>

                {/* FIX: Bank selalu kiri + tidak terdorong */}
                <p className="text-sm text-gray-600 whitespace-nowrap ">
                  BCA {x.bank}
                </p>
              </div>

              <button
                onClick={() => copy(x.bank)}
                className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm cursor-pointer flex-shrink-0"
              >
                Copy
              </button>
            </div>
          ))}

          {copied && (
            <div className="fixed bottom-5 right-5 bg-white text-black px-4 py-2 rounded-lg shadow-lg">
              Nomor rekening berhasil disalin!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
