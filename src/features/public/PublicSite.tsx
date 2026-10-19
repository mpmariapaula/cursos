import { useState } from "react"
import type { Course, HomeContent, NewEnrollment } from "@/types"
import EnrollmentModal from "./components/EnrollmentModal"
import AboutSection from "./sections/AboutSection"
import CoursesSection from "./sections/CoursesSection"
import FeedSection from "./sections/FeedSection"
import FinalCta from "./sections/FinalCta"
import HeroSection from "./sections/HeroSection"
import Marquee from "./sections/Marquee"
import MethodSection from "./sections/MethodSection"
import PracticeSection from "./sections/PracticeSection"
import SiteFooter from "./sections/SiteFooter"
import SiteHeader from "./sections/SiteHeader"
import TestimonialFormSection from "./sections/TestimonialFormSection"
import TestimonialsSection from "./sections/TestimonialsSection"

type PublicSiteProps = {
  courses: Course[]
  homeContent: HomeContent
  addEnrollment: (enrollment: NewEnrollment) => void
}

export default function PublicSite({
  courses,
  homeContent,
  addEnrollment,
}: PublicSiteProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const publishedCourses = courses.filter(
    (course) => course.status === "published",
  )

  return (
    <main className="overflow-hidden bg-cream text-ink">
      <SiteHeader />
      <HeroSection homeContent={homeContent} />
      <Marquee />
      <PracticeSection />
      <CoursesSection courses={publishedCourses} onEnroll={setSelectedCourse} />
      <MethodSection />
      <AboutSection homeContent={homeContent} />
      <TestimonialsSection />
      <TestimonialFormSection courses={courses} />
      <FeedSection />
      <FinalCta homeContent={homeContent} />
      <SiteFooter />

      {selectedCourse && (
        <EnrollmentModal
          course={selectedCourse}
          onSubmit={addEnrollment}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </main>
  )
}
