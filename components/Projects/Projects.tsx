'use client'

import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import styles from './Projects.module.css'

interface ProjectsProps {
  isVisible: boolean
}

const projects = [
  {
    id: 'mira',
    title: 'MIRA',
    description: 'Assistant IA proactif intégré dans un miroir intelligent. Vision, reconnaissance faciale et mémoire contextuelle RAG.',
    tags: ['React', 'IA/Vision', 'RAG'],
    link: 'https://mirraa.netlify.app/',
    image: '/projects/mira.png',
    accent: '#00f2ff'
  },
  {
    id: 'pixelbrain',
    title: 'Pixel Brain',
    description: 'Agence digitale française. Développement web, design UI/UX, SEO et simulateur de devis interactif.',
    tags: ['Next.js', 'TypeScript', 'SEO'],
    link: 'https://pixelbrain.fr/',
    image: '/projects/pixelbrain.png',
    accent: '#764ba2'
  },
  {
    id: 'm2l',
    title: 'M2L',
    description: 'Application mobile pour association sportive. Messagerie de groupe et DM entre joueurs.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    link: '/AP4.pdf',
    image: '/projects/m2l.png',
    accent: '#38ef7d'
  },
  {
    id: 'lamymy',
    title: 'Lamymy',
    description: 'Boutique e-commerce de design et couture. Catalogue produits et paiement sécurisé.',
    tags: ['E-Commerce', 'React', 'Stripe'],
    link: 'https://lamymy.fr/',
    image: '/projects/lamymy.png',
    accent: '#f5576c'
  },
  {
    id: 'time-manager',
    title: 'Time Manager',
    description: 'Application de gestion du temps. Planification et suivi des tâches.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '',
    image: '/projects/timemanager.png',
    accent: '#4facfe'
  },
  {
    id: 'echowork',
    title: 'EchoWork',
    description: 'Application de communication d\'entreprise. Fusion Teams et Linkus/Keyyo.',
    tags: ['React', 'WebRTC', 'VoIP'],
    link: '',
    image: '/projects/echowork.png',
    accent: '#20bdff'
  },
  {
    id: 'econogo',
    title: 'EconoGo',
    description: 'Comparateur de prix intelligent. Trouvez les produits les moins chers.',
    tags: ['React Native', 'API', 'Node.js'],
    link: '',
    image: '/projects/econogo.png',
    accent: '#ffd200'
  }
]

export default function Projects({ isVisible }: ProjectsProps) {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Mes Projets</h2>
          <p className={styles.subtitle}>Une sélection de projets sur lesquels j'ai travaillé</p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <article 
              key={project.id}
              className={`${styles.projectCard} ${isVisible ? styles.fadeIn : ''}`} 
              style={{ 
                animationDelay: `${i * 0.1}s`,
                '--accent': project.accent 
              } as React.CSSProperties}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder} style={{ background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}44)` }}>
                  <span className={styles.projectInitial}>{project.title[0]}</span>
                </div>
                {/* Décommente quand tu auras les images :
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                /> 
                */}
                <div className={styles.imageOverlay} />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.linkButton}
                      aria-label={`Voir ${project.title}`}
                    >
                      <ArrowTopRightOnSquareIcon />
                    </a>
                  )}
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
