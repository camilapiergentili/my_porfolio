import foto from "../../assets/camila-piergentili.jpeg"
import useReveal from "../../hooks/useReveal"

export default function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow-code">// sobre-mí</p>
        <h2 className="section-title">Quién soy</h2>

        <div
          ref={ref}
          className={`surface-card reveal ${isVisible ? 'is-visible' : ''} p-10 md:p-12 text-left`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Izquierda — texto */}
            <div className="flex-1">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
                className="w-48 h-48 rounded-full object-cover"
                style={{
                  border: "3px solid var(--yellow)",
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35)"
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
