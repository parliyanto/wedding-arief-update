"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/sections/Intro"), { ssr: false, loading: () => null });
const Quote = dynamic(() => import("@/components/sections/Quote"), { ssr: false, loading: () => null });
const BrideGroom = dynamic(() => import("@/components/sections/BrideGroom"), { ssr: false, loading: () => null });

const PhotoSection = dynamic(() => import("@/components/sections/PhotoSection"), { ssr: false, loading: () => null });
const Ceremony = dynamic(() => import("@/components/sections/Ceremony"), { ssr: false, loading: () => null });
const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: false, loading: () => null });
const CountdownRsvp = dynamic(() => import("@/components/sections/CountdownRsvp"), { ssr: false, loading: () => null });
const LoveStory = dynamic(() => import("@/components/sections/LoveStory"), { ssr: false, loading: () => null });
const Gift = dynamic(() => import("@/components/sections/Gift"), { ssr: false, loading: () => null });
const Wishes = dynamic(() => import("@/components/sections/Wishes"), { ssr: false, loading: () => null });
const Closing = dynamic(() => import("@/components/sections/Closing"), { ssr: false, loading: () => null });

export default function InvitationDetailTemp() {
  return (
    <div className="grid md:grid-cols-[65%_35%] grid-cols-1 w-full h-screen">

      {/* LEFT — gambar fix */}
      <div className="h-screen sticky top-0 hidden md:block">
        <Image
          src="/sidebar.webp"
          alt="Sidebar Image"
          fill
          priority
          loading="eager"
          quality={75}
          sizes="65vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* RIGHT */}
      <div className="relative h-screen overflow-y-auto shadow-[-8px_0_20px_rgba(0,0,0,0.5)] w-full">
        <Intro />
        <Quote />
        <BrideGroom />
        <PhotoSection />
        <Ceremony />
        <Gallery />
        <CountdownRsvp />
        <LoveStory />
        <Gift />
        <Wishes />
        <Closing />
      </div>
    </div>
  );
}
