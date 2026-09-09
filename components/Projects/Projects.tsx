'use client'

import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import styles from './Projects.module.css'

interface ProjectsProps {
  isVisible: boolean
}

const projects = [
  {
    id: 'pixelbrain',
    title: 'Pixel Brain',
    description:
      'Studio web & mobile pour PME et SaaS. Site agence, devis, SEO local et preuve sociale des livraisons.',
    tags: ['Next.js', 'TypeScript', 'SEO'],
    link: 'https://pixelbrain.fr/',
    image: '/images/projects/pixelbrain.jpg',
    accent: '#2dd4bf',
  },
  {
    id: 'gas',
    title: 'GAS — Cinéma Le Grenier à Sel',
    description:
      'Site vitrine pour le Cinéma Omar Sy — Le Grenier à Sel (Mairie de Trappes) : programmation, horaires, jeune public et billetterie EMS. Cinq directions graphiques sur gas.pixelbrain.fr.',
    tags: ['Site Vitrine', 'Culture', 'React', 'Design'],
    link: 'https://gas.pixelbrain.fr/',
    image: '/images/projects/gas.jpg',
    accent: '#2563eb',
  },
  {
    id: 'tisseuse',
    title: 'Tisseuse — Tricot bébé artisanal',
    description:
      'Boutique e-commerce pour créations tricotées bébé : pièces uniques, sur-mesure, catalogue, panier, checkout et back-office. Monorepo Next.js / NestJS / Prisma — mise en ligne prochainement.',
    tags: ['E-Commerce', 'Next.js', 'NestJS', 'Sur-mesure'],
    link: '',
    image: '/images/projects/tisseuse.jpg',
    accent: '#db2777',
  },
  {
    id: 'pixelbraincard',
    title: 'PixelbrainCard — Carte de fidélité digitale',
    description:
      'SaaS de fidélisation pour commerces de proximité : carte QR, branding, Apple & Google Wallet, scan boutique, récompenses et dashboard commerçant.',
    tags: ['SaaS', 'Fidélité', 'Next.js', 'NestJS'],
    link: 'https://card.pixelbrain.fr/',
    image: '/images/projects/pixelbraincard.jpg',
    accent: '#0f766e',
  },
  {
    id: 'ratus',
    title: 'Ratus — Réparation iPhone IDF',
    description:
      'Site vitrine mobile-first pour atelier à Trappes et interventions à domicile en Île-de-France : grille tarifaire, avis modérés, SEO local et Docker.',
    tags: ['Site Vitrine', 'Mobile-first', 'SEO Local', 'NestJS'],
    link: 'https://ratus.pixelbrain.fr/',
    image: '/images/projects/ratus.jpg',
    accent: '#f59e0b',
  },
  {
    id: 'mira',
    title: 'MIRA — Assistant proactif',
    description:
      'Site vitrine immersif pour un assistant proactif (vision et mémoire contextuelle) : animations au scroll et pré-inscription early adopter.',
    tags: ['Site Vitrine', 'Design', 'Animation', 'IA'],
    link: 'https://mirraa.netlify.app/',
    image: '/images/projects/mira.jpg',
    accent: '#00f2ff',
  },
  {
    id: 'lamymy',
    title: 'Lamymy — Créations artisanales',
    description:
      'Boutique en ligne de créations artisanales Made in France : identité chaleureuse, pré-lancement newsletter, SEO et intégration e-commerce.',
    tags: ['E-Commerce', 'Design', 'SEO'],
    link: 'https://lamymy.fr/',
    image: '/images/projects/lamymy.jpg',
    accent: '#f5576c',
  },
  {
    id: 'm2l',
    title: 'M2L',
    description: 'Application mobile pour association sportive. Messagerie de groupe et DM entre joueurs.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    link: '/AP4.pdf',
    accent: '#38ef7d',
  },
  {
    id: 'echowork',
    title: 'EchoWork',
    description: "Application de communication d'entreprise. Fusion Teams et Linkus/Keyyo.",
    tags: ['React', 'WebRTC', 'VoIP'],
    link: '',
    accent: '#20bdff',
  },
  {
    id: 'econogo',
    title: 'EconoGo',
    description: 'Comparateur de prix intelligent. Trouvez les produits les moins chers.',
    tags: ['React Native', 'API', 'Node.js'],
    link: '',
    accent: '#ffd200',
  },
]

export default function Projects({ isVisible }: ProjectsProps) {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Mes Réalisations</h2>
          <p className={styles.subtitle}>
            Projets livrés avec Pixel Brain et sélections personnelles
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${isVisible ? styles.fadeIn : ''}`}
              style={
                {
                  animationDelay: `${i * 0.1}s`,
                  '--accent': project.accent,
                } as React.CSSProperties
              }
            >
              <div className={styles.imageWrapper}>
                {'image' in project && project.image ? (
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className={styles.projectImage}
                  />
                ) : (
                  <div
                    className={styles.imagePlaceholder}
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}44)`,
                    }}
                  >
                    <span className={styles.projectInitial}>{project.title[0]}</span>
                  </div>
                )}
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
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
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
