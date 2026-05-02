"use client";

import { useState, useEffect, useRef } from "react";

/* ─── TOKENS ─────────────────────────────────────────────────────────────── */

const C = {
  bg:        "#0B0B0B",
  bgAlt:     "#0F0F0F",
  bgCard:    "#111111",
  white:     "#FFFFFF",
  gray:      "#6B7280",
  grayLight: "#9CA3AF",
  blue:      "#3B82F6",
  blueDark:  "#1E3A8A",
  border:    "rgba(255,255,255,0.07)",
  borderSub: "rgba(255,255,255,0.03)",
} as const;

const F = {
  display: '"Bebas Neue", cursive',
  body:    '"Inter", sans-serif',
} as const;

/* ─── RIDER IMAGES (Unsplash placeholders) ───────────────────────────────── */
// Replace with real rider photography in production

const RIDER_IMGS = [
  "/riders/abraham-alfarojpg.jpg",
  "/riders/fabio-prado.jpg",
  "/riders/elias-chavarria.jpg",
  "/riders/brandon-alvarado.jpg",
  "/riders/ignacio-galva.jpg",
  "/riders/rodri.jpg",
  "/riders/tiago-martung.jpg",
];

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const NAV = ["Inicio","Equipo","Riders","Carreras","Academia","Media","Sponsors","Tienda","Contacto"];

const RIDERS = [
  { name: "Abraham Alfaro",    cat: "MX1",  num: "1"  },
  { name: "Fabio Prado",       cat: "MX2",  num: "21" },
  { name: "Elías Chavarría",   cat: "85CC", num: "31" },
  { name: "Brando Alvarado",   cat: "65CC", num: "7"  },
  { name: "Ignacio Galva",     cat: "50CC", num: "4"  },
  { name: "Rodrigo Chavarría", cat: "50CC", num: "11" },
  { name: "Tiago Martung",     cat: "50CC", num: "22" },
];

const STATS = [
  { n: "25+", label: "Podios en competencias\nnacionales" },
  { n: "10+", label: "Campeonatos\nparticipados" },
  { n: "20+", label: "Riders en\ndesarrollo" },
  { n: "1",   label: "Misión: formar\ncampeones" },
];

const SPONSORS = ["BAC Credomatic","KN1 Brand","MotoX CR","CR Sports","Sport Partner","Enduro CR"];

const MEDIA = [
  { title: "Entrenamientos",    tag: "Training",          img: "/entrenamientos.jpg" },
  { title: "Carreras",          tag: "Race Day",           img: "/carreras.jpg" },
  { title: "Detrás de cámaras", tag: "Behind the Scenes",  img: "/detras-de-camaras.jpg" },
];

/* ─── MICRO COMPONENTS ───────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: F.body, fontSize: 9, fontWeight: 700,
      letterSpacing: "0.28em", textTransform: "uppercase",
      color: C.gray, marginBottom: 20,
    }}>{children}</p>
  );
}

function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: F.display,
      fontSize: "clamp(48px, 6vw, 80px)",
      lineHeight: 0.93,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: C.white,
      ...style,
    }}>{children}</h2>
  );
}

function Blue({ children }: { children: React.ReactNode }) {
  return <span style={{ color: C.blue }}>{children}</span>;
}

function Divider() {
  return <div style={{ width: "100%", height: 1, background: C.border }} />;
}

function CTA({
  children, variant = "solid", href = "#", sm = false,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  href?: string;
  sm?: boolean;
}) {
  const [hov, setHov] = useState(false);
  const px = sm ? 18 : 28;
  const py = sm ? 10 : 15;
  const fs = sm ? 10 : 11;

  const map = {
    solid:   { bg: hov ? "#E5E7EB" : C.white, color: C.bg,  border: C.white },
    outline: { bg: "transparent",             color: hov ? C.white : C.grayLight, border: hov ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)" },
    ghost:   { bg: "transparent",             color: hov ? C.white : C.gray,      border: "transparent" },
  };

  const s = map[variant];

  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: F.body, fontSize: fs, fontWeight: 600,
        letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
        padding: `${py}px ${px}px`,
        background: s.bg, color: s.color,
        border: `1.5px solid ${s.border}`,
        transition: "all 0.2s ease",
        cursor: "pointer", whiteSpace: "nowrap",
      }}>
      {children}
    </a>
  );
}

/* ─── ICONS ──────────────────────────────────────────────────────────────── */

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

