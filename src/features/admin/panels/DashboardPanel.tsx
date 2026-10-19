import { ArrowRight } from "@/components/icons"
import StatusPill from "@/components/ui/StatusPill"
import {
  buildDashboardMetrics,
  moderationSteps,
  upcomingClasses,
} from "@/data/admin-dashboard"
import AdminHeader from "../components/AdminHeader"

type DashboardPanelProps = {
  pendingCount: number
  goToTestimonials: () => void
}

export default function DashboardPanel({
  pendingCount,
  goToTestimonials,
}: DashboardPanelProps) {
  const metrics = buildDashboardMetrics(pendingCount)

  return (
    <>
      <AdminHeader
        eyebrow="Visão geral"
        title="Bom dia, Juliana."
        description="Acompanhe o que está acontecendo nos seus cursos presenciais."
      />
      {pendingCount > 0 && (
        <button
          className="admin-alert"
          type="button"
          onClick={goToTestimonials}
        >
          <span className="alert-dot" />
          <div>
            <strong>{pendingCount} depoimentos aguardando aprovação</strong>
            <p>Revise os novos relatos antes de publicá-los no site.</p>
          </div>
          <ArrowRight />
        </button>
      )}
      <div className="metric-grid">
        {metrics.map(({ label, value, note }, index) => (
          <article className="metric-card" key={label}>
            <span>0{index + 1}</span>
            <strong>{value}</strong>
            <h2>{label}</h2>
            <p>{note}</p>
          </article>
        ))}
      </div>
      <div className="admin-dashboard-grid">
        <section className="admin-card">
          <div className="admin-card-heading">
            <div>
              <p>Agenda</p>
              <h2>Próximas turmas</h2>
            </div>
            <button type="button" className="admin-text-button">
              Ver todas
            </button>
          </div>
          <div className="class-list">
            {upcomingClasses.map(
              ({ day, month, title, place, status, tone }) => (
                <div className="class-row" key={`${day}-${title}`}>
                  <div className="date-block">
                    <strong>{day}</strong>
                    <span>{month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong>{title}</strong>
                    <p>{place}</p>
                  </div>
                  <StatusPill tone={tone}>{status}</StatusPill>
                </div>
              ),
            )}
          </div>
        </section>
        <section className="admin-card">
          <div className="admin-card-heading">
            <div>
              <p>Moderação</p>
              <h2>Fluxo dos depoimentos</h2>
            </div>
          </div>
          <div className="moderation-flow">
            {moderationSteps.map(({ number, title, note }, index) => (
              <div className="moderation-step" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{note}</p>
                </div>
                {index < moderationSteps.length - 1 && <i aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
