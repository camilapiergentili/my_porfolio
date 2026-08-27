import { Github, Linkedin, Mail } from 'lucide-react'
import useReveal from '../../hooks/useReveal'
import { useTranslation } from '../../i18n/useTranslation'

export default function Contact() {
  const [ref, isVisible] = useReveal()
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title" style={{ marginBottom: '18px' }}>{t.contact.title}</h2>

        <p className="text-lg mb-10" style={{ color: "var(--text-muted)" }}>
          {t.contact.subtitle}
        </p>

        <div
          ref={ref}
          className={`flex flex-wrap gap-5 justify-center reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <a
            href="mailto:camilapiergentili@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-primary"
          >
            {t.contact.email}
            <span className="btn-pill-cap btn-pill-cap-primary">
              <Mail size={18} />
            </span>
          </a>

          <a
            href="https://github.com/camilapiergentili"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-secondary"
          >
            {t.contact.github}
            <span className="btn-pill-cap btn-pill-cap-secondary">
              <Github size={18} />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/camila-piergentili/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-secondary"
          >
            {t.contact.linkedin}
            <span className="btn-pill-cap btn-pill-cap-secondary">
              <Linkedin size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
