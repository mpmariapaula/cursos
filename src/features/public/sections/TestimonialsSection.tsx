import { testimonials } from "@/data/testimonials"

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-space bg-ink text-cream">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow eyebrow-light">Histórias reais</p>
            <h2 className="section-title max-w-xl">
              Quando a técnica encontra a confiança.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-cream/60 lg:justify-self-end">
            Profissionais que descobriram um novo jeito de olhar, criar e se
            posicionar através do corte.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/15 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-80 flex-col bg-ink-soft p-7 md:p-9"
            >
              <div
                className="mb-5 flex gap-1 text-rose"
                aria-label={`${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <span className="font-serif text-5xl leading-none text-rose">
                “
              </span>
              <blockquote className="mt-3 font-serif text-2xl leading-8 text-cream/95">
                {testimonial.quote}
              </blockquote>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="flex size-11 items-center justify-center rounded-full bg-rose text-xs font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs text-cream/50">
                    {testimonial.course} · {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
