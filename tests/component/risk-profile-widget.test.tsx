import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RiskProfileWidget } from '../../src/components/dashboard/RiskProfileWidget';

describe('RiskProfileWidget', () => {
  it('renders risk score context and warning', () => {
    render(
      <RiskProfileWidget
        riskProfile={{
          riskScore: 68,
          riskBand: 'Moderate',
          interpretation: 'Balanced profile with moderate volatility.',
          concentrationWarning: 'Equity concentration above threshold.',
        }}
      />,
    );

    expect(screen.getByText('Risk Analytics')).toBeInTheDocument();
    expect(screen.getByText(/68/)).toBeInTheDocument();
    expect(screen.getByText('Balanced profile with moderate volatility.')).toBeInTheDocument();
    expect(screen.getByText('Equity concentration above threshold.')).toBeInTheDocument();
  });
});
