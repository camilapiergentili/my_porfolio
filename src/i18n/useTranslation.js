import { useContext } from 'react'
import { LanguageContext } from './languageContextInstance'

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useTranslation debe usarse dentro de <LanguageProvider>')
  }
  return ctx
}
