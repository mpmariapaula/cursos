/** Depoimento já aprovado, exibido no site público. */
export type Testimonial = {
  quote: string
  name: string
  role: string
  course: string
  rating: number
  initials: string
}

export type TestimonialStatus = "pending" | "approved" | "rejected"

/** Depoimento na fila de moderação da área administrativa. */
export type AdminTestimonial = {
  id: number
  name: string
  course: string
  rating: number
  text: string
  date: string
  initials: string
  status: TestimonialStatus
}
