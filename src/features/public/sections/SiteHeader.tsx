import { useState } from "react"
import { ArrowRight, ArrowUpRight, MenuIcon } from "@/components/icons"
import Logo from "@/components/ui/Logo"
import { siteNavLinks } from "@/data/site-navigation"

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container-main flex h-20 items-center justify-between lg:h-24">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {siteNavLinks.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <a href="#cursos" className="btn btn-dark hidden lg:inline-flex">
          Quero aprender <ArrowUpRight />
        </a>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu lg:hidden ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav
          className="container-main flex flex-col gap-1 py-5"
          aria-label="Navegação móvel"
        >
          {siteNavLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="mobile-link"
            >
              {label}
              <ArrowRight />
            </a>
          ))}
          <a
            href="#cursos"
            onClick={closeMenu}
            className="btn btn-rose mt-4 justify-center"
          >
            Quero aprender <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  )
}
