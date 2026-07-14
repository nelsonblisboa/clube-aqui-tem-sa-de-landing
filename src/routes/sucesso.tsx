import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, Calendar, HeartPulse, Clock, Gift } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/sucesso")({
  head: () => ({
    meta: [
      { title: "Pagamento Confirmado — Clube Aqui Tem Saúde" },
      { name: "description", content: "Bem-vindo ao Clube Aqui Tem Saúde. Veja os próximos passos da sua adesão." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SucessoPage,
});

function SucessoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Clube Aqui Tem Saúde" className="h-10 w-auto" />
            <span className="font-bold text-primary hidden sm:inline">Clube Aqui Tem Saúde</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {/* Hero de agradecimento */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50">
            <CheckCircle2 className="h-12 w-12 text-green-600" strokeWidth={2.5} />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            Pagamento confirmado!
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Seja muito bem-vindo(a) ao{" "}
            <span className="font-bold text-foreground">Clube Aqui Tem Saúde</span> 🎉
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            A sua adesão foi realizada com sucesso. Agora faz parte do nosso clube em parceria com{" "}
            <strong>Porto Seguro</strong> e <strong>Horizon Corretora</strong>.
          </p>
        </div>

        {/* Alerta de carência */}
        <div className="mt-10 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-destructive">
                Carência de 30 dias
              </h2>
              <p className="mt-1 text-muted-foreground">
                O acesso à telemedicina será liberado após o período de{" "}
                <strong className="text-foreground">30 dias de carência</strong>, contados a partir de hoje.
                Neste período, prepare-se para aproveitar todos os benefícios do clube.
              </p>
            </div>
          </div>
        </div>

        {/* Próximos passos */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-primary">Próximos passos</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Veja o que acontece a partir de agora:
          </p>

          <ol className="mt-8 space-y-4">
            <Step
              n={1}
              icon={<Phone className="h-5 w-5" />}
              title="Nossa equipe entrará em contato"
              desc="Um consultor do Clube Aqui Tem Saúde vai ligar (ou enviar mensagem) nos próximos dias úteis para dar as boas-vindas e confirmar seus dados de cadastro."
            />
            <Step
              n={2}
              icon={<HeartPulse className="h-5 w-5" />}
              title="Primeiro atendimento de boas-vindas"
              desc="Você receberá uma orientação inicial sobre como funciona a telemedicina, como agendar consultas e tirar todas as suas dúvidas com um especialista da nossa equipe."
            />
            <Step
              n={3}
              icon={<Calendar className="h-5 w-5" />}
              title="Aguardar o fim da carência (30 dias)"
              desc="Após 30 dias corridos da sua adesão, o acesso à telemedicina com as 11 especialidades estará totalmente liberado, 24h por dia."
            />
            <Step
              n={4}
              icon={<Gift className="h-5 w-5" />}
              title="Aproveite o Clube de Vantagens"
              desc="Enquanto isso, você já pode aproveitar os cupons de desconto no comércio local — um bônus exclusivo dos associados do clube."
            />
          </ol>
        </section>

        {/* Informações de contato */}
        <div className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Guardaremos seu comprovante de pagamento no e-mail cadastrado no Stripe.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Em caso de dúvidas, aguarde o contato da nossa equipe ou fale com a{" "}
            <strong className="text-foreground">Horizon Corretora</strong>.
          </p>
        </div>

        {/* Voltar */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Clube Aqui Tem Saúde</p>
          <p className="mt-2 text-[11px]">
            Site criado por{" "}
            <a
              href="https://instagram.com/soareshuboficial"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              @soareshuboficial
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Step({
  n,
  icon,
  title,
  desc,
}: {
  n: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4 rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
          {n}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-primary">
          {icon}
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </li>
  );
}
