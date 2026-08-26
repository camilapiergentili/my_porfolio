export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center">
        <p
          style={{ color: "var(--text-muted)", fontSize: "13px", fontFamily: "var(--font-mono)" }}
        >
          // gracias por pasar por aquí
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
          © 2025 Camila Piergentili. Backend Developer.
        </p>
      </div>
    </footer>
  )
}
