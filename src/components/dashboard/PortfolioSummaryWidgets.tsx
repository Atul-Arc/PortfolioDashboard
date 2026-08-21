import type { PortfolioSummary } from '../../domain/entities';
import { formatCompactCurrency, formatPercent, formatRiskScore } from '../../utils/formatters';
import { Card } from '../shared/Card';
import { MetricValue } from '../shared/MetricValue';

interface PortfolioSummaryWidgetsProps {
  summary: PortfolioSummary;
}

export function PortfolioSummaryWidgets({ summary }: PortfolioSummaryWidgetsProps) {
  const metrics = [
    {
      label: 'Total Invested Amount',
      value: formatCompactCurrency(summary.totalInvestedAmount),
      trend: 'neutral' as const,
    },
    {
      label: 'Current Portfolio Value',
      value: formatCompactCurrency(summary.currentPortfolioValue),
      trend: summary.totalGainLoss >= 0 ? ('positive' as const) : ('negative' as const),
    },
    {
      label: 'Total Gain / Loss',
      value: formatCompactCurrency(summary.totalGainLoss),
      trend: summary.totalGainLoss >= 0 ? ('positive' as const) : ('negative' as const),
    },
    {
      label: 'Portfolio Return',
      value: formatPercent(summary.portfolioReturnPercentage),
      trend:
        summary.portfolioReturnPercentage >= 0
          ? ('positive' as const)
          : ('negative' as const),
    },
    {
      label: 'Risk Score',
      value: formatRiskScore(summary.riskScore),
      trend: summary.riskScore >= 70 ? ('negative' as const) : ('neutral' as const),
    },
  ];

  return (
    <section data-testid="summary-section" className="summary-grid" aria-label="Portfolio summary">
      {metrics.map((metric) => (
        <Card key={metric.label} className="summary-card">
          <p className="summary-label">{metric.label}</p>
          <MetricValue value={metric.value} trend={metric.trend} />
        </Card>
      ))}
    </section>
  );
}
