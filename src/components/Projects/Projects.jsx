import { useState } from 'react'
import projects from '../../data/projects'
import { ExternalLink } from 'lucide-react'
import useReveal from '../../hooks/useReveal'
import { useTranslation } from '../../i18n/useTranslation'

function ProjectCard({ project, content, t }) {
  const [ref, isVisible] = useReveal()
  const [expanded, setExpanded] = useState(false)

  const coverStyle = project.image
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(4, 18, 44, 0.92) 0%, rgba(4, 18, 44, 0.8) 45%, rgba(4, 18, 44, 0.6) 100%), url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : undefined

  return (
    <div
      ref={ref}
      className={`surface-card reveal ${isVisible ? 'is-visible' : ''} mb-10 p-8`}
      style={coverStyle}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-2xl font-bold" style={{ color: "var(--yellow)" }}>
            {content.title}
          </h3>
          <p className="project-category">{content.category}</p>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.githubAriaLabel(content.title)}
          className="flex-shrink-0 text-[var(--white)] hover:text-[var(--yellow)] transition-all duration-300 hover:scale-125"
        >
          <ExternalLink size={22} />
        </a>
      </div>

      <p className="project-problem">{content.problem}</p>

      <div className="flex flex-wrap gap-2">
        {content.concepts.map((concept) => (
          <span key={concept} className="concept-chip">{concept}</span>
        ))}
      </div>

      {content.ai && (
        <div className="ai-block">
          <span className="ai-block-label">✦ {t.projects.aiLabel}</span>
          <span className="ai-block-value">{content.ai.concepts.join(' · ')}</span>
        </div>
      )}

      <p className="built-with">
        <span className="built-with-label">{t.projects.builtWithLabel}</span>
        {project.tech.join(' · ')}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="case-study-toggle"
        aria-expanded={expanded}
      >
        {expanded ? t.projects.closeCaseStudyCta : t.projects.caseStudyCta}
        <span>{expanded ? '↑' : '→'}</span>
      </button>

      {expanded && (
        <div className="case-study">
          <div>
            <h4>{t.projects.caseStudy.problemLabel}</h4>
            <p>{content.caseStudy.problem}</p>
          </div>

          <div>
            <h4>{t.projects.caseStudy.engineeringLabel}</h4>
            <ul>
              {content.caseStudy.engineering.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {content.ai && (
            <div>
              <h4>{t.projects.aiLabel}</h4>
              <p>{content.ai.description}</p>
            </div>
          )}

          <div>
            <h4>{t.projects.caseStudy.builtWithLabel}</h4>
            <p>{project.tech.join(' · ')}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">{t.projects.sectionTitle}</h2>

        <div className="text-left">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              content={t.projects.items[project.id]}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
