'use client'

import { useEffect, useState } from 'react'
import { 
  HomeIcon, 
  UserIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  CodeBracketIcon as CodeBracketIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  EnvelopeIcon as EnvelopeIconSolid
} from '@heroicons/react/24/solid'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', Icon: HomeIcon, IconSolid: HomeIconSolid, label: 'Accueil' },
    { id: 'about', Icon: UserIcon, IconSolid: UserIconSolid, label: 'À propos' },
    { id: 'skills', Icon: CodeBracketIcon, IconSolid: CodeBracketIconSolid, label: 'Skills' },
    { id: 'projects', Icon: RocketLaunchIcon, IconSolid: RocketLaunchIconSolid, label: 'Projets' },
    { id: 'contact', Icon: EnvelopeIcon, IconSolid: EnvelopeIconSolid, label: 'Contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <button 
          className={styles.logo}
          onClick={() => scrollToSection('hero')}
          aria-label="Retour à l'accueil"
        >
          <span className={styles.logoText}>AB</span>
        </button>
        
        <div className={styles.navDivider} />
        
        <ul className={styles.navList}>
          {navItems.map((item, index) => {
            const IconComponent = activeSection === item.id ? item.IconSolid : item.Icon
            return (
              <li key={item.id}>
                <button
                  className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <IconComponent className={styles.navIcon} />
                  <span className={styles.tooltip}>{item.label}</span>
                  {activeSection === item.id && <span className={styles.activeDot} />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
