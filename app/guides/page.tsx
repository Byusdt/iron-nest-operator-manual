import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { categories, guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "IRON NEST Guides — Missions, Ballistics, Shells & Systems",
  description: "Browse source-led IRON NEST guides for beginners, firing calculations, moving targets, missions, shells, saves, Steam Deck, and PC performance.",
};

const statusLabel = {
  Confirmed: "CONFIRMED",
  "Version check": "VERSION CHECK",
  "Field test": "FIELD TEST",
};

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="archive">
        <header className="archive-hero">
          <p className="kicker"><span /> FIELD ARCHIVE · 17 OPERATOR FILES</p>
          <h1>Guide Index</h1>
          <p>
            Start with the operating cycle, then move into ballistics, missions,
            ammunition, saves, and hardware. Every file shows how strongly its
            current claims are supported.
          </p>
          <nav className="category-tabs" aria-label="Guide categories">
            {categories.map((category) => (
              <a href={`#${category.toLowerCase().replaceAll(" ", "-")}`} key={category}>{category}</a>
            ))}
          </nav>
        </header>

        <div className="archive-body">
          {categories.map((category) => {
            const items = guides.filter((guide) => guide.category === category);
            return (
              <section className="archive-section" id={category.toLowerCase().replaceAll(" ", "-")} key={category}>
                <div className="archive-title">
                  <span>{String(categories.indexOf(category) + 1).padStart(2, "0")}</span>
                  <h2>{category}</h2>
                  <small>{items.length} FILES</small>
                </div>
                <div className="archive-grid">
                  {items.map((guide) => (
                    <article className="archive-card" key={guide.slug}>
                      <div className="archive-card-meta">
                        <span className={`status status-${guide.status.toLowerCase().replace(" ", "-")}`}>
                          {statusLabel[guide.status]}
                        </span>
                        <time>{guide.updated}</time>
                      </div>
                      <h3>{guide.shortTitle}</h3>
                      <p>{guide.summary}</p>
                      <Link href={`/guides/${guide.slug}`}>OPEN FILE <span aria-hidden="true">→</span></Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
