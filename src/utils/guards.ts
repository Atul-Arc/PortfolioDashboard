export function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function safeNumber(value: unknown, fallback = 0): number {
  return isFiniteNumber(value) ? value : fallback;
}

export function safeText(value: unknown, fallback = 'N/A'): string {
  if (typeof value !== 'string') {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}
