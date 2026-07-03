import { testimonials } from "@/data/siteContent";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Confianca construida em cada atendimento"
          text="Clientes que precisavam de rapidez, transparencia e um equipamento funcionando de verdade."
        />

        <div className="carousel" aria-label="Depoimentos de clientes">
          {testimonials.map((testimonial) => (
            <article className="testimonial reveal" key={testimonial.name}>
              <div className="avatar" aria-hidden="true">{testimonial.name.charAt(0)}</div>
              <div className="stars" aria-label="Avaliacao cinco estrelas">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Icon key={star} name="star" />
                ))}
              </div>
              <p>"{testimonial.text}"</p>
              <strong>{testimonial.name}</strong>
              <small>Cliente {testimonial.kind}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
