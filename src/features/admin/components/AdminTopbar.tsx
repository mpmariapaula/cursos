import { ArrowUpRight } from "@/components/icons"

export default function AdminTopbar({
  pendingCount,
}: {
  pendingCount: number
}) {
  return (
    <div className="admin-topbar">
      <div>
        <span className="admin-live-dot" /> Site publicado
      </div>
      <div className="admin-top-actions">
        <a href="/" target="_blank">
          Ver site <ArrowUpRight />
        </a>
        <button type="button" aria-label="Notificações">
          ○<i>{pendingCount}</i>
        </button>
      </div>
    </div>
  )
}
