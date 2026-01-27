
import './Hero.css'
import '../../style/index.css'


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div
          className="hero-card"
        >
          <div className="hero-content">
            <h1>Camila Piergentili</h1>
            <p>Backend Software Developer</p>

            <div className="hero-actions">
              <a
              href="/CV-Piergentili-Camila-Developer.pdf"
              download
              className="btn btn-dark">
                Descargar CV
              </a>
              <a
                href="mailto:camilapiergentili@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-yellow"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}