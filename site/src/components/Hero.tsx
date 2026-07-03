import { contact, heroTrustItems } from "@/data/siteContent";
import { Icon } from "./Icon";

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="section__inner hero__grid">
        <div className="hero__content reveal">
          <p className="eyebrow">TechPolli assistencia premium</p>
          <h1>Seu computador com problemas? A TechPolli resolve.</h1>
          <p className="hero__lead">
            Manutencao especializada para computadores, notebooks e redes com atendimento rapido e garantia.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              Solicitar orcamento
              <span className="btn__orb" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Falar no WhatsApp
              <Icon name="arrowRight" />
            </a>
          </div>

          <div className="trust-row" aria-label="Indicadores de confianca">
            {heroTrustItems.map((item) => (
              <span key={item.title}>
                <Icon name={item.icon} />
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
