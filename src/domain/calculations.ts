import type {
  AssetAllocationEntry,
  AssetGainLossEntry,
  Holding,
  PortfolioSummary,
  RiskProfile,
} from './entities';

const ROUND_FACTOR = 100;

function roundToTwo(value: number): number {
  return Math.round(value * ROUND_FACTOR) / ROUND_FACTOR;
}

export function calculateGainLoss(investedAmount: number, currentValue: number): number {
  return roundToTwo(currentValue - investedAmount);
}

export function calculateReturnPercentage(
  investedAmount: number,
  currentValue: number,
): number {
  if (investedAmount <= 0) {
    return 0;
  }

  return roundToTwo(((currentValue - investedAmount) / investedAmount) * 100);
}

export function calculateHoldingReturn(holding: Pick<Holding, 'investedAmount' | 'currentValue'>): number {
  return calculateReturnPercentage(holding.investedAmount, holding.currentValue);
}

export function buildPortfolioSummary(
  holdings: Holding[],
  riskProfile: RiskProfile,
  asOfDate: string,
): PortfolioSummary {
  const totalInvestedAmount = roundToTwo(
    holdings.reduce((sum, holding) => sum + holding.investedAmount, 0),
  );
  const currentPortfolioValue = roundToTwo(
    holdings.reduce((sum, holding) => sum + holding.currentValue, 0),
  );
  const totalGainLoss = calculateGainLoss(totalInvestedAmount, currentPortfolioValue);
  const portfolioReturnPercentage = calculateReturnPercentage(
    totalInvestedAmount,
    currentPortfolioValue,
  );

  return {
    totalInvestedAmount,
    currentPortfolioValue,
    totalGainLoss,
    portfolioReturnPercentage,
    riskScore: riskProfile.riskScore,
    asOfDate,
  };
}

export function deriveAllocationFromHoldings(holdings: Holding[]): AssetAllocationEntry[] {
  const portfolioTotal = holdings.reduce((sum, holding) => sum + holding.currentValue, 0);
  const grouped = holdings.reduce<Record<string, number>>((acc, holding) => {
    const key = holding.assetType;
    acc[key] = (acc[key] ?? 0) + holding.currentValue;
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([assetType, currentValue]) => {
      const allocationPercentage =
        portfolioTotal > 0 ? roundToTwo((currentValue / portfolioTotal) * 100) : 0;

      return {
        assetType,
        allocationPercentage,
        currentValue: roundToTwo(currentValue),
      };
    })
    .sort((a, b) => b.currentValue - a.currentValue);
}

export function deriveGainLossByAsset(holdings: Holding[]): AssetGainLossEntry[] {
  const grouped = holdings.reduce<
    Record<string, { investedAmount: number; currentValue: number }>
  >((acc, holding) => {
    const key = holding.assetType;
    const previous = acc[key] ?? { investedAmount: 0, currentValue: 0 };
    acc[key] = {
      investedAmount: previous.investedAmount + holding.investedAmount,
      currentValue: previous.currentValue + holding.currentValue,
    };
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([assetLabel, values]) => {
      const gainLossValue = calculateGainLoss(values.investedAmount, values.currentValue);
      const gainLossPercentage = calculateReturnPercentage(
        values.investedAmount,
        values.currentValue,
      );

      return {
        assetLabel,
        gainLossValue,
        gainLossPercentage,
      };
    })
    .sort((a, b) => b.gainLossValue - a.gainLossValue);
}

export function hasSummaryMismatch(
  summary: PortfolioSummary,
  holdings: Holding[],
  tolerance = 0.01,
): boolean {
  const invested = holdings.reduce((sum, holding) => sum + holding.investedAmount, 0);
  const current = holdings.reduce((sum, holding) => sum + holding.currentValue, 0);

  return (
    Math.abs(summary.totalInvestedAmount - invested) > tolerance ||
    Math.abs(summary.currentPortfolioValue - current) > tolerance
  );
}
