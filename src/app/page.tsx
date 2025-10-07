// import Hero from "@/components/Hero";
// import Couple from "@/components/Couple";
// import Countdown from "@/components/Countdown";
// import EventDetails from "@/components/EventDetails";
// import Gallery from "@/components/Gallery";
// import Wishes from "@/components/Wishes";
// import Footer from "@/components/Footer";
import Invitation from "@/components/Invitation"; // ✅ wrapper

export default function Home() {
  return (
    <main>
      <Invitation />   {/* ✅ sudah handle Cover + Detail */}
      {/* <Hero />
      <Couple />
      <Countdown />
      <EventDetails />
      <Gallery />
      <Wishes />
      <Footer /> */}
    </main>
  );
}
