import { useState } from "react"
import type { AdminTestimonial, TestimonialStatus } from "@/types"
import AdminHeader from "../components/AdminHeader"
import TestimonialReviewCard from "../components/TestimonialReviewCard"

type TestimonialsPanelProps = {
  items: AdminTestimonial[]
  updateStatus: (id: number, status: TestimonialStatus) => void
}

const tabLabels: Record<TestimonialStatus, string> = {
  pending: "Aguardando aprovação",
  approved: "Aprovados",
  rejected: "Recusados",
}

export default function TestimonialsPanel({
  items,
  updateStatus,
}: TestimonialsPanelProps) {
  const [tab, setTab] = useState<TestimonialStatus>("pending")
  const filtered = items.filter((item) => item.status === tab)

  return (
    <>
      <AdminHeader
        eyebrow="Moderação"
        title="Depoimentos"
        description="Somente depoimentos aprovados ficam visíveis no site público."
      />
      <div className="admin-tabs">
        {(Object.keys(tabLabels) as TestimonialStatus[]).map((status) => (
          <button
            type="button"
            key={status}
            onClick={() => setTab(status)}
            className={tab === status ? "active" : ""}
          >
            {tabLabels[status]}{" "}
            <span>{items.filter((item) => item.status === status).length}</span>
          </button>
        ))}
      </div>
      <div className="testimonial-admin-list">
        {filtered.map((item) => (
          <TestimonialReviewCard
            key={item.id}
            item={item}
            currentTab={tab}
            onUpdateStatus={updateStatus}
          />
        ))}
      </div>
      <div className="moderation-note">
        <strong>Regra de publicação</strong>
        <p>
          Um novo depoimento sempre entra como “Aguardando aprovação”. Apenas a
          ação manual de aprovar faz com que ele seja exibido no site público.
        </p>
      </div>
    </>
  )
}
