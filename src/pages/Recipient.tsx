export default function Recipient() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Recipient Portal</h1>
      <p style={{ color: 'var(--muted)' }}>
        View your incoming streams and withdraw accrued USDC at any time.
      </p>
      <div style={card}>
        <div style={cardLabel}>Accrued balance</div>
        <div style={cardValue}>— USDC</div>
        <button style={button} disabled>Withdraw (connect wallet)</button>
      </div>
    </div>
  );
}

const card: React.CSSProperties = {
  marginTop: '1.5rem',
  maxWidth: 360,
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  padding: '1.5rem',
};

const cardLabel: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--muted)',
  marginBottom: '0.25rem',
};

const cardValue: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '1rem',
};

const button: React.CSSProperties = {
  padding: '0.6rem 1rem',
  background: 'var(--accent)',
  color: 'var(--bg)',
  border: 'none',
  borderRadius: 8,
  fontWeight: 600,
  cursor: 'pointer',
};
