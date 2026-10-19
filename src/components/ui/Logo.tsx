export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`logo group ${light ? "text-cream" : "text-ink"}`}
      aria-label="Less Beauty — página inicial"
    >
      <span className="logo-main">LESS</span>
      <span className="logo-sub">beauty · educação</span>
    </a>
  )
}
