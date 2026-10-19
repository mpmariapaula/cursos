export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="marquee-content" key={index}>
            <span>TÉCNICA</span>
            <i>✦</i>
            <span>PERCEPÇÃO</span>
            <i>✦</i>
            <span>SEGURANÇA</span>
            <i>✦</i>
            <span>CRIATIVIDADE</span>
            <i>✦</i>
            <span>IDENTIDADE</span>
            <i>✦</i>
          </div>
        ))}
      </div>
    </div>
  )
}