/* ─── NAVBAR ─────────────────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(11,11,11,0.97)" : "rgba(11,11,11,0.5)",
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      backdropFilter: "blur(20px)",
      transition: "all 0.35s ease",
    }}>
      <nav style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontFamily: F.display, fontSize: 21, letterSpacing: "0.18em", color: C.white }}>
            KN1&nbsp;<span style={{ color: C.blue }}>Sports</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center" }} className="desk-nav">
          {NAV.map(item => <NavItem key={item} label={item} />)}
        </div>

        {/* Socials */}
        <div style={{ display: "flex", alignItems: "center", gap: 22, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 18 }} className="desk-nav">
            {[
              { icon: <Ig key="ig"/>, href: "https://www.instagram.com/kn1sports/" },
              { icon: <Yt key="yt"/>, href: "#" },
              { icon: <Fb key="fb"/>, href: "https://www.facebook.com/p/KN1Sports-61568730316057/" },
            ].map(({ icon, href }, i) => (
              <SocialIcon key={i} href={href}>{icon}</SocialIcon>
            ))}
          </div>
          {/* Mobile toggle */}
          <button onClick={() => setOpen(o => !o)} className="mob-btn"
            style={{ display: "none", background: "none", border: "none", color: C.white, cursor: "pointer", padding: 4, lineHeight: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "8px 48px 20px", borderTop: `1px solid ${C.border}` }}>
          {NAV.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", color: C.gray, textDecoration: "none", fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: `1px solid ${C.borderSub}`, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.white)}
              onMouseLeave={e => (e.currentTarget.style.color = C.gray)}>
              {item}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { .desk-nav { display: none !important; } .mob-btn { display: flex !important; } }
      `}</style>
    </header>
  );
}

const NAV_HREFS: Record<string, string> = {
  "Media": "/media",
};

function NavItem({ label }: { label: string }) {
  const [hov, setHov] = useState(false);
  const href = NAV_HREFS[label] ?? `#${label.toLowerCase()}`;
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: F.body, fontSize: 10, fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: hov ? C.white : C.gray,
        textDecoration: "none",
        padding: "6px 14px",
        borderBottom: hov ? `2px solid ${C.blue}` : "2px solid transparent",
        transition: "color 0.2s, border-color 0.2s",
      }}>
      {label}
    </a>
  );
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

