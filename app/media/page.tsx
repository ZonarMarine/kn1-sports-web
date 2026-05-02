"use client";

import { useState } from "react";

const C = {
  bg:        "#0B0B0B",
  bgAlt:     "#0F0F0F",
  bgCard:    "#111111",
  white:     "#FFFFFF",
  gray:      "#6B7280",
  grayLight: "#9CA3AF",
  blue:      "#3B82F6",
  border:    "rgba(255,255,255,0.07)",
  borderSub: "rgba(255,255,255,0.03)",
} as const;

const F = {
  display: '"Bebas Neue", cursive',
  body:    '"Inter", sans-serif',
} as const;

const ARTICLES = [
  {
    tag: "Equipo",
    title: "Keylor Navas presenta su equipo de motocross KN1",
    excerpt: "El proyecto incorporó dos fichajes para la temporada 2026. Keylor Navas presentó oficialmente su equipo de motocross KN1, reforzado con nuevos pilotos para competir en la próxima temporada.",
    img: "https://static3.teletica.com/Files/Sizes/2026/3/7/keylor-navas-presenta-su-equipo-de-motocross.-foto-melissa-alvar_1461932267_760x520.jpg",
    date: "7 Marzo 2026",
    href: "https://www.teletica.com/otros-deportes/keylor-navas-presenta-su-equipo-de-motocross-kn1_403615",
    source: "Teletica",
  },
  {
    tag: "Entrevista",
    title: "¿Ya sabe Keylor Navas qué hará cuando se retire del fútbol?",
    excerpt: "Le preguntamos directamente a Keylor Navas sobre sus planes una vez que cuelgue los guantes. El portero costarricense reveló que el motocross y su equipo KN1 forman parte de su visión para el retiro.",
    img: "https://www.lateja.cr/resizer/v2/E5XWJHCIP5DIZCTSJWTJ4OD2SU.JPG?smart=true&auth=2b61b08295c97c43c501b0ac339c152ab2ca7584eb8d9b9d9fe4ebd86b26e040&width=1440",
    date: "7 Marzo 2026",
    href: "https://www.lateja.cr/deportes/ya-sabe-keylor-navas-que-hara-cuando-se-retire-del/QFBAY3Z2DFGHHKSZHQAME5DU6Q/story/",
    source: "La Teja",
  },
  {
    tag: "Evento",
    title: "Keylor Navas anuncia que realizará un evento de motocross",
    excerpt: "El evento se llamará KN1 Motocross y será en San Mateo de Alajuela. Keylor Navas anunció este evento como parte de su proyecto para promover el motocross en Costa Rica.",
    img: "https://static3.teletica.com/Files/Sizes/2024/7/29/keylor-navas_1425660983_760x520.jpg",
    date: "24 Noviembre 2024",
    href: "https://www.teletica.com/motores/keylor-navas-anuncia-que-realizara-un-evento-de-motocross_371704",
    source: "Teletica",
  },
  {
    tag: "Equipo",
    title: "Este es el equipo KN1 que Keylor Navas está puliendo para competir",
    excerpt: "Keylor Navas dio a conocer los valores que está promoviendo en el equipo. El guardameta costarricense trabaja en consolidar su escuadra de motocross KN1 con jóvenes talentos nacionales.",
    img: "https://www.lateja.cr/resizer/v2/XTMBVEHIXVETJFIOGRIK37FC5Y.JPG?smart=true&auth=deff4d62af18e8ec8ed78d463443e91adedf041f62735f7c20a573beda6d5269&width=1440",
    date: "8 Marzo 2026",
    href: "https://www.lateja.cr/deportes/este-es-el-equipo-kn1-que-keylor-navas-esta/Y4YZHQ5NSVANLPQYEPBS6LUYQQ/story/",
    source: "La Teja",
  },
  {
    tag: "Cobertura",
    title: "Keylor Navas invierte en motocross y apuesta por jóvenes talentos ticos",
    excerpt: "El arquero tico presentó su equipo de motocross KN1, una iniciativa para impulsar jóvenes que también refleja una inversión personal de tiempo, dinero y valores familiares.",
    img: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0308%2Fr1624946_1296x729_16%2D9.jpg",
    date: "7 Marzo 2026",
    href: "https://www.espn.com.mx/futbol/costa-rica/nota/_/id/16404440/keylor-navas-equipo-motocross-kn1-costa-rica",
    source: "ESPN",
  },
  {
    tag: "Academia",
    title: "Keylor Navas le abre la puerta del motocross a niños y jóvenes con KN1",
    excerpt: "A través del equipo KN1, Keylor Navas busca darle oportunidades a niños y jóvenes costarricenses para desarrollarse en el deporte del motocross.",
    img: "https://observador.cr/wp-content/uploads/2025/03/KN1MOTOCROSS1-930x450.jpeg",
    date: "21 Marzo 2025",
    href: "https://observador.cr/keylor-navas-le-abre-la-puerta-del-motocross-a-ninos-y-jovenes-con-su-equipo-kn1/",
    source: "Observador",
  },
];

