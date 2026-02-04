'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import styles from './PortfolioContent.module.css'

export default function PortfolioContent() {
  const [isVisible, setIsVisible] = useState(false)
  const portfolioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkStage = () => {
      if (document.body.classList.contains('stage-3')) {
        setIsVisible(true)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && document.body.classList.contains('stage-3')) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = portfolioRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    checkStage()

    const bodyObserver = new MutationObserver(checkStage)
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      observer.disconnect()
      bodyObserver.disconnect()
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={portfolioRef} className={styles.portfolio}>
      <Hero onScrollToNext={scrollToNext} />
      <About />
      <Skills isVisible={isVisible} />
      <Projects isVisible={isVisible} />
      <Contact />
    </div>
  )
}
