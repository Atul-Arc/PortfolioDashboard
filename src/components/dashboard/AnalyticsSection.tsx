import type { AssetAllocationEntry, AssetGainLossEntry, PortfolioTrendPoint } from '../../domain/entities';
import { Card } from '../shared/Card';
import { SectionHeader } from '../shared/SectionHeader';
import { AssetAllocationChart } from './AssetAllocationChart';
import { GainLossByAssetChart } from './GainLossByAssetChart';
import { PortfolioPerformanceChart } from './PortfolioPerformanceChart';

interface AnalyticsSectionProps {
  allocation: AssetAllocationEntry[];
  trend: PortfolioTrendPoint[];
  gainLoss: AssetGainLossEntry[];
}

export function AnalyticsSection({ allocation, trend, gainLoss }: AnalyticsSectionProps) {
  return (
    <Card className="analytics-card" data-testid="analytics-section">
      <SectionHeader
        title="Portfolio Analytics"
        subtitle="Allocation, trend, and performance attribution for executive reporting"
      />
      <div className="analytics-grid">
        <AssetAllocationChart allocation={allocation} />
        <PortfolioPerformanceChart trend={trend} />
        <GainLossByAssetChart gainLoss={gainLoss} />
      </div>
    </Card>
  );
}
