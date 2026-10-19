export default function MethodSection() {
  return (
    <section className="section-space bg-sand">
      <div className="container-main grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[11rem]">
            <img
              src="https://images.unsplash.com/photo-1647462741268-e5724e5886c0?auto=format&fit=crop&w=1200&q=90"
              alt="Profissional observando cuidadosamente o cabelo durante um corte"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-2 max-w-56 rounded-2xl bg-cream p-5 shadow-soft md:right-8">
            <p className="font-serif text-xl italic leading-6">
              “Antes da tesoura, vem o olhar.”
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Mais que um curso</p>
          <h2 className="section-title max-w-xl">
            Você não aprende apenas a cortar. Você aprende a <em>enxergar</em> o
            cabelo.
          </h2>
          <p className="section-copy max-w-lg">
            Cada fio tem uma direção, cada pessoa tem uma história. Aqui,
            técnica e sensibilidade caminham juntas para que você faça escolhas
            com mais consciência.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-x-8 border-t border-ink/15 sm:grid-cols-3">
            {[
              "Técnica",
              "Percepção",
              "Segurança",
              "Criatividade",
              "Prática",
            ].map((item, index) => (
              <div key={item} className="border-b border-ink/15 py-5">
                <span className="mb-2 block text-[10px] font-bold text-rose">
                  0{index + 1}
                </span>
                <p className="font-serif text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
