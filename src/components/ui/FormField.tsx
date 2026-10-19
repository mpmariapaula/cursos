import type { ReactNode } from "react"

type FormFieldProps = {
  label: ReactNode
  htmlFor?: string
  /** Ocupa a largura inteira do `form-grid`. */
  full?: boolean
  children: ReactNode
}

/** Rótulo + controle de formulário (input, select ou textarea). */
export default function FormField({
  label,
  htmlFor,
  full = false,
  children,
}: FormFieldProps) {
  return (
    <div className={full ? "field-group field-full" : "field-group"}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
}
