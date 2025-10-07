"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Cover from "./Cover";

const InvitationDetail = dynamic(() => import("./InvitationDetailTemp"), {
  ssr: false,
});

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed inset-0 z-50 overflow-hidden bg-transparent">
      {/* Cover */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-0 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <Cover onOpen={() => setIsOpen(true)} />
      </div>

      {/* Detail (sudah dirender dari awal tapi disembunyikan) */}
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
