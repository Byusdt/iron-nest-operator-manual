import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Iron Nest Operator Manual home">
        <span className="brand-mark">IN</span>
        <span>
          <strong>IRON NEST</strong>
          <small>OPERATOR MANUAL</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/guides">GUIDES</Link>
        <Link href="/guides/firing-calculator">BALLISTICS</Link>
        <Link href="/guides/shell-types">ARSENAL</Link>
        <Link href="/guides/save-game">SYSTEMS</Link>
      </nav>
      <a
        className="steam-link"
        href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/"
        target="_blank"
        rel="noreferrer"
      >
        VIEW ON STEAM <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>IRON NEST OPERATOR MANUAL</strong>
        <p>
          An independent, source-led fan guide. Not affiliated with the game&apos;s
          developers or publishers.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/guides">Guides</Link>
        <a
          href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/"
          target="_blank"
          rel="noreferrer"
        >
          Official Steam page
        </a>
      </div>
    </footer>
  );
}
