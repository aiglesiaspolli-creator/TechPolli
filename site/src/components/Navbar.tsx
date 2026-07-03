"use client";

import { navLinks } from "@/data/siteContent";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  // Precisa ser client component porque escuta o scroll e abre/fecha o menu mobile.
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${compact ? "navbar--compact" : ""}`}>
      <a className="brand" href="#inicio" aria-label="TechPolli inicio">
        <span className="brand__mark">
          <img src="/logo-techpolli.png" alt="logo" />
        </span>
        <span>
          <strong>TechPolli</strong>
          <small>Assistencia tecnica</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu ${open ? "nav-menu--open" : ""}`} aria-label="Navegacao principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn--primary nav-cta" href="#contato" onClick={() => setOpen(false)}>
          Solicitar Orcamento
          <span className="btn__orb" aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
