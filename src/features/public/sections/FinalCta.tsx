import { ArrowUpRight } from "@/components/icons"
import type { HomeContent } from "@/types"

export default function FinalCta({
  homeContent,
}: {
  homeContent: HomeContent
}) {
  return (
    <section id="cta-final" className="bg-rose text-white">
      <div className="container-main relative flex min-h-[32rem] flex-col items-center justify-center overflow-hidden py-24 text-center">
        <div className="cta-line cta-line-left" aria-hidden="true" />
        <div className="cta-line cta-line-right" aria-hidden="true" />
        <p className="eyebrow text-white/70">Sua jornada começa agora</p>
        <h2 className="relative z-10 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl">
          {homeContent.ctaTitle}
        </h2>
        <p className="relative z-10 mt-6 max-w-xl text-base leading-7 text-white/75">
          {homeContent.ctaText}
        </p>
        <a href="#cursos" className="btn mt-9 bg-cream text-ink hover:bg-white">
          Começar agora <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}
