import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

const serie = [
  {
    name: "Charo",
    quote:
      "Madre abnegada y sacrificada. El personaje más mencionado de la serie, asociado casi siempre al sacrificio presentado como única forma de amor.",
  },
  {
    name: "Francesca",
    quote:
      "Mujer de poder, aceptada por su fortaleza y cuestionada por su frialdad y su control sobre otros.",
  },
  {
    name: "Doña Nelly",
    quote:
      "Matriarca autoritaria. Ejerce control moral y es uno de los personajes que menos empatía genera en el público joven.",
  },
  {
    name: "Isabela",
    quote:
      "Niña rica atrapada en el conflicto de clase, recordada por el capricho y la negación de sus orígenes.",
  },
];

const pelicula = [
  {
    name: "Lorena",
    actriz: "Milene Vásquez",
    roles: [
      { pelicula: "la primera película", rol: "La soltera" },
      { pelicula: "la secuela", rol: "La casada" },
    ],
    quote:
      "Su historia permite hablar del deseo femenino, pero también deja ver el doble estándar moral frente a las decisiones sentimentales.",
  },
  {
    name: "Daniela",
    actriz: "Patricia Portocarrero",
    roles: [
      { pelicula: "la primera película", rol: "La casada" },
      { pelicula: "la secuela", rol: "La soltera" },
    ],
    quote:
      "Sostiene el rol tradicional de esposa volcada al hogar, aunque enfrenta el agobio doméstico no siempre reconocido.",
  },
  {
    name: "Cecilia",
    actriz: "Gianella Neyra",
    roles: [{ pelicula: "ambas películas", rol: "La viuda" }],
    quote:
      "Atraviesa el duelo y se reconstruye con el apoyo de sus amigas, generando una de las identificaciones más fuertes del grupo.",
  },
  {
    name: "Conny",
    actriz: "Katia Condos",
    roles: [{ pelicula: "ambas películas", rol: "La divorciada" }],
    quote:
      "Busca rehacer su vida después de la ruptura y cuestiona la idea de que un matrimonio infeliz deba mantenerse por compromiso social.",
  },
];

const hallazgos = [
  "La serie se recuerda por tipos fijos; la película se recuerda por situaciones que permiten identificación y empatía.",
  "La aceptación y el rechazo no se reparten por personaje, sino por rasgo: una misma mujer puede ser valorada por su fortaleza y cuestionada por su frialdad o su sacrificio.",
  "La película funcionó como un detonante social: fue vista y comentada en familia, mientras que la serie generó sobre todo una reacción de nostalgia o indiferencia.",
];

function GroupPhoto({
  src,
  alt,
  initials,
  caption,
}: {
  src: string;
  alt: string;
  initials: string;
  caption: string;
}) {
  return (
    <Reveal direction="scale">
      <div className="relative rounded-2xl overflow-hidden mb-8 group">
        <PlaceholderImage
          src={src}
          alt={alt}
          initials={initials}
          fill
          rounded="xl"
          className="aspect-[16/9] sm:aspect-[21/9]"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marino/90 via-marino/10 to-transparent" />
        <p className="absolute bottom-3 left-4 right-4 text-white text-sm sm:text-base font-serif">
          {caption}
        </p>
      </div>
    </Reveal>
  );
}

type Rol = { pelicula: string; rol: string };

function CharacterRow({
  name,
  actriz,
  tag,
  roles,
  quote,
  index,
}: {
  name: string;
  actriz?: string;
  tag?: string;
  roles?: Rol[];
  quote: string;
  index: number;
}) {
  return (
    <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.08}>
      <div className="flex gap-4 sm:gap-6 py-5 border-b border-marino/10 last:border-0">
        <span className="font-serif text-3xl sm:text-4xl text-acento/25 leading-none shrink-0 w-10 sm:w-12 text-right select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
            <h4 className="font-serif font-semibold text-lg text-marino">
              {name}
            </h4>
            {actriz && (
              <span className="text-xs text-marino/50">· {actriz}</span>
            )}
            {tag && (
              <span className="text-xs uppercase tracking-wide text-acento font-semibold">
                {tag}
              </span>
            )}
          </div>
          {roles && roles.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-2">
              {roles.map((r) => (
                <span
                  key={r.pelicula}
                  className="text-xs uppercase tracking-wide text-acento font-semibold"
                >
                  {r.rol}
                  <span className="text-marino/40 normal-case tracking-normal font-normal">
                    {" "}
                    · {r.pelicula}
                  </span>
                </span>
              ))}
            </div>
          )}
          <p className="text-sm sm:text-base text-marino/80 leading-relaxed">
            {quote}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Resultados() {
  return (
    <section id="resultados" className="relative bg-white pt-20 pb-28 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-3">
              Los arquetipos identificados
            </h2>
            <p className="text-marino/70 max-w-2xl mx-auto">
              Ocho personajes femeninos, dos producciones, dos formas
              distintas de construir a la mujer en pantalla.
            </p>
          </div>
        </Reveal>

        <div className="mb-16">
          <GroupPhoto
            src="/images/series/elenco.jpg"
            alt="Elenco de la serie peruana Al fondo hay sitio"
            initials="AFHS"
            caption="Al fondo hay sitio — elenco completo de la serie"
          />
          <div>
            {serie.map((c, i) => (
              <CharacterRow key={c.name} name={c.name} quote={c.quote} index={i} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <GroupPhoto
            src="/images/pelicula/elenco.jpg"
            alt="Las cuatro protagonistas de la película Soltera, casada, viuda y divorciada"
            initials="SCVD"
            caption="Soltera, casada, viuda y divorciada — las cuatro protagonistas"
          />
          <div>
            {pelicula.map((c, i) => (
              <CharacterRow
                key={c.name}
                name={c.name}
                actriz={c.actriz}
                roles={c.roles}
                quote={c.quote}
                index={i}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {hallazgos.map((h, i) => (
            <Reveal key={i} direction="up" delay={i * 0.12}>
              <div
                className={`relative bg-acento text-white rounded-2xl p-6 h-full overflow-hidden ${
                  i === 1 ? "sm:-translate-y-3" : ""
                }`}
              >
                <span
                  className="absolute -top-4 -right-2 font-serif font-bold text-7xl text-white/10 select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-xs uppercase tracking-wide font-semibold text-white/70 mb-2 relative">
                  Hallazgo clave
                </p>
                <p className="leading-relaxed relative">{h}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
