import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Video,
  Phone,
  Users,
  ShieldCheck,
  Clock,
  CreditCard,
  Heart,
  Baby,
  Brain,
  Activity,
  Sparkles,
  Ear,
  HeartPulse,
  CheckCircle2,
  Pill,
  UserRound,
} from "lucide-react";

import logoAsset from "@/assets/logo.png.asset.json";
import portoAsset from "@/assets/porto-seguro-logo.png.asset.json";
import horizonAsset from "@/assets/horizon-logo.png.asset.json";
import heroDoctor from "@/assets/hero-doctor.jpg";
import familyImg from "@/assets/family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube Aqui Tem Saúde — Telemedicina por R$ 29,90/mês" },
      {
        name: "description",
        content:
          "Consultas médicas online ilimitadas com 11 especialidades por apenas R$ 29,90/mês. Em parceria com Porto Seguro e Horizon Corretora.",
      },
      { property: "og:title", content: "Clube Aqui Tem Saúde — Telemedicina por R$ 29,90/mês" },
      {
        property: "og:description",
        content:
          "Telemedicina ilimitada para você e até 2 dependentes. 11 especialidades, atendimento 24h, sem carência.",
      },
    ],
  }),
  component: LandingPage,
});

const specialties = [
  { name: "Clínica Médica", icon: Stethoscope },
  { name: "Pediatria", icon: Baby },
  { name: "Geriatria", icon: UserRound },
  { name: "Psiquiatria", icon: Brain },
  { name: "Dermatologia", icon: Sparkles },
  { name: "Medicina da Família", icon: Heart },
  { name: "Endocrinologia", icon: Activity },
  { name: "Ginecologia", icon: HeartPulse },
  { name: "Gastroenterologia", icon: Pill },
  { name: "Otorrinolaringologia", icon: Ear },
  { name: "Neurologia", icon: Brain },
  { name: "Cardiologia", icon: HeartPulse },
];

const benefits = [
  {
    icon: Video,
    title: "Consultas por vídeo ou telefone",
    desc: "Atendimento online com médicos de verdade, no horário que cabe na sua rotina.",
  },
  {
    icon: Clock,
    title: "Atendimento 24 horas",
    desc: "Clínico geral disponível todos os dias, a qualquer hora — sem fila, sem espera.",
  },
  {
    icon: Users,
    title: "Até 2 dependentes grátis",
    desc: "Inclua dois familiares no plano sem pagar nada a mais pelo clínico geral.",
  },
  {
    icon: ShieldCheck,
    title: "Sem carência",
    desc: "Comece a usar logo após a assinatura. Nada de meses esperando para se cuidar.",
  },
  {
    icon: CreditCard,
    title: "Sem fidelidade",
    desc: "Assinatura mensal no cartão. Você cancela quando quiser, sem multa.",
  },
  {
    icon: ShieldCheck,
    title: "Parceria com a Porto Seguro",
    desc: "Plataforma e cobertura operadas por quem entende de saúde há décadas.",
  },
];

