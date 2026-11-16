import CharacterCard from "./CharacterCard";

const serie = [
  {
    name: "Charo",
    production: "Al fondo hay sitio",
    quote:
      "Madre abnegada y sacrificada. El personaje más mencionado de la serie, asociado casi siempre al sacrificio presentado como única forma de amor.",
    src: "/images/series/charo.jpg",
    initials: "CH",
  },
  {
    name: "Francesca",
    production: "Al fondo hay sitio",
    quote:
      "Mujer de poder, aceptada por su fortaleza y cuestionada por su frialdad y su control sobre otros.",
    src: "/images/series/francesca.jpg",
    initials: "FR",
  },
  {
    name: "Doña Nelly",
    production: "Al fondo hay sitio",
    quote:
      "Matriarca autoritaria. Ejerce control moral y es uno de los personajes que menos empatía genera en el público joven.",
    src: "/images/series/dona-nelly.jpg",
    initials: "DN",
  },
  {
    name: "Isabela",
    production: "Al fondo hay sitio",
    quote:
      "Niña rica atrapada en el conflicto de clase, recordada por el capricho y la negación de sus orígenes.",
    src: "/images/series/isabela.jpg",
    initials: "IS",
  },
];

const pelicula = [
  {
    name: "Lorena",
    production: "Soltera, casada, viuda y divorciada",
    quote:
      "La soltera. Su historia permite hablar del deseo femenino, pero también deja ver el doble estándar moral frente a las decisiones sentimentales.",
    src: "/images/pelicula/lorena.jpg",
    initials: "LO",
  },
  {
    name: "Connie",
    production: "Soltera, casada, viuda y divorciada",
    quote:
      "La casada. Sostiene el rol tradicional de esposa volcada al hogar, aunque enfrenta el agobio doméstico no siempre reconocido.",
    src: "/images/pelicula/connie.jpg",
    initials: "CO",
  },
  {
    name: "Cecilia",
    production: "Soltera, casada, viuda y divorciada",
    quote:
      "La viuda. Atraviesa el duelo y se reconstruye con el apoyo de sus amigas, generando una de las identificaciones más fuertes del grupo.",
    src: "/images/pelicula/cecilia.jpg",
    initials: "CE",
  },
  {
    name: "Daniela",
    production: "Soltera, casada, viuda y divorciada",
    quote:
      "La divorciada. Busca rehacer su vida después de la ruptura y cuestiona la idea de que un matrimonio infeliz deba mantenerse por compromiso social.",
    src: "/images/pelicula/daniela.jpg",
    initials: "DA",
  },
];

const hallazgos = [
  "La serie se recuerda por tipos fijos; la película se recuerda por situaciones que permiten identificación y empatía.",
  "La aceptación y el rechazo no se reparten por personaje, sino por rasgo: una misma mujer puede ser valorada por su fortaleza y cuestionada por su frialdad o su sacrificio.",
  "La película funcionó como un detonante social: fue vista y comentada en familia, mientras que la serie generó sobre todo una reacción de nostalgia o indiferencia.",
];

export default function Resultados() {
  return (
    <section id="resultados" className="bg-white py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-3">
            Los arquetipos identificados
          </h2>
          <p className="text-marino/70 max-w-2xl mx-auto">
            Ocho personajes femeninos, dos producciones, dos formas distintas
            de construir a la mujer en pantalla.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="font-serif font-semibold text-lg text-marino mb-6 text-center sm:text-left">
            Al fondo hay sitio{" "}
            <span className="text-marino/50 font-sans text-sm font-normal">
              (serie)
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serie.map((c) => (
              <CharacterCard
                key={c.name}
                name={c.name}
                production={c.production}
                quote={c.quote}
                src={c.src}
                alt={`${c.name}, personaje de Al fondo hay sitio`}
                initials={c.initials}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-serif font-semibold text-lg text-marino mb-6 text-center sm:text-left">
            Soltera, casada, viuda y divorciada{" "}
            <span className="text-marino/50 font-sans text-sm font-normal">
              (película)
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pelicula.map((c) => (
              <CharacterCard
                key={c.name}
                name={c.name}
                production={c.production}
                quote={c.quote}
                src={c.src}
                alt={`${c.name}, personaje de Soltera, casada, viuda y divorciada`}
                initials={c.initials}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {hallazgos.map((h, i) => (
            <div key={i} className="bg-acento text-white rounded-xl p-6">
              <p className="text-xs uppercase tracking-wide font-semibold text-white/70 mb-2">
                Hallazgo clave {i + 1}
              </p>
              <p className="leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
