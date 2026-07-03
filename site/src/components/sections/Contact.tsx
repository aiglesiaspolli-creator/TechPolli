import { contact } from "@/data/siteContent";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section className="section section--alt" id="contato">
      <div className="section__inner contact-grid">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contato"
            title="Solicite um orcamento tecnico"
            text="Conte o que esta acontecendo e retornaremos com o melhor caminho para resolver."
          />

          <div className="contact-info">
            <a href={contact.phoneHref}>Telefone: {contact.phoneLabel}</a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp: {contact.whatsappLabel}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.address}</span>
          </div>
        </div>

        <form className="contact-form reveal" action={`mailto:${contact.email}`} method="post" encType="text/plain">
          <label>
            Nome
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Telefone
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn btn--primary" type="submit">
            Enviar solicitacao
            <span className="btn__orb" aria-hidden="true">
              <Icon name="send" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
