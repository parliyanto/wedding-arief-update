"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Cover from "./Cover";

const InvitationDetail = dynamic(
  () => import("./InvitationDetailTemp").then((mod) => mod.default),
  { ssr: false }
);

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed inset-0 z-50 overflow-hidden bg-transparent">
      
      {/* Cover */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <Cover onOpen={() => setIsOpen(true)} />
      </div>

      {/* Detail */}
      <div
        className={`absolute inset-0 w-full h-full ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <InvitationDetail />
      </div>

    </section>
  );
}
