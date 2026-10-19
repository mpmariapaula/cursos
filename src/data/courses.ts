import type { Course } from "@/types"

/** Imagem usada quando um curso é cadastrado sem URL de imagem. */
export const DEFAULT_COURSE_IMAGE =
  "https://images.unsplash.com/photo-1647462741268-e5724e5886c0?auto=format&fit=crop&w=1200&q=85"

export const initialCourses: Course[] = [
  {
    id: 1,
    title: "Essência do Corte",
    description:
      "Do primeiro diagnóstico às linhas fundamentais para cortes com mais intenção.",
    level: "Iniciante",
    duration: "1 dia · 8 horas",
    date: "24 de maio",
    time: "09h às 18h",
    location: "Curitiba · PR",
    price: "R$ 890",
    vacancies: "6 vagas",
    learn: [
      "Leitura de forma e caimento",
      "Divisões e linhas fundamentais",
      "Uso consciente da tesoura",
    ],
    image:
      "https://images.unsplash.com/photo-1647462741268-e5724e5886c0?auto=format&fit=crop&w=1200&q=85",
    position: "center 35%",
    capacity: 12,
    status: "published",
    enrollmentOpen: true,
  },
  {
    id: 2,
    title: "Forma & Movimento",
    description:
      "Camadas, textura e conexão para criar movimento respeitando cada tipo de cabelo.",
    level: "Intermediário",
    duration: "2 dias · 16 horas",
    date: "14 e 15 de junho",
    time: "09h às 18h",
    location: "São Paulo · SP",
    price: "R$ 1.490",
    vacancies: "4 vagas",
    learn: [
      "Construção de camadas",
      "Controle de peso e textura",
      "Finalização com movimento",
    ],
    image:
      "https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?auto=format&fit=crop&w=1200&q=85",
    position: "center",
    capacity: 12,
    status: "published",
    enrollmentOpen: true,
  },
  {
    id: 3,
    title: "Assinatura Criativa",
    description:
      "Aprofunde seu olhar e desenvolva cortes autorais com segurança e personalidade.",
    level: "Avançado",
    duration: "1 dia · 8 horas",
    date: "12 de julho",
    time: "09h às 18h",
    location: "Belo Horizonte · MG",
    price: "R$ 1.190",
    vacancies: "8 vagas",
    learn: [
      "Desenvolvimento de conceito",
      "Adaptação técnica criativa",
      "Construção de assinatura",
    ],
    image:
      "https://images.unsplash.com/photo-1711274094763-ff442e4719ef?auto=format&fit=crop&w=1200&q=85",
    position: "center",
    capacity: 12,
    status: "published",
    enrollmentOpen: false,
  },
]
