import projects from '../../data/projects'
import { Github, Linkedin, ExternalLink, Code2, Database, Server, Shield, GitBranch, Coffee } from 'lucide-react'

export default function Projects(){
    return(
    
    <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-12 text-center" style={{fontFamily: 'Georgia, serif'}}>
            Proyectos Personales
            </h2>
            
            {projects.map((project, idx) => (
                <div
                key={idx}
                className="mb-12 bg-stone-100/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent" 
                        style={{fontFamily: 'Georgia, serif'}}>
                            {project.title}
                        </h3>
                        
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-700 hover:scale-125 transition-all duration-300">
                            <ExternalLink size={24} />
                        </a>
                        
                        </div>
                        <p className="text-stone-700 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold text-amber-800 mb-3">Tecnologías:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} 
                                    className="px-3 py-2
                                    bg-amber-100 
                                    text-stone-800 
                                    rounded-full 
                                    text-sm 
                                    // hover:bg-amber-600 
                                    hover:text-white 
                                    transition-all 
                                    duration-300 
                                    cursor-default">
                                        {tech}
                                        </span>
                                    ))}
                                    
                                    </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-amber-800 mb-3">Desafíos clave:</h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i} className="text-stone-700 flex items-start hover:text-amber-900 transition-colors duration-200">
                                                    <span className="text-amber-700 mr-2">•</span>
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