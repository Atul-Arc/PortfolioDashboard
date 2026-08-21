import { appEnv } from '../../config/env';
import { AnalyticsSection } from '../../components/dashboard/AnalyticsSection';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { HoldingsGrid } from '../../components/dashboard/HoldingsGrid';
import { PortfolioSummaryWidgets } from '../../components/dashboard/PortfolioSummaryWidgets';
import { RiskProfileWidget } from '../../components/dashboard/RiskProfileWidget';
import { usePortfolio } from '../../state/use-portfolio';
import {
  selectAllocationSeries,
  selectGainLossSeries,
  selectHasDataInconsistency,
  selectPortfolioSummary,
} from '../../state/selectors';

export function DashboardPage() {
  const { state, refresh } = usePortfolio();

  if (state.loadState === 'loading' || state.loadState === 'idle') {
    return (
      <div className="dashboard-message" data-testid="loading-state">
        Loading portfolio snapshot...
      </div>
    );
  }

  if (state.loadState === 'error') {
    return (
      <div className="dashboard-message" data-testid="error-state">
        <p>{state.errorMessage}</p>
        <button type="button" onClick={() => void refresh()}>
          Retry
        </button>
      </div>
    );
  }

  const summary = selectPortfolioSummary(state);
  const allocation = selectAllocationSeries(state);
  const gainLoss = selectGainLossSeries(state);
  const hasInconsistency = selectHasDataInconsistency(state);

  if (!summary || !state.riskProfile) {
    return (
      <div className="dashboard-message" data-testid="empty-state">
        Portfolio summary cannot be generated from the current data snapshot.
      </div>
    );
  }

  return (
    <DashboardLayout
      asOfDate={state.asOfDate}
      apiLabel={appEnv.mockApiLabel}
      onRefresh={() => void refresh()}
      consistencyWarning={
        hasInconsistency
          ? 'Data quality note: one or more metrics are out of sync with holdings totals.'
          : undefined
      }
      summary={<PortfolioSummaryWidgets summary={summary} />}
      holdings={<HoldingsGrid holdings={state.holdings} />}
      analytics={
        <AnalyticsSection allocation={allocation} trend={state.trend} gainLoss={gainLoss} />
      }
      risk={<RiskProfileWidget riskProfile={state.riskProfile} />}
    />
  );
}
