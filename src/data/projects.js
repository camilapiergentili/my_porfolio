const projects = [
  {
    title: 'Gestion de Turnos',
    description: 'Aplicación creada para administrar pacientes, médicos, turnos, consultas y tratamientos dentro de una clínica médica.',
    tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'SQL', 'REST API', 'Spring Security (JWT)', 'MySQL', 'Maven', 'Docker'],
    highlights: [
      'Modelado completo del dominio clínico, evitando solapamientos y ambigüedades',
      'Gestión de turnos con validación automática de disponibilidad',
      'Autenticación segura con JWT',
      'Autorización por roles (admin, médico, paciente)',
      'Arquitectura MVC, escalable y mantenible',
      'Deploy completo de backend (y frontend integrado)'
    ],
    github: 'https://github.com/camilapiergentili/TurnosMedicos'
  },

  {
    title: 'DeportLink',
    description: 'Sistema de gestión de reservas de canchas deportivas que centraliza y automatiza la validación de turnos.',
    tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'SQL', 'REST API', 'Spring Security','Postman'],
    highlights: [
      'Modelado completo del dominio evitando solapamientos',
      'Validación automática de disponibilidad',
      'Arquitectura escalable y mantenible',
      'Deploy completo de backend y frontend'
    ],
    github: 'https://github.com/camilapiergentili/DeportLink/tree/development'
  },

  {
    title: 'Sistema Bancario',
    description: 'Backend para gestión de sistemas bancarios con validaciones de crédito y simulación de cuotas.',
    tech: ['Java', 'Spring Boot', 'REST API','JUnit', 'Mokito'],
    highlights: [
      'Validaciones de cliente y cuenta',
      'Cálculo de cuotas con interés fijo',
      'Manejo de excepciones personalizadas',
      'Persistencia en memoria',
      'Simulación de scoring crediticio'
    ],
    github: 'https://github.com/camilapiergentili/SistemaBancario/tree/master'
  },

  {
    title: 'HomeExpert',
    description: 'API para conectar usuarios con profesionales de servicios para el hogar.',
    tech: ['Node.js', 'Express', 'JavaScript'],
    highlights: [
      'Autenticación y autorización',
      'Diseño REST',
      'Endpoints protegidos por roles',
      'Deploy en Render'
    ],
    github: 'https://github.com/NicoValenciano/HomeExpert'
  }
]

export default projects