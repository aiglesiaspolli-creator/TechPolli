import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechPolli | Manutencao e Suporte para Computadores",
  description:
    "Manutencao especializada para computadores, notebooks e redes com atendimento rapido, garantia e suporte tecnico profissional.",
  keywords: [
    "manutencao de computadores",
    "assistencia tecnica notebook",
    "suporte tecnico",
    "formatacao",
    "recuperacao de dados",
    "suporte empresarial"
  ],
  openGraph: {
    title: "TechPolli | Suporte tecnico rapido e confiavel",
    description:
      "Resolva problemas em computadores, notebooks e redes com diagnostico profissional e garantia.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo-techpolli.png",
        width: 512,
        height: 512,
        alt: "Logo TechPolli"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
