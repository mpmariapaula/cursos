export type AdminSection = "dashboard" | "home" | "courses" | "classes" | "students" | "content" | "testimonials" | "settings"

export type AdminNavItem = {
  id: AdminSection
  label: string
}

export type StatusTone = "success" | "warning" | "danger" | "neutral"

export type DashboardMetric = {
  label: string
  value: string
  note: string
}

export type UpcomingClass = {
  day: string
  month: string
  title: string
  place: string
  status: string
  tone: StatusTone
}

export type ClassRecord = {
  course: string
  date: string
  place: string
  /** Vagas ocupadas */
  occupied: number
  /** Total de vagas */
  capacity: number
  value: string
  status: string
  tone: StatusTone
}

export type ModerationStep = {
  number: string
  title: string
  note: string
}
