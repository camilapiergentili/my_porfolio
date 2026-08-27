const en = {
  meta: {
    title: 'Camila Piergentili — Backend Developer',
    description: 'Portfolio of Camila Piergentili, backend developer. Projects, tech stack and contact.'
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },

  hero: {
    eyebrowRole: 'Java · REST APIs · AI Agents · Claude Code',
    description: 'I build backend systems with Java and REST APIs, bringing AI and agents into my software development process.',
    downloadCta: 'Download CV',
    contactCta: 'Contact'
  },

  about: {
    title: 'About me',
    bio: "Analytical and methodical, with a disciplined and responsible way of working. I build backend solutions that prioritize clear code, solid logic and maintainable systems. I'm consistent, committed and detail-oriented — I learn fast, adapt easily, and look for an environment where I can bring technical reliability and keep growing as a developer.",
    bioAi: 'AI-assisted development is now part of how I work: I use Claude Code to explore solutions, review architecture, debug, test and learn faster — while staying focused on truly understanding the systems I build.'
  },

  skills: {
    title: 'Tech Stack',
    aiLabel: 'AI in my workflow',
    aiCaption: 'AI applied to software development: code analysis, architecture, testing, documentation and task automation — not model training.',
    categories: {
      backend: {
        label: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JPA / Hibernate']
      },
      architecture: {
        label: 'Architecture',
        caption: "Approaches I apply depending on the project's context, not all at once.",
        items: ['Layered Architecture', 'MVC', 'Hexagonal Architecture', 'SOLID', 'Design Patterns', 'Clean Code']
      },
      database: {
        label: 'Databases',
        items: ['MySQL', 'SQL', 'Flyway', 'Transactions']
      },
      testing: {
        label: 'Testing',
        items: ['JUnit', 'Mockito', 'MockMvc', 'Testcontainers']
      },
      frontend: {
        label: 'Frontend',
        items: ['JavaScript', 'React', 'HTML', 'CSS', 'Vite']
      },
      devops: {
        label: 'DevOps',
        items: ['Docker', 'Docker Compose', 'Git']
      },
      ai: {
        label: 'AI & Automation',
        items: ['Python', 'AI Agents', 'LLMs', 'Prompt Engineering', 'API Integration', 'Workflow Automation', 'Claude Code', 'Claude Cowork', 'ChatGPT', 'Skills']
      },
      softSkills: {
        label: 'Soft Skills',
        items: ['Problem solving', 'Analytical thinking', 'Continuous learning', 'Adaptability', 'Communication']
      }
    }
  },

  projects: {
    sectionTitle: 'Personal Projects',
    builtWithLabel: 'Built with',
    aiLabel: 'AI × Engineering',
    caseStudyCta: 'View case study',
    closeCaseStudyCta: 'Close',
    githubAriaLabel: (title) => `${title} repository on GitHub`,
    caseStudy: {
      problemLabel: 'The problem',
      engineeringLabel: 'Engineering',
      builtWithLabel: 'Technologies'
    },
    items: {
      deportlink: {
        title: 'DeportLink',
        category: 'Sports booking platform',
        problem: 'Centralizes clubs, courts and bookings, preventing double reservations through automatic availability validation.',
        concepts: ['Concurrency', 'Security', 'Domain Modeling'],
        ai: {
          concepts: ['Architecture', 'Security', 'Concurrency', 'Testing'],
          description: 'I used Claude Code iteratively to audit the architecture, review security (including IDOR protection), investigate concurrency and locking issues, and design tests — a process of analysis and review, not automatic code generation. The project has a real audit report documenting these findings.'
        },
        caseStudy: {
          problem: 'Sports clubs need to manage courts, schedules and bookings without two players ending up with the same slot. The system has three roles (Admin, Owner, Player) with distinct permissions and flows.',
          engineering: [
            'Hexagonal architecture (Ports & Adapters) with an immutable domain, no dependency on Spring or JPA',
            'Pessimistic lock (SELECT ... FOR UPDATE) on the court before validating availability, plus a unique DB constraint as defense in depth',
            'Verified with Testcontainers against real MySQL, with real concurrent threads — not mocks',
            'IDOR protection: returns 404 instead of 403 to avoid leaking the existence of other players\' bookings',
            '239 tests, 0 failures (JUnit, Mockito, Testcontainers)'
          ]
        }
      },
      turnos: {
        title: 'DonTar',
        category: 'Clinic scheduling system',
        problem: 'Manages appointments, patients and treatments for a dental clinic, with role-based access.',
        concepts: ['Scheduling', 'Authentication', 'Role-based access'],
        caseStudy: {
          problem: 'A clinic needs to coordinate appointments between patients and doctors, keep clinical records and treatments, and enforce different permissions per role.',
          engineering: [
            'Full clinical domain modeling, avoiding overlaps and ambiguity',
            'Appointment scheduling with automatic availability validation',
            'Secure authentication with JWT and role-based authorization (admin, doctor, patient)',
            'Scalable MVC architecture, with backend and frontend deployment'
          ]
        }
      },
      tarjeta: {
        title: 'Digital Business Card',
        category: 'Digital business card',
        problem: 'A real client needed a way to share their contact information without relying on a physical card.',
        concepts: ['Product thinking', 'UX', 'Deployment'],
        ai: {
          concepts: ['Refactoring', 'Code organization'],
          description: 'I worked with Claude Code to organize the project — separating HTML, CSS and JS, and structuring assets into folders.'
        },
        caseStudy: {
          problem: 'A partner at a real company needed a simple, digital way to share their contact details, without depending on a physical card.',
          engineering: [
            'Lightweight landing page with photo and contact details',
            'Button to save the contact directly to the phone (vCard)',
            'QR-code access, deployed on Netlify',
            'The simplest solution that solves the real problem, with no artificial complexity'
          ]
        }
      }
    }
  },

  contact: {
    title: "Let's connect",
    subtitle: "I'm open to new opportunities and collaborations",
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn'
  },

  footer: {
    copyright: '© 2025 Camila Piergentili. Backend Developer.'
  }
}

export default en
