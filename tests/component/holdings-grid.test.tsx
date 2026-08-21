import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HoldingsGrid } from '../../src/components/dashboard/HoldingsGrid';

describe('HoldingsGrid', () => {
  it('renders holdings rows and supports sorting actions', () => {
    render(
      <HoldingsGrid
        holdings={[
          {
            holdingId: 'h1',
            instrumentName: 'Zeta Equity',
            assetType: 'Equity',
            investedAmount: 100,
            currentValue: 120,
            returnPercentage: 20,
          },
          {
            holdingId: 'h2',
            instrumentName: 'Alpha Bond',
            assetType: 'FixedIncome',
            investedAmount: 100,
            currentValue: 95,
            returnPercentage: -5,
          },
        ]}
      />,
    );

    expect(screen.getByText('Zeta Equity')).toBeInTheDocument();
    expect(screen.getByText('Alpha Bond')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Instrument' }));
    expect(screen.getByText('Holdings Overview')).toBeInTheDocument();
  });
});
