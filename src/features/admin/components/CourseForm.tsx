import type { FormEvent } from "react"
import FormField from "@/components/ui/FormField"
import Modal from "@/components/ui/Modal"
import { DEFAULT_COURSE_IMAGE } from "@/data/courses"
import type { Course, CourseStatus } from "@/types"

type CourseFormProps = {
  /** Curso em edição; `null` para cadastrar um novo. */
  course: Course | null
  save: (course: Course) => void
  close: () => void
}

export default function CourseForm({ course, save, close }: CourseFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    save({
      id: course?.id ?? Date.now(),
      title: String(data.get("title")),
      description: String(data.get("description")),
      level: String(data.get("level")),
      duration: String(data.get("duration")),
      date: String(data.get("date")),
      time: String(data.get("time")),
      location: String(data.get("location")),
      price: String(data.get("price")),
      vacancies: `${String(data.get("capacity"))} vagas`,
      capacity: Number(data.get("capacity")),
      learn: String(data.get("learn"))
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      image: String(data.get("image")) || course?.image || DEFAULT_COURSE_IMAGE,
      position: course?.position ?? "center",
      status: data.get("status") as CourseStatus,
      enrollmentOpen: data.get("enrollmentOpen") === "on",
    })
    close()
  }

  return (
    <Modal
      variant="admin"
      eyebrow={course ? "Editar cadastro" : "Novo cadastro"}
      title={course ? "Editar curso presencial" : "Adicionar curso presencial"}
      titleId="new-course-title"
      closeLabel="Fechar formulário"
      onClose={close}
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <FormField full label="Nome do curso" htmlFor="course-name">
          <input
            id="course-name"
            name="title"
            defaultValue={course?.title}
            required
            placeholder="Ex.: Essência do Corte"
          />
        </FormField>
        <FormField full label="Descrição" htmlFor="course-description">
          <textarea
            id="course-description"
            name="description"
            defaultValue={course?.description}
            required
            rows={3}
            placeholder="Apresente a proposta do encontro..."
          />
        </FormField>
        <FormField full label="Conteúdo programático" htmlFor="course-program">
          <textarea
            id="course-program"
            name="learn"
            defaultValue={course?.learn.join("\n")}
            required
            rows={4}
            placeholder="Liste os principais tópicos e práticas..."
          />
        </FormField>
        <FormField label="Duração" htmlFor="course-duration">
          <input
            id="course-duration"
            name="duration"
            defaultValue={course?.duration}
            required
            placeholder="Ex.: 8 horas"
          />
        </FormField>
        <FormField label="Investimento" htmlFor="course-price">
          <input
            id="course-price"
            name="price"
            defaultValue={course?.price}
            required
            placeholder="R$ 0,00"
          />
        </FormField>
        <FormField label="Local" htmlFor="course-location">
          <input
            id="course-location"
            name="location"
            defaultValue={course?.location}
            required
            placeholder="Cidade · UF"
          />
        </FormField>
        <FormField label="URL da imagem" htmlFor="course-image">
          <input
            id="course-image"
            name="image"
            type="url"
            defaultValue={course?.image}
            placeholder="https://..."
          />
        </FormField>
        <FormField label="Nível" htmlFor="course-level">
          <input
            id="course-level"
            name="level"
            defaultValue={course?.level}
            required
            placeholder="Iniciante"
          />
        </FormField>
        <FormField label="Data" htmlFor="course-date">
          <input
            id="course-date"
            name="date"
            defaultValue={course?.date}
            required
            placeholder="24 de maio"
          />
        </FormField>
        <FormField label="Horário" htmlFor="course-time">
          <input
            id="course-time"
            name="time"
            defaultValue={course?.time}
            required
            placeholder="09h às 18h"
          />
        </FormField>
        <FormField label="Total de vagas" htmlFor="course-capacity">
          <input
            id="course-capacity"
            name="capacity"
            type="number"
            min="1"
            defaultValue={course?.capacity ?? 10}
            required
          />
        </FormField>
        <FormField label="Status" htmlFor="course-status">
          <select
            id="course-status"
            name="status"
            defaultValue={course?.status ?? "draft"}
          >
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
          </select>
        </FormField>
        <label className="admin-checkbox field-full">
          <input
            type="checkbox"
            name="enrollmentOpen"
            defaultChecked={course?.enrollmentOpen ?? true}
          />
          <span>
            <strong>Inscrições abertas</strong>
            <small>Exibe o botão de inscrição na página pública.</small>
          </span>
        </label>
        <div className="flex items-end justify-end gap-3">
          <button type="button" className="btn btn-outline" onClick={close}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-rose">
            Salvar curso
          </button>
        </div>
      </form>
    </Modal>
  )
}
