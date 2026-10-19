import { adminNav } from "@/data/admin-navigation"
import type { AdminSection } from "@/types"
import AdminMark from "./AdminMark"

type AdminSidebarProps = {
  activeSection: AdminSection
  open: boolean
  pendingCount: number
  onNavigate: (section: AdminSection) => void
  onClose: () => void
}

export default function AdminSidebar({
  activeSection,
  open,
  pendingCount,
  onNavigate,
  onClose,
}: AdminSidebarProps) {
  return (
    <aside className={`admin-sidebar ${open ? "admin-sidebar-open" : ""}`}>
      <div className="admin-sidebar-top">
        <AdminMark />
        <button type="button" className="admin-mobile-close" onClick={onClose}>
          ×
        </button>
      </div>
      <nav aria-label="Navegação administrativa">
        <p>Menu principal</p>
        {adminNav.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
          >
            <span>0{index + 1}</span>
            {item.label}
            {item.id === "testimonials" && pendingCount > 0 && (
              <i>{pendingCount}</i>
            )}
          </button>
        ))}
      </nav>
      <div className="admin-profile">
        <span>JL</span>
        <div>
          <strong>Juliana Leslye</strong>
          <small>Administradora</small>
        </div>
        <a href="/" aria-label="Sair da área administrativa">
          ↗
        </a>
      </div>
    </aside>
  )
}
