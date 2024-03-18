import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Menu } from "@/components/menu/Menu";
import "@/styles/globals.css";
import { getDataCategories } from "@/services/get-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niche Store",
  description:
    "Niche Store - O destino para produtos exclusivos. Descubra uma seleção única de itens cuidadosamente selecionados para satisfazer os gostos mais exigentes.",
  // manifest: "/site.webmanifest",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getDataCategories();
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Menu categories={categories}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
