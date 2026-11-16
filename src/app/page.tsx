import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduccion from "@/components/Introduccion";
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
        <Metodologia />
        <Codificacion />
        <Resultados />
        <Conclusiones />
      </main>
      <Footer />
    </>
  );
}
