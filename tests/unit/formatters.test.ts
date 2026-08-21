import { describe, expect, it } from 'vitest';
import { formatCompactCurrency, formatCurrency, formatPercent } from '../../src/utils/formatters';

describe('formatters', () => {
  it('formats currency for dashboard metrics', () => {
    expect(formatCurrency(1234.56)).toContain('$1,234.56');
  });

  it('formats compact currency strings', () => {
    expect(formatCompactCurrency(1200000)).toContain('$1.2M');
  });

  it('formats percentages with two decimals', () => {
    expect(formatPercent(10.5)).toBe('10.50%');
  });
});
