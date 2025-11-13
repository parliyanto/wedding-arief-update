"use client";

export default function Closing() {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src="/footer.png"
          className="w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-lg mt-40">
            It is a pleasure and honor for us if you are willing to attend and bless us.
          </p>
          <h2 className="text-2xl md:text-3xl">
            Asri & Arief
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="/ornament_flower.webp"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
