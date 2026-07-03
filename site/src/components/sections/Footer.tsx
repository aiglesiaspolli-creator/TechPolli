import { contact, footerTopics } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="footer" id="mapa-do-site">
      <div className="section__inner footer__top">
        <div className="footer__brand">
          <a className="brand brand--footer" href="#inicio" aria-label="TechPolli inicio">
            <span className="brand__mark">
              <img src="/logo-techpolli.png" alt="" />
            </span>
            <span>
              <strong>TechPolli</strong>
              <small>Assistencia tecnica</small>
            </span>
          </a>
          <p>Manutencao, suporte tecnico e assistencia para computadores, notebooks e redes.</p>
          <a className="btn btn--primary footer__cta" href="#contato">
            Solicitar Orcamento
            <span className="btn__orb" aria-hidden="true">→</span>
          </a>
        </div>

        <nav className="footer__topics" aria-label="Topicos do site">
          {footerTopics.map((topic) => (
            <section className="footer__topic" key={topic.title}>
              <h3>{topic.title}</h3>
              {topic.links.map((link) => (
                <a key={link.label} href={link.href}>
                  <span>{link.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </section>
          ))}
        </nav>
      </div>

      <div className="section__inner footer__bottom">
        <span>2026 TechPolli. Todos os direitos reservados.</span>
        <span>{contact.email}</span>
      </div>
    </footer>
  );
}
