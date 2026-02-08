'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import styles from './PortfolioContent.module.css'

export default function PortfolioContent() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === skillsRef.current) {
              setSkillsVisible(true)
            }
            if (entry.target === projectsRef.current) {
              setProjectsVisible(true)
            }
          }
        })
      },
      { threshold: 0, rootMargin: '200px' }
    )

    if (skillsRef.current) observer.observe(skillsRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)

    return () => observer.disconnect()
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.portfolio}>
      <Hero onScrollToNext={scrollToNext} />
      <About />
      <div ref={skillsRef}>
        <Skills isVisible={skillsVisible} />
      </div>
      <div ref={projectsRef}>
        <Projects isVisible={projectsVisible} />
      </div>
      <Contact />
    </div>
  )
}
