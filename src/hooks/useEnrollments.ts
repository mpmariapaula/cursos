import { initialEnrollments } from "@/data/enrollments"
import { STORAGE_KEYS } from "@/lib/storage-keys"
import type { Enrollment, NewEnrollment } from "@/types"
import { usePersistentState } from "./usePersistentState"

/** Lista de inscrições persistida e a ação de registrar uma nova inscrição. */
export function useEnrollments() {
  const [enrollments, setEnrollments] = usePersistentState<Enrollment[]>(
    STORAGE_KEYS.enrollments,
    initialEnrollments,
  )

  const addEnrollment = (enrollment: NewEnrollment) => {
    setEnrollments((items) => [
      {
        ...enrollment,
        id: Date.now(),
        date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
        status: "Pendente",
      },
      ...items,
    ])
  }

  return { enrollments, addEnrollment }
}
