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
    tag: "Entrenamiento",
    title: "KN1 Sports inicia temporada con intensos entrenamientos",
    excerpt: "El equipo se prepara para la temporada con sesiones diarias en La Orozca, enfocados en mejorar tiempos y técnica.",
    img: "/entrenamientos.jpg",
    date: "Abril 2024",
  },
  {
    tag: "Carrera",
    title: "Campeonato Nacional de Motocross: KN1 Sports listo para competir",
    excerpt: "Nuestros riders estarán presentes en todas las categorías del próximo Campeonato Nacional a celebrarse en Alajuela.",
    img: "/campeonato-nacional.jpg",
    date: "Mayo 2024",
  },
  {
    tag: "Detrás de cámaras",
    title: "Un día con el equipo KN1 Sports",
    excerpt: "Acompañamos al equipo durante una jornada completa de preparación, desde el amanecer hasta el último salto del día.",
    img: "/detras-de-camaras.jpg",
    date: "Marzo 2024",
  },
  {
    tag: "Carrera",
    title: "Resultados de la primera fecha del campeonato",
    excerpt: "El equipo KN1 Sports suma puntos importantes en la primera fecha de la temporada con podios en múltiples categorías.",
    img: "/carreras.jpg",
    date: "Febrero 2024",
  },
  {
    tag: "Equipo",
    title: "Keylor Navas y la visión detrás de KN1 Sports",
    excerpt: "El portero costarricense explica su motivación para crear un equipo de motocross de alto nivel en Costa Rica.",
    img: "/keylor-navas.jpg",
    date: "Enero 2024",
  },
  {
    tag: "Entrenamiento",
    title: "Los riders más jóvenes de KN1 muestran su talento",
    excerpt: "Las categorías 50CC y 65CC siguen creciendo, con nuevos talentos que prometen brillar en la próxima temporada.",
    img: "/kn1-sports.jpg",
    date: "Enero 2024",
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
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "pointer", background: C.bgCard, border: `1px solid ${hov ? "rgba(59,130,246,0.25)" : C.border}`, transition: "border-color 0.3s", overflow: "hidden" }}
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
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span style={{ fontFamily: F.body, fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.blue }}>
            {article.tag}
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
    </div>
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
