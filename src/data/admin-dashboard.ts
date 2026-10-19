import type { DashboardMetric, ModerationStep, UpcomingClass } from "@/types"

/** Métricas do dashboard. O número de depoimentos pendentes é calculado em tempo real. */
export function buildDashboardMetrics(pendingCount: number): DashboardMetric[] {
  return [
    { label: "Cursos cadastrados", value: "06", note: "+1 este mês" },
    { label: "Cursos publicados", value: "04", note: "2 em rascunho" },
    { label: "Próximas turmas", value: "05", note: "3 com inscrições" },
    { label: "Alunos / inscrições", value: "38", note: "+8 esta semana" },
    {
      label: "Depoimentos pendentes",
      value: String(pendingCount).padStart(2, "0"),
      note: "requer atenção",
    },
    { label: "Conteúdos publicados", value: "24", note: "+3 este mês" },
  ]
}

export const upcomingClasses: UpcomingClass[] = [
  {
    day: "24",
    month: "MAI",
    title: "Essência do Corte",
    place: "Curitiba · PR",
    status: "Inscrições abertas",
    tone: "warning",
  },
  {
    day: "14",
    month: "JUN",
    title: "Forma & Movimento",
    place: "São Paulo · SP",
    status: "4 vagas restantes",
    tone: "success",
  },
  {
    day: "12",
    month: "JUL",
    title: "Assinatura Criativa",
    place: "Belo Horizonte · MG",
    status: "Próxima turma",
    tone: "neutral",
  },
]

export const moderationSteps: ModerationStep[] = [
  {
    number: "01",
    title: "Aluno envia depoimento",
    note: "Entrada pelo site público",
  },
  {
    number: "02",
    title: "Aguardando aprovação",
    note: "Nunca aparece automaticamente",
  },
  {
    number: "03",
    title: "Juliana analisa",
    note: "Aprova ou recusa o conteúdo",
  },
  {
    number: "04",
    title: "Decisão",
    note: "Aprovado: publicado · Recusado: oculto",
  },
]
