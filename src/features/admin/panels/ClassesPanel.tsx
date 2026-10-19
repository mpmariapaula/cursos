import StatusPill from "@/components/ui/StatusPill"
import { adminClasses } from "@/data/admin-classes"
import AdminHeader from "../components/AdminHeader"

export default function ClassesPanel() {
  return (
    <>
      <AdminHeader
        eyebrow="Agenda presencial"
        title="Turmas"
        description="Organize datas, locais, vagas e o andamento de cada encontro."
        action={
          <button type="button" className="btn btn-rose">
            + Nova turma
          </button>
        }
      />
      <div className="admin-summary-row">
        <div>
          <span>Próximas turmas</span>
          <strong>05</strong>
        </div>
        <div>
          <span>Inscrições abertas</span>
          <strong>03</strong>
        </div>
        <div>
          <span>Vagas disponíveis</span>
          <strong>18</strong>
        </div>
      </div>
      <div className="admin-card overflow-hidden">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Data e horário</th>
                <th>Local</th>
                <th>Ocupação</th>
                <th>Valor</th>
                <th>Status da turma</th>
              </tr>
            </thead>
            <tbody>
              {adminClasses.map(
                ({
                  course,
                  date,
                  place,
                  occupied,
                  capacity,
                  value,
                  status,
                  tone,
                }) => (
                  <tr key={`${course}-${date}`}>
                    <td>
                      <strong>{course}</strong>
                      <span>Presencial</span>
                    </td>
                    <td>{date}</td>
                    <td>{place}</td>
                    <td>
                      <span className="occupancy">
                        <i
                          style={{ width: `${(occupied / capacity) * 100}%` }}
                        />
                      </span>
                      <small>
                        {occupied} / {capacity} vagas
                      </small>
                    </td>
                    <td>{value}</td>
                    <td>
                      <StatusPill tone={tone}>{status}</StatusPill>
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
