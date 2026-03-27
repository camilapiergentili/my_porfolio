import { Github, Linkedin } from 'lucide-react'

export default function Contact(){
  return(
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2
        className="text-4xl font-bold bg-clip-text text-transparent mb-8"
        style={{ 
          fontFamily: 'Georgia, serif',
          backgroundImage: "linear-gradient(to right, var(--azul-marino), var(--azul-marino))"
          }}
        >
            Conectemos
          </h2>

        <p className="text-lg text-stone-700 mb-8">
          Estoy abierta a nuevas oportunidades y colaboraciones
        </p>

        <div className="flex gap-6 justify-center">
          <a
          href="https://github.com/camilapiergentili"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-stone-50 rounded-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: "var(--azul-marino)" }}
          >
            <Github size={20} />
            
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/camila-piergentili/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-stone-50 rounded-lg hover:shadow-x1 hover:scale-110 transition-all duration-300"
            style={{
              backgroundColor: "var(--pastel-yellow)"
            }}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
