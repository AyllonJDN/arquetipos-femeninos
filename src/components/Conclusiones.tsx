"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Tv, Film } from "lucide-react";
import Reveal from "./Reveal";

function Nodo({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.035, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl px-5 py-4 text-center cursor-default border ${
        tone === "accent"
          ? "bg-acento border-acento/60 text-white"
          : "bg-white/5 border-white/15 text-white/90"
      }`}
    >
      {children}
    </motion.div>
  );
}

export default function Conclusiones() {
  return (
    <section id="conclusiones" className="relative bg-marino py-20 px-6 sm:px-8 overflow-hidden">
      <span
        className="absolute top-6 left-4 sm:left-10 font-serif text-[8rem] sm:text-[11rem] leading-none text-white/5 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3 text-center">
            Conclusiones
          </h2>
          <p className="text-center text-sm text-white/50 mb-14 max-w-xl mx-auto">
            Cómo el formato de cada producción deriva en dos formas distintas
            de recibir a sus personajes femeninos
          </p>
        </Reveal>

        {/* Mapa de síntesis: de la producción, a la lectura que genera, a la conclusión central */}
        <div className="grid sm:grid-cols-2 gap-6 mb-4">
          <Reveal direction="left">
            <Nodo>
              <Tv className="mx-auto mb-2 text-acento" size={22} />
              <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">
                Serie
              </span>
              <span className="font-serif text-base">
                Al fondo hay sitio — lectura por tipos fijos
              </span>
            </Nodo>
          </Reveal>
          <Reveal direction="right">
            <Nodo>
              <Film className="mx-auto mb-2 text-acento" size={22} />
              <span className="block text-xs uppercase tracking-wide text-white/50 mb-1">
                Película
              </span>
              <span className="font-serif text-base">
                Soltera, casada, viuda y divorciada — lectura por situaciones
              </span>
            </Nodo>
          </Reveal>
        </div>

        <div className="flex justify-around px-6 sm:px-16 mb-4" aria-hidden="true">
          <ArrowDown className="text-white/25" size={20} />
          <ArrowDown className="text-white/25" size={20} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <Reveal direction="left" delay={0.1}>
            <Nodo>
              <span className="font-serif text-base">Genera distancia</span>
            </Nodo>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <Nodo>
              <span className="font-serif text-base">Despierta empatía</span>
            </Nodo>
          </Reveal>
        </div>

        <div className="flex justify-center mb-8" aria-hidden="true">
          <svg width="160" height="40" viewBox="0 0 160 40" className="text-white/25">
            <path
              d="M 10 0 Q 10 30 80 30"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 150 0 Q 150 30 80 30"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M 80 30 L 80 40" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <Reveal direction="scale" delay={0.2}>
          <div className="mb-16">
            <Nodo tone="accent">
              <span className="font-serif text-lg sm:text-xl text-balance">
                Recepción activa y negociada: el público no acepta ni rechaza
                a un personaje en bloque, negocia rasgo por rasgo
              </span>
            </Nodo>
          </div>
        </Reveal>

        <Reveal direction="up">
          <blockquote className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-9 mb-10">
            <p className="font-serif text-lg sm:text-xl text-white leading-relaxed text-balance">
              Con respecto al objetivo general, se concluye que los jóvenes
              peruanos de 20 a 30 años reciben el discurso mediático de los
              arquetipos femeninos de forma activa y distinta según el
              formato. Frente a la serie Al fondo hay sitio predomina una
              lectura por tipos fijos que genera distancia, mientras que
              frente a la película Soltera, casada, viuda y divorciada
              predomina una lectura por situaciones que despierta empatía. En
              ambos casos el público negocia rasgo por rasgo, lo que confirma
              que la recepción no es pasiva (Hall, 1980; Martín-Barbero,
              1987).
            </p>
            <footer className="mt-4 text-sm text-acento font-semibold">
              — Conclusión general de la tesis
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm text-white/50 text-center mb-10">
            Investigación cualitativa basada en un focus group de 8
            participantes. Los hallazgos deben leerse como una primera
            aproximación exploratoria.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-wide text-white/40 font-semibold mb-2">
              Referencias citadas
            </p>
            <ul className="text-xs text-white/40 space-y-1">
              <li>
                Hall, S. (1980). Encoding/decoding. En S. Hall, D. Hobson, A.
                Lowe y P. Willis (Eds.), <em>Culture, Media, Language</em>{" "}
                (pp. 128–138). Hutchinson.
              </li>
              <li>
                Martín-Barbero, J. (1987).{" "}
                <em>De los medios a las mediaciones: comunicación, cultura y
                hegemonía</em>. Gustavo Gili.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
