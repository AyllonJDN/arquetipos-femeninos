"use client";

import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import SectionDivider from "./SectionDivider";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-marino flex items-center pt-16 overflow-hidden"
    >
      {/* Floating decorative shapes for a sense of motion, not a static slide */}
      <div
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-acento/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-marino-claro blur-3xl opacity-70 animate-float-slower"
        aria-hidden="true"
      />
      <svg
        className="absolute -right-24 top-1/4 w-[420px] h-[420px] opacity-[0.12] animate-spin-slow"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="92" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 10" />
        <circle cx="100" cy="100" r="68" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 14" />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M -50 650 Q 150 600 250 680 Q 350 760 500 700" stroke="white" strokeWidth="2" fill="none" />
        <path d="M 900 50 Q 1000 150 950 250 Q 900 350 1000 420" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="250" cy="680" r="6" stroke="white" strokeWidth="1.5" />
        <circle cx="500" cy="700" r="4" stroke="white" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-start"
        >
          <PlaceholderImage
            src="/images/autora/zahody.jpg"
            alt="Zahody Angélica Camacho Bohorquez, autora de la tesis"
            initials="ZC"
            width={220}
            height={220}
            rounded="full"
            className="w-44 h-44 sm:w-56 sm:h-56 border-4 border-acento/40 shadow-[0_0_60px_-10px] shadow-acento/40"
          />
        </motion.div>

        <div className="text-white text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-acento font-semibold mb-4"
          >
            Tesis de pregrado · Ciencias de la Comunicación
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5 text-balance"
          >
            La recepción del discurso mediático de los arquetipos femeninos en
            series peruanas (2020-2025)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-2xl md:mx-0 mx-auto"
          >
            Un estudio cualitativo sobre cómo los jóvenes peruanos de 20 a 30
            años interpretan hoy a las mujeres de la ficción televisiva
            nacional.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif text-lg mb-8"
          >
            Zahody Angélica Camacho Bohorquez
          </motion.p>
          <motion.a
            href="#introduccion"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.04, backgroundColor: "#345d85" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-acento text-white font-sans font-semibold px-6 py-3 rounded-lg"
          >
            Ver la investigación ↓
          </motion.a>
        </div>
      </div>

      <SectionDivider fill="#f4f6f8" />
    </section>
  );
}
