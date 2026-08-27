import { createContext } from 'react'
import es from '../data/content/es'
import en from '../data/content/en'

export const content = { es, en }
export const LanguageContext = createContext(null)
