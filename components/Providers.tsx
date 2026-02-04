'use client'

import { ThemeProvider } from './ThemeProvider'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      {children}
    </ThemeProvider>
  )
}
