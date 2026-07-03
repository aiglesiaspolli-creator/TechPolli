# TechCare Pro Landing Page

Landing page moderna para uma empresa de manutencao, suporte tecnico e assistencia para computadores e notebooks.

## Como rodar

1. Instale as dependencias:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse:

```text
http://localhost:3000
```

Para conferir se o codigo TypeScript esta correto:

```bash
npm run typecheck
```

Para gerar a versao de producao:

```bash
npm run build
```

## Estrutura principal

```text
src/app/page.tsx              Monta a pagina com todos os blocos
src/app/layout.tsx            SEO, metadados e estrutura HTML global
src/app/globals.css           Visual, responsividade e animacoes
src/data/siteContent.ts       Textos, contatos, servicos, planos e FAQ
src/types/site.ts             Tipos reutilizados pelos componentes
src/components/Navbar.tsx     Menu fixo e responsivo
src/components/Hero.tsx       Primeira dobra da landing page
src/components/sections       Secoes independentes da pagina
src/components/ui             Componentes pequenos reutilizaveis
```

## Onde editar conteudo

Quase todo texto editavel esta em `src/data/siteContent.ts`.

Troque ali:

- telefone
- WhatsApp
- e-mail
- endereco
- itens de servicos
- problemas resolvidos
- planos
- perguntas frequentes
- depoimentos

## Como a pagina funciona

`src/app/page.tsx` e o arquivo que junta a pagina inteira. Ele importa a navbar, o hero e cada secao.

`src/components/sections/index.ts` e um arquivo "barrel": ele reexporta todas as secoes para deixar o import do `page.tsx` mais limpo.

`Navbar.tsx` e `Counter.tsx` usam `"use client"` porque dependem do navegador:

- a navbar escuta o scroll e abre o menu mobile
- o contador usa `IntersectionObserver` para animar os numeros quando a secao aparece

O restante pode ser componente normal de servidor, o que ajuda performance no Next.js.

## Proximos ajustes comuns

- Substituir `5500000000000` pelo WhatsApp real no formato internacional.
- Trocar `contato@techcarepro.com.br` pelo e-mail real.
- Ligar o formulario a uma API, Formspree, EmailJS ou backend proprio. Hoje ele usa `mailto:` para funcionar sem servidor.
