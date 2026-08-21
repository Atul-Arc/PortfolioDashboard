# Quickstart: Investment Portfolio Dashboard Validation

## Goal

Validate that the implemented feature satisfies business workflows, data contract rules,
and responsive behavior for desktop and tablet demonstrations.

## Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Feature branch checked out: 001-investment-portfolio-dashboard

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

3. Verify environment keys used by dashboard mock configuration are present.

## Run the Application

```bash
npm run dev
```

Expected outcome:
- Application starts locally without backend dependencies.
- Dashboard page renders executive summary, holdings, analytics, and risk sections.

## Run Automated Validation

1. Unit and component tests:

```bash
npm run test
```

2. Contract tests for mock payload integrity:

```bash
npm run test:contract
```

3. End-to-end happy path:

```bash
npm run test:e2e
```

Expected outcome:
- All tests pass.
- Contract tests confirm all 4 mock API payload shapes and reconciliation rules.
- End-to-end path confirms business-critical dashboard flow.

## Manual Validation Scenarios

1. Executive Dashboard Health Check
- Confirm display of total invested amount, current value, total gain/loss, return %, risk score.
- Confirm summary math aligns with holdings aggregates.

2. Holdings Grid Validation
- Confirm instrument name, asset type, invested amount, current value, return % per row.
- Confirm negative returns are clearly distinguishable.

3. Analytics Validation
- Confirm asset allocation pie chart renders and percentages are legible.
- Confirm portfolio performance trend chart renders time-series data.
- Confirm gain/loss by asset chart renders comparative values.

4. Risk Profile Validation
- Confirm risk score and risk interpretation text appear and are readable.

5. Responsive Validation
- Validate full workflow at desktop width (>= 1280px).
- Validate full workflow at tablet width (768px to 1024px), including holdings table usability.

## Artifact Traceability

- Data model reference: `data-model.md`
- Contract reference: `contracts/mock-api-contracts.md`
- Specification reference: `spec.md`
- Plan reference: `plan.md`

## Done Criteria

- Functional requirements FR-001 through FR-011 are demonstrated.
- Non-functional requirements NFR-001 through NFR-006 are demonstrated.
- Success criteria SC-001 through SC-006 are validated by test and walkthrough evidence.

## Validation Outcomes (2026-08-19)

- `npm run lint`: PASS
- `npm run build`: PASS
- `npm run test`: PASS (13 tests)
- `npm run test:contract`: PASS (2 tests)
- `npm run test:e2e`: PASS (1 Playwright scenario)

## Constitution Traceability

- Business-first dashboard sections implemented (summary, holdings, analytics, risk).
- React component architecture implemented with reusable dashboard/shared modules.
- Environment-driven config implemented via `.env.example` and `src/config/env.ts`.
- Mock enterprise contracts implemented with typed JSON fixtures and contract tests.
- Responsive desktop/tablet behavior validated in CSS and e2e scenario.