/* ─── HERO ───────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="inicio" style={{ display: "flex", minHeight: "100vh", background: C.bg, position: "relative" }}>

      {/* LEFT */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 80px 96px 80px",
        width: "52%", flexShrink: 0,
        position: "relative", zIndex: 2,
        paddingTop: 160,
      }} className="hero-l">

        <Eyebrow>Pasión. Disciplina.</Eyebrow>

        <h1 style={{
          fontFamily: F.display,
          fontSize: "clamp(100px, 15.5vw, 200px)",
          lineHeight: 0.86,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          color: C.white,
          marginBottom: 36,
        }}>
          KN1<br/>
          <span style={{ color: C.blue }}>Sports</span>
        </h1>

        <p style={{
          fontFamily: F.body, fontSize: 14, lineHeight: 1.75,
          color: C.gray, maxWidth: 340, marginBottom: 52,
        }}>
          Formamos a la próxima generación de campeones del motocross en Costa Rica.
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          <CTA variant="solid" href="#equipo">Ver Equipo <ChevronRight/></CTA>
          <CTA variant="outline" href="#carreras">Ver Carreras</CTA>
        </div>

        {/* Counter */}
        <div style={{ position: "absolute", bottom: 48, left: 80, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: F.display, fontSize: 20, color: C.white, letterSpacing: "0.12em" }}>01</span>
          <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.15)", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "33%", background: C.blue }} />
          </div>
          <span style={{ fontFamily: F.display, fontSize: 16, color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em" }}>03</span>
        </div>
      </div>

      {/* RIGHT — Action shot */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }} className="hero-r">
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/kn1-sports.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 20%",
        }} />
        {/* Blend left edge */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${C.bg} 0%, rgba(11,11,11,0.1) 35%, transparent 100%)` }} />
        {/* Top/bottom fades */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,11,11,0.55) 0%, transparent 25%, transparent 70%, rgba(11,11,11,0.75) 100%)" }} />

        {/* DESLIZA */}
        <div style={{
          position: "absolute", right: 28, top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.2)" }} />
          <span style={{ fontFamily: F.body, fontSize: 8, letterSpacing: "0.38em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Desliza</span>
        </div>
      </div>

      {/* Bottom blend to next section */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(to bottom, transparent, ${C.bg})`, zIndex: 3, pointerEvents: "none" }} />

      <style>{`
        @media (max-width: 960px) {
          .hero-l { width: 100% !important; padding: 120px 28px 80px !important; }
          .hero-r { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── FOUNDER ────────────────────────────────────────────────────────────── */

function Founder() {
  return (
    <section id="equipo" style={{ background: C.bg, padding: "160px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }} className="g2">

          <div>
            <Eyebrow>Nuestra Historia</Eyebrow>
            <H2 style={{ marginBottom: 32 }}>
              Más que un equipo,<br/>
              <Blue>somos una familia.</Blue>
            </H2>
            <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.85, color: C.gray, maxWidth: 420, marginBottom: 44 }}>
              KN1 Sports es un proyecto de vida de Keylor Navas para impulsar el talento, la disciplina y los valores en el motocross. Trabajamos cada día para formar atletas integrales que representen a Costa Rica en lo más alto.
            </p>
            <CTA variant="outline" href="#">Conoce Más <ChevronRight/></CTA>
          </div>

          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('/keylor-navas.jpg')",
              backgroundSize: "cover", backgroundPosition: "center top",
            }} />
            {/* Info */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "48px 28px 28px",
              background: "linear-gradient(to top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.6) 55%, transparent 100%)",
            }}>
              <div style={{ width: 28, height: 2, background: C.blue, marginBottom: 14 }} />
              <div style={{ fontFamily: F.display, fontSize: 19, letterSpacing: "0.14em", color: C.white, textTransform: "uppercase" }}>
                Keylor Navas
              </div>
              <div style={{ fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", color: C.blue, textTransform: "uppercase", marginTop: 5 }}>
                Fundador
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .g2 { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

/* ─── RIDERS ─────────────────────────────────────────────────────────────── */

function Riders() {
  return (
    <section id="riders" style={{ background: C.bgAlt, paddingBottom: "160px" }}>
      <Divider />
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 0" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <Eyebrow>Nuestros Riders</Eyebrow>
            <H2>
              Talento, enfoque y{" "}
              <Blue>determinación.</Blue>
            </H2>
          </div>
          <CTA variant="ghost" href="#">Ver todos los riders <ChevronRight/></CTA>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }} className="rg">
          {RIDERS.map((r, i) => <RiderCard key={i} rider={r} img={RIDER_IMGS[i]} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .rg { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 720px)  { .rg { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 460px)  { .rg { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function RiderCard({ rider, img }: { rider: typeof RIDERS[0]; img: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden", cursor: "pointer", background: "#0d0d0d" }}
    >
      {/* Photo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover", backgroundPosition: "center top",
        transform: hov ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }} />

      {/* Constant base overlay — keeps image from being too bright */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.28)" }} />

      {/* Blue hover glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, rgba(30,58,138,0.35) 0%, transparent 60%)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Bottom gradient — always present, stronger */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "65%",
        background: "linear-gradient(to top, rgba(11,11,11,0.98) 0%, rgba(11,11,11,0.6) 50%, transparent 100%)",
      }} />

      {/* Number — top right, subtle */}
      <div style={{
        position: "absolute", top: 16, right: 16,
        fontFamily: F.display, fontSize: 13,
        letterSpacing: "0.1em",
        color: hov ? C.blue : "rgba(255,255,255,0.3)",
        transition: "color 0.3s",
      }}>
        #{rider.num}
      </div>

      {/* Info */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 22px" }}>
        {/* Animated blue line */}
        <div style={{
          height: 1.5, background: C.blue,
          width: hov ? 24 : 0,
          marginBottom: 12,
          transition: "width 0.35s ease",
        }} />
        <div style={{
          fontFamily: F.display, fontSize: 17, letterSpacing: "0.1em",
          color: C.white, textTransform: "uppercase", lineHeight: 1,
        }}>
          {rider.name}
        </div>
        <div style={{
          fontFamily: F.body, fontSize: 9, fontWeight: 700,
          letterSpacing: "0.24em", textTransform: "uppercase",
          color: hov ? C.blue : "rgba(255,255,255,0.35)",
          marginTop: 6,
          transition: "color 0.3s",
        }}>
          {rider.cat}
        </div>
      </div>
    </div>
  );
}

/* ─── STATS ──────────────────────────────────────────────────────────────── */

function useCountUp(target: number, duration = 1800, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({ s, index, triggered }: { s: typeof STATS[0]; index: number; triggered: boolean }) {
  const num = parseInt(s.n.replace(/\D/g, ""), 10);
  const suffix = s.n.replace(/[0-9]/g, "");
  const count = useCountUp(num, 1800, triggered);
  return (
    <div style={{ padding: "80px 40px", borderLeft: index > 0 ? `1px solid ${C.border}` : "none" }}>
      <div style={{
        fontFamily: F.display,
        fontSize: "clamp(80px, 10vw, 128px)",
        lineHeight: 0.88,
        letterSpacing: "0.02em",
        color: C.white,
        marginBottom: 20,
      }}>
        {triggered ? `${count}${suffix}` : s.n}
      </div>
      <div style={{
        fontFamily: F.body, fontSize: 11,
        lineHeight: 1.65, color: C.gray,
        letterSpacing: "0.04em",
        whiteSpace: "pre-line",
      }}>
        {s.label}
      </div>
    </div>
  );
}

function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: C.bg }}>
      <Divider />
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="sg">
          {STATS.map((s, i) => <StatItem key={i} s={s} index={i} triggered={triggered} />)}
        </div>
      </div>
      <Divider />
      <style>{`
        @media (max-width: 768px) {
          .sg { grid-template-columns: repeat(2, 1fr) !important; }
          .sg > div { border-left: none !important; border-top: 1px solid ${C.border} !important; }
          .sg > div:nth-child(2n) { border-left: 1px solid ${C.border} !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── EVENT ──────────────────────────────────────────────────────────────── */

function Event() {
  return (
    <section id="carreras" style={{ background: C.bgAlt, padding: "160px 0" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">

          {/* Image */}
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('/campeonato-nacional.jpg')",
              backgroundSize: "cover", backgroundPosition: "center",
            }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(11,11,11,0.25)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: C.blue }} />
          </div>

          {/* Info */}
          <div>
            <Eyebrow>Próxima Carrera</Eyebrow>
            <H2 style={{ marginBottom: 40 }}>
              Campeonato Nacional<br/>
              <Blue>de Motocross</Blue>
            </H2>

            {[
              { k: "Fecha",      v: "25 – 26 Mayo, 2024" },
              { k: "Lugar",      v: "Pista La Orozca, Alajuela" },
              { k: "Categorías", v: "MX1 · MX2 · 85CC · 65CC · 50CC" },
            ].map((row, i, arr) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "18px 0" }}>
                  <span style={{ fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.gray }}>
                    {row.k}
                  </span>
                  <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.white, textAlign: "right", maxWidth: "60%" }}>
                    {row.v}
                  </span>
                </div>
                {i < arr.length - 1 && <div style={{ height: 1, background: C.borderSub }} />}
              </div>
            ))}

            <div style={{ marginTop: 44 }}>
              <CTA variant="solid" href="#">Ver Calendario <ChevronRight/></CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SPONSORS ───────────────────────────────────────────────────────────── */

