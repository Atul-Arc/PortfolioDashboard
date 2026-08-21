# Research: Investment Portfolio Dashboard

## Decision 1: Frontend Stack and Application Shape

- Decision: Use a React + TypeScript frontend-only web application with component-based
  composition and no backend runtime dependencies.
- Rationale: Aligns with requested implementation approach and constitution principles
  for modern React architecture, readability, and BFSI-grade demo quality.
- Alternatives considered:
  - Vanilla JavaScript SPA: rejected due to weaker type safety and maintainability.
  - Multi-project frontend/backend split: rejected because backend is out of scope.

## Decision 2: Component Architecture

- Decision: Use a container-and-section architecture centered on DashboardPage with
  dedicated components for summary widgets, holdings grid, analytics charts, and risk
  profile widget.
- Rationale: Enables clean separation of concerns, independent testing, and predictable
  rendering boundaries.
- Alternatives considered:
  - Monolithic dashboard component: rejected due to poor maintainability.
  - Excessive atomic decomposition: rejected to avoid unnecessary complexity.

## Decision 3: State Management

- Decision: Use React Context + reducer for shared portfolio data state and local state
  within components for UI-only interactions.
- Rationale: Sufficient for current scope, simple to reason about, and avoids over-
  engineering while preserving scalability.
- Alternatives considered:
  - Redux Toolkit: rejected as unnecessary for current data complexity.
  - Component-local state only: rejected due to duplication of derived calculations.

## Decision 4: Mock API Layer and Data Contracts

- Decision: Implement a mock API service layer returning hardcoded JSON fixtures with
  typed response contracts for Portfolio Holdings, Asset Allocation, Portfolio Trend,
  and Risk Profile data.
- Rationale: Simulates enterprise integration boundaries while keeping implementation
  frontend-only and deterministic.
- Alternatives considered:
  - Embed mock data directly in components: rejected due to tight coupling.
  - Mock Service Worker integration: rejected as unnecessary setup overhead for demo.

## Decision 5: UI Design and Responsive Strategy

- Decision: Adopt a professional dashboard-first layout optimized for desktop and tablet,
  with clear KPI hierarchy, readable numeric formatting, and chart-first analytics.
- Rationale: Directly supports wealth management workflows and BFSI demonstration goals.
- Alternatives considered:
  - Mobile-first compact card-only design: rejected because table and analytics density
    is critical for target users.
  - Fixed desktop-only layout: rejected due to tablet requirement.

## Decision 6: Testing Strategy

- Decision: Use layered testing with unit, component, contract, and focused end-to-end
  validation of key dashboard flows.
- Rationale: Balances confidence and delivery speed for a frontend-only demo while
  enforcing data-contract integrity and business correctness.
- Alternatives considered:
  - End-to-end-only testing: rejected due to slow feedback and weak fault isolation.
  - Snapshot-only chart tests: rejected due to brittle visual diffs.

## Decision 7: Clean Folder Structure

- Decision: Use a single-project structure separating app routes, reusable components,
  state, domain logic, service adapters, config, styles, and tests.
- Rationale: Keeps module responsibilities explicit and supports future extension with
  minimal refactoring.
- Alternatives considered:
  - Flat folder layout: rejected due to poor scaling and discoverability.
  - Domain-heavy enterprise layers: rejected as over-abstract for demo scope.

## Decision 8: Environment Configuration

- Decision: Use environment-file driven configuration for runtime values (for example
  mock profile selection and API base label) via a dedicated config module.
- Rationale: Satisfies constitution requirement to avoid hardcoded runtime values and
  improves portability across demo environments.
- Alternatives considered:
  - Hardcoded constants in service files: rejected by governance rules.
  - Runtime manual edits before demos: rejected due to operational risk.

## Pitfalls and Mitigations

- Decision: Add explicit checks and formatting rules for financial values and data
  reconciliation between summary and holdings totals.
- Rationale: Prevents trust-eroding inconsistencies during BFSI demos.
- Alternatives considered:
  - Assume mock values always match: rejected because drift can happen during updates.
