import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the people building and supporting the OG Vibes student experience.",
};

const team = [
  { name: "Mr Manzini", role: "Founder", initials: "MM", copy: "Leading the vision for a more connected, useful and student-first campus experience." },
  { name: "Mr Nxumalo", role: "System Engineer", initials: "MN", copy: "Building the reliable systems that keep OG Vibes secure, responsive and ready to grow." },
  { name: "Mr Maseko", role: "Support", initials: "MM", copy: "Helping students use OG Vibes confidently and making sure their feedback reaches the team." },
];

export default function TeamPage() {
  return <main className="team-page"><header className="team-header"><nav className="site-header"><Link className="brand" href="/" aria-label="OG Vibes home"><img src="/brand/logo.png" alt="" /><span><b>OG VIBES</b><small>by OG Technologies</small></span></Link><Link className="button button-small button-outline" href="/">Back to home</Link></nav><div className="team-hero"><p className="eyebrow"><span /> The people behind OG Vibes</p><h1>Built with students at the centre.</h1><p>A focused team turning everyday campus needs into one connected student experience.</p></div></header><section className="team-grid" aria-label="OG Vibes team">{team.map((member, index) => <article key={`${member.role}-${member.name}`} style={{ "--team-delay": `${index * 100}ms` } as React.CSSProperties}><div className="team-photo-placeholder" aria-label={`${member.name} photo coming soon`}><span>{member.initials}</span><small>Photo coming soon</small></div><div className="team-card-copy"><p>{member.role}</p><h2>{member.name}</h2><span>{member.copy}</span></div></article>)}</section><section className="team-cta"><div><p className="eyebrow dark"><span /> Start your experience</p><h2>OG Vibes is ready wherever student life happens.</h2></div><a className="button button-dark" href="https://student.ogvibes.co.za/?install=1">Open student app <span>→</span></a></section></main>;
}
