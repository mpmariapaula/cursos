import { useState, type FormEvent } from "react"
import { ArrowRight } from "@/components/icons"
import FormField from "@/components/ui/FormField"
import type { Course } from "@/types"

const approvalSteps = ["Você envia", "Juliana analisa", "Aprovado e publicado"]
const ratings = [1, 2, 3, 4, 5]

export default function TestimonialFormSection({
  courses,
}: {
  courses: Course[]
}) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section-space bg-sand">
      <div className="container-main grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="eyebrow">Sua voz faz parte</p>
          <h2 className="section-title">Compartilhe sua experiência.</h2>
          <p className="section-copy max-w-md">
            Se você já viveu um curso presencial com Juliana, conte como essa
            experiência transformou o seu olhar e a sua prática.
          </p>
          <div className="mt-9 rounded-2xl border border-ink/10 bg-cream/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">
              Como funciona
            </p>
            <div className="testimonial-flow mt-5">
              {approvalSteps.map((step, index) => (
                <div key={step} className="flow-step">
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-ink-muted">
              Todo depoimento passa por aprovação. Conteúdos recusados ou
              pendentes nunca aparecem no site.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-warm-white p-6 shadow-soft md:p-10">
          {sent ? (
            <div className="flex min-h-[30rem] flex-col items-center justify-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-rose text-xl text-white">
                ✓
              </span>
              <h3 className="mt-6 font-serif text-3xl">
                Obrigada por compartilhar sua experiência!
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-ink-muted">
                Seu depoimento será analisado antes de ser publicado.
              </p>
              <button
                type="button"
                className="btn btn-outline mt-7"
                onClick={() => setSent(false)}
              >
                Enviar outro depoimento
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid">
              <FormField label="Nome" htmlFor="testimonial-name">
                <input
                  id="testimonial-name"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                />
              </FormField>
              <FormField label="Curso realizado" htmlFor="testimonial-course">
                <select
                  id="testimonial-course"
                  name="course"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione o curso
                  </option>
                  {courses.map((course) => (
                    <option key={course.id}>{course.title}</option>
                  ))}
                </select>
              </FormField>
              <FormField
                full
                label={
                  <>
                    Foto <span>(opcional)</span>
                  </>
                }
                htmlFor="testimonial-photo"
              >
                <input
                  id="testimonial-photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="file-input"
                />
              </FormField>
              <fieldset className="field-group field-full">
                <legend>Avaliação</legend>
                <div className="rating-options">
                  {ratings.map((rating) => (
                    <label key={rating}>
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        required={rating === 1}
                      />
                      <span>{rating} ★</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <FormField full label="Depoimento" htmlFor="testimonial-text">
                <textarea
                  id="testimonial-text"
                  name="testimonial"
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre a sua experiência..."
                />
              </FormField>
              <div className="field-full flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-ink-muted">
                  Ao enviar, seu depoimento ficará com o status “Aguardando
                  aprovação”.
                </p>
                <button type="submit" className="btn btn-rose">
                  Enviar depoimento <ArrowRight />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
