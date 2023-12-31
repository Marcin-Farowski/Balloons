import type { Metadata } from "next";
import { Cormorant, Plus_Jakarta_Sans } from "next/font/google";
import "@styles/globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balloon Voyages",
  description: "Start the adventure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plus_jakarta_sans.variable} ${cormorant.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
