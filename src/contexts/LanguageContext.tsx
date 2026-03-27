'use client'

import { createContext, useContext } from 'react'

interface LanguageContextType {
  lang: string
  switchLanguage: (lang: string) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
