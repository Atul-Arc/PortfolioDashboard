# Tasks: Investment Portfolio Dashboard

**Input**: Design documents from `/specs/001-investment-portfolio-dashboard/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Testing tasks are included because the feature request explicitly asks for final testing and the plan defines a layered testing strategy.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline frontend tooling

- [X] T001 Initialize React + TypeScript project scripts and dependencies in package.json
- [X] T002 Configure TypeScript and bundler defaults in tsconfig.json and vite.config.ts
- [X] T003 [P] Configure linting and formatting rules in .eslintrc.cjs and .prettierrc
- [X] T004 [P] Create environment configuration baseline in .env.example and src/config/env.ts
- [X] T005 [P] Create repository source and test folder structure in src/.gitkeep and tests/.gitkeep

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core architecture that MUST be complete before user stories

**CRITICAL**: No user story work begins before this phase is complete

- [X] T006 Define portfolio domain entities in src/domain/entities.ts
- [X] T007 Implement portfolio financial calculation helpers in src/domain/calculations.ts
- [X] T008 Define mock API response contracts in src/services/api/contracts.ts
- [X] T009 [P] Create holdings and allocation fixtures in src/services/api/fixtures/portfolio-holdings.json and src/services/api/fixtures/asset-allocation.json
- [X] T010 [P] Create trend and risk fixtures in src/services/api/fixtures/portfolio-trend.json and src/services/api/fixtures/risk-profile.json
- [X] T011 Implement mock API service orchestrator in src/services/api/portfolio-mock-api.ts
- [X] T012 Implement API-to-domain mapping functions in src/services/mappers/portfolio-mappers.ts
- [X] T013 Implement shared portfolio reducer and context provider in src/state/portfolio-reducer.ts and src/state/portfolio-context.tsx
- [X] T014 Implement derived selectors for summary and chart data in src/state/selectors.ts
- [X] T015 [P] Build shared UI primitives in src/components/shared/Card.tsx, src/components/shared/SectionHeader.tsx, and src/components/shared/MetricValue.tsx
- [X] T016 [P] Create dashboard route and shell layout in src/app/routes/DashboardPage.tsx and src/components/dashboard/DashboardLayout.tsx
- [X] T017 [P] Define visual tokens and responsive breakpoints in src/styles/tokens.css and src/styles/responsive.css
- [X] T018 Configure test runners and scripts in vitest.config.ts, playwright.config.ts, and package.json

**Checkpoint**: Foundation ready for parallel user story delivery

---

## Phase 3: User Story 1 - Review Executive Portfolio Health (Priority: P1) MVP

**Goal**: Deliver executive summary metrics and risk score insight for immediate portfolio health review

**Independent Test**: Open dashboard and validate all five summary metrics and risk score context without using holdings or analytics sections

### Tests for User Story 1

- [X] T019 [P] [US1] Add summary calculation unit tests in tests/unit/domain-calculations.test.ts
- [X] T020 [P] [US1] Add summary and risk mock contract assertions in tests/contract/mock-api-contracts.test.ts
- [X] T021 [P] [US1] Add summary widget rendering tests in tests/component/summary-widgets.test.tsx
- [X] T022 [P] [US1] Add risk widget rendering tests in tests/component/risk-profile-widget.test.tsx

### Implementation for User Story 1

- [X] T023 [P] [US1] Implement portfolio summary cards component in src/components/dashboard/PortfolioSummaryWidgets.tsx
- [X] T024 [P] [US1] Implement risk profile component in src/components/dashboard/RiskProfileWidget.tsx
- [X] T025 [US1] Wire summary and risk data loading in src/app/routes/DashboardPage.tsx
- [X] T026 [US1] Implement financial format utilities in src/utils/formatters.ts
- [X] T027 [US1] Apply executive summary styling rules in src/styles/dashboard.css

**Checkpoint**: User Story 1 is independently functional and testable

---

## Phase 4: User Story 2 - Analyze Holdings Composition (Priority: P1)

**Goal**: Deliver holdings table with complete instrument-level visibility

**Independent Test**: Navigate to holdings section and verify required columns and values for all records in holdings fixture

### Tests for User Story 2

- [X] T028 [P] [US2] Add holdings payload completeness checks in tests/contract/mock-api-contracts.test.ts
- [X] T029 [P] [US2] Add holdings grid interaction tests in tests/component/holdings-grid.test.tsx

### Implementation for User Story 2

- [X] T030 [P] [US2] Implement holdings grid component in src/components/dashboard/HoldingsGrid.tsx
- [X] T031 [US2] Implement holdings row guards and fallback handling in src/utils/guards.ts
- [X] T032 [US2] Extend mapper logic for holdings table view model in src/services/mappers/portfolio-mappers.ts
- [X] T033 [US2] Integrate holdings grid and local table state in src/app/routes/DashboardPage.tsx
- [X] T034 [US2] Apply holdings table layout and density styling in src/styles/dashboard.css and src/styles/responsive.css

**Checkpoint**: User Story 2 is independently functional and testable

---

## Phase 5: User Story 3 - Understand Portfolio Trends and Allocation (Priority: P2)

**Goal**: Deliver analytics visualizations for allocation, trend, and gain/loss by asset

**Independent Test**: Open analytics section and verify all three charts render from mapped mock data sources

### Tests for User Story 3

- [X] T035 [P] [US3] Add allocation and trend contract checks in tests/contract/mock-api-contracts.test.ts
- [X] T036 [P] [US3] Add analytics component rendering tests in tests/component/analytics-section.test.tsx

### Implementation for User Story 3

- [X] T037 [P] [US3] Implement asset allocation pie chart component in src/components/dashboard/AssetAllocationChart.tsx
- [X] T038 [P] [US3] Implement portfolio performance trend chart component in src/components/dashboard/PortfolioPerformanceChart.tsx
- [X] T039 [P] [US3] Implement gain or loss by asset chart component in src/components/dashboard/GainLossByAssetChart.tsx
- [X] T040 [US3] Implement analytics section composition in src/components/dashboard/AnalyticsSection.tsx
- [X] T041 [US3] Extend selectors for allocation, trend, and gain/loss series in src/state/selectors.ts
- [X] T042 [US3] Integrate analytics section into dashboard route in src/app/routes/DashboardPage.tsx
- [X] T043 [US3] Define chart palette and tooltip constants in src/config/constants.ts

**Checkpoint**: User Story 3 is independently functional and testable

---

## Phase 6: User Story 4 - Present a BFSI-Ready Demonstration Experience (Priority: P3)

**Goal**: Deliver polished, responsive, client-demo-ready dashboard workflow across required sections

**Independent Test**: Execute full demo walkthrough on desktop and tablet with coherent section narrative and readable UI

### Tests for User Story 4

- [X] T044 [P] [US4] Add executive walkthrough end-to-end test in tests/e2e/executive-dashboard-flow.spec.ts
- [X] T045 [P] [US4] Add tablet viewport behavior assertions in tests/e2e/executive-dashboard-flow.spec.ts

### Implementation for User Story 4

- [X] T046 [US4] Refine dashboard section sequencing and headers in src/components/dashboard/DashboardLayout.tsx
- [X] T047 [US4] Implement tablet-focused responsive refinements in src/styles/responsive.css
- [X] T048 [US4] Add risk interpretation and warning callouts in src/components/dashboard/RiskProfileWidget.tsx
- [X] T049 [US4] Implement empty-state and inconsistency messaging in src/app/routes/DashboardPage.tsx
- [X] T050 [US4] Add BFSI demo walkthrough script in docs/demo-script.md

**Checkpoint**: User Story 4 is independently functional and testable

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final quality, consistency, and release-readiness tasks

- [X] T051 [P] Validate environment configuration usage in .env.example and src/config/env.ts
- [X] T052 [P] Add final responsive/accessibility polish in src/styles/dashboard.css and src/styles/responsive.css
- [X] T053 Execute full automated test run updates in package.json and tests/e2e/executive-dashboard-flow.spec.ts
- [X] T054 Run quickstart validation checklist and update outcomes in specs/001-investment-portfolio-dashboard/quickstart.md
- [X] T055 Perform constitution traceability check across specs/001-investment-portfolio-dashboard/spec.md, specs/001-investment-portfolio-dashboard/plan.md, and specs/001-investment-portfolio-dashboard/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies
- **Phase 2 (Foundational)**: Depends on Phase 1 and blocks all user stories
- **Phase 3 (US1)**: Depends on Phase 2
- **Phase 4 (US2)**: Depends on Phase 2
- **Phase 5 (US3)**: Depends on Phase 2
- **Phase 6 (US4)**: Depends on completion of Phase 3, Phase 4, and Phase 5
- **Phase 7 (Polish)**: Depends on completion of all user story phases

### User Story Dependencies

- **US1 (P1)**: Starts after Foundational; independent from other stories
- **US2 (P1)**: Starts after Foundational; independent from US1
- **US3 (P2)**: Starts after Foundational; independent from US1/US2 for delivery
- **US4 (P3)**: Requires US1, US2, and US3 to be complete for full walkthrough validation

### Within Each User Story

- Write tests for story-specific behavior before closing implementation tasks
- Build/extend data mapping before final UI integration
- Complete integration tasks before story checkpoint sign-off

## Parallel Opportunities

- Phase 1 parallel tasks: T003, T004, T005
- Phase 2 parallel tasks: T009, T010, T015, T016, T017
- US1 parallel tasks: T019, T020, T021, T022, T023, T024
- US2 parallel tasks: T028, T029, T030
- US3 parallel tasks: T035, T036, T037, T038, T039
- US4 parallel tasks: T044, T045
- Polish parallel tasks: T051, T052

---

## Parallel Example: User Story 1

```bash
# Parallel test authoring
Task T019: tests/unit/domain-calculations.test.ts
Task T020: tests/contract/mock-api-contracts.test.ts
Task T021: tests/component/summary-widgets.test.tsx
Task T022: tests/component/risk-profile-widget.test.tsx

