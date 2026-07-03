import { Counter } from "@/components/Counter";

export function Stats() {
  return (
    <section className="stats section" aria-label="Estatisticas">
      <div className="section__inner stats__grid">
        <div>
          <strong><Counter value={1000} prefix="+" /></strong>
          <span>Equipamentos Reparados</span>
        </div>
        <div>
          <strong><Counter value={500} prefix="+" /></strong>
          <span>Clientes Atendidos</span>
        </div>
        <div>
          <strong><Counter value={98} suffix="%" /></strong>
          <span>Satisfacao</span>
        </div>
        <div>
          <strong><Counter value={5} /></strong>
          <span>Anos de Experiencia</span>
        </div>
      </div>
    </section>
  );
}
