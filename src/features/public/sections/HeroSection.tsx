import { ArrowRight } from "@/components/icons"
import type { HomeContent } from "@/types"

export default function HeroSection({
  homeContent,
}: {
  homeContent: HomeContent
}) {
  return (
    <section id="inicio" className="hero-section">
      <div className="container-main grid items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">{homeContent.heroEyebrow}</p>
          <h1 className="hero-title">{homeContent.heroTitle}</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-ink-muted md:text-lg md:leading-8">
            {homeContent.heroDescription}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cursos"
              className="btn btn-rose justify-center sm:justify-start"
            >
              Conhecer os cursos <ArrowRight />
            </a>
            <a
              href="#sobre"
              className="btn btn-outline justify-center sm:justify-start"
            >
              Conhecer a profissional
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5 border-t border-ink/10 pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              {["bg-caramel", "bg-rose", "bg-sand-dark"].map((color, index) => (
                <span
                  key={color}
                  className={`flex size-9 items-center justify-center rounded-full border-2 border-cream ${color} text-[10px] text-white`}
                >
                  {["L", "M", "T"][index]}
                </span>
              ))}
            </div>
            <p className="text-sm leading-5 text-ink-muted">
              <strong className="font-semibold text-ink">
                Encontros em pequenos grupos
              </strong>
              <br />
              prática próxima e acompanhamento real
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <figure className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?auto=format&fit=crop&w=1400&q=90"
              alt="Profissional cortando o cabelo de uma cliente em um ambiente real de salão"
              className="h-full w-full object-cover"
            />
            <figcaption className="image-note">
              <span className="note-line" />
              Técnica com intenção
              <br />e olhar sensível
            </figcaption>
          </figure>
          <div className="hero-stamp" aria-hidden="true">
            <span>VER · ENTENDER · CRIAR ·</span>
            <strong>✦</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
