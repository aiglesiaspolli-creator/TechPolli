import { contact } from "@/data/siteContent";

export function CTA() {
  return (
    <section className="section cta-section">
      <div className="section__inner cta-box reveal">
        <div>
          <p className="eyebrow">Atendimento prioritario</p>
          <h2>Nao deixe problemas tecnicos interromperem seu trabalho.</h2>
          <p>Fale agora com um especialista e receba uma orientacao inicial para o seu caso.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn--primary" href="#contato">
            Solicitar orcamento
            <span className="btn__orb" aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
