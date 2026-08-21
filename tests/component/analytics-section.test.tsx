import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AnalyticsSection } from '../../src/components/dashboard/AnalyticsSection';

describe('AnalyticsSection', () => {
  it('renders all required chart panels', () => {
    render(
      <AnalyticsSection
        allocation={[
          { assetType: 'Equity', allocationPercentage: 55, currentValue: 305000 },
          { assetType: 'FixedIncome', allocationPercentage: 26, currentValue: 149000 },
        ]}
        trend={[
          { periodLabel: 'Jan', portfolioValue: 520000, investedValue: 500000, gainLossValue: 20000 },
          { periodLabel: 'Feb', portfolioValue: 530000, investedValue: 500000, gainLossValue: 30000 },
        ]}
        gainLoss={[
          { assetLabel: 'Equity', gainLossValue: 45000, gainLossPercentage: 15 },
          { assetLabel: 'FixedIncome', gainLossValue: 4000, gainLossPercentage: 2.7 },
        ]}
      />, 
    );

    expect(screen.getByText('Asset Allocation')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Growth Trend')).toBeInTheDocument();
    expect(screen.getByText('Gain / Loss by Asset')).toBeInTheDocument();
  });
});
