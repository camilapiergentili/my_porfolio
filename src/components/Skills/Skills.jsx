import skillCategories from '../../data/skills'
import useReveal from '../../hooks/useReveal'
import { useTranslation } from '../../i18n/useTranslation'

export default function Skills() {
  const [ref, isVisible] = useReveal()
  const { t } = useTranslation()

  const aiCategory = skillCategories.find((category) => category.id === 'ai')
  const otherCategories = skillCategories.filter((category) => category.id !== 'ai')
  const AiIcon = aiCategory.icon
  const aiContent = t.skills.categories.ai

  return (
    <section id="skills" className="py-14 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="section-title">{t.skills.title}</h2>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${isVisible ? 'is-visible' : ''} text-left`}
        >
          {otherCategories.map((category) => {
            const Icon = category.icon
            const content = t.skills.categories[category.id]
            return (
              <div key={category.id} className="surface-card p-5">
                <div className="skill-category-header">
                  <Icon className="w-5 h-5" style={{ color: "var(--yellow)" }} />
                  <h3 className="skill-category-title">{content.label}</h3>
                </div>

                {content.caption && (
                  <p className="skill-category-caption">{content.caption}</p>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {content.items.map((item) => (
                    <span key={item} className="concept-chip">{item}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* IA & Automatización: tratamiento propio (acento a la izquierda),
            no otra tarjeta más de la grilla — ver reglas de la sección. */}
        <div className="ai-category-card text-left">
          <div className="skill-category-header">
            <AiIcon className="w-5 h-5" style={{ color: "var(--yellow)" }} />
            <h3 className="skill-category-title">✦ {aiContent.label}</h3>
          </div>

          <p className="skill-category-caption">{t.skills.aiCaption}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {aiContent.items.map((item) => (
              <span key={item} className="concept-chip">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
