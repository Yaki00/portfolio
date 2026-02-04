'use client'

import { useEffect, useState } from 'react'
import styles from './AnimatedTitle.module.css'

const titles = [
  'Développeur Full Stack',
  'DevOps',
  'Développeur Mobile',
  'Développeur Frontend',
  'Développeur Backend',
  'Architect Cloud',
]

export default function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(titles[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      // Attendre la fin de l'animation de sortie avant de changer le texte
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % titles.length
          setDisplayText(titles[nextIndex])
          setKey(prev => prev + 1) // Force re-render pour l'animation
          setIsAnimating(false)
          return nextIndex
        })
      }, 500) // Durée de l'animation de sortie
    }, 3500) // Change toutes les 3.5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={styles.animatedTitle}>
      <span className={styles.titleWrapper}>
        <span 
          key={key}
          className={`${styles.titleText} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
        >
          {displayText}
        </span>
      </span>
    </span>
  )
}
