import projects from '../../data/projects'
import { Github, Linkedin, ExternalLink, Code2, Database, Server, Shield, GitBranch, Coffee } from 'lucide-react'

export default function Projects(){
    return(
    
    <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-12 text-center" 
            style={{fontFamily: 'Georgia, serif',
                backgroundImage: "linear-gradient(to right, var(--azul-marino), var(--azul-marino))"
            }}>
            Proyectos Personales
            </h2>
            
            {projects.map((project, idx) => (
                <div
                key={idx}
                className="mb-12 backdrop-blur-sm rounded-2xl p-8 border border-stone-300/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                style={{
                    backgroundColor: "rgba(177, 178, 180, 0.08)",
                    boxShadow: "8px 8px 12px 0px #00597a2b",

                }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <h3
                        className="text-2xl font-bold bg-clip-text text-transparent"
                        style={{
                            fontFamily: 'Georgia, serif',
                            color: "var(--yellow)"
                        }}
                        >
                            {project.title}
                        </h3>
                        
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-700 hover:scale-125 transition-all duration-300">
                            <ExternalLink size={24} />
                        </a>
                        
                        </div>
                        <p className="text-stone-900 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3"
                            style={{
                                color: "var(--azul-marino)"
                            }}>
                                Tecnologías:
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} 
                                    className="px-3 py-2
                                    rounded-full 
                                    text-sm 
                                    transition-all 
                                    duration-300 
                                    cursor-default
                                    text-stone-900"
                                    style={{ backgroundColor: "var(--pastel-yellow)" }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 53, 122, 0.5)"}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                                >
                                {tech}
                                    </span>
                            ))}
                                    
                            </div>
                        </div>
                    <div>
                        <h4 className="font-semibold mb-3"
                        style={{
                            color: "var(--azul-marino)"
                        }}
                        >
                            Desafíos clave:</h4>
                            
                            <ul className="space-y-2">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i} className="text-stone-900 flex items-start transition-colors duration-200"
                                    onMouseEnter={e => e.currentTarget.style.color = "var(--azul-marino)"}
                                    onMouseLeave={e => e.currentTarget.style.color = ""}
                            >
                                <span style={{ color: "var(--azul-marino)" }} className="mr-2">•</span>
                                <span>{highlight}</span>
                                </li>
                            ))}
                            </ul>
                    </div>
                </div>
            ))}
                                            
        </div>
        
    </section>
    )
}