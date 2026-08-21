import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { AssetGainLossEntry } from '../../domain/entities';
import { formatCompactCurrency } from '../../utils/formatters';

interface GainLossByAssetChartProps {
  gainLoss: AssetGainLossEntry[];
}

export function GainLossByAssetChart({ gainLoss }: GainLossByAssetChartProps) {
  return (
    <div className="chart-panel" data-testid="gain-loss-chart">
      <h3>Gain / Loss by Asset</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={gainLoss}>
          <CartesianGrid strokeDasharray="4 4" stroke="#d5dceb" />
          <XAxis dataKey="assetLabel" />
          <YAxis tickFormatter={(value) => formatCompactCurrency(value)} />
          <Tooltip formatter={(value) => formatCompactCurrency(Number(value ?? 0))} />
          <Bar dataKey="gainLossValue" fill="#007c91" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
