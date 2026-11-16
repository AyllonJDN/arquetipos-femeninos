import { FileSearch, Tags, ListTree } from "lucide-react";

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

const filas = [
  {
    inicial: "Identificación y empatía",
    nueva: "Rechazo a Charo, Doña Nelly, Cayetana y Francesca controladora (serie)",
    participantes: "6",
  },
  {
    inicial: "Identificación y empatía",
    nueva: "Empatía por reinvención, duelo y amistad (película)",
    participantes: "5",
  },
];

export default function Codificacion() {
  return (
    <section id="codificacion" className="bg-marino-claro py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-14 text-center">
          Codificación
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {pasos.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <div key={paso.title} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-acento flex items-center justify-center mb-4">
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
            );
          })}
        </div>

        <div className="bg-marino rounded-xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-wide text-acento font-semibold mb-4">
            Ejemplo real aplicado
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left text-white/90">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-2 pr-4 font-serif font-semibold">
                    Categoría inicial
                  </th>
                  <th className="py-2 pr-4 font-serif font-semibold">
                    Nueva categoría
                  </th>
                  <th className="py-2 font-serif font-semibold whitespace-nowrap">
                    Participantes (de 8)
                  </th>
                </tr>
              </thead>
              <tbody>
                {filas.map((f, i) => (
                  <tr key={i} className="border-b border-white/10 last:border-0">
                    <td className="py-3 pr-4 align-top">{f.inicial}</td>
                    <td className="py-3 pr-4 align-top">{f.nueva}</td>
                    <td className="py-3 align-top">{f.participantes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/85 leading-relaxed">
            La empatía se concentra en la película y se genera por
            situaciones más que por tipos de personaje, mientras que el
            rechazo predomina frente a los personajes de la serie,
            percibidos como caricaturas sin posibilidad de evolución.
          </p>
        </div>
      </div>
    </section>
  );
}
