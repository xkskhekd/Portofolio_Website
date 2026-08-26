import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fathi Annaqi — Electrical Engineer & Machine Learning Enthusiast",
  description:
    "Portfolio Fathi Annaqi, mahasiswa Teknik Elektro Universitas Malikussaleh yang fokus di renewable energy, power system, dan machine learning. Lihat proyek-proyek dari power system, embedded systems, hingga deep learning.",
  keywords: [
    "Fathi Annaqi",
    "Electrical Engineer",
    "Machine Learning Engineer",
    "Renewable Energy",
    "Power System",
    "Embedded Systems",
    "ESP32",
    "Deep Learning",
    "Universitas Malikussaleh",
    "Portfolio Teknik Elektro",
  ],
  authors: [{ name: "Fathi Annaqi" }],
  creator: "Fathi Annaqi",
  openGraph: {
    title: "Fathi Annaqi — Electrical Engineer & Machine Learning Enthusiast",
    description:
      "Portfolio Fathi Annaqi: proyek power system, embedded systems, dan machine learning dari mahasiswa Teknik Elektro Universitas Malikussaleh.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fathi Annaqi — Electrical Engineer & Machine Learning Enthusiast",
    description:
      "Portfolio Fathi Annaqi: proyek power system, embedded systems, dan machine learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-background text-text antialiased`}
        style={{
          background: "#0B0B0B",
          color: "#EAEAEA",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}