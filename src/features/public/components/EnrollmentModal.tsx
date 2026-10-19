import { useState, type FormEvent } from "react"
import { ArrowRight } from "@/components/icons"
import FormField from "@/components/ui/FormField"
import Modal from "@/components/ui/Modal"
import type { Course, NewEnrollment } from "@/types"

type EnrollmentModalProps = {
  course: Course
  onSubmit: (enrollment: NewEnrollment) => void
  onClose: () => void
}

export default function EnrollmentModal({
  course,
  onSubmit,
  onClose,
}: EnrollmentModalProps) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSubmit({
      name: String(data.get("name")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      courseId: course.id,
      course: course.title,
      className: `${course.date} · ${course.location}`,
    })
    setSent(true)
  }

  return (
    <Modal
      variant="enrollment"
      eyebrow="Inscrição presencial"
      title={course.title}
      titleId="enrollment-title"
      closeLabel="Fechar inscrição"
      onClose={onClose}
    >
      {sent ? (
        <div className="enrollment-success">
          <span>✓</span>
          <h3>Inscrição recebida!</h3>
          <p>
            A equipe entrará em contato pelo WhatsApp para confirmar sua vaga e
            enviar os próximos passos.
          </p>
          <button type="button" className="btn btn-dark" onClick={onClose}>
            Concluir
          </button>
        </div>
      ) : (
        <>
          <div className="enrollment-summary">
            <span>{course.date}</span>
            <span>{course.time}</span>
            <span>{course.location}</span>
            <strong>{course.price}</strong>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <FormField full label="Nome completo" htmlFor="enrollment-name">
              <input id="enrollment-name" name="name" required />
            </FormField>
            <FormField label="E-mail" htmlFor="enrollment-email">
              <input id="enrollment-email" name="email" type="email" required />
            </FormField>
            <FormField label="WhatsApp" htmlFor="enrollment-phone">
              <input id="enrollment-phone" name="phone" required />
            </FormField>
            <div className="field-full flex items-center justify-between gap-4">
              <p className="text-xs leading-5 text-ink-muted">
                Sua vaga será reservada após a confirmação da equipe.
              </p>
              <button type="submit" className="btn btn-rose">
                Enviar inscrição <ArrowRight />
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}
