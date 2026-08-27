import deportlinkCover from '../assets/deportlink-cover.jpg'
import dontarCover from '../assets/dontar-cover.jpg'

// Datos no traducibles (tech stack, links, imagen). El texto (título,
// problema, conceptos, IA, case study) vive en data/content/es.js y en.js,
// indexado por `id`.
const projects = [
  {
    id: 'deportlink',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'MySQL', 'Flyway', 'MapStruct'],
    github: 'https://github.com/camilapiergentili/DeportLink/tree/development',
    image: deportlinkCover
  },
  {
    id: 'turnos',
    tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'SQL', 'Spring Security (JWT)', 'MySQL', 'Docker'],
    github: 'https://github.com/camilapiergentili/TurnosMedicos',
    image: dontarCover
  },
  {
    id: 'tarjeta',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/camilapiergentili/tarjeta-gonzalo-louvecez'
  }
]

export default projects
