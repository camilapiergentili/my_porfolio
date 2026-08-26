import skills from '../../data/skills'
import useReveal from '../../hooks/useReveal'

export default function Skills() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="skills" className="py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Tech Stack</h2>

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
      </div>
    </section>
  )
}
