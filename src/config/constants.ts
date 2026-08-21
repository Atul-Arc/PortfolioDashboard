import type { RiskBand } from '../domain/entities';

export const CHART_COLORS = ['#007c91', '#0f4c81', '#34b3a0', '#e9a92a', '#ff6f59'];

export const RISK_THRESHOLDS: Record<RiskBand, { min: number; max: number }> = {
  Conservative: { min: 0, max: 39 },
  Moderate: { min: 40, max: 69 },
  Aggressive: { min: 70, max: 100 },
};

export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
};
