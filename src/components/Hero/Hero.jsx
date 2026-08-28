import { Download, ArrowUpRight } from 'lucide-react'
import './Hero.css'
import { useTranslation } from '../../i18n/useTranslation'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-window">
          <div className="hero-body">
            <div className="hero-text">
              <h1 className="hero-title">Camila Piergentili</h1>
              <p className="hero-role">{t.hero.eyebrowRole}</p>

              <p className="hero-description">
                {t.hero.description}
              </p>

              <div className="hero-actions">
                <a
                  href="/CV_PIERGENTILI_CAMILA.pdf"
                  download
                  className="btn-pill btn-pill-primary"
                >
                  {t.hero.downloadCta}
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
                  {t.hero.contactCta}
                  <span className="btn-pill-cap btn-pill-cap-secondary">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
