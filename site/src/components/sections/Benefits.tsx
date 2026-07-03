import { benefits } from "@/data/siteContent";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Benefits() {
  return (
    <section className="section" id="diferenciais">
      <div className="section__inner split">
        <SectionHeader
          align="left"
          eyebrow="Diferenciais"
          title="Experiencia tecnica com postura de empresa seria."
          text="Do primeiro contato a entrega, voce acompanha o diagnostico, aprova o orcamento e recebe orientacao para evitar novas paradas."
        />

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <div className="benefit reveal" key={benefit.title}>
              <Icon name={benefit.icon} />
              <span>{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
