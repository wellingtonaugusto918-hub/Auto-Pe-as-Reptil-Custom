import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Menu, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/auto-reptil-hero.jpg";

const TITLE = "Auto Réptil Custom — Funilaria, Pintura e Customização";
const DESC =
  "Funilaria, pintura, fibra de vidro, reforma de sinistrados, martelinho de ouro e tunning em Campo Limpo Paulista - SP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Day = { d: string; open: string | null; close: string | null };

const hours: Day[] = [
  { d: "Domingo", open: null, close: null },
  { d: "Segunda-feira", open: null, close: null },
  { d: "Terça-feira", open: null, close: null },
  { d: "Quarta-feira", open: null, close: null },
  { d: "Quinta-feira", open: null, close: null },
  { d: "Sexta-feira", open: "08:00", close: "18:00" },
  { d: "Sábado", open: "08:00", close: "13:00" },
];

const scenes = [
  {
    title: "Funilaria e pintura",
    desc: "Preparação de superfície, correção de forma e pintura em geral com acabamento profissional.",
    icon: (
      <>
        <path
          d="M30 70 L45 45 Q60 30 90 30 H120 Q145 30 155 50 L165 70 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="55" cy="80" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="140" cy="80" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
      </>
    ),
  },
  {
    title: "Fibra de vidro",
    desc: "Fabricação e preparação de peças sob medida em fibra de vidro.",
    icon: (
      <>
        <path d="M40 90 L70 30 L100 90 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M90 90 L120 40 L150 90 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      </>
    ),
  },
  {
    title: "Sinistros e colisão",
    desc: "Reforma completa de veículos sinistrados, do estrutural ao visual.",
    icon: (
      <>
        <rect x="40" y="40" width="120" height="45" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M60 40 L80 85 M120 40 L100 85" stroke="currentColor" strokeWidth="2.5" />
      </>
    ),
  },
  {
    title: "Customização e tunning",
    desc: "Restauração automotiva e personalização visual sob medida.",
    icon: (
      <>
        <circle cx="100" cy="60" r="34" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="100" cy="60" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M100 26 V16 M100 104 V94 M134 60 H144 M56 60 H66" stroke="currentColor" strokeWidth="2.5" />
      </>
    ),
  },
  {
    title: "Elétrica automotiva",
    desc: "Diagnóstico e reparo do sistema elétrico do veículo.",
    icon: (
      <path
        d="M110 20 L60 65 H90 L70 100 L140 55 H110 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Martelinho de ouro",
    desc: "Remoção de amassados preservando a pintura original.",
    icon: (
      <>
        <circle cx="100" cy="60" r="30" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M85 60 Q100 45 115 60" stroke="currentColor" strokeWidth="2.5" fill="none" />
      </>
    ),
  },
];

const services = [
  ["01", "Fibra de vidro", "Fabricação e preparação de peças sob medida."],
  ["02", "Funilaria e pintura", "Serviço geral com acabamento profissional."],
  ["03", "Veículos sinistrados", "Reforma completa de colisão e sinistro."],
  ["04", "Customização", "Restauração automotiva e personalização tunning."],
  ["05", "Elétrica automotiva", "Diagnóstico e reparo do sistema elétrico."],
  ["06", "Martelinho de ouro", "Remoção de amassados sem afetar a pintura."],
];

function Index() {
  return (
    <>
      <div className="texture" />

      <header>
        <div className="wrap">
          <div className="brand">
            AUTO RÉPTIL <span>CUSTOM</span>
          </div>
          <nav className="nav">
            <a href="#servicos">Serviços</a>
            <a href="#oficina">A oficina</a>
            <a href="#galeria">Trabalhos</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="header-actions">
            <a className="call-pill" href="tel:+5511972305846"><Phone size={15} /> (11) 97230-5846</a>
            <details className="mobile-menu">
              <summary className="menu-button" aria-label="Abrir menu"><Menu /></summary>
              <nav className="mobile-nav" aria-label="Navegação móvel">
                <a href="#servicos">Serviços</a>
                <a href="#oficina">A oficina</a>
                <a href="#galeria">Trabalhos</a>
                <a href="#contato">Contato</a>
                <a href="tel:+5511972305846"><Phone size={16} /> Ligar agora</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section className="hero">
        <img className="hero-image" src={heroImage} alt="Carro customizado em oficina de pintura automotiva" width={1600} height={1008} fetchPriority="high" />
        <div className="hero-scrim" />
        <div className="wrap">
          <div className="hero-copy">
            <div className="status-row">
              <span className="dot open" />
              <span>Sexta 08:00–18:00 · Sábado 08:00–13:00</span>
            </div>
            <h1>
              Auto Réptil <em>Custom</em>
            </h1>
            <p className="lead">
              Fabricação em fibra de vidro, reforma de veículos sinistrados, martelinho de ouro e acabamento
              tunning — tudo feito à mão em Campo Limpo Paulista.
            </p>
            <div className="hero-cta">
              <Button asChild className="btn btn-primary" size="lg"><a href="tel:+5511972305846"><Phone /> Solicitar orçamento</a></Button>
              <Button asChild className="btn btn-ghost" variant="outline" size="lg"><a href="#servicos">Nossos serviços <ArrowUpRight /></a></Button>
            </div>
            <div className="quick-facts">
              <div className="fact"><b>8+</b><span>Serviços</span></div>
              <div className="fact"><b>100%</b><span>Sob medida</span></div>
              <div className="fact"><b>SP</b><span>Campo Limpo</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="wrap">
          <div className="section-head">
            <div><p className="section-kicker">Performance & estilo</p><h2>O que sai da oficina</h2></div>
            <p>Cada serviço é tratado como peça sob medida — do reparo estrutural ao acabamento visível.</p>
          </div>
          <div className="service-grid">
            {services.map(([num, title, desc]) => (
              <div className="service" key={num}>
                <div className="num">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="oficina">
        <div className="wrap">
          <div>
            <h2>Ambiente limpo, organizado e atenção real aos detalhes.</h2>
            <p>
              A Auto Réptil Custom trabalha com fabricação e preparação em fibra de vidro, funilaria e pintura
              em geral, reforma de veículos sinistrados, customização, restauração automotiva, peças sob
              medida, tunning, elétrica automotiva e martelinho de ouro — tudo sob o mesmo teto.
            </p>
          </div>
          <div className="stat-list">
            <div className="stat">
              <b>8+</b>
              <span>frentes de serviço no mesmo local</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>peças fabricadas sob medida</span>
            </div>
            <div className="stat">
              <b>1</b>
              <span>equipe, do reparo ao acabamento</span>
            </div>
            <div className="stat">
              <b>SP</b>
              <span>Campo Limpo Paulista</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="galeria">
        <div className="wrap">
          <div className="section-head">
            <h2>Trabalhos por etapa</h2>
            <p>Um retrato de cada serviço — clique para ver do que se trata.</p>
          </div>
          <div className="viewer">
            <div className="scene-grid">
              {scenes.map((scene) => (
                <article className="scene" key={scene.title}>
                  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="70" width="180" height="8" rx="2" fill="currentColor" opacity=".35" />
                    {scene.icon}
                  </svg>
                  <h4>{scene.title}</h4>
                  <p>{scene.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-panel">
              <h2>Fale com a oficina</h2>
              <p>
                Ligue para orçar o serviço ou passe no endereço abaixo — atendimento presencial em Campo Limpo
                Paulista.
              </p>

              <div className="info-row">
                 <span className="ic"><Phone size={18} /></span>
                <div>
                  <b>Telefone</b>
                  <a href="tel:+5511972305846">(11) 97230-5846</a>
                </div>
              </div>
              <div className="info-row">
                 <span className="ic"><MapPin size={18} /></span>
                <div>
                  <b>Endereço</b>
                  <span>R. Espanha, 149 — Jardim Europa, Campo Limpo Paulista - SP, 13232-041</span>
                </div>
              </div>
              <div className="info-row">
                 <span className="ic"><Wrench size={18} /></span>
                <div>
                  <b>Especialidade</b>
                  <span>Fibra de vidro, funilaria, pintura, martelinho de ouro e tunning</span>
                </div>
              </div>
            </div>

            <div className="hours-panel">
              <h3>Horário de funcionamento</h3>
              <div className="badge">
                <span className="dot open" />
                <span>Atendimento sexta e sábado</span>
              </div>
              <table className="hours-table">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.d}>
                      <td>{h.d}</td>
                      <td>{h.open ? h.open + " – " + h.close : "Fechado"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Auto+R%C3%A9ptil+Custom+R.+Espanha+149+Campo+Limpo+Paulista"
                target="_blank"
                rel="noopener"
              >
                <span>Ver rota no mapa</span>
                 <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>Auto Réptil Custom — R. Espanha, 149, Jardim Europa, Campo Limpo Paulista - SP</p>
          <p>Sexta 08:00–18:00 · Sábado 08:00–13:00</p>
        </div>
      </footer>
    </>
  );
}
