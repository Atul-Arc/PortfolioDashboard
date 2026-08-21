interface MetricValueProps {
  value: string;
  trend?: 'positive' | 'negative' | 'neutral';
  footnote?: string;
}

export function MetricValue({ value, trend = 'neutral', footnote }: MetricValueProps) {
  return (
    <div className="metric-value-wrapper">
      <strong className={`metric-value metric-${trend}`}>{value}</strong>
      {footnote ? <span className="metric-footnote">{footnote}</span> : null}
    </div>
  );
}
