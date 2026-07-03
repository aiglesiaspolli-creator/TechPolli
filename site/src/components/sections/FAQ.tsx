import { faqs } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="section__inner faq-wrap">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          text="As principais duvidas antes de solicitar um diagnostico tecnico."
        />

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq reveal" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
