# Mock API Contracts: Investment Portfolio Dashboard

## Purpose

Define stable mock interface contracts that emulate enterprise portfolio services while
keeping the implementation frontend-only.

## Contract 1: Portfolio Holdings API

- Contract Name: PortfolioHoldingsApi
- Mock Endpoint Identifier: GET /mock/portfolio/holdings
- Response Schema:

```json
{
  "portfolioId": "string",
  "asOfDate": "YYYY-MM-DD",
  "holdings": [
    {
      "holdingId": "string",
      "instrumentName": "string",
      "assetType": "Equity|FixedIncome|Cash|Alternative|Other",
      "investedAmount": 0,
      "currentValue": 0,
      "returnPercentage": 0
    }
  ]
}
```

- Consumer Mapping:
  - holdings -> HoldingsGrid rows
  - holdings -> derived summary and chart aggregations

## Contract 2: Asset Allocation API

- Contract Name: AssetAllocationApi
- Mock Endpoint Identifier: GET /mock/portfolio/allocation
- Response Schema:

```json
{
  "portfolioId": "string",
  "asOfDate": "YYYY-MM-DD",
  "allocations": [
    {
      "assetType": "string",
      "allocationPercentage": 0,
      "currentValue": 0
    }
  ]
}
```

- Consumer Mapping:
  - allocations -> AssetAllocationChart

## Contract 3: Portfolio Trend API

- Contract Name: PortfolioTrendApi
- Mock Endpoint Identifier: GET /mock/portfolio/trend
- Response Schema:

```json
{
  "portfolioId": "string",
  "series": [
    {
      "periodLabel": "string",
      "portfolioValue": 0,
      "investedValue": 0,
      "gainLossValue": 0
    }
  ]
}
```

- Consumer Mapping:
  - series -> PortfolioPerformanceChart

## Contract 4: Risk Profile API

- Contract Name: RiskProfileApi
- Mock Endpoint Identifier: GET /mock/portfolio/risk-profile
- Response Schema:

```json
{
  "portfolioId": "string",
  "riskScore": 0,
  "riskBand": "Conservative|Moderate|Aggressive",
  "interpretation": "string",
  "concentrationWarning": "string"
}
```

- Consumer Mapping:
  - riskScore, riskBand, interpretation -> RiskProfileWidget

## Contract Quality Rules

- All numeric fields must be finite numbers.
- All required fields must be present in every mock payload.
- Summary metrics must reconcile with holdings aggregates within defined tolerance.
- Contract changes require synchronized updates to spec, plan, tasks, and test contracts.

## Versioning and Change Policy

- Initial Version: 1.0.0 (feature baseline)
- Backward-compatible field additions: minor update
- Field rename/removal or shape changes: major update and downstream artifact updates
