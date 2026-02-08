import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Adam Bouchaour • Développeur Full Stack',
  description: 'Portfolio d\'Adam Bouchaour — Développeur Full Stack, DevOps & Architect Cloud. Expertise React, Node.js, Next.js, AWS et CI/CD.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
