import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Omer Abim - Profesyonel Belgesel & Drone Operatörü",
  description: "Havadan sinema anlatısı. Profesyonel belgesel çekimleri, drone görüntüleri ve video kurgu hizmetleri.",
  keywords: ["drone", "belgesel", "sinema", "videografi", "kurgu", "istanbul"],
  authors: [{ name: "Omer Abim" }],
  openGraph: {
    title: "Omer Abim - Profesyonel Belgesel & Drone Operatörü",
    description: "Havadan sinema anlatısı",
    url: "https://omerabim.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
