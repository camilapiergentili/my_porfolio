import foto from "../../assets/camila-piergentili.jpeg"

export default function About() {
  return (
    <section className="py-20 px-6">
      
      <h2
      className="text-4xl font-bold bg-clip-text text-transparent mb-8 text-center"
      style={{ 
        fontFamily: "Georgia, serif",
        backgroundImage: "linear-gradient(to right, var(--azul-marino), var(--azul-marino))"
      }}
      >
        Sobre mí
        
        </h2>

      <div
        className="
          max-w-6xl mx-auto
          bg-stone-50/120
          backdrop-blur-md
          rounded-3xl
          p-10
          shadow-md
          border border-stone-300/40
        "
        style={{
          boxShadow: "8px 8px 12px 0px #00597a2b"
        }}
      >

        {/* Layout dos columnas */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Izquierda — texto */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed"
            style={{
              color: "var(--text-main)"
            }}
            >
              Perfil analítico y ordenado, con una forma de trabajo metódica y responsable.
              Desarrollo soluciones backend priorizando la claridad del código, la lógica
              y la mantenibilidad de los sistemas. Me caracterizo por la constancia, el
              compromiso y la atención al detalle. Aprendo rápido, me adapto con facilidad
              y busco un entorno donde aportar confiabilidad técnica y seguir creciendo
              como desarrolladora.
            </p>
          </div>

          {/* Derecha — foto */}
          <div className="flex-shrink-0">
            <img
            src={foto}
            alt="Camila Piergentili"
            className="w-48 h-50 rounded-full object-cover shadow-lg border-1"
            style={{ borderColor: "var(--azul-marino)" }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
