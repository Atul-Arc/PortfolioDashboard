import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { AssetAllocationEntry } from '../../domain/entities';
import { CHART_COLORS } from '../../config/constants';
import { formatCurrency, formatPercent } from '../../utils/formatters';

interface AssetAllocationChartProps {
  allocation: AssetAllocationEntry[];
}

export function AssetAllocationChart({ allocation }: AssetAllocationChartProps) {
  return (
    <div className="chart-panel" data-testid="allocation-chart">
      <h3>Asset Allocation</h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={allocation}
            dataKey="currentValue"
            nameKey="assetType"
            innerRadius={62}
            outerRadius={95}
            paddingAngle={3}
          >
            {allocation.map((entry, index) => (
              <Cell key={entry.assetType} fill={CHART_COLORS[index % CHART_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, item) => {
              const numericValue = Number(value ?? 0);
              const payload = item?.payload as AssetAllocationEntry | undefined;
              const percent = payload ? formatPercent(payload.allocationPercentage) : '0.00%';

              return [`${formatCurrency(numericValue)} (${percent})`, name ?? 'Allocation'];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
