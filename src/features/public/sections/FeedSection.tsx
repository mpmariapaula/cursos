import { Instagram } from "@/components/icons"
import SectionIntro from "@/components/ui/SectionIntro"
import { feedImages } from "@/data/feed-images"

export default function FeedSection() {
  return (
    <section id="conteudos" className="section-space bg-warm-white">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Diário de criação"
            title="Beleza também se aprende todos os dias."
          />
          <a
            href="https://www.instagram.com/lessbeautyeco/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Instagram /> Ver mais conteúdos
          </a>
        </div>
        <div className="feed-grid mt-14">
          {feedImages.map((image, index) => (
            <a
              key={image.src}
              href="https://www.instagram.com/lessbeautyeco/"
              target="_blank"
              rel="noreferrer"
              className={`feed-item feed-item-${index + 1} group`}
              aria-label="Ver conteúdo no Instagram"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="feed-overlay">
                <Instagram className="size-6" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
