export default function About() {
  return (
    <section className="py-20 px-6">
      <div
        className="
          max-w-4xl mx-auto
          bg-stone-100/50
          backdrop-blur-md
          rounded-3xl
          p-10
          shadow-md
          border border-stone-300/40
        "
      >
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-8 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Sobre mí
        </h2>

        <p className="text-lg text-stone-700 leading-relaxed">
          Perfil analítico y ordenado, con una forma de trabajo metódica y responsable.
          Desarrollo soluciones backend priorizando la claridad del código, la lógica
          y la mantenibilidad de los sistemas. Me caracterizo por la constancia, el
          compromiso y la atención al detalle. Aprendo rápido, me adapto con facilidad
          y busco un entorno donde aportar confiabilidad técnica y seguir creciendo
          como desarrolladora.
        </p>
      </div>
    </section>
  )
}

