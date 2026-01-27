export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-stone-200"
      style={{
        background: `
          linear-gradient(
            to right,
            rgba(180, 180, 180, 0.4),
            #8897aa
          )
        `
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p>© 2025 Camila Piergentili. Backend Developer.</p>
      </div>
    </footer>
  )
}
