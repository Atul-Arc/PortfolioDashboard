import type {
  AssetAllocationEntry,
  Holding,
  PortfolioTrendPoint,
  RiskProfile,
} from '../../domain/entities';
import type {
  AssetAllocationResponse,
  PortfolioHoldingsResponse,
  PortfolioTrendResponse,
  RiskProfileResponse,
} from '../api/contracts';
import { safeNumber, safeText } from '../../utils/guards';
import { calculateHoldingReturn } from '../../domain/calculations';

export function mapHoldings(response: PortfolioHoldingsResponse): Holding[] {
  const totals = response.holdings.reduce((sum, holding) => sum + safeNumber(holding.currentValue), 0);

  return response.holdings.map((holding) => {
    const investedAmount = safeNumber(holding.investedAmount);
    const currentValue = safeNumber(holding.currentValue);

    return {
      holdingId: safeText(holding.holdingId),
      instrumentName: safeText(holding.instrumentName),
      assetType: holding.assetType,
      investedAmount,
      currentValue,
      returnPercentage: calculateHoldingReturn({ investedAmount, currentValue }),
      weightPercentage: totals > 0 ? Number(((currentValue / totals) * 100).toFixed(2)) : 0,
    };
  });
}

export function mapAllocation(response: AssetAllocationResponse): AssetAllocationEntry[] {
  return response.allocations.map((entry) => ({
    assetType: safeText(entry.assetType),
    allocationPercentage: safeNumber(entry.allocationPercentage),
    currentValue: safeNumber(entry.currentValue),
  }));
}

export function mapTrend(response: PortfolioTrendResponse): PortfolioTrendPoint[] {
  return response.series.map((entry) => ({
    periodLabel: safeText(entry.periodLabel),
    portfolioValue: safeNumber(entry.portfolioValue),
    investedValue: safeNumber(entry.investedValue),
    gainLossValue: safeNumber(entry.gainLossValue),
  }));
}

export function mapRiskProfile(response: RiskProfileResponse): RiskProfile {
  return {
    riskScore: safeNumber(response.riskScore),
    riskBand: response.riskBand,
    interpretation: safeText(response.interpretation),
    concentrationWarning: safeText(response.concentrationWarning, ''),
  };
}
