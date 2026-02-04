'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  BriefcaseIcon as WorkIcon,
  AcademicCapIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import styles from './About.module.css'

export default function About() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let itemObserver: IntersectionObserver | null = null
    let allTimelineItems: Element[] = []

    const timer = setTimeout(() => {
      if (!aboutRef.current) return

      const experienceSection = aboutRef.current
      const gridContainer = experienceSection.parentElement
      const educationSection = gridContainer?.querySelector(`.${styles.educationSection}`)
      
      allTimelineItems = []
      
      const experienceItems = experienceSection.querySelectorAll(`.${styles.timelineItem}`)
      experienceItems.forEach((item) => allTimelineItems.push(item))
      
      if (educationSection) {
        const educationItems = educationSection.querySelectorAll(`.${styles.timelineItem}`)
        educationItems.forEach((item) => allTimelineItems.push(item))
      }

      itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = allTimelineItems.indexOf(entry.target)
              if (index !== -1) {
                setVisibleItems((prev) => new Set([...prev, index]))
              }
            }
          })
        },
        { threshold: 0.1, rootMargin: '50px' }
      )

      allTimelineItems.forEach((item) => {
        if (itemObserver) {
          itemObserver.observe(item)
        }
      })

      allTimelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleItems((prev) => new Set([...prev, index]))
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (itemObserver) {
        allTimelineItems.forEach((item) => {
          try {
            itemObserver?.unobserve(item)
          } catch (e) {
            // Ignore si l'élément n'existe plus
          }
        })
        itemObserver.disconnect()
      }
    }
  }, [])

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          À propos de moi
        </h2>
        
        <div className={styles.aboutIntro}>
          <div className={styles.aboutAvatar}>
            <div className={styles.avatarPlaceholder}>
              <span className={styles.avatarInitials}>AB</span>
            </div>
            <div className={styles.avatarRing}></div>
          </div>
          <div className={styles.aboutText}>
            <p className={styles.text}>
              Je suis un développeur Full Stack passionné avec une expertise en développement front-end, back-end, 
              mobile et DevOps. J'aime créer des solutions complètes qui offrent une expérience exceptionnelle 
              de bout en bout.
            </p>
            <p className={styles.text}>
              Mon objectif est de transformer des idées créatives en applications performantes et scalables, 
              en utilisant les dernières technologies et les meilleures pratiques d'architecture et d'infrastructure.
            </p>
          </div>
        </div>

        <div className={styles.experienceEducationGrid}>
          <div ref={aboutRef} className={styles.experienceSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <WorkIcon className={styles.sectionIcon} />
              </div>
              <h3 className={styles.subsectionTitle}>Expériences professionnelles</h3>
            </div>
            <div className={styles.timeline}>
              <div className={`${styles.timelineItem} ${visibleItems.has(0) ? styles.visible : ''}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h4 className={styles.timelineTitle}>Architect Cloud / DevOps</h4>
                      <p className={styles.timelineCompany}>
                        <MapPinIcon className={styles.locationIcon} />
                        BNP
                      </p>
                    </div>
                    <div className={styles.timelineDateBadge}>
                      <CalendarIcon className={styles.dateIcon} />
                      <span className={styles.timelineDate}>2025 - Présent</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    Architecture et conception d'infrastructures cloud scalables et sécurisées. 
                    Mise en place de pipelines CI/CD et automatisation des déploiements. 
                    Gestion de l'infrastructure as code avec Terraform et Ansible.
                  </p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>Cloud</span>
                    <span className={styles.timelineTag}>DevOps</span>
                    <span className={styles.timelineTag}>Terraform</span>
                    <span className={styles.timelineTag}>Ansible</span>
                    <span className={styles.timelineTag}>AWS</span>
                    <span className={styles.timelineTag}>CI/CD</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${visibleItems.has(1) ? styles.visible : ''}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h4 className={styles.timelineTitle}>Développeur Full Stack</h4>
                      <p className={styles.timelineCompany}>
                        <MapPinIcon className={styles.locationIcon} />
                        Arkeon Energy Système
                      </p>
                    </div>
                    <div className={styles.timelineDateBadge}>
                      <CalendarIcon className={styles.dateIcon} />
                      <span className={styles.timelineDate}>2024 - 2025</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    Développement d'applications web et mobiles complètes avec React, React Native, Next.js et Node.js. 
                    Architecture de solutions scalables et mise en place de pipelines CI/CD. 
                    Collaboration avec les équipes pour livrer des produits de qualité.
                  </p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>React</span>
                    <span className={styles.timelineTag}>React Native</span>
                    <span className={styles.timelineTag}>Next.js</span>
                    <span className={styles.timelineTag}>Node.js</span>
                    <span className={styles.timelineTag}>TypeScript</span>
                    <span className={styles.timelineTag}>Docker</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${visibleItems.has(2) ? styles.visible : ''}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h4 className={styles.timelineTitle}>Développeur Full Stack</h4>
                      <p className={styles.timelineCompany}>
                        <MapPinIcon className={styles.locationIcon} />
                        Wecyde
                      </p>
                    </div>
                    <div className={styles.timelineDateBadge}>
                      <CalendarIcon className={styles.dateIcon} />
                      <span className={styles.timelineDate}>2023 - 2024</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    Développement d'applications web modernes avec React et Next.js. 
                    Création d'APIs RESTful avec Node.js et bases de données. 
                    Mise en place de solutions cloud et optimisation des performances.
                  </p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>React</span>
                    <span className={styles.timelineTag}>Next.js</span>
                    <span className={styles.timelineTag}>Node.js</span>
                    <span className={styles.timelineTag}>TypeScript</span>
                    <span className={styles.timelineTag}>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.educationSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconWrapper}>
                <AcademicCapIcon className={styles.sectionIcon} />
              </div>
              <h3 className={styles.subsectionTitle}>Études et formations</h3>
            </div>
            <div className={styles.timeline}>
              <div className={`${styles.timelineItem} ${visibleItems.has(3) ? styles.visible : ''}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h4 className={styles.timelineTitle}>Master of Science - Cloud & Cybersécurité</h4>
                      <p className={styles.timelineCompany}>
                        <MapPinIcon className={styles.locationIcon} />
                        Epitech
                      </p>
                    </div>
                    <div className={styles.timelineDateBadge}>
                      <CalendarIcon className={styles.dateIcon} />
                      <span className={styles.timelineDate}>2025 - 2027</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    Formation approfondie en architecture cloud, cybersécurité et infrastructure as code. 
                    Spécialisation en sécurité des systèmes cloud, gestion des identités et accès, 
                    et protection des données. Projets pratiques sur AWS, Azure et GCP.
                  </p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>Cloud</span>
                    <span className={styles.timelineTag}>Cybersécurité</span>
                    <span className={styles.timelineTag}>AWS</span>
                    <span className={styles.timelineTag}>Architecture</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${visibleItems.has(4) ? styles.visible : ''}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h4 className={styles.timelineTitle}>Bachelor - Développeur Full Stack</h4>
                      <p className={styles.timelineCompany}>
                        <MapPinIcon className={styles.locationIcon} />
                        ITIC
                      </p>
                    </div>
                    <div className={styles.timelineDateBadge}>
                      <CalendarIcon className={styles.dateIcon} />
                      <span className={styles.timelineDate}>2022 - 2025</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    Formation complète en développement web et mobile, algorithmes et structures de données. 
                    Bases solides en programmation, développement full stack et technologies modernes. 
                    Projets pratiques en développement web, mobile et cloud.
                  </p>
                  <div className={styles.timelineTags}>
                    <span className={styles.timelineTag}>Développement Web</span>
                    <span className={styles.timelineTag}>Programmation</span>
                    <span className={styles.timelineTag}>Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
