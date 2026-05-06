import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
      <article style={{ ...styles.card, ...(featured ? styles.featured : {}) }}>
        <div style={styles.top}>
          <span style={styles.category}>{article.category}</span>
          {article.free ? (
            <span style={styles.freeBadge}>БЕЗКОШТОВНО</span>
          ) : (
            <span style={styles.priceBadge}>
              ⬡ {article.price} {article.currency}
            </span>
          )}
        </div>

        <h2 style={{ ...styles.title, ...(featured ? styles.featuredTitle : {}) }}>
          {article.title}
        </h2>

        <p style={styles.excerpt}>{article.excerpt}</p>

        <div style={styles.bottom}>
          <span style={styles.meta}>{article.date}</span>
          <span style={styles.meta}>◷ {article.readTime}</span>
          <span style={styles.readMore}>ЧИТАТИ →</span>
        </div>

        <div style={styles.glowLine}></div>
      </article>
    </Link>
  );
}

const styles = {
  card: {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    padding: '24px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.2s, transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  featured: {
    padding: '32px',
    gridColumn: 'span 2',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 10,
    letterSpacing: 2,
    color: 'var(--accent2)',
    fontFamily: 'var(--font-mono)',
  },
  freeBadge: {
    fontSize: 9,
    letterSpacing: 1,
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '2px 8px',
    fontFamily: 'var(--font-mono)',
  },
  priceBadge: {
    fontSize: 10,
    letterSpacing: 1,
    color: 'var(--yellow)',
    border: '1px solid rgba(255,204,0,0.3)',
    padding: '2px 8px',
    fontFamily: 'var(--font-mono)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 16,
    fontWeight: 700,
    color: 'var(--text)',
    lineHeight: 1.3,
    letterSpacing: -0.3,
  },
  featuredTitle: {
    fontSize: 22,
  },
  excerpt: {
    color: 'var(--text2)',
    fontSize: 13,
    lineHeight: 1.6,
    flex: 1,
  },
  bottom: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    marginTop: 4,
  },
  meta: {
    fontSize: 11,
    color: 'var(--text3)',
    fontFamily: 'var(--font-mono)',
  },
  readMore: {
    fontSize: 11,
    color: 'var(--accent)',
    fontFamily: 'var(--font-mono)',
    marginLeft: 'auto',
    letterSpacing: 1,
  },
  glowLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, var(--accent2), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
};
