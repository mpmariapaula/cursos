import type { ReactNode } from "react"

type ModalProps = {
  /** Define o estilo do painel: formulário administrativo ou inscrição pública. */
  variant: "admin" | "enrollment"
  eyebrow: string
  title: string
  titleId: string
  closeLabel: string
  onClose: () => void
  children: ReactNode
}

/** Janela modal com fundo, cabeçalho e botão de fechar. Fecha ao clicar fora. */
export default function Modal({
  variant,
  eyebrow,
  title,
  titleId,
  closeLabel,
  onClose,
  children,
}: ModalProps) {
  return (
    <div
      className="admin-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className={variant === "admin" ? "admin-modal" : "enrollment-modal"}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="admin-modal-header">
          <div>
            <p>{eyebrow}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label={closeLabel}>
            ×
          </button>
        </div>
        {children}
      </section>
    </div>
  )
}
