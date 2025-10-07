import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Undangan Pernikahan",
  description: "Undangan pernikahan digital",
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
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
