export default function Streams() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Streams</h1>
      <p style={{ color: 'var(--muted)' }}>
        Create and manage USDC streams. Set rate, duration, and cliff from the treasury.
      </p>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th>Stream</th>
              <th>Recipient</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>
                No streams yet. Create one to get started.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableWrap: React.CSSProperties = {
  marginTop: '1.5rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  overflow: 'hidden',
};

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};
