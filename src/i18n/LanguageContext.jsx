import { useEffect, useState } from 'react'
import { LanguageContext, content } from './languageContextInstance'

function readStoredLang() {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'es'
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.) — español por defecto
    return 'es'
  }
}

/**
 * Único punto de verdad para el idioma del sitio. Español es el default;
 * se persiste la preferencia en localStorage y se actualizan <html lang>,
 * <title> y las meta tags al vuelo cuando cambia.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // no crítico si no se puede persistir
    }

    const t = content[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', t.meta.description)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
