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
    <section id="introduccion" className="bg-claro py-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-10 text-center">
          Introducción
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 text-marino/90 leading-relaxed mb-10">
          <p>
            Los medios de comunicación tienen un papel central en cómo se
            construyen y se difunden las imágenes que tenemos sobre distintos
            grupos sociales. Dentro de ese panorama, las series y películas
            transmiten discursos que van moldeando lo que el público piensa,
            valora y toma como ejemplo de comportamiento, y los personajes
            femeninos son una forma privilegiada de ver cómo se repiten, se
            cuestionan o se transforman ciertas ideas sobre el rol de la
            mujer en la sociedad.
          </p>
          <p>
            Entre 2020 y 2025, los debates sobre igualdad de género,
            discriminación y representación femenina ganaron una relevancia
            excepcional gracias a los medios tradicionales y digitales. Esto
            abrió paso a nuevas formas de interpretar contenidos que antes se
            aceptaban sin mayor cuestionamiento, y despertó la pregunta que
            guía esta investigación.
          </p>
        </div>

        <div className="bg-acento text-white rounded-xl p-6 sm:p-8 mb-12">
          <p className="text-xs uppercase tracking-wide font-semibold mb-3 text-white/80">
            Pregunta general de investigación
          </p>
          <p className="font-serif text-lg sm:text-xl leading-snug">
            ¿Cómo reciben los jóvenes peruanos de 20 a 30 años el discurso
            mediático de los arquetipos femeninos representados en las series
            peruanas seleccionadas, emitidas o distribuidas entre 2020 y
            2025?
          </p>
        </div>

        <div>
          <h3 className="font-serif font-semibold text-xl text-marino mb-5">
            Objetivos específicos
          </h3>
          <ol className="space-y-3">
            {objetivos.map((obj, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-marino text-white text-sm font-semibold flex items-center justify-center font-serif">
                  {i + 1}
                </span>
                <span className="text-marino/90 leading-relaxed">{obj}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