const howSteps = [
  { n: "01", title: "Assine o Clube", desc: "Cadastro 100% online em poucos minutos no cartão de crédito." },
  { n: "02", title: "Receba seu acesso", desc: "Login imediato na plataforma Porto Seguro VidaClass." },
  { n: "03", title: "Agende sua consulta", desc: "Escolha a especialidade, o dia e o horário que preferir." },
  { n: "04", title: "Seja atendido", desc: "Consulta por vídeo ou telefone com prescrição digital válida." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <PartnersBar />
      <Benefits />
      <Specialties />
      <Pricing />
      <HowItWorks />
      <FamilyExample />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Clube Aqui Tem Saúde" className="h-10 w-auto" />
          <span className="hidden text-sm font-semibold text-primary sm:inline">
            Aqui Tem <span className="text-accent">Saúde</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#beneficios" className="hover:text-primary">Benefícios</a>
          <a href="#especialidades" className="hover:text-primary">Especialidades</a>
          <a href="#como-funciona" className="hover:text-primary">Como funciona</a>
          <a href="#faq" className="hover:text-primary">Dúvidas</a>
        </nav>
        <a
          href="#adquirir"
          className="rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-accent transition hover:brightness-110"
        >
          Adquirir
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <HeartPulse className="h-3.5 w-3.5" /> Telemedicina por assinatura
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-balance text-primary-dark sm:text-5xl md:text-6xl">
            Saúde para toda família por{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">R$ 29,90</span>
              <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 bg-accent/15"></span>
            </span>{" "}
            por mês.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Consultas online ilimitadas com clínico geral e 11 especialidades.
            Inclua até 2 dependentes sem custo adicional. Sem carência, sem fidelidade.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#adquirir"
              className="rounded-full bg-gradient-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-accent transition hover:scale-[1.02] hover:brightness-110"
            >
              Quero adquirir o Clube
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-primary/20 bg-card px-7 py-4 text-base font-semibold text-primary shadow-soft transition hover:bg-secondary"
            >
              Como funciona
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Sem carência", "Cancele quando quiser", "Atendimento 24h"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
          <img
            src={heroDoctor}
            alt="Médica realizando atendimento por telemedicina"
            width={1024}
            height={1024}
            className="rounded-3xl shadow-card"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-card sm:flex sm:items-center sm:gap-3">
            <div className="rounded-xl bg-accent/10 p-2.5">
              <Stethoscope className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Consultas no mês</p>
              <p className="text-lg font-bold text-primary-dark">Ilimitadas</p>
            </div>
          </div>
          <div className="absolute -top-4 right-4 hidden rounded-2xl bg-primary p-4 text-primary-foreground shadow-card md:block">
            <p className="text-xs opacity-80">Cobertura familiar</p>
            <p className="text-lg font-bold">Até 4 pessoas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 py-6 sm:justify-between">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Em parceria com
        </p>
        <div className="flex items-center gap-10">
          <img src={portoAsset.url} alt="Porto Seguro" className="h-10 w-auto opacity-90" loading="lazy" />
          <img src={horizonAsset.url} alt="Horizon Corretora de Seguros" className="h-10 w-auto opacity-90" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold text-balance text-primary-dark sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader
        eyebrow="Por que assinar"
        title="Tudo que você precisa para cuidar da saúde"
        desc="Atendimento médico de verdade, sem complicação e por um valor que cabe no bolso de qualquer família."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-accent/10 group-hover:text-accent">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="especialidades" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="11 especialidades + clínica médica"
          title="Atendimento completo, do dia a dia ao cuidado especializado"
          desc="Acesse médicos das principais especialidades sempre que precisar — sem filas, sem encaminhamento."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {specialties.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 shadow-soft transition hover:border-accent/40 hover:shadow-card"
            >
              <div className="rounded-lg bg-accent/10 p-2 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-primary-dark">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const includes = [
    "Consultas ilimitadas por vídeo ou telefone",
    "Clínico geral + 11 especialidades médicas",
    "Atendimento 24 horas, todos os dias",
    "Até 2 dependentes inclusos (clínico geral)",
    "Prescrição e atestados digitais válidos",
    "Plataforma Porto Seguro VidaClass",
    "Sem carência e sem fidelidade",
    "Cancele quando quiser, direto pelo app",
  ];

  return (
    <section id="adquirir" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader eyebrow="Plano único" title="Saúde acessível, do seu jeito" />
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <div className="grid md:grid-cols-5">
          <div className="bg-gradient-primary p-8 text-primary-foreground md:col-span-2 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Clube Aqui Tem Saúde</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-2xl font-semibold">R$</span>
              <span className="text-6xl font-bold tracking-tight">29</span>
              <span className="text-3xl font-bold">,90</span>
            </div>
            <p className="mt-1 text-sm opacity-80">por titular / mês</p>
            <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm">
                <span className="font-bold">Família de 4 pessoas</span> com 2 titulares por apenas
              </p>
              <p className="mt-1 text-2xl font-bold">R$ 59,80/mês</p>
              <p className="text-xs opacity-80">≈ R$ 14,95 por pessoa</p>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-accent transition hover:brightness-110"
            >
              Adquirir o Clube
            </a>
            <p className="mt-3 text-center text-xs opacity-80">Pagamento recorrente no cartão</p>
          </div>
          <div className="p-8 md:col-span-3 md:p-10">
            <h3 className="text-lg font-bold text-primary-dark">O que está incluso</h3>
            <ul className="mt-5 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Como funciona"
          title="Do cadastro à consulta em poucos minutos"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {howSteps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="text-4xl font-bold text-accent/30">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-primary-dark">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyExample() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <img
            src={familyImg}
            alt="Família usando o Clube Aqui Tem Saúde"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-card"
          />
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-accent p-5 text-accent-foreground shadow-accent">
            <p className="text-xs font-semibold uppercase opacity-80">Custo por pessoa</p>
            <p className="text-3xl font-bold">R$ 14,95</p>
            <p className="text-xs opacity-80">por mês</p>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Exemplo prático</span>
          <h2 className="mt-3 text-3xl font-bold text-balance text-primary-dark sm:text-4xl">
            Família completa por menos de R$ 60 por mês
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Com dois titulares, você cobre até 4 pessoas — pai, mãe e dois filhos — com
            atendimento médico online sempre que precisar.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            {[
              ["Pai — titular", "Clínico + 11 especialidades", "R$ 29,90"],
              ["Mãe — titular", "Clínico + 11 especialidades", "R$ 29,90"],
              ["Filho — dependente", "Apenas clínico geral", "Grátis"],
              ["Filho — dependente", "Apenas clínico geral", "Grátis"],
            ].map(([who, what, price], i) => (
              <div
                key={who}
                className={`grid grid-cols-[1.2fr_1.4fr_auto] gap-4 px-5 py-3 text-sm ${
                  i % 2 ? "bg-secondary/40" : "bg-card"
                }`}
              >
                <span className="font-semibold text-primary-dark">{who}</span>
                <span className="text-muted-foreground">{what}</span>
                <span className="font-bold text-accent">{price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
              <span className="font-bold">Total para a família</span>
              <span className="text-xl font-bold">R$ 59,80/mês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "O atendimento é com médicos de verdade?",
    a: "Sim. Todas as consultas são realizadas por médicos formados e registrados no CRM, através da plataforma Porto Seguro VidaClass.",
  },
  {
    q: "Tem carência para começar a usar?",
    a: "Não. Após a confirmação do pagamento, seu acesso é liberado e você já pode agendar consultas imediatamente.",
  },
  {
    q: "As receitas e atestados são válidos?",
    a: "Sim. Prescrições digitais, pedidos de exame e atestados são emitidos com assinatura eletrônica válida em todo o Brasil.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem multa e sem fidelidade. O cancelamento pode ser solicitado quando você quiser.",
  },
  {
    q: "Como funcionam os dependentes?",
    a: "Cada titular pode incluir até 2 dependentes gratuitamente. Os dependentes têm acesso a consultas com clínico geral.",
  },
  {
    q: "Onde será feita a consulta?",
    a: "Você é atendido por videochamada ou telefone, de onde estiver — basta ter internet ou sinal de celular.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Perguntas frequentes" title="Tudo o que você precisa saber" />
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:border-accent/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-primary-dark">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center text-primary-foreground shadow-card sm:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <Phone className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">
            Comece a cuidar da sua saúde hoje mesmo
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Por apenas R$ 29,90 por mês, você e sua família têm um médico sempre por perto.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-glow transition hover:scale-[1.02] hover:brightness-110"
          >
            Adquirir o Clube agora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Clube Aqui Tem Saúde" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-primary-dark">Clube Aqui Tem Saúde</p>
              <p className="text-xs text-muted-foreground">Telemedicina por assinatura</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={portoAsset.url} alt="Porto Seguro" className="h-8 w-auto opacity-80" loading="lazy" />
            <img src={horizonAsset.url} alt="Horizon Corretora" className="h-8 w-auto opacity-80" loading="lazy" />
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Clube Aqui Tem Saúde · Em parceria com Porto Seguro e Horizon Corretora de Seguros.
          </p>
          <p className="mt-1">
            Serviço de telemedicina operado pela Porto Seguro VidaClass conforme regulamentação do CFM.
          </p>
        </div>
      </div>
    </footer>
  );
}
