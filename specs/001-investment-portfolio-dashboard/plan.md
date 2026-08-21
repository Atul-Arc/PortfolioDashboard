# Implementation Plan: Investment Portfolio Dashboard

**Branch**: `001-investment-portfolio-dashboard` | **Date**: 2026-08-19 | **Spec**: `/specs/001-investment-portfolio-dashboard/spec.md`

**Input**: Feature specification from `/specs/001-investment-portfolio-dashboard/spec.md`

## Summary

Build a professional, frontend-only React dashboard for wealth management users that
surfaces portfolio summary, holdings, analytics charts, and risk profile insight from
four mock enterprise API sources backed by hardcoded JSON contracts. The implementation
will use TypeScript, a component-based architecture, a lightweight shared state layer,
and responsive desktop/tablet layouts to maximize demo credibility for BFSI audiences.

## Technical Context

**Language/Version**: TypeScript (strict mode), React 18

**Primary Dependencies**: React, React DOM, charting library (Recharts), styling system
for design tokens and responsive layout, test tooling (Vitest, React Testing Library,
Playwright for key end-to-end flow)

**Storage**: N/A (in-memory mock JSON fixtures only)

**Testing**: Vitest + React Testing Library for unit/component tests, contract tests
for mock payload integrity, Playwright for critical demo journey

**Target Platform**: Modern desktop and tablet browsers (Chromium, Edge, Safari)

**Project Type**: Frontend-only web application

**Performance Goals**: Initial dashboard render under 3 seconds in normal local demo
conditions; main interactions (table sort/filter, chart section switch) under 100 ms
perceived response

**Constraints**: No backend, no authentication, no database, no cloud deployment,
frontend-only architecture, environment-driven configuration for runtime values

**Scale/Scope**: Single product dashboard experience with 4 core sections, 4 mock API
contracts, reusable components for summary widgets/charts/table/risk, and demo-grade
reporting insight

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Design Gate Review

- [x] Business-first alignment: Wealth management decision flows drive section hierarchy.
- [x] React architecture: Reusable component composition is the primary implementation model.
- [x] Separation of concerns: UI, state, adapters, and calculations are split by responsibility.
- [x] Responsive scope: Desktop/tablet behavior and breakpoints are mandatory.
- [x] Mock contracts: Four contract-shaped JSON sources are required.
- [x] Dashboard UX: Insight-focused visual narrative is explicitly prioritized.
- [x] Spec-Kit sync: Spec to plan traceability is defined before implementation.
- [x] Requirements-first control: Requirement changes must update spec first.
- [x] BFSI-grade practices: Deterministic demo behavior and reviewability are required.
- [x] Simplicity standard: Minimal, explicit patterns preferred over heavy frameworks.
- [x] Environment configuration: Runtime configuration must come from env files.

Pre-Design Gate Result: PASS

### Post-Design Gate Review (after Phase 1 artifacts)

- [x] Business-first alignment maintained in data model and contract mapping.
- [x] React architecture reflected in folder structure and component boundaries.
- [x] Separation of concerns preserved across UI/domain/adapters/tests.
- [x] Responsive requirements reflected in quickstart validation scenarios.
- [x] Mock contract integrity documented in contracts artifact.
- [x] Dashboard insight model represented in entities and derived metrics.
- [x] Spec-Kit traceability retained across spec/plan/research/model/contracts.
- [x] Requirements-first flow retained with no implementation drift.
- [x] BFSI-grade discipline encoded in deterministic test/validation approach.
- [x] Simplicity and extensibility balanced through lightweight architecture choices.
- [x] Environment-driven configuration included in architecture and validation.

Post-Design Gate Result: PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-investment-portfolio-dashboard/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- mock-api-contracts.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- app/
|   |-- App.tsx
|   `-- routes/
|       `-- DashboardPage.tsx
|-- components/
|   |-- dashboard/
|   |   |-- DashboardLayout.tsx
|   |   |-- PortfolioSummaryWidgets.tsx
|   |   |-- HoldingsGrid.tsx
|   |   |-- AssetAllocationChart.tsx
|   |   |-- PortfolioPerformanceChart.tsx
|   |   `-- RiskProfileWidget.tsx
|   `-- shared/
|       |-- Card.tsx
|       |-- SectionHeader.tsx
|       `-- MetricValue.tsx
|-- state/
|   |-- portfolio-context.tsx
|   |-- portfolio-reducer.ts
|   `-- selectors.ts
|-- services/
|   |-- api/
|   |   |-- contracts.ts
|   |   `-- portfolio-mock-api.ts
|   `-- mappers/
|       `-- portfolio-mappers.ts
|-- domain/
|   |-- entities.ts
|   `-- calculations.ts
|-- config/
|   |-- env.ts
|   `-- constants.ts
|-- styles/
|   |-- tokens.css
|   |-- dashboard.css
|   `-- responsive.css
`-- utils/
    |-- formatters.ts
    `-- guards.ts

tests/
|-- unit/
|   |-- domain-calculations.test.ts
|   `-- formatters.test.ts
|-- contract/
|   `-- mock-api-contracts.test.ts
|-- component/
|   |-- summary-widgets.test.tsx
|   |-- holdings-grid.test.tsx
|   `-- risk-profile-widget.test.tsx
`-- e2e/
    `-- executive-dashboard-flow.spec.ts
```

**Structure Decision**: Single frontend project structure selected to match the
frontend-only scope while preserving clear separation between domain logic, state,
mock API adapters, and presentation components. This keeps implementation simple and
extensible without introducing unnecessary multi-project complexity.

## Component Architecture

- Dashboard page as orchestration container that composes section-level components.
- Summary widgets use a reusable metric-card pattern for consistency and scalability.
- Holdings grid is an independent component responsible for tabular rendering and UI
  interactions such as sort/filter.
- Analytics section encapsulates chart components with shared formatting utilities and
  adapter-mapped view models.
- Risk profile widget remains independent to support future extension (risk bands,
  explanatory text, and benchmark comparisons).

## State Management Approach

- Use React Context + reducer for shared portfolio state sourced from mock API services.
- Keep transient UI state local to components (table sorting, chart hover/selection).
- Keep derived values (total gain/loss, return percent, reconciled totals) in selector
  functions to avoid duplicated calculation logic across components.
- Keep asynchronous loading state explicit (`idle`, `loading`, `ready`, `error`) to
  ensure deterministic rendering during demo walkthroughs.

## Mock API Layer

- Provide four mock API methods aligned to required enterprise data sources:
  holdings, allocation, trend, risk profile.
- Store hardcoded JSON fixtures in contract-aligned shapes and map them into domain
  entities through dedicated mapper functions.
- Centralize API interface in a single service entry point so real API integration can
  be introduced later without changing component interfaces.
- Validate mock contract consistency with contract tests to prevent silent data drift.

## UI Design Approach

- Use a professional wealth-management visual language: clean hierarchy, strong numeric
  readability, restrained but meaningful color coding for gains/losses and risk.
- Maintain dashboard-first information architecture: executive summary, then holdings,
  then analytics and risk interpretation.
- Design responsive behavior intentionally for desktop and tablet breakpoints with
  preserved data density and readable charts.
- Use consistent financial formatting for currency and percentages across all sections.

## Testing Strategy

- Unit tests for calculations, formatters, and mapping helpers.
- Component tests for summary widgets, holdings grid behavior, and risk profile output.
- Contract tests for all four mock API responses to enforce required shapes and
  reconciliation checks.
- End-to-end happy-path test validating the executive dashboard flow across required
  sections and baseline responsiveness.

## Complexity Tracking

No constitution violations or complexity exceptions were required for this plan.
