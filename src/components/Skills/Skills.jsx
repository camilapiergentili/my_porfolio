import skills from '../../data/skills'

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2
        className="text-4xl font-bold bg-clip-text text-transparent mb-8 text-center"
        
        style={{ 
          fontFamily: "Georgia, serif",
          backgroundImage: "linear-gradient(to right, var(--azul-marino), var(--azul-marino))"
        }}>
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
            <div
            key={skill.name}
            className="group relative 
            bg-transparent 
            backdrop-blur-sm 
            p-6 
            rounded-xl 
            shadow-md 
            hover:shadow-2xl 
            transition-all 
            duration-500 
            hover:-translate-y-2 
            border 
            overflow-hidden"
            style={{ 
              borderColor: 'var(--yellow)',
              boxShadow: '3px 1px 8px 0px rgba(242, 227, 129, 0.39)'
            }}
            >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${skill.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="relative z-10">
                  <Icon className="w-8 h-8 mb-3" style={{ color: "var(--azul-marino)" }} />
                  <h3 className="font-semibold text-stone-800">
                    {skill.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
