import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { PortfolioTrendPoint } from '../../domain/entities';
import { formatCompactCurrency } from '../../utils/formatters';

interface PortfolioPerformanceChartProps {
  trend: PortfolioTrendPoint[];
}

export function PortfolioPerformanceChart({ trend }: PortfolioPerformanceChartProps) {
  return (
    <div className="chart-panel" data-testid="trend-chart">
      <h3>Portfolio Growth Trend</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={trend}>
          <CartesianGrid strokeDasharray="4 4" stroke="#d5dceb" />
          <XAxis dataKey="periodLabel" />
          <YAxis tickFormatter={(value) => formatCompactCurrency(value)} />
          <Tooltip formatter={(value) => formatCompactCurrency(Number(value ?? 0))} />
          <Line type="monotone" dataKey="portfolioValue" stroke="#0f4c81" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="investedValue" stroke="#769cc5" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
