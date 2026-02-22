import WalletButton from "@/components/wallet-connect/Walletbutton";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      {/* Page header row */}
      <div
        className="flex items-start justify-between gap-4 mb-2"
        style={{ marginTop: 0 }}
      >
        <div>
          <h1 style={{ marginTop: 0 }}>Dashboard</h1>
          <p style={{ color: "var(--muted)" }}>
            Treasury overview and active stream summary. Connect your wallet to
            see real-time capital flow.
          </p>
        </div>

        <div className="shrink-0 pt-1">
          <WalletButton />
        </div>
      </div>

      <div style={cardGrid}>
        <div style={card}>
          <div style={cardLabel}>Active Streams</div>
          <div style={cardValue}>—</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>Total Streaming</div>
          <div style={cardValue}>— USDC</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>Withdrawable</div>
          <div style={cardValue}>— USDC</div>
        </div>
      </div>
    </div>
  );
}

const cardGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
  marginTop: "1.5rem",
};

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "1.25rem",
};

const cardLabel: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--muted)",
  marginBottom: "0.25rem",
};

const cardValue: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
};
