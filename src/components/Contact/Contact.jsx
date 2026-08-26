import { Github, Linkedin, Mail } from 'lucide-react'
import useReveal from '../../hooks/useReveal'

export default function Contact() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="contact" className="py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title" style={{ marginBottom: '18px' }}>Conectemos</h2>

        <p className="text-lg mb-10" style={{ color: "var(--text-muted)" }}>
          Estoy abierta a nuevas oportunidades y colaboraciones
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
            Email
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
            GitHub
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
            LinkedIn
            <span className="btn-pill-cap btn-pill-cap-secondary">
              <Linkedin size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
