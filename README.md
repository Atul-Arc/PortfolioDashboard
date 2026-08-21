# Investment Portfolio Dashboard (Spec-Kit Demo)

This repository contains a frontend-only Investment Portfolio Dashboard built for a BFSI demo scenario.

The main purpose of this project is to demonstrate how to use **Spec-Kit implementation flow** end-to-end:
requirements to specification, specification to plan, plan to tasks, tasks to implementation, and implementation to validation.

## Project Overview

The dashboard simulates a wealth-management experience using hardcoded JSON fixtures that mimic enterprise API responses.

It includes:
- Executive portfolio summary (invested amount, current value, gain/loss, return, risk)
- Holdings table with instrument-level performance
- Analytics charts for allocation, trend, and gain/loss by asset
- Risk profile insights and interpretation

## Why This Project Exists

This is not just a UI demo. It is a **working Spec-Kit reference implementation** that shows:
- How business requirements are captured first
- How planning and task decomposition are documented before coding
- How code, tests, and artifacts stay traceable to the original specification

## Spec-Kit Implementation Trace

The feature lifecycle for this demo is documented under:
- `specs/001-investment-portfolio-dashboard/spec.md` - feature requirements, user stories, acceptance criteria
- `specs/001-investment-portfolio-dashboard/plan.md` - technical design and implementation strategy
- `specs/001-investment-portfolio-dashboard/tasks.md` - execution checklist mapped to user stories
- `specs/001-investment-portfolio-dashboard/contracts/mock-api-contracts.md` - mock API contract definitions
- `specs/001-investment-portfolio-dashboard/data-model.md` - domain entities and relationships
- `specs/001-investment-portfolio-dashboard/quickstart.md` - validation and test execution guide

This structure demonstrates how Spec-Kit keeps implementation disciplined, auditable, and easy to review.

## Tech Stack

- React + TypeScript + Vite
- Recharts for portfolio visualizations
- Vitest + Testing Library for unit/component/contract tests
- Playwright for end-to-end flow validation

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Install and Run

```bash
npm install
npm run dev
```

Open the app using the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - type-check and create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run lint checks
- `npm run typecheck` - run TypeScript checks
- `npm run test` - run full unit/component test suite
- `npm run test:contract` - run contract-focused tests
- `npm run test:e2e` - run end-to-end Playwright tests

## Validation and Demo Artifacts

- Demo walkthrough script: `docs/demo-script.md`
- Validation checklist and outcomes: `specs/001-investment-portfolio-dashboard/quickstart.md`

## Current Status

As recorded in quickstart validation (2026-08-19):
- Lint: PASS
- Build: PASS
- Unit/component tests: PASS
- Contract tests: PASS
- E2E scenario: PASS

## Audience

This project is intended for:
- Engineering teams learning or evaluating Spec-Kit
- BFSI pre-sales/demo teams needing a realistic React dashboard example
- Teams that want a practical example of requirements-first frontend delivery

## Author

Atul Kharecha

## License

Copyright (c) 2026 Atul Kharecha.

This project is free for use.
