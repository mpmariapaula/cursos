import type { Enrollment } from "@/types"

export const initialEnrollments: Enrollment[] = [
  {
    id: 1,
    name: "Camila Nunes",
    courseId: 1,
    course: "Essência do Corte",
    className: "24 mai · Curitiba",
    date: "18 mai 2025",
    phone: "(41) 99982-4105",
    email: "camila@email.com",
    status: "Confirmada",
  },
  {
    id: 2,
    name: "Paula Vieira",
    courseId: 2,
    course: "Forma & Movimento",
    className: "14 jun · São Paulo",
    date: "16 mai 2025",
    phone: "(11) 98816-2074",
    email: "paula@email.com",
    status: "Pendente",
  },
]
