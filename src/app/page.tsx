import Invitation from "@/components/Invitation"; // ✅ wrapper

export default function Home() {
  return (
    <main>
      <Invitation />   {/* ✅ sudah handle Cover + Detail */}
    </main>
  );
}
