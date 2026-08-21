import { describe, expect, it } from 'vitest';
import {
  buildPortfolioSummary,
  calculateGainLoss,
  calculateReturnPercentage,
  deriveGainLossByAsset,
} from '../../src/domain/calculations';
import type { Holding, RiskProfile } from '../../src/domain/entities';

const riskProfile: RiskProfile = {
  riskScore: 62,
  riskBand: 'Moderate',
  interpretation: 'Balanced profile',
};

const holdings: Holding[] = [
  {
    holdingId: 'H-001',
    instrumentName: 'Alpha Fund',
    assetType: 'Equity',
    investedAmount: 100,
    currentValue: 120,
    returnPercentage: 20,
  },
  {
    holdingId: 'H-002',
    instrumentName: 'Beta Bond',
    assetType: 'FixedIncome',
    investedAmount: 100,
    currentValue: 90,
    returnPercentage: -10,
  },
];

describe('domain calculations', () => {
  it('calculates gain or loss correctly', () => {
    expect(calculateGainLoss(500, 530)).toBe(30);
  });

  it('calculates return percentage and handles zero invested amount', () => {
    expect(calculateReturnPercentage(100, 120)).toBe(20);
    expect(calculateReturnPercentage(0, 120)).toBe(0);
  });

  it('builds summary metrics from holdings', () => {
    const summary = buildPortfolioSummary(holdings, riskProfile, '2026-08-15');

    expect(summary.totalInvestedAmount).toBe(200);
    expect(summary.currentPortfolioValue).toBe(210);
    expect(summary.totalGainLoss).toBe(10);
    expect(summary.portfolioReturnPercentage).toBe(5);
    expect(summary.riskScore).toBe(62);
  });

  it('derives gain/loss by asset grouping', () => {
    const gainLoss = deriveGainLossByAsset(holdings);

    expect(gainLoss).toHaveLength(2);
    expect(gainLoss.some((entry) => entry.assetLabel === 'Equity')).toBe(true);
  });
});
