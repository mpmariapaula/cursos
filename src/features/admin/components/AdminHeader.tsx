import type { ReactNode } from "react"

type AdminHeaderProps = {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export default function AdminHeader({
  eyebrow,
  title,
  description,
  action,
}: AdminHeaderProps) {
  return (
    <div className="admin-page-header">
      <div>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      {action}
    </div>
  )
}
