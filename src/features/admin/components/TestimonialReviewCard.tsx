import type { AdminTestimonial, TestimonialStatus } from "@/types"

type TestimonialReviewCardProps = {
  item: AdminTestimonial
  /** Aba em que o card está sendo exibido; define quais ações aparecem. */
  currentTab: TestimonialStatus
  onUpdateStatus: (id: number, status: TestimonialStatus) => void
}

export default function TestimonialReviewCard({
  item,
  currentTab,
  onUpdateStatus,
}: TestimonialReviewCardProps) {
  return (
    <article className="testimonial-admin-card">
      <div className="testimonial-person">
        <span>{item.initials}</span>
        <div>
          <strong>{item.name}</strong>
          <p>
            {item.course} · Enviado em {item.date}
          </p>
        </div>
      </div>
      <div
        className="testimonial-rating"
        aria-label={`${item.rating} de 5 estrelas`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span className={index < item.rating ? "filled" : ""} key={index}>
            ★
          </span>
        ))}
      </div>
      <blockquote>“{item.text}”</blockquote>
      <div className="testimonial-actions">
        <button type="button" className="btn btn-outline">
          Visualizar
        </button>
        {currentTab !== "approved" && (
          <button
            type="button"
            className="btn admin-approve"
            onClick={() => onUpdateStatus(item.id, "approved")}
          >
            Aprovar
          </button>
        )}
        {currentTab !== "rejected" && (
          <button
            type="button"
            className="btn admin-reject"
            onClick={() => onUpdateStatus(item.id, "rejected")}
          >
            Recusar
          </button>
        )}
      </div>
    </article>
  )
}