function Sponsors() {
  return (
    <section id="sponsors" style={{ background: C.bg, padding: "140px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 0", textAlign: "center" }}>

        <Eyebrow>Partners</Eyebrow>
        <H2 style={{ marginBottom: 72 }}>
          Aliados que <Blue>impulsan el futuro</Blue>
        </H2>

        <div style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "center", alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 56,
        }}>
          {SPONSORS.map((s, i) => <SponsorItem key={i} name={s} last={i === SPONSORS.length - 1} />)}
        </div>

        <p style={{ fontFamily: F.body, fontSize: 12, color: C.gray, marginBottom: 22 }}>
          ¿Querés unirte como aliado de KN1 Sports?
        </p>
        <CTA variant="outline" href="#">Convertite en Sponsor <ChevronRight/></CTA>
      </div>
    </section>
  );
}

function SponsorItem({ name, last }: { name: string; last: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "36px 52px",
        borderRight: last ? "none" : `1px solid ${C.border}`,
        background: hov ? "rgba(255,255,255,0.015)" : "transparent",
        transition: "background 0.2s",
        cursor: "pointer",
      }}
    >
      <span style={{
        fontFamily: F.body, fontSize: 11, fontWeight: 800,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: hov ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.18)",
        transition: "color 0.25s",
      }}>
        {name}
      </span>
    </div>
  );
}

/* ─── MEDIA ──────────────────────────────────────────────────────────────── */

