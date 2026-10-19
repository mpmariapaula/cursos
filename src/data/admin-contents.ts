import type { AdminContent } from "@/types"
import { feedImages } from "./feed-images"

export const adminContents: AdminContent[] = [
  {
    title: "Como analisar o caimento antes do primeiro corte",
    category: "Técnicas",
    date: "18 mai 2025",
    status: "Publicado",
    image: feedImages[1].src,
  },
  {
    title: "Camadas: quando criar leveza e quando preservar peso",
    category: "Cortes",
    date: "15 mai 2025",
    status: "Publicado",
    image: feedImages[2].src,
  },
  {
    title: "Por dentro da turma de Curitiba",
    category: "Bastidores",
    date: "12 mai 2025",
    status: "Rascunho",
    image: feedImages[0].src,
  },
  {
    title: "As texturas que estão transformando os salões",
    category: "Tendências",
    date: "08 mai 2025",
    status: "Publicado",
    image: feedImages[3].src,
  },
]

export const contentCategories = [
  "Cortes",
  "Técnicas",
  "Beleza",
  "Dicas",
  "Tendências",
  "Bastidores",
]
