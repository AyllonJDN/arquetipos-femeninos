import type { Metadata } from "next";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "La recepción del discurso mediático de los arquetipos femeninos en series peruanas (2020-2025) — Zahody Camacho Bohorquez",
  description:
    "La recepción del discurso mediático de los arquetipos femeninos en series peruanas (2020-2025) — Zahody Camacho Bohorquez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-marino antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
