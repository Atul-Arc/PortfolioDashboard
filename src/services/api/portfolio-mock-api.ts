import holdingsFixture from './fixtures/portfolio-holdings.json';
import allocationFixture from './fixtures/asset-allocation.json';
import trendFixture from './fixtures/portfolio-trend.json';
import riskFixture from './fixtures/risk-profile.json';
import type {
  AssetAllocationResponse,
  PortfolioHoldingsResponse,
  PortfolioTrendResponse,
  RiskProfileResponse,
} from './contracts';

const SIMULATED_LATENCY_MS = 180;

const holdingsData = holdingsFixture as PortfolioHoldingsResponse;
const allocationData = allocationFixture as AssetAllocationResponse;
const trendData = trendFixture as PortfolioTrendResponse;
const riskData = riskFixture as RiskProfileResponse;

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(structuredClone(value)), SIMULATED_LATENCY_MS);
  });
}

export const portfolioMockApi = {
  getHoldings: async (): Promise<PortfolioHoldingsResponse> => delay(holdingsData),
  getAllocation: async (): Promise<AssetAllocationResponse> => delay(allocationData),
  getTrend: async (): Promise<PortfolioTrendResponse> => delay(trendData),
  getRiskProfile: async (): Promise<RiskProfileResponse> => delay(riskData),
};
