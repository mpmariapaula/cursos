import { ArrowUpRight } from "@/components/icons"
import type { Course } from "@/types"

type CourseCardProps = {
  course: Course
  /** Posição na lista, usada na numeração 01, 02, 03... */
  index: number
  onEnroll: (course: Course) => void
}

export default function CourseCard({
  course,
  index,
  onEnroll,
}: CourseCardProps) {
  return (
    <article className="course-card group">
      <div className="course-image">
        <img
          src={course.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: course.position }}
        />
        <span className="course-index">0{index + 1}</span>
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-caramel">
          <span>{course.level}</span>
          <span className="size-1 rounded-full bg-rose" />
          <span>Presencial</span>
        </div>
        <h3 className="mt-4 font-serif text-3xl leading-tight">
          {course.title}
        </h3>
        <p className="mt-3 min-h-18 text-sm leading-6 text-ink-muted">
          {course.description}
        </p>
        <dl className="course-details">
          <div>
            <dt>Data</dt>
            <dd>{course.date}</dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>{course.time}</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>{course.location}</dd>
          </div>
          <div>
            <dt>Duração</dt>
            <dd>{course.duration}</dd>
          </div>
          <div>
            <dt>Investimento</dt>
            <dd>{course.price}</dd>
          </div>
          <div>
            <dt>Vagas</dt>
            <dd>{course.vacancies}</dd>
          </div>
        </dl>
        <details className="course-program">
          <summary>Conteúdo e o que você irá aprender</summary>
          <ul>
            {course.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
        <button
          type="button"
          disabled={!course.enrollmentOpen}
          onClick={() => onEnroll(course)}
          className="course-enroll-action"
        >
          {course.enrollmentOpen ? "Quero me inscrever" : "Inscrições em breve"}
          <span className="flex size-9 items-center justify-center rounded-full bg-sand transition group-hover:bg-rose group-hover:text-white">
            <ArrowUpRight />
          </span>
        </button>
      </div>
    </article>
  )
}
