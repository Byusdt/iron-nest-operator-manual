import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const quickLinks = [
  { label: "NEW OPERATOR", href: "/guides/beginner-guide", note: "First firing solution" },
  { label: "FIRE CONTROL", href: "/guides/firing-calculator", note: "Range, charge, elevation" },
  { label: "MISSIONS", href: "/guides", note: "Walkthrough index" },
  { label: "SYSTEM SETUP", href: "/guides/system-requirements", note: "PC & Steam Deck" },
];

const featured = [
  {
    index: "01",
    eyebrow: "START HERE",
    title: "Beginner Field Manual",
    text: "Read the order, plot the target, choose the charge, lay the guns, and review the result without skipping a station.",
    href: "/guides/beginner-guide",
  },
  {
    index: "02",
    eyebrow: "BALLISTICS",
    title: "Firing Calculator Guide",
    text: "A version-aware explanation of distance, powder charges, elevation, and the checks to run before every shot.",
    href: "/guides/firing-calculator",
  },
  {
    index: "03",
    eyebrow: "OPERATIONS",
    title: "Mission Walkthroughs",
    text: "Find mission-specific methods for Fire and Light, High Tide, moving targets, and the campaign's branching outcomes.",
    href: "/guides",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="home-title">
          <div className="hero-image" role="img" aria-label="Official IRON NEST Heavy Turret Simulator key art" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="kicker"><span /> UNOFFICIAL FIELD INTELLIGENCE · VERSION 1.0</p>
            <h1 id="home-title"><span>IRON NEST</span> Operator Manual</h1>
            <p className="hero-lede">Source-checked guides for firing solutions, mission procedures, shells, saves, and the machinery behind the 5,000-ton turret.</p>
            <div className="hero-actions">
              <Link href="/guides/beginner-guide" className="button button-primary">BEGIN FIELD TRAINING <span aria-hidden="true">→</span></Link>
              <Link href="/guides" className="button button-ghost">OPEN ALL GUIDES</Link>
            </div>
          </div>
          <dl className="hero-stats">
            <div><dt>RELEASED</dt><dd>AUG 06, 2026</dd></div>
            <div><dt>STEAM REVIEWS</dt><dd>97% POSITIVE</dd></div>
            <div><dt>CAMPAIGN</dt><dd>15 REGIONS</dd></div>
            <div><dt>UNLOCKS</dt><dd>30 AMMO + ABILITIES</dd></div>
          </dl>
        </section>

        <section className="quick-strip" aria-label="Quick guide access">
          {quickLinks.map((item) => (
            <Link href={item.href} key={item.label}>
              <span>{item.label}</span>
              <small>{item.note}</small>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </section>

        <section className="section-shell" id="field-manual">
          <div className="section-heading">
            <div>
              <p className="kicker"><span /> FIELD MANUAL</p>
              <h2>Every operation starts with a verified procedure.</h2>
            </div>
            <Link href="/guides" className="text-link">BROWSE GUIDE INDEX <span aria-hidden="true">→</span></Link>
          </div>

          <div className="feature-grid">
            {featured.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="card-topline"><span>{item.eyebrow}</span><b>{item.index}</b></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>OPEN MANUAL <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="briefing">
          <div>
            <p className="kicker"><span /> OPERATOR BRIEFING</p>
            <h2>Measure twice. Fire once.</h2>
          </div>
          <p>IRON NEST rewards methodical work. Our guides separate confirmed facts from community findings and clearly flag details that still require an in-game check.</p>
          <Link href="/guides/firing-calculator" className="button button-primary">STUDY FIRE CONTROL</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
