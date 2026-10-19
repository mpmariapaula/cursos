import { useState, type FormEvent } from "react"
import FormField from "@/components/ui/FormField"
import StatusPill from "@/components/ui/StatusPill"
import type { HomeContent } from "@/types"
import AdminHeader from "../components/AdminHeader"

type HomePanelProps = {
  content: HomeContent
  save: (content: HomeContent) => void
}

export default function HomePanel({ content, save }: HomePanelProps) {
  const [saved, setSaved] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    save({
      heroEyebrow: String(data.get("heroEyebrow")),
      heroTitle: String(data.get("heroTitle")),
      heroDescription: String(data.get("heroDescription")),
      aboutTitle: String(data.get("aboutTitle")),
      aboutText: String(data.get("aboutText")),
      ctaTitle: String(data.get("ctaTitle")),
      ctaText: String(data.get("ctaText")),
    })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  return (
    <>
      <AdminHeader
        eyebrow="Gestão do site"
        title="Página inicial"
        description="Edite os principais textos que aparecem na home pública."
        action={
          saved ? (
            <StatusPill tone="success">Alterações salvas</StatusPill>
          ) : null
        }
      />
      <form className="admin-card home-editor" onSubmit={handleSubmit}>
        <div className="admin-card-heading">
          <div>
            <p>Seção de abertura</p>
            <h2>Hero</h2>
          </div>
        </div>
        <div className="form-grid">
          <FormField full label="Chamada superior" htmlFor="home-eyebrow">
            <input
              id="home-eyebrow"
              name="heroEyebrow"
              defaultValue={content.heroEyebrow}
              required
            />
          </FormField>
          <FormField full label="Título principal" htmlFor="home-title">
            <textarea
              id="home-title"
              name="heroTitle"
              rows={2}
              defaultValue={content.heroTitle}
              required
            />
          </FormField>
          <FormField full label="Descrição" htmlFor="home-description">
            <textarea
              id="home-description"
              name="heroDescription"
              rows={3}
              defaultValue={content.heroDescription}
              required
            />
          </FormField>
        </div>
        <div className="admin-card-heading">
          <div>
            <p>Apresentação</p>
            <h2>Sobre Juliana</h2>
          </div>
        </div>
        <div className="form-grid">
          <FormField full label="Título" htmlFor="about-title">
            <input
              id="about-title"
              name="aboutTitle"
              defaultValue={content.aboutTitle}
              required
            />
          </FormField>
          <FormField full label="Texto" htmlFor="about-text">
            <textarea
              id="about-text"
              name="aboutText"
              rows={4}
              defaultValue={content.aboutText}
              required
            />
          </FormField>
        </div>
        <div className="admin-card-heading">
          <div>
            <p>Encerramento</p>
            <h2>Chamada final</h2>
          </div>
        </div>
        <div className="form-grid">
          <FormField label="Título" htmlFor="cta-title">
            <input
              id="cta-title"
              name="ctaTitle"
              defaultValue={content.ctaTitle}
              required
            />
          </FormField>
          <FormField label="Descrição" htmlFor="cta-text">
            <input
              id="cta-text"
              name="ctaText"
              defaultValue={content.ctaText}
              required
            />
          </FormField>
          <div className="field-full flex justify-end">
            <button type="submit" className="btn btn-rose">
              Salvar página inicial
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
