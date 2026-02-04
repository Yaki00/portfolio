'use client'

import React, { useState } from 'react'
import { Squares2X2Icon, ServerIcon, CubeIcon } from '@heroicons/react/24/outline'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiAngular,
  SiNodedotjs, SiPhp, SiMongodb, SiPostgresql, SiPrisma, SiFirebase,
  SiDocker, SiTerraform, SiAnsible, SiAmazonwebservices
} from 'react-icons/si'
import { FaMobileAlt, FaCodeBranch } from 'react-icons/fa'
import styles from './Skills.module.css'

interface SkillsProps { isVisible: boolean }

const skillIcons: Record<string, React.ReactNode> = {
  'React': <SiReact />,
  'React Native': <FaMobileAlt />,
  'Next.js': <SiNextdotjs />,
  'TypeScript': <SiTypescript />,
  'Angular': <SiAngular />,
  'Node.js': <SiNodedotjs />,
  'PHP': <SiPhp />,
  'MongoDB': <SiMongodb />,
  'PostgreSQL': <SiPostgresql />,
  'Prisma': <SiPrisma />,
  'Firebase': <SiFirebase />,
  'Docker': <SiDocker />,
  'Terraform': <SiTerraform />,
  'Ansible': <SiAnsible />,
  'AWS': <SiAmazonwebservices />,
  'CI/CD': <FaCodeBranch />
}

const skillCategories = [
  {
    id: 'front',
    title: 'Front-End',
    icon: <Squares2X2Icon />,
    skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Angular']
  },
  {
    id: 'back',
    title: 'Back-End',
    icon: <ServerIcon />,
    skills: ['Node.js', 'PHP', 'MongoDB', 'PostgreSQL', 'Prisma', 'Firebase']
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <CubeIcon />,
    skills: ['Docker', 'Terraform', 'Ansible', 'AWS', 'CI/CD']
  }
]

export default function Skills({ isVisible }: SkillsProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - card.left) / card.width
    const y = (e.clientY - card.top) / card.height
    setRotate({ x: (y - 0.5) * 15, y: (x - 0.5) * -15 })
  }

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {skillCategories.map((category, i) => (
            <div 
              key={category.id} 
              className={`${styles.cardWrapper} ${isVisible ? styles.slideUp : ''}`}
              style={{ animationDelay: `${i * 0.1}s`, transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            >
              <div className={styles.card}>
                <div className={styles.borderBeam} />
                
                {/* Header épuré : Icône + Titre sur la même ligne */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.tagsContainer}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      <span className={styles.skillIcon}>{skillIcons[skill]}</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}