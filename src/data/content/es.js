const es = {
  meta: {
    title: 'Camila Piergentili — Backend Developer',
    description: 'Portfolio de Camila Piergentili, desarrolladora backend. Proyectos, stack técnico y contacto.'
  },

  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto'
  },

  hero: {
    eyebrowRole: 'Java · Spring Boot · APIs REST',
    description: 'Construyo APIs y sistemas backend priorizando código claro, lógica sólida y arquitecturas fáciles de mantener.',
    downloadCta: 'Descargar CV',
    contactCta: 'Contacto'
  },

  about: {
    title: 'Sobre mí',
    bio: 'Perfil analítico y ordenado, con una forma de trabajo metódica y responsable. Desarrollo soluciones backend priorizando la claridad del código, la lógica y la mantenibilidad de los sistemas. Me caracterizo por la constancia, el compromiso y la atención al detalle. Aprendo rápido, me adapto con facilidad y busco un entorno donde aportar confiabilidad técnica y seguir creciendo como desarrolladora.',
    bioAi: 'Hoy el desarrollo asistido por IA forma parte de mi forma de trabajar: uso Claude Code para explorar soluciones, revisar arquitectura, hacer debugging, testear y aprender más rápido, sin dejar de entender a fondo los sistemas que construyo.'
  },

  skills: {
    title: 'Stack Tecnológico',
    aiLabel: 'IA en mi workflow',
    aiValue: 'Claude Code — exploración de soluciones, revisión de arquitectura, testing y debugging asistidos por IA.'
  },

  projects: {
    sectionTitle: 'Proyectos Personales',
    builtWithLabel: 'Construido con',
    aiLabel: 'IA × Ingeniería',
    caseStudyCta: 'Ver caso de estudio',
    closeCaseStudyCta: 'Cerrar',
    githubAriaLabel: (title) => `Repositorio de ${title} en GitHub`,
    caseStudy: {
      problemLabel: 'El problema',
      engineeringLabel: 'Ingeniería',
      builtWithLabel: 'Tecnologías'
    },
    items: {
      deportlink: {
        title: 'DeportLink',
        category: 'Plataforma de reservas deportivas',
        problem: 'Centraliza clubes, canchas y turnos deportivos, evitando reservas dobles con validación automática de disponibilidad.',
        concepts: ['Concurrencia', 'Seguridad', 'Modelado de dominio'],
        ai: {
          concepts: ['Arquitectura', 'Seguridad', 'Concurrencia', 'Testing'],
          description: 'Utilicé Claude Code de forma iterativa para auditar la arquitectura, revisar seguridad (incluyendo protección contra IDOR), investigar problemas de concurrencia y locking, y diseñar tests — un proceso de análisis y revisión, no de generación automática de código. El proyecto tiene un audit report real que documenta estos hallazgos.'
        },
        caseStudy: {
          problem: 'Los clubes deportivos necesitan administrar canchas, horarios y reservas sin que dos jugadores terminen reservando el mismo turno. El sistema tiene tres roles (Admin, Owner, Player) con permisos y flujos distintos.',
          engineering: [
            'Arquitectura hexagonal (Ports & Adapters) con dominio inmutable, sin dependencia de Spring ni JPA',
            'Lock pesimista (SELECT ... FOR UPDATE) sobre la cancha antes de validar disponibilidad, más una constraint única en la base como defensa en profundidad',
            'Verificado con Testcontainers contra MySQL real, con hilos concurrentes de verdad — no mocks',
            'Protección IDOR: se devuelve 404 en vez de 403 para no filtrar la existencia de reservas ajenas',
            '239 tests, 0 failures (JUnit, Mockito, Testcontainers)'
          ]
        }
      },
      turnos: {
        title: 'DonTar',
        category: 'Sistema de turnos para clínica',
        problem: 'Gestión de turnos, pacientes y tratamientos de una clínica odontológica, con acceso diferenciado por rol.',
        concepts: ['Turnos', 'Autenticación', 'Roles'],
        caseStudy: {
          problem: 'Una clínica necesita coordinar turnos entre pacientes y médicos, con historia clínica y tratamientos, y permisos distintos según el rol.',
          engineering: [
            'Modelado completo del dominio clínico, evitando solapamientos y ambigüedades',
            'Gestión de turnos con validación automática de disponibilidad',
            'Autenticación segura con JWT y autorización por roles (admin, médico, paciente)',
            'Arquitectura MVC escalable, con deploy de backend y frontend'
          ]
        }
      },
      tarjeta: {
        title: 'Tarjeta Digital',
        category: 'Tarjeta de presentación digital',
        problem: 'Un cliente real necesitaba compartir sus datos de contacto sin depender de una tarjeta física.',
        concepts: ['Product thinking', 'UX', 'Deployment'],
        ai: {
          concepts: ['Refactoring', 'Organización de código'],
          description: 'Trabajé con Claude Code para organizar el proyecto — separar HTML, CSS y JS, y ordenar los assets en carpetas.'
        },
        caseStudy: {
          problem: 'Un socio de una empresa real necesitaba una forma simple y digital de compartir sus datos de contacto, sin depender de una tarjeta física.',
          engineering: [
            'Landing liviana con foto y datos de contacto',
            'Botón para guardar el contacto directo a la agenda del teléfono (vCard)',
            'Acceso mediante QR, desplegado en Netlify',
            'La solución más simple que resuelve el problema real, sin complejidad artificial'
          ]
        }
      }
    }
  },

  contact: {
    title: 'Conectemos',
    subtitle: 'Estoy abierta a nuevas oportunidades y colaboraciones',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn'
  },

  footer: {
    copyright: '© 2025 Camila Piergentili. Backend Developer.'
  }
}

export default es
