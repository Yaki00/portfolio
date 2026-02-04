'use client'

import { useTheme } from '../ThemeProvider'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import styles from './ThemeSwitch.module.css'

export default function ThemeSwitch() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Ne pas afficher pendant l'hydratation pour éviter le flash
  if (!mounted) {
    return (
      <div className={styles.themeSwitch} style={{ opacity: 0 }}>
        <span className={styles.switchTrack}>
          <span className={styles.switchThumb}>
            <MoonIcon className={styles.icon} />
          </span>
        </span>
      </div>
    )
  }

  return (
    <button
      className={styles.themeSwitch}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <span className={styles.switchTrack}>
        <span className={`${styles.switchThumb} ${theme === 'light' ? styles.light : ''}`}>
          {theme === 'dark' ? (
            <MoonIcon className={styles.icon} />
          ) : (
            <SunIcon className={styles.icon} />
          )}
        </span>
      </span>
    </button>
  )
}
