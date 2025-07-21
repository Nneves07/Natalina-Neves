import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme, ThemeContextType } from '@/types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar si hay un tema guardado en localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme
      if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
        return savedTheme
      }
      
      // Verificar preferencia del sistema
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    
    return 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = window.document.documentElement
    
    // Remover clases anteriores
    root.classList.remove('light', 'dark')
    
    // Aplicar tema actual
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        root.classList.add(systemTheme)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const value: ThemeContextType = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
} 