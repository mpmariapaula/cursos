import AdminApp from "@/features/admin/AdminApp"
import PublicSite from "@/features/public/PublicSite"
import { initialHomeContent } from "@/data/home-content"
import { useCourses } from "@/hooks/useCourses"
import { useEnrollments } from "@/hooks/useEnrollments"
import { usePersistentState } from "@/hooks/usePersistentState"
import { isAdminArea } from "@/lib/routing"
import { STORAGE_KEYS } from "@/lib/storage-keys"
import type { HomeContent } from "@/types"

export default function App() {
  const { courses = [], saveCourse, togglePublished } = useCourses()
  const { enrollments = [], addEnrollment } = useEnrollments()
  const [homeContent, setHomeContent] = usePersistentState<HomeContent>(
    STORAGE_KEYS.homeContent,
    initialHomeContent,
  )

  const isNavigatingAdmin = typeof isAdminArea === 'function' ? isAdminArea() : false

  if (isNavigatingAdmin) {
    return (
      <AdminApp
        courses={courses}
        saveCourse={saveCourse}
        togglePublished={togglePublished}
        enrollments={enrollments}
        homeContent={homeContent}
        setHomeContent={setHomeContent}
      />
    )
  }

  return (
    <PublicSite
      courses={courses}
      homeContent={homeContent}
      addEnrollment={addEnrollment}
    />
  )
}
