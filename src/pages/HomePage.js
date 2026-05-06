import React from 'react';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

export default function HomePage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div style={styles.page}>
      <Header />

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroBadge} className="fade-up">
            <span style={styles.heroBadgeDot}></span>
            НЕЗАЛЕЖНЕ КРИПТО-МЕДІА УКРАЇНСЬКОЮ
          </div>
          <h1 style={styles.heroTitle} className="fade-up-delay-1">
            КРИПТО<span style={styles.heroAccent}>UA</span>
            <br />
            <span style={styles.heroSub}>Читаєш — платиш тільки за те, що читаєш</span>
          </h1>
          <p style={styles.heroDesc} className="fade-up-delay-2">
            Перше українське медіа з мікроплатежами x402. Без підписок, без реклами — тільки якісний контент за справедливу ціну.
          </p>
          <div style={styles.heroStats} className="fade-up-delay-3">
            <div style={styles.stat}>
              <span style={styles.statNum}>0.001</span>
              <span style={styles.statLabel}>ETH за статтю</span>
            </div>
            <div style={styles.statDiv}></div>
            <div style={styles.stat}>
              <span style={styles.statNum}>~$3</span>
              <span style={styles.statLabel}>вартість читання</span>
            </div>
            <div style={styles.statDiv}></div>
            <div style={styles.stat}>
              <span style={styles.statNum}>SKALE</span>
              <span style={styles.statLabel}>нульові комісії</span>
            </div>
          </div>
        </div>
        <div style={styles.heroGrid}></div>
      </section>

      {/* Articles */}
      <main style={styles.main}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTitle}>ОСТАННІ МАТЕРІАЛИ</span>
          <span style={styles.sectionLine}></span>
        </div>

        <div style={styles.grid}>
          <ArticleCard article={featured} featured={true} />
          {rest.map(a => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <span style={styles.footerLogo}>CRYPTOUA_</span>
          <span style={styles.footerText}>
            Побудовано на x402 протоколі · SKALE Network · 2025
          </span>
          <div style={styles.footerLinks}>
            <span style={styles.footerLink}>Telegram</span>
            <span style={styles.footerLink}>Twitter</span>
            <span style={styles.footerLink}>GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    padding: '80px 32px 60px',
    position: 'relative',
    borderBottom: '1px solid var(--border)',
    overflow: 'hidden',
  },
  heroGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(123,97,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(123,97,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  heroInner: {
    maxWidth: 800,
    position: 'relative',
    zIndex: 1,
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 10,
    letterSpacing: 2,
    color: 'var(--text3)',
    marginBottom: 24,
    fontFamily: 'var(--font-mono)',
  },
  heroBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--accent)',
    display: 'inline-block',
    animation: 'pulse 2s infinite',
  },
  heroTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 64,
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: -3,
    marginBottom: 16,
    color: 'var(--text)',
  },
  heroAccent: {
    color: 'var(--accent)',
  },
  heroSub: {
    fontSize: 18,
    fontWeight: 300,
    color: 'var(--text2)',
    letterSpacing: -0.5,
    fontFamily: 'var(--font-display)',
  },
  heroDesc: {
    fontSize: 14,
    color: 'var(--text2)',
    maxWidth: 500,
    lineHeight: 1.8,
    marginBottom: 40,
  },
  heroStats: {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--accent)',
  },
  statLabel: {
    fontSize: 10,
    color: 'var(--text3)',
    letterSpacing: 1,
    fontFamily: 'var(--font-mono)',
  },
  statDiv: {
    width: 1,
    height: 32,
    background: 'var(--border)',
  },
  main: {
    flex: 1,
    padding: '48px 32px',
    maxWidth: 1100,
    margin: '0 auto',
    width: '100%',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 11,
    letterSpacing: 3,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
    flexShrink: 0,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    background: 'var(--border)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 1,
    background: 'var(--border)',
  },
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '24px 32px',
    marginTop: 'auto',
  },
  footerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    maxWidth: 1100,
    margin: '0 auto',
  },
  footerLogo: {
    fontFamily: 'var(--font-display)',
    fontSize: 14,
    fontWeight: 900,
    color: 'var(--accent)',
  },
  footerText: {
    fontSize: 11,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
    flex: 1,
  },
  footerLinks: {
    display: 'flex',
    gap: 20,
  },
  footerLink: {
    fontSize: 11,
    color: 'var(--text2)',
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    letterSpacing: 1,
  },
};
