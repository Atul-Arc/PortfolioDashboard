import type { AssetType, RiskBand } from '../../domain/entities';

export interface PortfolioHoldingsResponse {
  portfolioId: string;
  asOfDate: string;
  holdings: Array<{
    holdingId: string;
    instrumentName: string;
    assetType: AssetType;
    investedAmount: number;
    currentValue: number;
    returnPercentage: number;
  }>;
}

export interface AssetAllocationResponse {
  portfolioId: string;
  asOfDate: string;
  allocations: Array<{
    assetType: string;
    allocationPercentage: number;
    currentValue: number;
  }>;
}

export interface PortfolioTrendResponse {
  portfolioId: string;
  series: Array<{
    periodLabel: string;
    portfolioValue: number;
    investedValue: number;
    gainLossValue: number;
  }>;
}

export interface RiskProfileResponse {
  portfolioId: string;
  riskScore: number;
  riskBand: RiskBand;
  interpretation: string;
  concentrationWarning?: string;
}
