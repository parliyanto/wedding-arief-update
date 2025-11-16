import { Suspense } from "react";
import Invitation from "@/components/Invitation";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Invitation />
      </Suspense>
    </main>
  );
}