function Ig() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>;
}
function Yt() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>;
}
function Fb() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
}
function ChevronRight({ s = 13 }: { s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
}
function ChevronLeft({ s = 13 }: { s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
}

function SocialIcon({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
      style={{ color: hov ? C.white : "rgba(255,255,255,0.3)", transition: "color 0.2s", display: "flex", lineHeight: 0 }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
}

function ArticleCard({ article }: { article: typeof ARTICLES[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "pointer", background: C.bgCard, border: `1px solid ${hov ? "rgba(59,130,246,0.25)" : C.border}`, transition: "border-color 0.3s", overflow: "hidden", textDecoration: "none", display: "block" }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${article.img}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          transform: hov ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: hov ? "rgba(11,11,11,0.2)" : "rgba(11,11,11,0.4)", transition: "background 0.3s" }} />
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontFamily: F.body, fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.blue }}>
            {article.tag}
          </span>
          <span style={{ fontFamily: F.body, fontSize: 8, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: 8 }}>
            {article.source}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px" }}>
        <div style={{ width: hov ? 24 : 0, height: 1.5, background: C.blue, marginBottom: 14, transition: "width 0.3s" }} />
        <h3 style={{ fontFamily: F.display, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: C.white, lineHeight: 1.1, marginBottom: 12 }}>
          {article.title}
        </h3>
        <p style={{ fontFamily: F.body, fontSize: 12, lineHeight: 1.75, color: C.gray, marginBottom: 20 }}>
          {article.excerpt}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
            {article.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: hov ? C.blue : C.gray, transition: "color 0.2s" }}>
            Leer más <ChevronRight s={10} />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function MediaPage() {
  const NAV = ["Inicio","Equipo","Riders","Carreras","Academia","Media","Sponsors","Tienda","Contacto"];

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.white }}>

      {/* Navbar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(11,11,11,0.97)",
        borderBottom: `1px solid ${C.border}`,
        backdropFilter: "blur(20px)",
      }}>
        <nav style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <span style={{ fontFamily: F.display, fontSize: 21, letterSpacing: "0.18em", color: C.white }}>
              KN1&nbsp;<span style={{ color: C.blue }}>Sports</span>
            </span>
          </a>

          <div style={{ display: "flex", alignItems: "center" }} className="desk-nav">
            {NAV.map(item => {
              const isActive = item === "Media";
              const href = item === "Media" ? "/media" : `/#${item.toLowerCase()}`;
              return (
                <a key={item} href={href}
                  style={{
                    fontFamily: F.body, fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: isActive ? C.white : C.gray,
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderBottom: isActive ? `2px solid ${C.blue}` : "2px solid transparent",
                    transition: "color 0.2s, border-color 0.2s",
                  }}>
                  {item}
                </a>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 18 }} className="desk-nav">
            {[
              { icon: <Ig key="ig"/>, href: "https://www.instagram.com/kn1sports/" },
              { icon: <Yt key="yt"/>, href: "#" },
              { icon: <Fb key="fb"/>, href: "https://www.facebook.com/p/KN1Sports-61568730316057/" },
            ].map(({ icon, href }, i) => (
              <SocialIcon key={i} href={href}>{icon}</SocialIcon>
            ))}
          </div>
        </nav>
        <style>{`@media (max-width: 1024px) { .desk-nav { display: none !important; } }`}</style>
      </header>

      {/* Page header */}
      <div style={{ paddingTop: 64, background: C.bgAlt, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 64px" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gray, textDecoration: "none", marginBottom: 32 }}>
            <ChevronLeft s={10} /> Volver al inicio
          </a>
          <p style={{ fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gray, marginBottom: 16 }}>
            Media
          </p>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.9, letterSpacing: "0.04em", textTransform: "uppercase", color: C.white }}>
            Últimas noticias <span style={{ color: C.blue }}>KN1</span>
          </h1>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 160px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="mg">
          {ARTICLES.map((a, i) => <ArticleCard key={i} article={a} />)}
        </div>
      </div>

      <style>{`@media (max-width: 1024px) { .mg { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 640px) { .mg { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
