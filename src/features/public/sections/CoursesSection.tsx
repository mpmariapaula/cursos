import { ArrowUpRight } from "@/components/icons"
import SectionIntro from "@/components/ui/SectionIntro"
import type { Course } from "@/types"
import CourseCard from "../components/CourseCard"

type CoursesSectionProps = {
  /** Somente cursos publicados. */
  courses: Course[]
  onEnroll: (course: Course) => void
}

export default function CoursesSection({
  courses,
  onEnroll,
}: CoursesSectionProps) {
  return (
    <section id="cursos" className="section-space">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Cursos presenciais"
            title="Do fundamento à sua assinatura."
          />
          <a href="#cursos" className="text-link">
            Explorar todos os cursos <ArrowUpRight />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              onEnroll={onEnroll}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
