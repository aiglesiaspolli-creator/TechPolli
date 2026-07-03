import { services } from "@/data/siteContent";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section className="section section--alt" id="servicos">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Servicos tecnicos"
          title="Manutencao completa para sua rotina continuar"
          text="Atendimento para residencias, profissionais autonomos e empresas que precisam de tecnologia funcionando."
        />

        <div className="grid grid--3">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
