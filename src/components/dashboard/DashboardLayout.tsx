import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  asOfDate: string;
  apiLabel: string;
  onRefresh: () => void;
  summary: ReactNode;
  holdings: ReactNode;
  analytics: ReactNode;
  risk: ReactNode;
  consistencyWarning?: string;
}

export function DashboardLayout({
  asOfDate,
  apiLabel,
  onRefresh,
  summary,
  holdings,
  analytics,
  risk,
  consistencyWarning,
}: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell" data-testid="dashboard-shell">
      <header className="dashboard-hero">
        <div>
          <p className="hero-kicker">Investment Portfolio Dashboard</p>
          <h1>Wealth Management Executive View</h1>
          <p className="hero-subtitle">
            Portfolio health, exposure, and risk insights curated for BFSI client discussions.
          </p>
        </div>
        <div className="hero-actions">
          <p className="as-of">As of {asOfDate}</p>
          <p className="source-label">Data source: {apiLabel}</p>
          <button type="button" onClick={onRefresh}>
            Refresh Snapshot
          </button>
        </div>
      </header>

      {consistencyWarning ? <aside className="consistency-warning">{consistencyWarning}</aside> : null}

      <main className="dashboard-content">
        {summary}
        {holdings}
        {analytics}
        {risk}
      </main>
    </div>
  );
}
