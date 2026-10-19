import { ArrowRight } from "@/components/icons"
import type { HomeContent } from "@/types"

export default function AboutSection({
  homeContent,
}: {
  homeContent: HomeContent
}) {
  return (
    <section id="sobre" className="section-space bg-warm-white">
      <div className="container-main grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Sobre a profissional</p>
          <h2 className="section-title">{homeContent.aboutTitle}</h2>
          <div className="mt-7 space-y-4 text-base leading-7 text-ink-muted">
            <p>{homeContent.aboutText}</p>
            <p>
              Sua paixão é ensinar pessoas a entender o cabelo de verdade —
              respeitando sua textura, movimento e a identidade de quem o usa.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#conteudos" className="btn btn-dark">
              Conheça minha história <ArrowRight />
            </a>
            <span className="signature">Less</span>
          </div>
        </div>

        <div className="order-1 grid grid-cols-[0.28fr_0.72fr] items-end gap-4 lg:order-2">
          <div className="mb-10 aspect-[2/5] overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1624981015149-e01395f1d774?auto=format&fit=crop&w=500&q=85"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-[9rem_9rem_1rem_1rem]">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=90"
              alt="Retrato da professora Juliana Leslye"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
