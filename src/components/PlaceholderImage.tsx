"use client";

import Image from "next/image";
import { useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  initials: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  rounded?: "full" | "xl";
};

/**
 * Muestra la imagen real si existe en /public. Si el archivo todavía
 * no fue subido (o falla la carga), muestra un bloque azul marino con
 * las iniciales del personaje/autora en tipografía serif, para que el
 * sitio nunca se vea roto con íconos de imagen caída.
 */
export default function PlaceholderImage({
  src,
  alt,
  initials,
  fill = false,
  width,
  height,
  className = "",
  imgClassName = "",
  rounded = "xl",
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const roundedClass = rounded === "full" ? "rounded-full" : "rounded-xl";

  if (failed) {
    return (
      <div
        className={`${roundedClass} bg-marino-claro flex items-center justify-center text-white font-serif font-semibold ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="text-2xl sm:text-3xl tracking-wide">{initials}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${roundedClass} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${roundedClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${roundedClass} ${imgClassName}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
