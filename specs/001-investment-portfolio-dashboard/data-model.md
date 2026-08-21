# Data Model: Investment Portfolio Dashboard

## Overview

This feature uses contract-shaped mock JSON data mapped into frontend domain entities.
All values are in-memory and loaded through mock API services.

## Entities

### 1. PortfolioSummary

- Description: Aggregate metrics presented in executive summary widgets.
- Fields:
  - totalInvestedAmount: number (required, >= 0)
  - currentPortfolioValue: number (required, >= 0)
  - totalGainLoss: number (required, can be negative)
  - portfolioReturnPercentage: number (required, can be negative)
  - riskScore: number (required, range 0 to 100)
  - asOfDate: string (required, ISO date)
- Validation rules:
  - totalGainLoss = currentPortfolioValue - totalInvestedAmount
  - If totalInvestedAmount > 0 then portfolioReturnPercentage equals
    (totalGainLoss / totalInvestedAmount) * 100 within rounding tolerance

### 2. Holding

- Description: Instrument-level portfolio position shown in holdings grid.
- Fields:
  - holdingId: string (required, unique)
  - instrumentName: string (required, non-empty)
  - assetType: enum (required: Equity | FixedIncome | Cash | Alternative | Other)
  - investedAmount: number (required, >= 0)
  - currentValue: number (required, >= 0)
  - returnPercentage: number (required, can be negative)
  - weightPercentage: number (optional, range 0 to 100)
- Validation rules:
  - If investedAmount = 0, returnPercentage is treated as 0 or NotApplicable in view
  - investedAmount and currentValue must be finite numeric values

### 3. AssetAllocationEntry

- Description: Allocation slice used by asset allocation pie chart.
- Fields:
  - assetType: string (required)
  - allocationPercentage: number (required, 0 to 100)
  - currentValue: number (required, >= 0)
- Validation rules:
  - Sum of allocationPercentage across all entries should be 100 +/- tolerance

### 4. PortfolioTrendPoint

- Description: Time-series point for portfolio performance trend chart.
- Fields:
  - periodLabel: string (required, e.g., month/quarter)
  - portfolioValue: number (required, >= 0)
  - investedValue: number (optional, >= 0)
  - gainLossValue: number (optional, can be negative)
- Validation rules:
  - periodLabel values must be unique in ordered sequence

### 5. RiskProfile

- Description: Risk profile entity used by risk widget.
- Fields:
  - riskScore: number (required, 0 to 100)
  - riskBand: enum (required: Conservative | Moderate | Aggressive)
  - interpretation: string (required, non-empty)
  - concentrationWarning: string (optional)
- Validation rules:
  - riskBand must align with configured score thresholds

### 6. AssetGainLossEntry

- Description: Per-asset gain/loss series used in comparative chart.
- Fields:
  - assetLabel: string (required)
  - gainLossValue: number (required, can be negative)
  - gainLossPercentage: number (optional, can be negative)
- Validation rules:
  - Labels should align with holdings asset/instrument mapping

## Relationships

- PortfolioSummary is derived from Holding aggregates plus RiskProfile score context.
- AssetAllocationEntry represents grouped views of Holding currentValue totals.
- AssetGainLossEntry is derived from Holding gain/loss values grouped by asset.
- PortfolioTrendPoint is independent historical-like series but must remain consistent
  with summary directionality (for example upward trend should not contradict net gain).

## Derived View Models

- ExecutiveWidgetModel: label + value + delta + statusColor.
- HoldingsRowModel: formatted instrument and performance values.
- ChartSeriesModel: normalized chart points for pie/line/bar components.

## State Transitions

### DashboardDataLoadState

- idle -> loading: user opens dashboard or triggers refresh.
- loading -> ready: all required mock API responses are resolved and validated.
- loading -> error: one or more required data sources fail validation.
- ready -> loading: user refresh or profile switch.

### RiskDisplayState

- hidden -> visible: risk payload available.
- visible -> warning: data inconsistency or threshold breach requires highlighted callout.
