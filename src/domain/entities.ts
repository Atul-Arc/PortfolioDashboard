export type AssetType =
  | 'Equity'
  | 'FixedIncome'
  | 'Cash'
  | 'Alternative'
  | 'Other';

export type RiskBand = 'Conservative' | 'Moderate' | 'Aggressive';

export interface Holding {
  holdingId: string;
  instrumentName: string;
  assetType: AssetType;
  investedAmount: number;
  currentValue: number;
  returnPercentage: number;
  weightPercentage?: number;
}

export interface PortfolioSummary {
  totalInvestedAmount: number;
  currentPortfolioValue: number;
  totalGainLoss: number;
  portfolioReturnPercentage: number;
  riskScore: number;
  asOfDate: string;
}

export interface AssetAllocationEntry {
  assetType: string;
  allocationPercentage: number;
  currentValue: number;
}

export interface PortfolioTrendPoint {
  periodLabel: string;
  portfolioValue: number;
  investedValue?: number;
  gainLossValue?: number;
}

export interface RiskProfile {
  riskScore: number;
  riskBand: RiskBand;
  interpretation: string;
  concentrationWarning?: string;
}

export interface AssetGainLossEntry {
  assetLabel: string;
  gainLossValue: number;
  gainLossPercentage?: number;
}

export interface DashboardData {
  asOfDate: string;
  holdings: Holding[];
  allocation: AssetAllocationEntry[];
  trend: PortfolioTrendPoint[];
  riskProfile: RiskProfile;
}
