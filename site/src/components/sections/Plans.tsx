import { plans } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Plans() {
  return (
    <section className="section section--alt" id="planos">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Planos para empresas"
          title="Suporte recorrente para reduzir paradas"
          text="Escolha um plano de acordo com a criticidade da operacao e o volume de equipamentos."
        />

        <div className="pricing">
          {plans.map((plan) => (
            <article className={`plan reveal ${plan.featured ? "plan--featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="plan__badge">Recomendado</span>}
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className={plan.featured ? "btn btn--primary" : "btn btn--ghost"} href="#contato">
                Solicitar proposta
                {plan.featured && <span className="btn__orb" aria-hidden="true">→</span>}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
