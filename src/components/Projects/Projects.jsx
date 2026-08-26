import projects from '../../data/projects'
import { ExternalLink } from 'lucide-react'
import useReveal from '../../hooks/useReveal'

function ProjectCard({ project }) {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`surface-card reveal ${isVisible ? 'is-visible' : ''} mb-10 p-8`}
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-2xl font-bold" style={{ color: "var(--yellow)" }}>
          {project.title}
        </h3>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Repositorio de ${project.title} en GitHub`}
          className="flex-shrink-0 text-[var(--white)] hover:text-[var(--yellow)] transition-all duration-300 hover:scale-125"
        >
          <ExternalLink size={22} />
        </a>
      </div>

      <p className="mb-6 leading-relaxed text-justify" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold mb-3" style={{ color: "var(--white)" }}>
          Tecnologías:
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:shadow-[0_4px_14px_rgba(253,253,150,0.35)]"
              style={{ backgroundColor: "var(--yellow)", color: "var(--navy-text)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3" style={{ color: "var(--white)" }}>
          Desafíos clave:
        </h4>

        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--yellow)]"
            >
              <span style={{ color: "var(--yellow)" }} className="mr-2">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">Proyectos Personales</h2>

        <div className="text-left">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
