import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ColorPicker } from "@/components/ColorPicker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Aboalkhair - Portfolio",
  description: "Full-stack web developer portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ColorPicker />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}