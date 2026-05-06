import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);
  const [paid, setPaid] = useState(false);
  const [paying, setPaying] = useState(false);

  if (!article) {
    return (
      <div style={styles.page}>
        <Header />
        <div style={styles.notFound}>
          <span style={styles.err}>404</span>
          <p>Статтю не знайдено</p>
          <Link to="/" style={styles.back}>← НАЗАД</Link>
        </div>
      </div>
    );
  }

  const handlePay = () => {
    setPaying(true);
    // Симуляція x402 платежу (тут буде реальна інтеграція)
    setTimeout(() => {
      setPaying(false);
      setPaid(true);
    }, 2000);
  };

  const paragraphs = article.content.trim().split('\n\n');
  const previewParagraphs = paragraphs.slice(0, 3);
  const lockedParagraphs = paragraphs.slice(3);
  const isLocked = !article.free && !paid;

  return (
    <div style={styles.page}>
      <Header />

      <main style={styles.main}>
        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <Link to="/" style={styles.breadLink}>ГОЛОВНА</Link>
          <span style={styles.breadSep}>/</span>
          <span style={styles.breadCurrent}>{article.category}</span>
        </div>

        {/* Article header */}
        <header style={styles.articleHeader}>
          <div style={styles.metaRow}>
            <span style={styles.category}>{article.category}</span>
            <span style={styles.metaItem}>{article.date}</span>
            <span style={styles.metaItem}>◷ {article.readTime}</span>
          </div>
          <h1 style={styles.title}>{article.title}</h1>
          <p style={styles.excerpt}>{article.excerpt}</p>
        </header>

        {/* Content */}
        <div style={styles.content}>
          {previewParagraphs.map((p, i) => renderBlock(p, i))}

          {isLocked ? (
            <div style={styles.paywallWrapper}>
              {/* Blur overlay */}
              <div style={styles.blurContent}>
                {lockedParagraphs.slice(0, 2).map((p, i) => renderBlock(p, i + 100))}
              </div>
              <div style={styles.blur}></div>

              {/* Paywall */}
              <div style={styles.paywall}>
                <div style={styles.paywallIcon}>⬡</div>
                <h3 style={styles.paywallTitle}>Контент захищено x402</h3>
                <p style={styles.paywallDesc}>
                  Для доступу до повної статті потрібен мікроплатіж через протокол x402 на мережі SKALE.
                  Нульові комісії — ти платиш лише за контент.
                </p>
                <div style={styles.paywallPrice}>
                  <span style={styles.priceAmount}>{article.price} {article.currency}</span>
                  <span style={styles.priceUsd}>≈ $3 USD</span>
                </div>
                <button
                  style={{ ...styles.payBtn, ...(paying ? styles.payBtnLoading : {}) }}
                  onClick={handlePay}
                  disabled={paying}
                >
                  {paying ? (
                    <span style={styles.payBtnInner}>
                      <span style={styles.spinner}></span>
                      ОБРОБКА ПЛАТЕЖУ...
                    </span>
                  ) : (
                    '⬡ ОПЛАТИТИ ЧЕРЕЗ x402'
                  )}
                </button>
                <p style={styles.paywallNote}>
                  Потрібен MetaMask + SKALE мережа · Разовий платіж
                </p>
              </div>
            </div>
          ) : (
            <>
              {lockedParagraphs.map((p, i) => renderBlock(p, i + 100))}
              {!article.free && (
                <div style={styles.paidBadge}>
                  ✓ Оплачено через x402 · SKALE Network
                </div>
              )}
            </>
          )}
        </div>

        {/* Related */}
        <div style={styles.related}>
          <span style={styles.relatedTitle}>ІНШІ МАТЕРІАЛИ</span>
          <Link to="/" style={styles.backBtn}>← ВСІ СТАТТІ</Link>
        </div>
      </main>
    </div>
  );
}

function renderBlock(text, key) {
  if (text.startsWith('## ')) {
    return <h2 key={key} style={styles.h2}>{text.slice(3)}</h2>;
  }
  if (text.startsWith('**') && text.endsWith('**')) {
    return <p key={key} style={styles.bold}>{text.slice(2, -2)}</p>;
  }
  if (text.startsWith('- ')) {
    const items = text.split('\n').filter(l => l.startsWith('- '));
    return (
      <ul key={key} style={styles.list}>
        {items.map((item, i) => (
          <li key={i} style={styles.listItem}>{item.slice(2)}</li>
        ))}
      </ul>
    );
  }
  return <p key={key} style={styles.para}>{text}</p>;
}

