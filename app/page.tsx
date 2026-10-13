import Link from "next/link";
import Image from "next/image";
import { InstallActions } from "./install-actions";

const studentApp = "https://student.ogvibes.co.za/?install=1";

const featureGroups = [
  {
    eyebrow: "Learn",
    title: "Your academic day, organised",
    text: "Module-based slides, past papers, assessments, quizzes, ICASS results, timetables and online classes stay together.",
    icon: "▤",
  },
  {
    eyebrow: "Connect",
    title: "Campus conversations that move",
    text: "Private chats, lecturer messages, module groups, file sharing, voice calls and video calls keep students connected.",
    icon: "◎",
  },
  {
    eyebrow: "Live",
    title: "Everything happening on campus",
    text: "Official alerts, events, accommodation, lost and found, careers, friends and marketplace activity are easy to discover.",
    icon: "⌁",
  },
];

const academicItems = ["Lecture slides", "Past papers", "Timetables", "Online classes", "Assessments", "Quizzes", "ICASS", "My Modules"];
const campusItems = ["Official alerts", "Student events", "Accommodation", "Lost & found", "Careers", "Marketplace", "Friends", "Document Wallet"];

export default function Home() {
  const androidApk = process.env.NEXT_PUBLIC_ANDROID_APK_URL;

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="#top" aria-label="OG Vibes home">
          <Image src="/brand/logo.png" width={46} height={46} alt="" priority />
          <span><b>OG VIBES</b><small>by OG Technologies</small></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="#features">Features</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/team">Team</Link>
          <Link href="#install">Install</Link>
        </nav>
        <Link className="button button-small button-outline" href="/team">Meet the team</Link>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Built for the rhythm of student life</p>
          <h1>One campus.<br /><em>One student experience.</em></h1>
          <p className="hero-lede">OG Vibes brings learning, official campus information and student connections into one modern, secure experience.</p>
          <InstallActions androidApk={androidApk} studentApp={studentApp} placement="hero" />
          <div className="trust-row" aria-label="Platform availability">
            <span>✓ Android app</span><span>✓ Android PWA</span><span>✓ iPhone PWA</span><span>✓ Web</span>
          </div>
        </div>

        <div className="product-stage" aria-label="OG Vibes app preview">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="phone-shell">
            <div className="phone-top"><span>09:41</span><i /></div>
            <div className="app-preview-head">
              <Image src="/brand/logo.png" width={35} height={35} alt="" />
              <div><small>SAWUBONA</small><b>OG Vibester</b></div><span>●</span>
            </div>
            <div className="story-row"><i /><i /><i /><i /></div>
            <article className="preview-card">
              <div className="preview-author"><i /><span><b>Campus update</b><small>Official · just now</small></span></div>
              <div className="preview-media"><Image src="/brand/campus.jpg" width={420} height={230} alt="Campus learning atmosphere" /></div>
              <h3>Your campus day, in one place.</h3>
              <p>Classes, alerts, resources and the people who make campus feel connected.</p>
              <div className="preview-actions"><span>♡ 24</span><span>◯ 8</span><span>⌁</span></div>
            </article>
            <div className="preview-nav"><b>⌂</b><span>▤</span><span>◎</span><span>⚑</span></div>
          </div>
          <div className="floating-card floating-live"><span>●</span><div><small>ONLINE CLASS</small><b>Live now</b></div></div>
          <div className="floating-card floating-alert"><span>✓</span><div><small>OFFICIAL ALERT</small><b>Campus update received</b></div></div>
          <div className="screen-snapshot snapshot-academic"><small>ACADEMIC</small><b>New study material</b><span>Past paper ready</span></div>
          <div className="screen-snapshot snapshot-chat"><small>CHATS</small><b>Module group</b><span>3 new messages</span></div>
        </div>
      </section>

      <section className="feature-intro" id="features">
        <p className="eyebrow dark"><span /> More than an app</p>
        <h2>Everything students need to <em>learn, connect and belong.</em></h2>
        <p>Every screen is designed around the real rhythm of student life—from the first class of the day to the last campus update.</p>
      </section>

      <section className="feature-grid">
        {featureGroups.map((feature) => <article key={feature.title}>
          <span className="feature-icon">{feature.icon}</span>
          <small>{feature.eyebrow}</small>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>)}
      </section>

      <section className="ecosystem-section student-journey">
        <div className="ecosystem-copy">
          <p className="eyebrow dark"><span /> One student experience</p>
          <h2>Your learning, conversations and campus life move together.</h2>
          <p>Open one familiar place to prepare for class, catch important updates, talk to friends and discover what is happening around campus.</p>
          <a className="text-link" href={studentApp}>Open the student app <span>→</span></a>
        </div>
        <div className="ecosystem-map">
          <div className="map-line map-line-a" /><div className="map-line map-line-b" />
          <div className="map-node node-student"><span>OG</span><b>OG Vibes</b><small>Learn · connect · discover</small></div>
          <div className="map-node node-staff"><span>AC</span><b>Academic life</b><small>Prepare · submit · progress</small></div>
          <div className="map-node node-admin"><span>CH</span><b>Campus hub</b><small>Explore · belong · enjoy</small></div>
        </div>
      </section>

      <section className="catalog-section">
        <article><p className="eyebrow dark"><span /> Academic workspace</p><h3>Stay ready for class</h3><div className="pill-grid">{academicItems.map((item) => <span key={item}>{item}</span>)}</div></article>
        <article><p className="eyebrow dark"><span /> Campus hub</p><h3>Find your campus life</h3><div className="pill-grid">{campusItems.map((item) => <span key={item}>{item}</span>)}</div></article>
      </section>

      <section className="install-section" id="install">
        <div className="install-copy">
          <p className="eyebrow"><span /> Ready when you are</p>
          <h2>Put OG Vibes on your Home Screen.</h2>
          <p>The PWA uses less space and opens like an app. Android users can install from Chrome. iPhone users install from Safari using Add to Home Screen.</p>
          <InstallActions androidApk={androidApk} studentApp={studentApp} placement="install" />
        </div>
        <div className="install-guides">
          <article><span>1</span><div><b>Android</b><p>Open OG Vibes in Chrome and choose <strong>Install OG Vibes</strong> when prompted.</p></div></article>
          <article><span>2</span><div><b>iPhone or iPad</b><p>Open OG Vibes in Safari, tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</p></div></article>
          <article><span>3</span><div><b>Already installed?</b><p>Open it from your Home Screen and sign in with your existing account.</p></div></article>
        </div>
      </section>

      <section className="update-banner">
        <div><p className="eyebrow dark"><span /> Product updates</p><h2>See what is new in OG Vibes.</h2><p>Release notes explain improvements, fixes and new student experiences in everyday language.</p></div>
        <Link className="button button-dark" href="/updates">View version updates <span>→</span></Link>
      </section>

      <section className="team-banner">
        <div><p className="eyebrow dark"><span /> Built by people who care</p><h2>Meet the team behind OG Vibes.</h2><p>Get to know the people shaping, engineering and supporting the student experience.</p></div>
        <Link className="button button-dark" href="/team">Meet the team <span>→</span></Link>
      </section>

      <footer>
        <div className="brand footer-brand"><Image src="/brand/logo.png" width={38} height={38} alt="" /><span><b>OG VIBES</b><small>Powered by OG Technologies</small></span></div>
        <p>Built for student life.</p>
        <div><a href={studentApp}>Student app</a><Link href="/updates">Updates</Link><Link href="/team">Team</Link></div>
        <small>© 2026 OG Technologies. All rights reserved.</small>
      </footer>
    </main>
  );
}
