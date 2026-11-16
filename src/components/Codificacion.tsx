"use client";

import { FileSearch, Tags, ListTree } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

const pasos = [
  {
    icon: FileSearch,
    title: "Codificación descriptiva",
    text: "Surge del primer contacto con los datos. Se transcriben las respuestas de los ocho participantes y se comparan pregunta por pregunta, sin interpretar todavía nada.",
  },
  {
    icon: Tags,
    title: "Codificación axial",
    text: "Se destacan con color las percepciones de cada producción, se asigna un código a cada fragmento (por ejemplo E1 001 = entrevistado 1, fragmento 1) y se agrupan los fragmentos que comparten un mismo color porque expresan la misma idea.",
  },
  {
    icon: ListTree,
    title: "Codificación selectiva",
    text: "A partir de esas categorías ya agrupadas, se construye una jerarquía final de categorías y subcategorías con su frecuencia de mención, que es la que permite explicar el fenómeno estudiado.",
  },
];

const comparacion = [
  {
    label: "Rechazo a Charo, Doña Nelly, Cayetana y Francesca controladora",
    sub: "Serie — Al fondo hay sitio",
    value: 6,
  },
  {
    label: "Empatía por reinvención, duelo y amistad",
    sub: "Película — Soltera, casada, viuda y divorciada",
    value: 5,
  },
];

export default function Codificacion() {
  return (
    <section id="codificacion" className="relative bg-marino-claro pt-20 pb-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-14 text-center">
            Codificación
          </h2>
        </Reveal>

        <div className="relative mb-16">
          {/* Connecting line threading through the three steps */}
          <div
            className="hidden sm:block absolute top-7 left-[16.6%] right-[16.6%] h-px bg-white/20"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {pasos.map((paso, i) => {
              const Icon = paso.icon;
              return (
                <Reveal key={paso.title} direction="scale" delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-14 h-14 rounded-full bg-acento flex items-center justify-center mb-4 relative z-10 ring-8 ring-marino-claro">
                      <Icon className="text-white" size={26} />
                    </div>
                    <p className="text-xs uppercase tracking-wide text-acento font-semibold mb-2">
                      Paso {i + 1}
                    </p>
                    <h3 className="font-serif font-semibold text-lg text-white mb-2">
                      {paso.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {paso.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal direction="up">
          <div className="bg-marino rounded-2xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wide text-acento font-semibold mb-6">
              Ejemplo real aplicado · Identificación y empatía
            </p>

            <div className="space-y-6 mb-6">
              {comparacion.map((c) => (
                <div key={c.label}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="text-sm text-white/90">
                      {c.label}
                      <span className="block text-xs text-white/50">{c.sub}</span>
                    </span>
                    <span className="font-serif text-white font-semibold shrink-0">
                      {c.value}/8
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-acento"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(c.value / 8) * 100}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/85 leading-relaxed border-t border-white/10 pt-5">
              La empatía se concentra en la película y se genera por
              situaciones más que por tipos de personaje, mientras que el
              rechazo predomina frente a los personajes de la serie,
              percibidos como caricaturas sin posibilidad de evolución.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionDivider fill="#ffffff" />
    </section>
  );
}
