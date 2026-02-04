'use client'

import { useEffect, useState } from 'react'
import { 
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiAmazon
} from 'react-icons/si'
import { 
  FaCodeBranch,
  FaMobileAlt
} from 'react-icons/fa'
import styles from './TechCarousel.module.css'

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: FaMobileAlt, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'CI/CD', icon: FaCodeBranch, color: '#667eea' },
]

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2000) // Change toutes les 2 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + technologies.length) % technologies.length
          const isNext = index === (currentIndex + 1) % technologies.length
          
          return (
            <div
              key={tech.name}
              className={`${styles.carouselItem} ${
                isActive ? styles.active : 
                isPrev ? styles.prev : 
                isNext ? styles.next : 
                styles.hidden
              }`}
            >
              <div className={styles.iconWrapper}>
                <IconComponent 
                  className={styles.techIcon}
                  style={{ color: tech.color }}
                />
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          )
        })}
      </div>
      <div className={styles.carouselDots}>
        {technologies.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à ${technologies[index].name}`}
          />
        ))}
      </div>
    </div>
  )
}
