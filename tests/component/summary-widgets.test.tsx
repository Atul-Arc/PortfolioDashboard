import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PortfolioSummaryWidgets } from '../../src/components/dashboard/PortfolioSummaryWidgets';

describe('PortfolioSummaryWidgets', () => {
  it('renders all executive summary metrics', () => {
    render(
      <PortfolioSummaryWidgets
        summary={{
          totalInvestedAmount: 500000,
          currentPortfolioValue: 553500,
          totalGainLoss: 53500,
          portfolioReturnPercentage: 10.7,
          riskScore: 68,
          asOfDate: '2026-08-15',
        }}
      />, 
    );

    expect(screen.getByText('Total Invested Amount')).toBeInTheDocument();
    expect(screen.getByText('Current Portfolio Value')).toBeInTheDocument();
    expect(screen.getByText('Total Gain / Loss')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Return')).toBeInTheDocument();
    expect(screen.getByText('Risk Score')).toBeInTheDocument();
  });
});
