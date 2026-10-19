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
  const { courses, saveCourse, togglePublished } = useCourses()
  const { enrollments, addEnrollment } = useEnrollments()
  const [homeContent, setHomeContent] = usePersistentState<HomeContent>(
    STORAGE_KEYS.homeContent,
    initialHomeContent,
  )

  return isAdminArea() ? (
    <AdminApp
      courses={courses}
      saveCourse={saveCourse}
      togglePublished={togglePublished}
      enrollments={enrollments}
      homeContent={homeContent}
      setHomeContent={setHomeContent}
    />
  ) : (
    <PublicSite
      courses={courses}
      homeContent={homeContent}
      addEnrollment={addEnrollment}
    />
  )
}
