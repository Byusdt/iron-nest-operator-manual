import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { guideBySlug, guides } from "@/lib/guides";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) return {};

  const title = `${guide.shortTitle} | IRON NEST Wiki`;
  const description = `${guide.summary} Updated for version 1.0 with cited sources and verification notes.`;

  return {
    title,
    description,
    openGraph: { title, description, images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) notFound();

  const currentIndex = guides.findIndex((item) => item.slug === guide.slug);
  const previous = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const next = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  return (
    <>
      <SiteHeader />
      <main className="manual">
        <header className="manual-hero">
          <div className="manual-hero-grid" aria-hidden="true" />
          <div className="manual-breadcrumb">
            <Link href="/">HOME</Link><span>/</span>
            <Link href="/guides">GUIDES</Link><span>/</span>
            <b>{guide.category.toUpperCase()}</b>
          </div>
          <div className="manual-heading">
            <div>
              <p className="kicker"><span /> OPERATOR FILE · {String(currentIndex + 1).padStart(2, "0")}</p>
              <h1>{guide.title}</h1>
              <p>{guide.summary}</p>
            </div>
            <dl className="manual-stamp">
              <div><dt>STATUS</dt><dd>{guide.status}</dd></div>
              <div><dt>UPDATED</dt><dd>{guide.updated}</dd></div>
              <div><dt>SOURCES</dt><dd>{guide.sources.length} CHECKED</dd></div>
            </dl>
          </div>
        </header>

        <div className="manual-layout">
          <aside className="manual-toc" aria-label="On this page">
            <span>ON THIS PAGE</span>
            <ol>
              {guide.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {section.heading}
                  </a>
                </li>
              ))}
              <li><a href="#sources"><small>{String(guide.sections.length + 1).padStart(2, "0")}</small>Sources</a></li>
            </ol>
          </aside>

          <article className="manual-content">
            {guide.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <div className="section-number">{String(index + 1).padStart(2, "0")}</div>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.steps && (
                  <ol className="procedure">
                    {section.steps.map((step, stepIndex) => (
                      <li key={step}><span>{String(stepIndex + 1).padStart(2, "0")}</span><p>{step}</p></li>
                    ))}
                  </ol>
                )}
                {section.facts && (
                  <dl className="fact-grid">
                    {section.facts.map((fact) => (
                      <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
                    ))}
                  </dl>
                )}
                {section.warning && <aside className="warning"><strong>FIELD NOTE</strong><p>{section.warning}</p></aside>}
              </section>
            ))}

            <section id="sources" className="source-section">
              <div className="section-number">{String(guide.sections.length + 1).padStart(2, "0")}</div>
              <h2>Sources and verification</h2>
              <p>Claims on this page were written from the following records. Community findings are labelled and kept separate from official statements.</p>
              <div className="source-list">
                {guide.sources.map((source, index) => (
                  <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><small>{source.type}</small><strong>{source.label}</strong></div>
                    <b aria-hidden="true">↗</b>
                  </a>
                ))}
              </div>
            </section>
          </article>

          <aside className="evidence-card">
            <span>EVIDENCE STANDARD</span>
            <strong>{guide.status}</strong>
            <p>
              {guide.status === "Confirmed"
                ? "Suitable for publication with the linked sources and date shown."
                : guide.status === "Version check"
                  ? "Publish with a version note and recheck after substantial patches."
                  : "Method is useful, but exact outputs require an in-game sample test."}
            </p>
            <Link href="/guides">RETURN TO ARCHIVE <span aria-hidden="true">→</span></Link>
          </aside>
        </div>

        <nav className="manual-pagination" aria-label="Guide pagination">
          {previous ? <Link href={`/guides/${previous.slug}`}><small>PREVIOUS FILE</small><strong>← {previous.shortTitle}</strong></Link> : <span />}
          {next ? <Link href={`/guides/${next.slug}`}><small>NEXT FILE</small><strong>{next.shortTitle} →</strong></Link> : <span />}
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
