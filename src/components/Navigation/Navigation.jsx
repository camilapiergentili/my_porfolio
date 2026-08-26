import { Github, Linkedin } from 'lucide-react'
import logo from "../../assets/LOGO.png"
import useScrolled from "../../hooks/useScrolled"

export default function Navigation() {
  const scrolled = useScrolled(10)

  return (
    <div className="fixed top-4 inset-x-4 md:top-5 md:inset-x-6 z-50 flex justify-center">
      <nav
        className="w-full max-w-5xl flex justify-between items-center rounded-full px-5 py-2.5 md:px-7 md:py-3 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(4, 18, 44, 0.85)' : 'rgba(4, 18, 44, 0.4)',
          border: '1px solid var(--card-border)',
          backdropFilter: 'blur(14px)',
          boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.35)' : 'none'
        }}
      >
        <a href="#" className="flex-shrink-0 flex items-center">
          <img
            src={logo}
            alt="Logo Camila Piergentili"
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-white">
            <a href="#about" className="hover:text-[var(--yellow)] transition-colors">Sobre mí</a>
            <a href="#projects" className="hover:text-[var(--yellow)] transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-[var(--yellow)] transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/camilapiergentili"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--yellow)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/camila-piergentili/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--yellow)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-sm font-bold transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--yellow)', color: 'var(--navy-text)' }}
          >
            Contacto
          </a>
        </div>
      </nav>
    </div>
  )
}