# Parallel component implementation
Task T023: src/components/dashboard/PortfolioSummaryWidgets.tsx
Task T024: src/components/dashboard/RiskProfileWidget.tsx
```

## Parallel Example: User Story 2

```bash
# Parallel workstream
Task T028: tests/contract/mock-api-contracts.test.ts
Task T029: tests/component/holdings-grid.test.tsx
Task T030: src/components/dashboard/HoldingsGrid.tsx
```

## Parallel Example: User Story 3

```bash
# Parallel chart implementation
Task T037: src/components/dashboard/AssetAllocationChart.tsx
Task T038: src/components/dashboard/PortfolioPerformanceChart.tsx
Task T039: src/components/dashboard/GainLossByAssetChart.tsx
```

## Parallel Example: User Story 4

```bash
# Parallel validation and responsive updates
Task T044: tests/e2e/executive-dashboard-flow.spec.ts
Task T045: tests/e2e/executive-dashboard-flow.spec.ts
Task T047: src/styles/responsive.css
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phase 1 and Phase 2
2. Deliver Phase 3 (US1)
3. Validate executive dashboard metrics and risk story
4. Demo MVP immediately after US1 checkpoint

### Incremental Delivery

1. Add US2 holdings capability next (P1)
2. Add US3 analytics capability next (P2)
3. Add US4 BFSI walkthrough polish (P3)
4. Finish with cross-cutting quality and final testing

