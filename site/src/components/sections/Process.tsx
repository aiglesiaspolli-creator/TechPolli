import { processSteps } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section className="section section--alt" id="como-funciona">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Como funciona"
          title="Um processo simples, claro e sem surpresa"
          text="Cada etapa foi pensada para dar rapidez ao atendimento e seguranca na tomada de decisao."
        />

        <div className="timeline">
          {processSteps.map((step, index) => (
            <article className="timeline__item reveal" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
