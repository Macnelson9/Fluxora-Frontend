import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>Fluxora</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Dashboard</Link>
          <Link to="/streams" style={styles.navLink}>Streams</Link>
          <Link to="/recipient" style={styles.navLink}>Recipient</Link>
        </nav>
      </aside>
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: 220,
    background: 'var(--surface)',
    borderRight: '1px solid var(--border)',
    padding: '1.5rem 1rem',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--accent)',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  navLink: {
    padding: '0.6rem 0.75rem',
    borderRadius: 8,
    color: 'var(--text)',
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    padding: '2rem',
    overflow: 'auto',
  },
};
