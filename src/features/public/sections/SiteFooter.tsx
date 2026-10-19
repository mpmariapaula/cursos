import { ArrowRight } from "@/components/icons"
import Logo from "@/components/ui/Logo"

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-main py-14 md:py-20">
        <div className="grid gap-12 border-b border-cream/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-6 text-cream/55">
              Educação em cortes para quem acredita que técnica e sensibilidade
              podem transformar uma carreira.
            </p>
          </div>
          <div>
            <p className="footer-title">Navegue</p>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#inicio" className="footer-link">
                Início
              </a>
              <a href="#cursos" className="footer-link">
                Cursos
              </a>
              <a href="#sobre" className="footer-link">
                Sobre
              </a>
              <a href="#depoimentos" className="footer-link">
                Depoimentos
              </a>
            </div>
          </div>
          <div>
            <p className="footer-title">Contato</p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/lessbeautyeco/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <a href="https://wa.me/5500000000000" className="footer-link">
                WhatsApp
              </a>
              <a href="mailto:oi@lessbeauty.com.br" className="footer-link">
                E-mail
              </a>
            </div>
          </div>
          <div>
            <p className="footer-title">Novidades com beleza e conteúdo.</p>
            <a
              href="mailto:oi@lessbeauty.com.br?subject=Quero receber novidades"
              className="mt-5 flex items-center justify-between border-b border-cream/30 py-3 text-sm text-cream/65 transition hover:border-cream hover:text-cream"
            >
              Quero receber novidades <ArrowRight />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Less Beauty. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#inicio" className="hover:text-cream">
              Política de privacidade
            </a>
            <a href="#inicio" className="hover:text-cream">
              Termos de uso
            </a>
            <a href="?area=admin" className="hover:text-cream">
              Área administrativa
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
