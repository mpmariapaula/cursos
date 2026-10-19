import SectionIntro from "@/components/ui/SectionIntro"
import { practiceItems } from "@/data/practice-items"

export default function PracticeSection() {
  return (
    <section className="section-space bg-warm-white">
      <div className="container-main">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Aprenda na prática"
            title="Conhecimento que passa pelas mãos."
          />
          <p className="max-w-lg text-base leading-7 text-ink-muted lg:justify-self-end">
            Uma jornada completa para você dominar os fundamentos, refinar o
            olhar e encontrar sua própria forma de criar.
          </p>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {practiceItems.map((item) => (
            <article key={item.title} className="practice-card group">
              <div className="practice-image">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: item.position }}
                />
                <span className="practice-number">{item.number}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
