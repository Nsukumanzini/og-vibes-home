import type { Metadata } from "next";
import Link from "next/link";
import { releases } from "../releases";

export const metadata: Metadata = {
  title: "Version updates",
  description: "See the latest improvements and fixes in OG Vibes.",
};

export default function UpdatesPage() {
  return (
    <main className="updates-page">
      <header className="updates-header">
        <nav className="site-header">
          <Link className="brand" href="/" aria-label="OG Vibes home">
            <img src="/brand/logo.png" alt="" />
            <span><b>OG VIBES</b><small>by OG Technologies</small></span>
          </Link>
          <Link className="button button-small button-outline" href="/">Back to home</Link>
        </nav>
        <div className="updates-hero">
          <p className="eyebrow"><span /> Version updates</p>
          <h1>What is new in OG Vibes.</h1>
          <p>New student features, improvements and fixes included in each OG Vibes app release.</p>
        </div>
      </header>

      <section className="release-list" aria-label="OG Vibes releases">
        {releases.map((release) => (
          <article className="release-card" key={`${release.version}-${release.date}`}>
            <div className="release-version">
              <b>{release.version}</b>
              <small>{release.date}</small>
            </div>
            <div>
              <h2>{release.title}</h2>
              <p>{release.summary}</p>
              <ul>{release.changes.map((change) => <li key={change}>{change}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
