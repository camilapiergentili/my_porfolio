import { Server, Layers, Database, FlaskConical, MonitorSmartphone, Boxes, Bot, Lightbulb } from 'lucide-react'

// Estructura de categorías (id + ícono) — language-agnostic. El label de
// cada categoría y la lista de items (tecnologías y conceptos) viven en
// data/content/es.js y en.js bajo t.skills.categories.<id>, porque algunos
// items sí necesitan traducción (ej. "Arquitectura Hexagonal" / "Hexagonal
// Architecture", soft skills) y otros no (nombres de tecnología) — mantener
// todo junto en el content file evita que un idioma quede desincronizado.
const skillCategories = [
  { id: 'backend', icon: Server },
  { id: 'architecture', icon: Layers },
  { id: 'database', icon: Database },
  { id: 'testing', icon: FlaskConical },
  { id: 'frontend', icon: MonitorSmartphone },
  { id: 'devops', icon: Boxes },
  { id: 'ai', icon: Bot },
  { id: 'softSkills', icon: Lightbulb }
]

export default skillCategories