const styles = {
  page: { minHeight: '100vh' },
  main: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '48px 32px',
  },
  notFound: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    gap: 16,
  },
  err: {
    fontFamily: 'var(--font-display)',
    fontSize: 80,
    color: 'var(--text3)',
    fontWeight: 900,
  },
  back: { color: 'var(--accent)', fontSize: 12, letterSpacing: 2 },
  breadcrumb: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    marginBottom: 32,
    fontSize: 11,
    fontFamily: 'var(--font-mono)',
  },
  breadLink: { color: 'var(--text3)' },
  breadSep: { color: 'var(--text3)' },
  breadCurrent: { color: 'var(--accent2)' },
  articleHeader: {
    marginBottom: 40,
    borderBottom: '1px solid var(--border)',
    paddingBottom: 32,
  },
  metaRow: {
    display: 'flex',
    gap: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  category: {
    fontSize: 10,
    letterSpacing: 2,
    color: 'var(--accent2)',
    fontFamily: 'var(--font-mono)',
  },
  metaItem: {
    fontSize: 11,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: -1,
    marginBottom: 16,
    color: 'var(--text)',
  },
  excerpt: {
    fontSize: 15,
    color: 'var(--text2)',
    lineHeight: 1.7,
  },
  content: {
    marginBottom: 48,
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--text)',
    margin: '32px 0 12px',
    letterSpacing: -0.5,
  },
  para: {
    fontSize: 14,
    color: 'var(--text2)',
    lineHeight: 1.8,
    marginBottom: 16,
  },
  bold: {
    fontSize: 14,
    color: 'var(--text)',
    fontWeight: 700,
    lineHeight: 1.8,
    marginBottom: 16,
  },
  list: {
    margin: '12px 0 16px 0',
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    fontSize: 14,
    color: 'var(--text2)',
    lineHeight: 1.8,
    paddingLeft: 16,
    position: 'relative',
    marginBottom: 4,
  },
  paywallWrapper: {
    position: 'relative',
    marginTop: 8,
  },
  blurContent: {
    opacity: 0.3,
    filter: 'blur(3px)',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    background: 'linear-gradient(to bottom, transparent, var(--bg))',
  },
  paywall: {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderTop: '2px solid var(--accent2)',
    padding: '40px',
    textAlign: 'center',
    marginTop: 0,
    position: 'relative',
    zIndex: 2,
  },
  paywallIcon: {
    fontSize: 40,
    color: 'var(--accent2)',
    marginBottom: 16,
    display: 'block',
  },
  paywallTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 12,
    color: 'var(--text)',
  },
  paywallDesc: {
    fontSize: 13,
    color: 'var(--text2)',
    lineHeight: 1.7,
    maxWidth: 400,
    margin: '0 auto 24px',
  },
  paywallPrice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 24,
  },
  priceAmount: {
    fontFamily: 'var(--font-display)',
    fontSize: 24,
    fontWeight: 700,
    color: 'var(--yellow)',
  },
  priceUsd: {
    fontSize: 12,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
  },
  payBtn: {
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    padding: '14px 32px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
    cursor: 'pointer',
    fontFamily: 'var(--font-mono)',
    width: '100%',
    maxWidth: 320,
    transition: 'opacity 0.2s',
  },
  payBtnLoading: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  payBtnInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  spinner: {
    width: 12,
    height: 12,
    border: '2px solid #000',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'spin 0.8s linear infinite',
  },
  paywallNote: {
    fontSize: 10,
    color: 'var(--text3)',
    marginTop: 12,
    fontFamily: 'var(--font-mono)',
  },
  paidBadge: {
    marginTop: 32,
    padding: '10px 20px',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
    fontSize: 11,
    fontFamily: 'var(--font-mono)',
    letterSpacing: 1,
    textAlign: 'center',
  },
  related: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid var(--border)',
    paddingTop: 24,
  },
  relatedTitle: {
    fontSize: 11,
    letterSpacing: 3,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
  },
  backBtn: {
    fontSize: 11,
    color: 'var(--accent)',
    fontFamily: 'var(--font-mono)',
    letterSpacing: 1,
  },
};
