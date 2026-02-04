'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import PortfolioContent from '@/components/PortfolioContent'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight
      
      // Calculer les seuils (33% et 66% du scroll)
      const threshold1 = maxScroll * 0.33
      const threshold2 = maxScroll * 0.66
      
      const body = document.body
      
      // Étape 1 : HTML brut (pas de classe)
      // Étape 2 : Ajouter stage-2 à 33% du scroll
      if (scrollTop >= threshold1) {
        body.classList.add('stage-2')
      } else {
        body.classList.remove('stage-2')
      }
      
      // Étape 3 : Ajouter stage-3 à 66% du scroll
      if (scrollTop >= threshold2) {
        body.classList.add('stage-3')
      } else {
        body.classList.remove('stage-3')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <Navbar />
      <PortfolioContent />
    </main>
  )
}
