import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Sahil — a small corner of the internet", description: "Sahil's personal digital world." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
