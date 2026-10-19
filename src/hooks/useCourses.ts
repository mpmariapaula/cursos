import { initialCourses } from "@/data/courses"
import { STORAGE_KEYS } from "@/lib/storage-keys"
import type { Course } from "@/types"
import { usePersistentState } from "./usePersistentState"

/** Lista de cursos persistida, com as ações de salvar (criar/editar) e publicar/despublicar. */
export function useCourses() {
  const [courses, setCourses] = usePersistentState<Course[]>(
    STORAGE_KEYS.courses,
    initialCourses,
  )

  const saveCourse = (course: Course) => {
    setCourses((items) => {
      const exists = items.some((item) => item.id === course.id)
      return exists
        ? items.map((item) => (item.id === course.id ? course : item))
        : [...items, course]
    })
  }

  const togglePublished = (id: number) => {
    setCourses((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "published" ? "draft" : "published",
            }
          : item,
      ),
    )
  }

  return { courses, saveCourse, togglePublished }
}