### Team Parallelization Strategy

1. Entire team completes Setup and Foundational phases first
2. After foundation:
   - Developer A: US1
   - Developer B: US2
   - Developer C: US3
3. Team converges on US4 and final polish/testing

---

## Notes

- Every task includes explicit file path targets for direct execution
- User story phases are independently testable by design
- Priority order is preserved as P1 (US1, US2), P2 (US3), P3 (US4)
- Final testing is captured in story and polish phases to satisfy delivery quality goals

## Phase 8: Convergence

- [ ] T056 Implement cross-source portfolio reconciliation checks (holdings vs allocation totals and trend coherence) and drive true inconsistency alerts in src/state/selectors.ts and src/app/routes/DashboardPage.tsx per Edge Cases and T049 (contradicts)
- [ ] T057 Add persistent chart legends and at-a-glance value labels for allocation and gain/loss analytics in src/components/dashboard/AssetAllocationChart.tsx and src/components/dashboard/GainLossByAssetChart.tsx per NFR-004 and FR-010 (partial)
- [ ] T058 Expand tablet usability assertions (table overflow usability and chart readability checks) in tests/e2e/executive-dashboard-flow.spec.ts per NFR-001 and US4/AC2 (partial)
- [ ] T059 Review and remove or justify unused scaffold artifacts in src/App.css, src/index.css, and src/assets/* per Constitution X readability/extensibility standard (unrequested)
