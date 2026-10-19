type SectionIntroProps = {
  eyebrow: string
  title: string
  text?: string
  align?: "left" | "center"
}

export default function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionIntroProps) {
  return (
    <div
      className={
        align === "center"
          ? "section-intro mx-auto text-center"
          : "section-intro"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  )
}
