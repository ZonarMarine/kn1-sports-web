import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "KN1 Sports — Formamos Campeones del Motocross",
  description:
    "KN1 Sports es el equipo de motocross de Keylor Navas. Disciplina, pasión y desarrollo de atletas en Costa Rica.",
  keywords: "KN1 Sports, Keylor Navas, motocross, Costa Rica, equipo motocross, academia motocross",
  openGraph: {
    title: "KN1 Sports",
    description: "El futuro del motocross empieza aquí.",
    type: "website",
    url: "https://kn1sports.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
