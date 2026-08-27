import skills from '../../data/skills'
import useReveal from '../../hooks/useReveal'
import { useTranslation } from '../../i18n/useTranslation'

export default function Skills() {
  const [ref, isVisible] = useReveal()
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">{t.skills.title}</h2>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 reveal ${isVisible ? 'is-visible' : ''} text-left`}
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="surface-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="w-7 h-7 mb-3" style={{ color: "var(--yellow)" }} />
                <h3 className="font-semibold" style={{ color: "var(--white)" }}>
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>

        <div className="ai-block text-left mt-8">
          <span className="ai-block-label">✦ {t.skills.aiLabel}</span>
          <span className="ai-block-value">{t.skills.aiValue}</span>
        </div>
      </div>
    </section>
  )
}
