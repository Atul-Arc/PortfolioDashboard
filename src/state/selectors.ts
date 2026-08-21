import {
  buildPortfolioSummary,
  deriveAllocationFromHoldings,
  deriveGainLossByAsset,
  hasSummaryMismatch,
} from '../domain/calculations';
import type {
  AssetAllocationEntry,
  AssetGainLossEntry,
  PortfolioSummary,
} from '../domain/entities';
import type { PortfolioState } from './portfolio-reducer';

export function selectPortfolioSummary(state: PortfolioState): PortfolioSummary | null {
  if (!state.riskProfile) {
    return null;
  }

  return buildPortfolioSummary(state.holdings, state.riskProfile, state.asOfDate);
}

export function selectAllocationSeries(state: PortfolioState): AssetAllocationEntry[] {
  if (state.allocation.length > 0) {
    return state.allocation;
  }

  return deriveAllocationFromHoldings(state.holdings);
}

export function selectGainLossSeries(state: PortfolioState): AssetGainLossEntry[] {
  return deriveGainLossByAsset(state.holdings);
}

export function selectRiskNarrative(state: PortfolioState): string {
  if (!state.riskProfile) {
    return 'Risk profile is unavailable for this portfolio snapshot.';
  }

  return state.riskProfile.interpretation;
}

export function selectHasDataInconsistency(state: PortfolioState): boolean {
  const summary = selectPortfolioSummary(state);

  if (!summary) {
    return false;
  }

  return hasSummaryMismatch(summary, state.holdings);
}
