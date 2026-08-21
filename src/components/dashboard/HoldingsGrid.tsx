import { useMemo, useState } from 'react';
import type { Holding } from '../../domain/entities';
import { formatCurrency, formatPercent } from '../../utils/formatters';
import { Card } from '../shared/Card';
import { SectionHeader } from '../shared/SectionHeader';

type SortField = 'instrumentName' | 'assetType' | 'investedAmount' | 'currentValue' | 'returnPercentage';

type SortDirection = 'asc' | 'desc';

interface HoldingsGridProps {
  holdings: Holding[];
}

export function HoldingsGrid({ holdings }: HoldingsGridProps) {
  const [sortField, setSortField] = useState<SortField>('currentValue');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedHoldings = useMemo(() => {
    const clone = [...holdings];

    clone.sort((left, right) => {
      const leftValue = left[sortField];
      const rightValue = right[sortField];

      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return sortDirection === 'asc' ? leftValue - rightValue : rightValue - leftValue;
      }

      return sortDirection === 'asc'
        ? String(leftValue).localeCompare(String(rightValue))
        : String(rightValue).localeCompare(String(leftValue));
    });

    return clone;
  }, [holdings, sortDirection, sortField]);

  function handleSort(field: SortField) {
    if (field === sortField) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortField(field);
    setSortDirection('asc');
  }

  return (
    <Card className="holdings-card" data-testid="holdings-section">
      <SectionHeader
        title="Holdings Overview"
        subtitle="Instrument-level exposure and return profile"
      />
      <div className="holdings-table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                <button onClick={() => handleSort('instrumentName')} type="button">
                  Instrument
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('returnPercentage')} type="button">
                  Return %
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('assetType')} type="button">
                  Asset Type
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('investedAmount')} type="button">
                  Invested Amount
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('currentValue')} type="button">
                  Current Value
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedHoldings.map((holding) => {
              const returnClass = holding.returnPercentage >= 0 ? 'positive' : 'negative';

              return (
                <tr key={holding.holdingId}>
                  <td>{holding.instrumentName}</td>
                  <td className={`return-cell ${returnClass}`}>
                    {formatPercent(holding.returnPercentage)}
                  </td>
                  <td>{holding.assetType}</td>
                  <td>{formatCurrency(holding.investedAmount)}</td>
                  <td>{formatCurrency(holding.currentValue)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
