const tarjetas = [
  {
    title: "Enfoque cualitativo",
    text: "La investigación sigue un enfoque cualitativo porque el objetivo no era medir cuántas personas piensan una cosa u otra, sino comprender a profundidad cómo los jóvenes construyen sentido frente a los arquetipos femeninos de la ficción peruana.",
  },
  {
    title: "Focus group de 8 personas",
    text: "Se aplicó un focus group a ocho participantes (cuatro mujeres y cuatro hombres), de entre 20 y 30 años, a quienes se les pidió comparar dos producciones peruanas muy distintas entre sí en formato: una serie de larga duración y una película.",
  },
  {
    title: "Dos producciones en comparación",
    text: "Se analizó la serie Al fondo hay sitio y la película Soltera, casada, viuda y divorciada, para observar si el formato audiovisual (serial vs. unitario) cambia la forma en que el público recibe los arquetipos femeninos.",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-white py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-marino mb-12 text-center">
          Metodología
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {tarjetas.map((t) => (
            <div
              key={t.title}
              className="bg-claro rounded-xl p-6 border border-acento/20"
            >
              <h3 className="font-serif font-semibold text-lg text-marino mb-3">
                {t.title}
              </h3>
              <p className="text-sm text-marino/85 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center max-w-3xl mx-auto text-marino/90 leading-relaxed italic">
          Esta comparación permitió contrastar dos regímenes narrativos
          distintos frente a un mismo fenómeno: la representación de la mujer
          en la ficción televisiva y cinematográfica peruana contemporánea.
        </p>
      </div>
    </section>
  );
}