function MediaSection() {
  return (
    <section id="media" style={{ background: C.bgAlt, padding: "160px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 0" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <Eyebrow>Media</Eyebrow>
            <H2>Últimos momentos <Blue>KN1</Blue></H2>
          </div>
          <CTA variant="ghost" href="#">Ver todo <ChevronRight/></CTA>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }} className="mg">
          {MEDIA.map((m, i) => <MediaCard key={i} item={m} />)}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .mg { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function MediaCard({ item }: { item: typeof MEDIA[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", cursor: "pointer" }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${item.img}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        transform: hov ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }} />
      <div style={{ position: "absolute", inset: 0, background: hov ? "rgba(11,11,11,0.25)" : "rgba(11,11,11,0.5)", transition: "background 0.35s" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(11,11,11,0.97) 0%, transparent 100%)" }} />

      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <span style={{ fontFamily: F.body, fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.blue }}>
          {item.tag}
        </span>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 20px" }}>
        <div style={{ width: hov ? 20 : 0, height: 1.5, background: C.blue, marginBottom: 10, transition: "width 0.3s" }} />
        <div style={{ fontFamily: F.display, fontSize: 22, letterSpacing: "0.06em", color: C.white, textTransform: "uppercase" }}>
          {item.title}
        </div>
      </div>
    </div>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section style={{ background: C.bg, padding: "160px 0", position: "relative", overflow: "hidden" }}>
      <Divider />
      {/* Subtle background watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: F.display,
        fontSize: "clamp(140px, 20vw, 260px)",
        letterSpacing: "0.08em",
        color: "rgba(59,130,246,0.025)",
        whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none",
        lineHeight: 1,
      }}>
        KN1
      </div>

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 48px 0", position: "relative", zIndex: 1 }}>
        <Eyebrow>Únete</Eyebrow>
        <h2 style={{
          fontFamily: F.display,
          fontSize: "clamp(56px, 8vw, 104px)",
          lineHeight: 0.9,
          letterSpacing: "0.04em",
          color: C.white,
          textTransform: "uppercase",
          maxWidth: 860,
          marginBottom: 28,
        }}>
          El futuro del motocross{" "}
          <Blue>empieza aquí.</Blue>
        </h2>

        <p style={{ fontFamily: F.body, fontSize: 14, color: C.gray, maxWidth: 400, marginBottom: 52, lineHeight: 1.75 }}>
          Unite a KN1 Sports como rider, sponsor o aliado estratégico.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <CTA variant="solid" href="#">Unirse a KN1 <ChevronRight/></CTA>
          <CTA variant="outline" href="#">Contactar</CTA>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────── */

function Footer() {
  const cols = [
    { title: "Equipo",    links: ["Historia", "Riders", "Equipo Técnico", "Academia"] },
    { title: "Competir",  links: ["Calendario", "Resultados", "Categorías", "Media"] },
    { title: "Contacto",  links: ["Únete al equipo", "Patrocinar", "Prensa", "kn1sports.com"] },
  ];

  return (
    <footer style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, padding: "80px 0 36px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }} className="fg">
          <div>
            <span style={{ fontFamily: F.display, fontSize: 20, letterSpacing: "0.18em", color: C.white, display: "block", marginBottom: 16 }}>
              KN1 <span style={{ color: C.blue }}>Sports</span>
            </span>
            <p style={{ fontFamily: F.body, fontSize: 12, color: C.gray, lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
              Equipo de motocross fundado por Keylor Navas. Formamos campeones en Costa Rica.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { icon: <Ig key="ig"/>, href: "https://www.instagram.com/kn1sports/" },
                { icon: <Yt key="yt"/>, href: "#" },
                { icon: <Fb key="fb"/>, href: "https://www.facebook.com/p/KN1Sports-61568730316057/" },
              ].map(({ icon, href }, i) => (
                <SocialIcon key={i} href={href}>{icon}</SocialIcon>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: F.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.blue, marginBottom: 22 }}>
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(link => <FLink key={link} label={link} />)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${C.borderSub}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: F.body, fontSize: 11, color: "rgba(255,255,255,0.18)" }}>
            © 2024 KN1 Sports. Todos los derechos reservados.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacidad","Términos","Cookies"].map(item => <FLink key={item} label={item} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .fg { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .fg { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FLink({ label }: { label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href="#" style={{ fontFamily: F.body, fontSize: 12, color: hov ? "rgba(255,255,255,0.6)" : C.gray, textDecoration: "none", transition: "color 0.2s" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </a>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main style={{ background: C.bg, color: C.white, overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Founder />
      <Riders />
      <Stats />
      <Event />
      <Sponsors />
      <MediaSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
