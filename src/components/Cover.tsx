"use client";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <section
      className="
        absolute inset-0 flex flex-col 
        justify-center items-center gap-10
        text-white text-center bg-cover bg-center px-4
      "
      style={{ backgroundImage: "url('/BG-match.png')" }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Judul */}
      <div className="relative z-10 mt-8">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif drop-shadow-lg italic text-[#ffb5b5]">
          It’s a Match!
        </h2>
        <p className="mt-2 text-base sm:text-lg md:text-lg drop-shadow-md">
          Asri & Arief are getting married!
        </p>
      </div>

      {/* Foto pasangan */}
      <div className="relative z-10 flex gap-6 sm:gap-8 mt-4">
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/Asri.png" alt="Foto Pasangan" className="w-full h-full object-cover" />
        </div>
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/Arief.png" alt="Foto Arif" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="relative z-10 mb-5 sm:mb-8 mt-6">
        <p className="text-base sm:text-lg md:text-lg drop-shadow-md mb-2 ">
          Dear,
        </p>
        <p className="text-xl sm:text-2xl md:text-2xl font-semibold drop-shadow-md ">
          Guest Name
        </p>
        <button
          onClick={onOpen}
          className="mt-6 px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r bg[#ffb5b5] border-white border-2 
                    rounded-full shadow-lg hover:scale-105 transition text-base sm:text-lg cursor-pointer"
        >
          Open Invitation
        </button>
      </div>


    </section>
  );
}
