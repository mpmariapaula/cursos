import FormField from "@/components/ui/FormField"
import StatusPill from "@/components/ui/StatusPill"
import { adminContents, contentCategories } from "@/data/admin-contents"
import AdminHeader from "../components/AdminHeader"

export default function ContentPanel() {
  return (
    <>
      <AdminHeader
        eyebrow="Editorial"
        title="Conteúdos"
        description="Compartilhe repertório, bastidores e conhecimento no site."
        action={
          <button type="button" className="btn btn-rose">
            + Novo conteúdo
          </button>
        }
      />
      <div className="content-admin-grid">
        {adminContents.map(({ title, category, date, status, image }) => (
          <article className="content-admin-card" key={title}>
            <img src={image} alt="" />
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="content-category">{category}</span>
                <StatusPill
                  tone={status === "Publicado" ? "success" : "neutral"}
                >
                  {status}
                </StatusPill>
              </div>
              <h2>{title}</h2>
              <p>{date}</p>
              <button type="button" className="admin-text-button">
                Editar conteúdo
              </button>
            </div>
          </article>
        ))}
      </div>
      <section className="admin-card admin-form-preview">
        <div className="admin-card-heading">
          <div>
            <p>Campos do editor</p>
            <h2>Novo conteúdo</h2>
          </div>
        </div>
        <div className="form-grid">
          <FormField label="Título">
            <input placeholder="Título do conteúdo" />
          </FormField>
          <FormField label="Categoria">
            <select defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              {contentCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Imagem">
            <input type="file" className="file-input" />
          </FormField>
          <FormField label="Data">
            <input type="date" />
          </FormField>
          <FormField full label="Texto">
            <textarea rows={4} placeholder="Escreva o conteúdo..." />
          </FormField>
          <FormField label="Status">
            <select>
              <option>Rascunho</option>
              <option>Publicado</option>
            </select>
          </FormField>
          <div className="flex items-end justify-end">
            <button type="button" className="btn btn-dark">
              Salvar conteúdo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
