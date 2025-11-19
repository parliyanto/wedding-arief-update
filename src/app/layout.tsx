import "./globals.css";
import { ReactNode } from "react";
import MusicPlayer from "@/components/music/MusicPlayer";

export const metadata = {
  title: "Wedding Invitation | Asri & Arief",
  openGraph: {
    title: "Wedding Invitation | Asri & Arief",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-gray-50 text-gray-800">
        {children}

        {/*  <<<—— Tambahkan di bawah sini saja */}
        <MusicPlayer />
      </body>
    </html>
  );
}
