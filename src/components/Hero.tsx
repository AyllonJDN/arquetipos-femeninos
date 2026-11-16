import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-marino flex items-center pt-16 overflow-hidden"
    >
      {/* Decoración de fondo: motivo lineal sutil, dibujado con SVG propio */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M -50 650 Q 150 600 250 680 Q 350 760 500 700"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 900 50 Q 1000 150 950 250 Q 900 350 1000 420"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 1100 600 Q 1250 650 1180 750"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="250" cy="680" r="6" stroke="white" strokeWidth="1.5" />
        <circle cx="950" cy="250" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="500" cy="700" r="4" stroke="white" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
        <div className="flex justify-center md:justify-start">
          <PlaceholderImage
            src="/images/autora/zahody.jpg"
            alt="Zahody Angélica Camacho Bohorquez, autora de la tesis"
            initials="ZC"
            width={220}
            height={220}
            rounded="full"
            className="w-44 h-44 sm:w-56 sm:h-56 border-4 border-acento/40"
          />
        </div>

        <div className="text-white text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-acento font-semibold mb-4">
            Tesis de pregrado · Ciencias de la Comunicación
          </p>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
            La recepción del discurso mediático de los arquetipos femeninos en
            series peruanas (2020-2025)
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-2xl md:mx-0 mx-auto">
            Un estudio cualitativo sobre cómo los jóvenes peruanos de 20 a 30
            años interpretan hoy a las mujeres de la ficción televisiva
            nacional.
          </p>
          <p className="font-serif text-lg mb-8">
            Zahody Angélica Camacho Bohorquez
          </p>
          <a
            href="#introduccion"
            className="inline-block bg-acento hover:bg-acento/90 text-white font-sans font-semibold px-6 py-3 rounded-lg transition-colors duration-150"
          >
            Ver la investigación
          </a>
        </div>
      </div>
    </section>
  );
}
