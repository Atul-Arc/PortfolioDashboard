import { describe, expect, it } from 'vitest';
import { portfolioMockApi } from '../../src/services/api/portfolio-mock-api';
import { mapHoldings } from '../../src/services/mappers/portfolio-mappers';

describe('mock API contracts', () => {
  it('returns required contract payloads', async () => {
    const [holdings, allocation, trend, risk] = await Promise.all([
      portfolioMockApi.getHoldings(),
      portfolioMockApi.getAllocation(),
      portfolioMockApi.getTrend(),
      portfolioMockApi.getRiskProfile(),
    ]);

    expect(holdings.portfolioId).toBeTruthy();
    expect(holdings.holdings.length).toBeGreaterThan(0);
    expect(allocation.allocations.length).toBeGreaterThan(0);
    expect(trend.series.length).toBeGreaterThan(0);
    expect(typeof risk.riskScore).toBe('number');
  });

  it('keeps holdings and summary totals reconcilable', async () => {
    const holdingsResponse = await portfolioMockApi.getHoldings();
    const mapped = mapHoldings(holdingsResponse);

    const invested = mapped.reduce((sum, item) => sum + item.investedAmount, 0);
    const current = mapped.reduce((sum, item) => sum + item.currentValue, 0);

    expect(invested).toBeGreaterThan(0);
    expect(current).toBeGreaterThan(0);
    expect(current - invested).toBeCloseTo(53500, 0);
  });
});
