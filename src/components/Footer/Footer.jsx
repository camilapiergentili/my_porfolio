import { useTranslation } from '../../i18n/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
