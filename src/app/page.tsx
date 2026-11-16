import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduccion from "@/components/Introduccion";
import MarcoTeorico from "@/components/MarcoTeorico";
import Metodologia from "@/components/Metodologia";
import Codificacion from "@/components/Codificacion";
import Resultados from "@/components/Resultados";
import Conclusiones from "@/components/Conclusiones";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduccion />
        <MarcoTeorico />
        <Metodologia />
        <Codificacion />
        <Resultados />
        <Conclusiones />
      </main>
      <Footer />
    </>
  );
}
