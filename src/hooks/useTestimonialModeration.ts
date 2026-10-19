import { useState } from "react"
import { adminTestimonials } from "@/data/admin-testimonials"
import type { TestimonialStatus } from "@/types"

/** Fila de moderação de depoimentos (aprovar / recusar) e contagem de pendentes. */
export function useTestimonialModeration() {
  const [items, setItems] = useState(adminTestimonials)

  const updateStatus = (id: number, status: TestimonialStatus) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    )
  }

  const pendingCount = items.filter((item) => item.status === "pending").length

  return { items, updateStatus, pendingCount }
}
