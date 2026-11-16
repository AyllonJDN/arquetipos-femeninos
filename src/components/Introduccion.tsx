import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

const objetivos = [
  "Identificar los arquetipos, estereotipos y roles de género presentes en los personajes femeninos, considerando sus características físicas, psicológicas, sociales y simbólicas.",
  "Analizar los recursos narrativos, visuales y sonoros que construyen y refuerzan los arquetipos femeninos.",
  "Determinar cómo los jóvenes interpretan los arquetipos representados, considerando lecturas hegemónicas, negociadas y oposicionales.",
  "Describir los niveles de aceptación, rechazo, identificación, empatía y cuestionamiento que generan los personajes femeninos.",
  "Analizar la influencia de los esquemas previos sobre género, las experiencias personales y los grupos de referencia en la recepción.",
  "Analizar las formas de apropiación y circulación de significados que desarrollan las audiencias en sus conversaciones y prácticas digitales.",
];

export default function Introduccion() {
  return (
    <section id="introduccion" className="relative bg-claro pt-20 pb-28 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-10 text-center">
            Introducción
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 text-marino/90 leading-relaxed mb-10">
          <Reveal direction="left">
            <p>
              Los medios de comunicación tienen un papel central en cómo se
              construyen y se difunden las imágenes que tenemos sobre
              distintos grupos sociales. Dentro de ese panorama, las series y
              películas transmiten discursos que van moldeando lo que el
              público piensa, valora y toma como ejemplo de comportamiento, y
              los personajes femeninos son una forma privilegiada de ver cómo
              se repiten, se cuestionan o se transforman ciertas ideas sobre
              el rol de la mujer en la sociedad.
            </p>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p>
              Entre 2020 y 2025, los debates sobre igualdad de género,
              discriminación y representación femenina ganaron una relevancia
              excepcional gracias a los medios tradicionales y digitales. Esto
              abrió paso a nuevas formas de interpretar contenidos que antes
              se aceptaban sin mayor cuestionamiento, y despertó la pregunta
              que guía esta investigación.
            </p>
          </Reveal>
        </div>

        <Reveal direction="scale">
          <div className="relative bg-acento text-white rounded-2xl p-6 sm:p-8 mb-20 overflow-hidden">
            <div
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <p className="text-xs uppercase tracking-wide font-semibold mb-3 text-white/80 relative">
              Pregunta general de investigación
            </p>
            <p className="font-serif text-lg sm:text-xl leading-snug relative text-balance">
              ¿Cómo reciben los jóvenes peruanos de 20 a 30 años el discurso
              mediático de los arquetipos femeninos representados en las
              series peruanas seleccionadas, emitidas o distribuidas entre
              2020 y 2025?
            </p>
          </div>
        </Reveal>

        {/* Mapa mental de objetivos: una espina central con nodos que se
            desprenden hacia lados alternos, en vez de una lista plana. */}
        <Reveal>
          <h3 className="font-serif font-semibold text-xl text-marino mb-3 text-center">
            Objetivos específicos
          </h3>
          <p className="text-center text-sm text-marino/60 mb-12">
            Seis ramas que se desprenden de la pregunta de investigación
          </p>
        </Reveal>

        <div className="relative">
          {/* Spine: centered on desktop, left-aligned on mobile */}
          <div
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-acento/30 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-6">
            {objetivos.map((obj, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={i} className="relative md:grid md:grid-cols-2 md:gap-x-10">
                  <Reveal
                    direction={isLeft ? "left" : "right"}
                    delay={0.05 * i}
                    className={
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }
                  >
                    <div
                      className={`relative pl-12 md:pl-0 ${
                        isLeft ? "md:pr-10" : "md:pl-10"
                      }`}
                    >
                      {/* Dot on the spine: left edge of the phone-size line,
                          or snapped to the center spine on desktop */}
                      <span
                        className={`absolute top-1 w-3 h-3 rounded-full bg-acento ring-4 ring-claro
                          left-4 -translate-x-1/2
                          md:left-auto md:translate-x-0
                          ${isLeft ? "md:right-[-7px]" : "md:left-[-7px]"}`}
                        aria-hidden="true"
                      />
                      <span className="font-serif text-acento text-sm font-semibold">
                        Objetivo {i + 1}
                      </span>
                      <p className="text-marino/90 leading-relaxed mt-1">
                        {obj}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <SectionDivider fill="#ffffff" flip />
    </section>
  );
}
