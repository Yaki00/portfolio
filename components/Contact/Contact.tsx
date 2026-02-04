'use client'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineGlobeAlt } from 'react-icons/hi'
import styles from './Contact.module.css'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'contact@pixelbrain.fr',
    href: 'mailto:contact@pixelbrain.fr',
    icon: <HiOutlineMail />,
    color: '#00f2ff'
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Yaki00',
    href: 'https://github.com/Yaki00',
    icon: <FaGithub />,
    color: '#fff'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Adam Bouchaour',
    href: 'https://www.linkedin.com/in/bouchaour-adam-95b641226/',
    icon: <FaLinkedinIn />,
    color: '#0a66c2'
  },
  {
    id: 'website',
    label: 'Site Web',
    value: 'pixelbrain.fr',
    href: 'https://pixelbrain.fr/',
    icon: <HiOutlineGlobeAlt />,
    color: '#764ba2'
  }
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.sectionTitle}>Travaillons ensemble</h2>
          <p className={styles.subtitle}>
            Un projet en tête ? Une question ? N'hésitez pas à me contacter.
          </p>
        </div>

        {/* Links Grid */}
        <div className={styles.linksGrid}>
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' ? '_blank' : undefined}
              rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
              className={styles.linkCard}
              style={{ '--link-color': link.color } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                {link.icon}
              </div>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </div>
              <div className={styles.arrow}>→</div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Ou envoyez-moi directement un email</p>
          <a href="mailto:contact@pixelbrain.fr" className={styles.ctaButton}>
            <HiOutlineMail />
            contact@pixelbrain.fr
          </a>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© 2026 Adam Bouchaour • Développé avec Next.js</p>
        </footer>
      </div>
    </section>
  )
}
