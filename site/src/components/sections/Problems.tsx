import { problems } from "@/data/siteContent";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Problems() {
  return (
    <section className="section" id="problemas">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Diagnostico preciso"
          title="Problemas que resolvemos"
          text="Falhas simples podem esconder riscos maiores. Identificamos a causa e aplicamos a solucao certa."
        />

        <div className="grid grid--4">
          {problems.map((problem) => (
            <FeatureCard key={problem.title} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
