<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Template Principle Slot 1 -> I. Business-First Wealth Management Design
- Template Principle Slot 2 -> II. Modern React Component Architecture
- Template Principle Slot 3 -> III. Clean Separation of Concerns
- Template Principle Slot 4 -> IV. Responsive Desktop and Tablet Experience
- Template Principle Slot 5 -> V. Mock Integration Data Contracts
Added principles:
- VI. Dashboard-Centric Actionable Insights
- VII. Spec-Kit Lifecycle Synchronization
- VIII. Requirements-First Change Control
- IX. BFSI-Grade Demonstration Practices
- X. Readability and Extensibility by Default
- XI. Environment-Driven Configuration
Added sections:
- Technology & Architecture Constraints
- Delivery Workflow & Quality Gates
Removed sections:
- None
Templates requiring updates:
- UPDATED .specify/templates/plan-template.md
- UPDATED .specify/templates/spec-template.md
- UPDATED .specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->

# Investment Portfolio Dashboard Constitution

## Core Principles

### I. Business-First Wealth Management Design
All product decisions MUST prioritize wealth management workflows, including portfolio
monitoring, allocation analysis, risk awareness, and performance interpretation. Each
major screen MUST make the next user action explicit so advisors and portfolio managers
can move from insight to decision with minimal friction.

Rationale: The application exists to demonstrate business value for BFSI stakeholders,
not generic dashboard aesthetics.

### II. Modern React Component Architecture
The frontend MUST use modern React patterns with reusable, composable components and
clear ownership boundaries. Shared UI primitives, domain widgets, and page-level
containers MUST be separated so features can be extended without rewriting existing
views.

Rationale: Reuse and composability reduce delivery risk and support rapid demo evolution.

### III. Clean Separation of Concerns
Presentation logic, state orchestration, data adaptation, and visualization configuration
MUST remain decoupled. Files and modules MUST have a single, clear responsibility,
and cross-layer coupling MUST be treated as a defect to be refactored.

Rationale: Maintainability and onboarding speed depend on low coupling and predictable
structure.

### IV. Responsive Desktop and Tablet Experience
All user journeys in scope MUST function on desktop and tablet layouts. Responsive
behavior MUST be intentional, not incidental, with readable typography, usable controls,
and stable chart interactions at target breakpoints.

Rationale: Client demos and internal evaluations occur across mixed device classes.

### V. Mock Integration Data Contracts
Backend integrations MUST be simulated using hardcoded JSON data and adapter functions
that mirror enterprise service contracts. Mock payloads MUST be versioned and organized
as reusable fixtures rather than embedded ad hoc in view components.

Rationale: Contract-like mocks preserve realism while keeping this demo frontend-only.

### VI. Dashboard-Centric Actionable Insights
The primary experience MUST be dashboard-first, with rich visualizations and concise,
action-oriented interpretation. Visuals MUST communicate portfolio state, trend movement,
and risk or opportunity signals in a form decision-makers can act on.

Rationale: The dashboard is the core product narrative for wealth management use cases.

### VII. Spec-Kit Lifecycle Synchronization
Requirements, plans, task breakdowns, and implementation artifacts MUST stay synchronized
throughout the Spec-Kit lifecycle. Any detected drift between these artifacts MUST be
resolved before further implementation proceeds.

Rationale: Synchronization prevents scope drift and protects traceability of delivery.

### VIII. Requirements-First Change Control
When requirements change, the specification MUST be updated and accepted before plan,
task, or implementation changes are applied. Direct implementation against unstated or
outdated requirements is prohibited.

Rationale: Controlled change flow avoids rework and protects stakeholder alignment.

### IX. BFSI-Grade Demonstration Practices
The project MUST demonstrate enterprise-grade engineering discipline suitable for BFSI
clients: deterministic behavior, reviewable design decisions, secure handling of
configuration inputs, and clear documentation of assumptions.

Rationale: Even demo artifacts must reflect production-minded rigor expected by BFSI
audiences.

### X. Readability and Extensibility by Default
Readability, consistency, and extensibility MUST take precedence over clever or overly
abstract implementations. Teams MUST prefer simple, explicit patterns that can be
understood and evolved by new contributors.

Rationale: Sustainable velocity depends on clarity more than short-term optimization.

### XI. Environment-Driven Configuration
Environment-specific values (for example API base URLs, mock profile toggles, and
feature switches) MUST be defined in environment files and accessed through a dedicated
configuration layer. Hardcoded runtime endpoints in source code are prohibited.

Rationale: Configuration isolation enables safer promotion across demo environments.

## Technology & Architecture Constraints

- The solution scope is frontend-only; no backend runtime implementation is in scope.
- The application MUST be implemented as a React-based web client with reusable UI
	components and modular feature composition.
- Data access MUST flow through mock adapter layers backed by JSON fixtures that emulate
	enterprise backend contracts.
- Visualization choices MUST prioritize interpretability, accessibility, and portfolio
	decision support over decorative complexity.
- Environment files (for example .env variants) MUST drive runtime configuration.

## Delivery Workflow & Quality Gates

- `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, and `/speckit.implement` MUST be
	executed in that order for each feature stream unless governance explicitly authorizes
	an exception.
- Every implementation plan MUST pass a Constitution Check before design and again after
	design updates.
- Every task set MUST include explicit validation coverage for responsive behavior,
	visualization correctness, mock data contract integrity, and environment configuration.
- Review artifacts MUST map implementation items back to specification requirements and
	identify any approved deviations.

## Governance

This constitution is the highest-priority governance source for the repository.
Conflicting local practices are invalid unless this constitution is amended.

Amendment process:
1. Propose changes in `.specify/memory/constitution.md` with a clear rationale.
2. Update dependent templates and workflow guidance in the same change set.
3. Record impacts in the Sync Impact Report and request reviewer approval.
4. Do not merge governance changes until consistency checks pass.

Versioning policy:
- MAJOR: Incompatible governance changes or principle removals/redefinitions.
- MINOR: New principle/section or materially expanded governance guidance.
- PATCH: Clarifications, wording improvements, and non-semantic refinements.

Compliance review expectations:
- Plans MUST document explicit Constitution Check outcomes.
- Specs MUST encode requirement-to-principle alignment where relevant.
- Tasks MUST preserve traceability to prioritized user stories and constitution rules.
- Implementation and review MUST fail closed on unresolved constitution violations.

**Version**: 1.0.0 | **Ratified**: 2026-08-19 | **Last Amended**: 2026-08-19
