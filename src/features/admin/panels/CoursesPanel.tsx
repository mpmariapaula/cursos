import StatusPill from "@/components/ui/StatusPill"
import type { Course } from "@/types"
import AdminHeader from "../components/AdminHeader"

export default function CoursesPanel({
  courses,
  openForm,
  editCourse,
  togglePublished,
}: {
  courses: Course[]
  openForm: () => void
  editCourse: (course: Course) => void
  togglePublished: (id: number) => void
}) {
  return (
    <>
      <AdminHeader
        eyebrow="Catálogo"
        title="Cursos"
        description="Cadastre e mantenha atualizadas as experiências presenciais."
        action={
          <button type="button" className="btn btn-rose" onClick={openForm}>
            + Novo curso
          </button>
        }
      />
      <div className="admin-card overflow-hidden">
        <div className="admin-toolbar">
          <div className="admin-search">
            <span>⌕</span>
            <input aria-label="Buscar cursos" placeholder="Buscar curso..." />
          </div>
          <select aria-label="Filtrar cursos">
            <option>Todos os status</option>
            <option>Publicado</option>
            <option>Rascunho</option>
          </select>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Formato</th>
                <th>Próxima turma</th>
                <th>Investimento</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="table-course">
                      <img src={course.image} alt="" />
                      <div>
                        <strong>{course.title}</strong>
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </td>
                  <td>Presencial</td>
                  <td>
                    <strong>{course.date}</strong>
                    <span>{course.location}</span>
                  </td>
                  <td>{course.price}</td>
                  <td>
                    <StatusPill
                      tone={
                        course.status === "published" ? "success" : "neutral"
                      }
                    >
                      {course.status === "published" ? "Publicado" : "Rascunho"}
                    </StatusPill>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="row-action"
                      onClick={() => editCourse(course)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="row-action"
                      onClick={() => togglePublished(course.id)}
                    >
                      {course.status === "draft" ? "Publicar" : "Despublicar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
