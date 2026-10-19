import { useState } from "react"
import { MenuIcon } from "@/components/icons"
import { useTestimonialModeration } from "@/hooks/useTestimonialModeration"
import type { AdminSection, Course, Enrollment, HomeContent } from "@/types"
import AdminMark from "./components/AdminMark"
import AdminSidebar from "./components/AdminSidebar"
import AdminTopbar from "./components/AdminTopbar"
import CourseForm from "./components/CourseForm"
import ClassesPanel from "./panels/ClassesPanel"
import ContentPanel from "./panels/ContentPanel"
import CoursesPanel from "./panels/CoursesPanel"
import DashboardPanel from "./panels/DashboardPanel"
import HomePanel from "./panels/HomePanel"
import SettingsPanel from "./panels/SettingsPanel"
import StudentsPanel from "./panels/StudentsPanel"
import TestimonialsPanel from "./panels/TestimonialsPanel"

type AdminAppProps = {
  courses: Course[]
  saveCourse: (course: Course) => void
  togglePublished: (id: number) => void
  enrollments: Enrollment[]
  homeContent: HomeContent
  setHomeContent: (content: HomeContent) => void
}

export default function AdminApp({
  courses,
  saveCourse,
  togglePublished,
  enrollments,
  homeContent,
  setHomeContent,
}: AdminAppProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [courseFormOpen, setCourseFormOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const {
    items: testimonialItems,
    updateStatus: updateTestimonial,
    pendingCount,
  } = useTestimonialModeration()

  const navigate = (section: AdminSection) => {
    setActiveSection(section)
    setMobileNavOpen(false)
  }
  const openNewCourse = () => {
    setEditingCourse(null)
    setCourseFormOpen(true)
  }
  const openCourseEditor = (course: Course) => {
    setEditingCourse(course)
    setCourseFormOpen(true)
  }

  return (
    <main className="admin-shell">
      <AdminSidebar
        activeSection={activeSection}
        open={mobileNavOpen}
        pendingCount={pendingCount}
        onNavigate={navigate}
        onClose={() => setMobileNavOpen(false)}
      />
      <div className="admin-main">
        <div className="admin-mobile-bar">
          <AdminMark />
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Abrir menu"
          >
            <MenuIcon open={false} />
          </button>
        </div>
        <AdminTopbar pendingCount={pendingCount} />
        <div className="admin-content">
          {activeSection === "dashboard" && (
            <DashboardPanel
              pendingCount={pendingCount}
              goToTestimonials={() => navigate("testimonials")}
            />
          )}
          {activeSection === "home" && (
            <HomePanel content={homeContent} save={setHomeContent} />
          )}
          {activeSection === "courses" && (
            <CoursesPanel
              courses={courses}
              openForm={openNewCourse}
              editCourse={openCourseEditor}
              togglePublished={togglePublished}
            />
          )}
          {activeSection === "classes" && <ClassesPanel />}
          {activeSection === "students" && (
            <StudentsPanel enrollments={enrollments} />
          )}
          {activeSection === "content" && <ContentPanel />}
          {activeSection === "testimonials" && (
            <TestimonialsPanel
              items={testimonialItems}
              updateStatus={updateTestimonial}
            />
          )}
          {activeSection === "settings" && <SettingsPanel />}
        </div>
      </div>
      {courseFormOpen && (
        <CourseForm
          course={editingCourse}
          save={saveCourse}
          close={() => setCourseFormOpen(false)}
        />
      )}
    </main>
  )
}
