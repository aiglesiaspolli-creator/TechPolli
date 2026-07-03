import type { BenefitItem, FaqItem, FeatureItem, Plan, Testimonial } from "@/types/site";

export const contact = {
  phoneLabel: "(00) 00000-0000",
  phoneHref: "tel:+5500000000000",
  whatsappLabel: "(00) 00000-0000",
  whatsappHref: "https://wa.me/5500000000000",
  email: "contato@techcarepro.com.br",
  address: "Rua Tecnologia, 120 - Centro"
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" }
];

export const heroTrustItems: BenefitItem[] = [
  { icon: "shield", title: "Garantia em todos os servicos" },
  { icon: "zap", title: "Atendimento rapido" },
  { icon: "headset", title: "Suporte especializado" }
];

export const problems: FeatureItem[] = [
  { icon: "monitor", title: "Computador lento", text: "Otimizacao completa para recuperar velocidade e estabilidade." },
  { icon: "laptop", title: "Notebook travando", text: "Diagnostico de sistema, memoria, disco e aquecimento." },
  { icon: "warning", title: "Tela azul", text: "Correcao de falhas criticas e conflitos de drivers." },
  { icon: "bug", title: "Virus e malware", text: "Remocao segura de ameacas e reforco de protecao." },
  { icon: "wifi", title: "Internet instavel", text: "Ajustes em roteadores, redes Wi-Fi e cabeamento." },
  { icon: "cpu", title: "Problemas de hardware", text: "Testes tecnicos para identificar pecas com falha." },
  { icon: "power", title: "Equipamento nao liga", text: "Analise de fonte, placa, bateria e componentes internos." },
  { icon: "file", title: "Perda de arquivos", text: "Recuperacao orientada para reduzir riscos e preservar dados." }
];

export const services: FeatureItem[] = [
  { icon: "tool", title: "Formatacao", text: "Sistema limpo, seguro e pronto para uso profissional." },
  { icon: "monitor", title: "Instalacao de sistemas", text: "Windows, drivers, softwares essenciais e configuracoes." },
  { icon: "cpu", title: "Upgrade de hardware", text: "SSD, memoria e componentes para mais desempenho." },
  { icon: "shield", title: "Limpeza interna", text: "Higienizacao tecnica e troca de pasta termica quando necessario." },
  { icon: "laptop", title: "Troca de pecas", text: "Substituicao de telas, teclados, baterias, fontes e HDs." },
  { icon: "database", title: "Recuperacao de dados", text: "Tentativa tecnica para arquivos, fotos e documentos importantes." },
  { icon: "wifi", title: "Configuracao de redes", text: "Wi-Fi, impressoras, compartilhamentos e seguranca basica." },
  { icon: "headset", title: "Suporte remoto", text: "Atendimento agil para correcoes e configuracoes a distancia." },
  { icon: "building", title: "Suporte empresarial", text: "Planos para manter equipes produtivas e protegidas." }
];

export const benefits: BenefitItem[] = [
  { icon: "zap", title: "Atendimento rapido" },
  { icon: "shield", title: "Garantia dos servicos" },
  { icon: "headset", title: "Tecnicos qualificados" },
  { icon: "file", title: "Orcamento transparente" },
  { icon: "monitor", title: "Presencial e remoto" },
  { icon: "building", title: "Residencial e empresarial" }
];

export const processSteps = [
  { title: "Contato", text: "Voce chama pelo WhatsApp ou formulario e informa o problema." },
  { title: "Diagnostico", text: "Avaliamos sintomas, equipamento e urgencia do atendimento." },
  { title: "Solucao", text: "Executamos a manutencao aprovada com cuidado tecnico." },
  { title: "Entrega", text: "Entregamos testado, orientado e com garantia do servico." }
];

export const testimonials: Testimonial[] = [
  { name: "Marina Lopes", kind: "residencial", text: "Notebook voltou muito mais rapido. Explicaram tudo com clareza e entregaram antes do prazo." },
  { name: "Rafael Siqueira", kind: "empresarial", text: "Chamamos para rede da empresa e resolveram a instabilidade no mesmo dia. Atendimento excelente." },
  { name: "Camila Torres", kind: "residencial", text: "Servico honesto, orcamento transparente e garantia. Passou muita confianca." }
];

export const plans: Plan[] = [
  {
    name: "Basico",
    price: "Essencial",
    features: ["Suporte remoto mensal", "Checklist preventivo", "Prioridade em chamados"]
  },
  {
    name: "Profissional",
    price: "Recomendado",
    features: ["Presencial e remoto", "Manutencao preventiva", "Relatorio tecnico", "SLA de atendimento"],
    featured: true
  },
  {
    name: "Premium",
    price: "Completo",
    features: ["Suporte ilimitado", "Gestao de ativos", "Backup orientado", "Consultoria de infraestrutura"]
  }
];

export const faqs: FaqItem[] = [
  { question: "Quanto custa uma formatacao?", answer: "O valor depende do equipamento, backup, instalacao de programas e urgencia. Enviamos orcamento claro antes de iniciar." },
  { question: "Fazem atendimento remoto?", answer: "Sim. Muitos problemas de software, configuracao, e-mail, impressora e rede podem ser resolvidos remotamente." },
  { question: "Existe garantia?", answer: "Sim. Servicos executados possuem garantia conforme o tipo de manutencao e pecas utilizadas." },
  { question: "Atendem empresas?", answer: "Atendemos empresas com chamados avulsos e planos mensais para suporte recorrente." },
  { question: "Quanto tempo leva o servico?", answer: "Servicos simples podem ser resolvidos no mesmo dia. Casos com pecas, dados ou falhas graves dependem do diagnostico." }
];

export const footerTopics = [
  {
    title: "Navegacao",
    links: [
      { label: "Servicos", href: "#servicos" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Planos", href: "#planos" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "Formatacao", href: "#servicos" },
      { label: "Upgrade", href: "#servicos" },
      { label: "Suporte remoto", href: "#servicos" },
      { label: "Suporte empresarial", href: "#planos" }
    ]
  },
  {
    title: "Contato rapido",
    links: [
      { label: "WhatsApp", href: contact.whatsappHref },
      { label: "E-mail", href: `mailto:${contact.email}` },
      { label: "Solicitar orcamento", href: "#contato" }
    ]
  }
];
