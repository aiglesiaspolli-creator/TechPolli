# 💻 Tech Polli - Servicos de Manutencao de Computadores
> Landing Page para Venda e Agendamento de Serviços de Manutenção e Assistência Técnica de Computadores

Esta aplicação é a landing page oficial para a venda e divulgação de serviços de assistência técnica, limpeza preventiva, formatação e manutenção de computadores. Desenvolvida em **Next.js** com **TypeScript**, a plataforma conta com uma estrutura totalmente modular, responsiva e focada na conversão de novos clientes.

---

## 📌 Destaques do Projeto

- **Foco em Conversão e Vendas:**
  - **Apresentação de Serviços (`Services.tsx`):** Exibição clara das modalidades de atendimento (formatação, montagem, limpeza preventiva, upgrade de hardware, etc.).
  - **Planos e Preços (`Plans.tsx`):** Tabela comparativa e pacotes de serviços para facilitar a tomada de decisão do cliente.
  - **Diferenciais e Benefícios (`Benefits.tsx`):** Destaque para agilidade no atendimento, garantia e suporte técnico especializado.
  - **Prova Social (`Testimonials.tsx` / `Stats.tsx`):** Exibição de avaliações de clientes e métricas de atendimentos realizados.
  - **Call to Action & Contato (`CTA.tsx` / `Contact.tsx`):** Canais diretos para solicitação de orçamentos e agendamento via formulário ou WhatsApp.
- **Arquitetura Baseada em Componentes:**
  - Seções modularizadas em `src/components/sections` e unificadas via exportação centralizada (`index.ts`).
  - Elementos de UI reaproveitáveis (`FeatureCard`, `SectionHeader`, `Counter`, etc.).
  - Centralização de todo o texto e informações dos serviços em `src/data/siteContent.ts`.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js (App Router):** Framework React para máxima performance, SEO e velocidade de carregamento.
- **TypeScript:** Tipagem estática para maior segurança e facilidade de manutenção no código.
- **CSS3 / Tailwind CSS:** Estilização global (`globals.css`) moderna, adaptada para telas de celulares e desktops.

---

## 📂 Estrutura do Repositório

```text
├── public/                     # Imagens dos serviços, ícones e assets visuais
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globais e estilização de layout
│   │   ├── layout.tsx          # Configurações de cabeçalho e SEO da landing page
│   │   └── page.tsx            # Renderização de todas as seções da landing page
│   ├── components/
│   │   ├── sections/           # Seções da página de serviços
│   │   │   ├── Benefits.tsx    # Vantagens e diferenciais da assistência
│   │   │   ├── Contact.tsx     # Formulário/canais de contato direto
│   │   │   ├── CTA.tsx         # Chamada para ação e orçamento rápido
│   │   │   ├── FAQ.tsx         # Dúvidas frequentes sobre manutenção e prazos
│   │   │   ├── Footer.tsx      # Rodapé com redes e horários de funcionamento
│   │   │   ├── Plans.tsx       # Tabela de preços e pacotes de serviço
│   │   │   ├── Problems.tsx    # Principais problemas resolvidos (PC lento, tela azul, etc.)
│   │   │   ├── Process.tsx     # Passo a passo do atendimento técnico
│   │   │   ├── Services.tsx    # Lista completa de serviços oferecidos
│   │   │   ├── Stats.tsx       # Estatísticas de computadores arrumados
│   │   │   ├── Testimonials.tsx# Depoimentos de clientes satisfeitos
│   │   │   └── index.ts        # Arquivo barrel para exportação dos componentes
│   │   ├── ui/                 # Componentes genéricos de interface
│   │   │   ├── FeatureCard.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── Counter.tsx
│   │   ├── Hero.tsx
│   │   ├── Icon.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── siteContent.ts      # Dados estáticos (preços, serviços, contatos e textos)
│   └── types/                  # Definição de tipos TypeScript
├── .gitignore
├── next-env.d.ts
├── next.config.ts              # Arquivo de configuração do Next.js
├── package.json                # Dependências do projeto
├── tsconfig.json               # Configurações do TypeScript
└── README.md                   # Documentação do repositório
