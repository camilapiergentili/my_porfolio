import { Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from "../../assets/LOGO.png"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm
    ${scrolled ? 'shadow-md' : ''}
    `}
    
    style={{
      backgroundColor: scrolled
      ? 'rgba(253, 253, 150, 0.7)'
      : 'rgba(253, 253, 150, 0.95)'
    }}
    >
      <div className="max-w-6xl mx-auto px-6 py-1 flex justify-between items-center overflow-hidden">
        
        {/* Logo izquierda */}
        <div className="flex items-center flex-shrink-0">
          <img 
          src={logo} 
          alt="logo camila" 
          className="h-20 w-20 object-contain flex-shrink-0"
          />
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/camilapiergentili"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--celeste)] hover:text-[var(--azul-marino)] hover:scale-110 transition-all duration-300"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/camila-piergentili/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--celeste)] hover:text-[var(--azul-marino)] hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}
