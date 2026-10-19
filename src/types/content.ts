export type PracticeItem = {
  number: string
  title: string
  text: string
  image: string
  position: string
}

export type FeedImage = {
  src: string
  alt: string
}

export type ContentStatus = "Publicado" | "Rascunho"

export type AdminContent = {
  title: string
  category: string
  date: string
  status: ContentStatus
  image: string
}
