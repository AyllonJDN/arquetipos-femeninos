"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

const entradas = [
  {
    autor: "Stuart Hall",
    anio: "1980",
    tema: "Codificación / decodificación",
    texto:
      "El significado de un mensaje mediático no es fijo: se construye en la tensión entre el código con el que fue codificado y los códigos con los que cada audiencia lo decodifica. De ahí que un mismo personaje pueda generar lecturas hegemónicas, negociadas u oposicionales según quién lo mire.",
  },
  {
    autor: "Jesús Martín-Barbero",
    anio: "1987",
    tema: "De los medios a las mediaciones",
    texto:
      "Lo decisivo no es el mensaje en sí mismo, sino los lugares desde donde el público le da sentido: la familia, el barrio, el género, la generación. La recepción ocurre en esas mediaciones, no solo frente a la pantalla.",
  },
  {
    autor: "En esta tesis",
    anio: "",
    tema: "Cómo se aplican ambos marcos",
    texto:
      "Estos dos marcos permiten leer el focus group no como una simple medición de gustos, sino como el lugar donde ocho jóvenes negocian, rechazan y se apropian de los arquetipos femeninos según su propia experiencia de género, clase y generación.",
  },
];

export default function MarcoTeorico() {
  const [activo, setActivo] = useState(0);
  const actual = entradas[activo];

  return (
    <section id="marco-teorico" className="relative bg-marino pt-20 pb-28 px-6 sm:px-8 overflow-hidden">
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-acento/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-acento font-semibold mb-3 text-center">
            Marco teórico
          </p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-14 text-center">
            Dos lentes para leer la recepción
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12">
          <Reveal direction="left">
            <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {entradas.map((e, i) => (
                <li key={e.autor} className="shrink-0 md:shrink">
                  <button
                    type="button"
                    onClick={() => setActivo(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 border-l-2 ${
                      activo === i
                        ? "border-acento bg-white/5 text-white"
                        : "border-white/10 text-white/50 hover:text-white/80 hover:border-white/30"
                    }`}
                  >
                    <span className="block text-sm font-semibold whitespace-nowrap md:whitespace-normal">
                      {e.autor} {e.anio && `(${e.anio})`}
                    </span>
                    <span className="block text-xs text-white/40 mt-0.5 whitespace-nowrap md:whitespace-normal">
                      {e.tema}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activo}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="block w-8 h-[3px] bg-acento rounded-full mb-5"
                    aria-hidden="true"
                  />
                  <p className="font-serif text-xl sm:text-2xl text-white leading-snug text-balance mb-6">
                    {actual.texto}
                  </p>
                  <p className="text-sm text-acento font-semibold">
                    — {actual.autor}
                    {actual.anio && ` (${actual.anio})`}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <SectionDivider fill="#ffffff" />
    </section>
  );
}
