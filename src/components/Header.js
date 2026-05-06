import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const prices = [
  { sym: 'BTC', val: '+2.4%', up: true },
  { sym: 'ETH', val: '+1.8%', up: true },
  { sym: 'SKL', val: '+5.2%', up: true },
  { sym: 'SOL', val: '-0.9%', up: false },
  { sym: 'BNB', val: '+0.7%', up: true },
];

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const tickerItems = [...prices, ...prices];

  return (
    <header style={styles.header}>
      {/* Ticker */}
      <div style={styles.ticker}>
        <span style={styles.tickerLabel}>LIVE</span>
        <div style={styles.tickerTrack}>
          <div style={styles.tickerInner}>
            {tickerItems.map((p, i) => (
              <span key={i} style={styles.tickerItem}>
                <span style={styles.tickerSym}>{p.sym}</span>
                <span style={{ color: p.up ? 'var(--accent)' : 'var(--red)' }}>{p.val}</span>
                <span style={styles.tickerDot}>◆</span>
              </span>
            ))}
          </div>
        </div>
        <span style={styles.tickerTime}>
          {time.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </span>
      </div>

      {/* Main header */}
      <div style={styles.main}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoAccent}>CRYPTO</span>
          <span style={styles.logoUa}>UA</span>
          <span style={styles.logoDot}>_</span>
        </Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>ГОЛОВНА</Link>
          <span style={styles.navLink}>АНАЛІТИКА</span>
          <span style={styles.navLink}>НАВЧАННЯ</span>
        </nav>
        <div style={styles.x402badge}>
          <span style={styles.x402dot}></span>
          <span>x402 ENABLED</span>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    borderBottom: '1px solid var(--border)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(10,10,15,0.95)',
    backdropFilter: 'blur(10px)',
  },
  ticker: {
    display: 'flex',
    alignItems: 'center',
    background: 'var(--bg2)',
    borderBottom: '1px solid var(--border)',
    padding: '4px 20px',
    gap: 12,
    overflow: 'hidden',
  },
  tickerLabel: {
    background: 'var(--accent)',
    color: '#000',
    fontSize: 9,
    fontWeight: 700,
    padding: '2px 6px',
    letterSpacing: 1,
    flexShrink: 0,
    fontFamily: 'var(--font-mono)',
    animation: 'pulse 2s infinite',
  },
  tickerTrack: {
    flex: 1,
    overflow: 'hidden',
  },
  tickerInner: {
    display: 'flex',
    gap: 0,
    animation: 'ticker 20s linear infinite',
    whiteSpace: 'nowrap',
  },
  tickerItem: {
    display: 'inline-flex',
    gap: 6,
    marginRight: 24,
    fontSize: 11,
    fontFamily: 'var(--font-mono)',
  },
  tickerSym: {
    color: 'var(--text2)',
  },
  tickerDot: {
    color: 'var(--text3)',
    fontSize: 8,
  },
  tickerTime: {
    color: 'var(--text3)',
    fontSize: 11,
    flexShrink: 0,
    fontFamily: 'var(--font-mono)',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 32px',
    gap: 20,
  },
  logo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 0,
    textDecoration: 'none',
  },
  logoAccent: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 900,
    color: 'var(--text)',
    letterSpacing: -1,
  },
  logoUa: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 900,
    color: 'var(--accent)',
    letterSpacing: -1,
  },
  logoDot: {
    color: 'var(--accent2)',
    fontSize: 24,
    animation: 'pulse 1s infinite',
  },
  nav: {
    display: 'flex',
    gap: 28,
  },
  navLink: {
    color: 'var(--text2)',
    fontSize: 11,
    letterSpacing: 2,
    fontFamily: 'var(--font-mono)',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  x402badge: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    border: '1px solid var(--accent2)',
    padding: '4px 10px',
    fontSize: 10,
    letterSpacing: 1,
    color: 'var(--accent2)',
    fontFamily: 'var(--font-mono)',
  },
  x402dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--accent)',
    display: 'inline-block',
    animation: 'pulse 1.5s infinite',
  },
};
