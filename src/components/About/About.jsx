import foto from "../../assets/camila-piergentili.jpeg"
import useReveal from "../../hooks/useReveal"
import { useTranslation } from "../../i18n/useTranslation"

export default function About() {
  const [ref, isVisible] = useReveal()
  const { t } = useTranslation()

  return (
    <section id="about" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">{t.about.title}</h2>

        <div
          ref={ref}
          className={`surface-card reveal ${isVisible ? 'is-visible' : ''} p-10 md:p-12 text-left`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Izquierda — texto */}
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-justify" style={{ color: "var(--text-muted)" }}>
                {t.about.bio}
              </p>
              <p className="text-lg leading-relaxed text-justify mt-4" style={{ color: "var(--text-muted)" }}>
                {t.about.bioAi}
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
