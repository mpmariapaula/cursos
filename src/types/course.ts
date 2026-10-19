export type CourseStatus = "published" | "draft"

export type Course = {
  id: number
  title: string
  description: string
  level: string
  duration: string
  date: string
  time: string
  location: string
  price: string
  vacancies: string
  capacity: number
  learn: string[]
  image: string
  position: string
  status: CourseStatus
  enrollmentOpen: boolean
}
