import type { ReactNode } from "react"
import type { StatusTone } from "@/types"

type StatusPillProps = {
  children: ReactNode
  tone?: StatusTone
}

export default function StatusPill({
  children,
  tone = "neutral",
}: StatusPillProps) {
  return <span className={`status-pill status-${tone}`}>{children}</span>
}
