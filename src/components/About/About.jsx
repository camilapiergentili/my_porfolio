import foto from "../../assets/camila-piergentili.jpeg"
import useReveal from "../../hooks/useReveal"

export default function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="about" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">Sobre mí</h2>

        <div
          ref={ref}
          className={`surface-card reveal ${isVisible ? 'is-visible' : ''} p-10 md:p-12 text-left`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Izquierda — texto */}
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-justify" style={{ color: "var(--text-muted)" }}>
                Perfil analítico y ordenado, con una forma de trabajo metódica y responsable.
                Desarrollo soluciones backend priorizando la claridad del código, la lógica
                y la mantenibilidad de los sistemas. Me caracterizo por la constancia, el
                compromiso y la atención al detalle. Aprendo rápido, me adapto con facilidad
                y busco un entorno donde aportar confiabilidad técnica y seguir creciendo
                como desarrolladora.
              </p>
            </div>

            {/* Derecha — foto con marco cuadrado y bloque amarillo superpuesto */}
            <div className="about-photo-frame flex-shrink-0">
              <span className="about-photo-accent" aria-hidden="true" />
              <img
                src={foto}
                alt="Camila Piergentili"
                className="about-photo-img"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
