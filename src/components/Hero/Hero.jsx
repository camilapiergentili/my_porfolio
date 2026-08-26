import { Download, ArrowUpRight } from 'lucide-react'
import './Hero.css'
import heroPhoto from '../../assets/camila-hero.jpg'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-window">
          <div className="hero-window-bar">
            <span className="hero-window-dot" style={{ background: '#ff5f56' }} />
            <span className="hero-window-dot" style={{ background: '#ffbd2e' }} />
            <span className="hero-window-dot" style={{ background: '#27c93f' }} />
            <span className="hero-window-tab">camila.dev — ~/portfolio</span>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <p className="eyebrow-code">// backend developer</p>
              <h1 className="hero-title">Camila Piergentili</h1>
              <p className="hero-role">Java · Spring Boot · APIs REST</p>

              <p className="hero-description">
                Construyo APIs y sistemas backend priorizando código claro,
                lógica sólida y arquitecturas fáciles de mantener.
              </p>

              <div className="hero-actions">
                <a
                  href="/CV_PIERGENTILI_CAMILA.pdf"
                  download
                  className="btn-pill btn-pill-primary"
                >
                  Descargar CV
                  <span className="btn-pill-cap btn-pill-cap-primary">
                    <Download size={18} />
                  </span>
                </a>

                <a
                  href="mailto:camilapiergentili@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-secondary"
                >
                  Contacto
                  <span className="btn-pill-cap btn-pill-cap-secondary">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <img src={heroPhoto} alt="Camila Piergentili" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
