export type EnrollmentStatus = "Pendente" | "Confirmada"

export type Enrollment = {
  id: number
  name: string
  courseId: number
  course: string
  className: string
  date: string
  phone: string
  email: string
  status: EnrollmentStatus
}

/** Dados enviados pelo formulário público; id, data e status são gerados ao salvar. */
export type NewEnrollment = Omit<Enrollment, "id" | "date" | "status">
