import StatusPill from "@/components/ui/StatusPill"
import type { Enrollment } from "@/types"
import AdminHeader from "../components/AdminHeader"

export default function StudentsPanel({
  enrollments,
}: {
  enrollments: Enrollment[]
}) {
  return (
    <>
      <AdminHeader
        eyebrow="Relacionamento"
        title="Alunos e inscrições"
        description="Visualize e acompanhe as inscrições nos encontros presenciais."
        action={
          <button type="button" className="btn btn-outline">
            Exportar lista
          </button>
        }
      />
      <div className="admin-card overflow-hidden">
        <div className="admin-toolbar">
          <div className="admin-search">
            <span>⌕</span>
            <input
              aria-label="Buscar inscrição"
              placeholder="Buscar por nome, curso ou e-mail..."
            />
          </div>
          <select aria-label="Filtrar inscrições">
            <option>Todas as inscrições</option>
            <option>Confirmadas</option>
            <option>Pendentes</option>
          </select>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Curso / turma</th>
                <th>Inscrição</th>
                <th>WhatsApp</th>
                <th>E-mail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map(
                ({
                  id,
                  name,
                  course,
                  className,
                  date,
                  phone,
                  email,
                  status,
                }) => (
                  <tr key={id}>
                    <td>
                      <strong>{name}</strong>
                    </td>
                    <td>
                      <strong>{course}</strong>
                      <span>{className}</span>
                    </td>
                    <td>{date}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>
                      <StatusPill
                        tone={status === "Confirmada" ? "success" : "warning"}
                      >
                        {status}
                      </StatusPill>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
