'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'
import AnimatedTitle from '../AnimatedTitle'
import TechCarousel from '../TechCarousel'
import styles from './Hero.module.css'

interface HeroProps {
  onScrollToNext: () => void
}

export default function Hero({ onScrollToNext }: HeroProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundGrid} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Disponible pour de nouveaux projets</span>
          </div>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Bonjour, je suis</span>
            <span className={styles.name}>Adam Bouchaour</span>
            <span className={styles.role}>
              <AnimatedTitle />
            </span>
          </h1>
          <p className={styles.description}>
            Développeur Full Stack passionné, je crée des solutions web et mobile complètes, 
            de la conception à la mise en production. Expertise en React, Node.js et Cloud.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton} onClick={onScrollToNext}>
              Découvrir mon travail
            </button>
            <button className={styles.secondaryButton} onClick={scrollToContact}>
              Me contacter
            </button>
          </div>
          <div className={styles.heroTechStack}>
            <span className={styles.techLabel}>Stack technique</span>
            <TechCarousel />
          </div>
        </div>
      </div>
      <button className={styles.scrollIndicator} onClick={onScrollToNext} aria-label="Scroll down">
        <ArrowDownIcon className={styles.scrollIcon} />
      </button>
    </section>
  )
}
