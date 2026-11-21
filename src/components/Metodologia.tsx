import { Compass, Users, Clapperboard, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

const tarjetas = [
  {
    icon: Compass,
    title: "Enfoque cualitativo",
    text: "La investigación sigue un enfoque cualitativo porque el objetivo no era medir cuántas personas piensan una cosa u otra, sino comprender a profundidad cómo los jóvenes construyen sentido frente a los arquetipos femeninos de la ficción peruana.",
  },
  {
    icon: Users,
    title: "Focus group de 8 personas",
    text: "Se aplicó un focus group a ocho participantes (cinco mujeres y tres hombres), de entre 20 y 30 años, a quienes se les pidió comparar dos producciones peruanas muy distintas entre sí en formato: una serie de larga duración y una película.",
  },
  {
    icon: Clapperboard,
    title: "Dos producciones en comparación",
    text: "Se analizó la serie Al fondo hay sitio y la película Soltera, casada, viuda y divorciada, para observar si el formato audiovisual (serial vs. unitario) cambia la forma en que el público recibe los arquetipos femeninos.",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="relative bg-white pt-20 pb-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-14 text-center">
            Metodología
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-4 mb-10 items-stretch">
          {tarjetas.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="flex items-center">
                <Reveal
                  direction="up"
                  delay={i * 0.12}
                  className={`flex-1 ${i % 2 === 1 ? "sm:mt-8" : ""}`}
                >
                  <div className="group bg-claro rounded-2xl p-6 h-full border border-transparent hover:border-acento/30 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-acento/10">
                    <div className="w-12 h-12 rounded-xl bg-marino flex items-center justify-center mb-4 group-hover:bg-acento transition-colors duration-300">
                      <Icon className="text-white" size={22} />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-marino mb-3">
                      {t.title}
                    </h3>
                    <p className="text-sm text-marino/85 leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </Reveal>

                {i < tarjetas.length - 1 && (
                  <ArrowRight
                    className="hidden sm:block text-acento/40 mx-2 shrink-0"
                    size={28}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center max-w-3xl mx-auto text-marino/90 leading-relaxed italic">
            Esta comparación permitió contrastar dos regímenes narrativos
            distintos frente a un mismo fenómeno: la representación de la
            mujer en la ficción televisiva y cinematográfica peruana
            contemporánea.
          </p>
        </Reveal>
      </div>

      <SectionDivider fill="#15395e" />
    </section>
  );
}
