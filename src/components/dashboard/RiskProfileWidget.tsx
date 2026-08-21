import type { RiskProfile } from '../../domain/entities';
import { Card } from '../shared/Card';
import { SectionHeader } from '../shared/SectionHeader';

interface RiskProfileWidgetProps {
  riskProfile: RiskProfile;
}

export function RiskProfileWidget({ riskProfile }: RiskProfileWidgetProps) {
  const bandClass = `risk-band risk-${riskProfile.riskBand.toLowerCase()}`;

  return (
    <Card className="risk-widget" data-testid="risk-section">
      <SectionHeader
        title="Risk Analytics"
        subtitle="Portfolio risk interpretation for executive action"
        badge={riskProfile.riskBand}
      />
      <div className="risk-body">
        <p>
          Risk score: <strong>{riskProfile.riskScore}</strong>
        </p>
        <p className={bandClass}>{riskProfile.interpretation}</p>
        {riskProfile.concentrationWarning ? (
          <aside className="risk-warning">{riskProfile.concentrationWarning}</aside>
        ) : null}
      </div>
    </Card>
  );
}
