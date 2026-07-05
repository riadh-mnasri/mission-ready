# MissionReady

Spaced-repetition flashcards for freelance tech mission interview prep, in French and English.

MissionReady helps you walk into a technical interview sharp: review architecture, cloud, data platform, language, and domain-specific questions on a schedule that adapts to what you actually remember, instead of re-reading the same notes over and over.

## Why this exists

Freelance tech leads get evaluated on a wide, uneven surface: cloud infra, architecture patterns, testing discipline, a couple of JVM languages, and sometimes client-specific domain knowledge (risk, compliance...). Cramming the night before an interview does not stick. MissionReady applies the Leitner spaced-repetition method to that specific problem: short, frequent review sessions where cards you know well come back less often, and cards you get wrong resurface immediately.

## Features

- **Spaced repetition engine.** A 5-box Leitner system: answer a card correctly and it moves up a box with a longer interval before its next review; miss it and it drops straight back to box 1.
- **Seeded content.** Ships with about 145 flashcards across 12 themes: AWS, Clean Architecture, Hexagonal Architecture, Domain-Driven Design, TDD, Azure, Kubernetes, Kafka, Java, Kotlin, Counterparty Risk, and AI tooling (Copilot, Claude, and friends).
- **French / English toggle.** Every seeded card and all interface text switch language with one click. Technical vocabulary (Security Group, Bounded Context, readiness probe, acks...) is intentionally kept in English in both languages, since that's how these terms actually get used in interviews.
- **Custom themes and cards.** Add your own themes and flashcards for a specific client, mission, or technology on top of the seeded set.
- **Dashboard at a glance.** Every theme shows how many cards are due today, how many exist in total, and a mastery score.
- **Review sessions.** Flip a card, check yourself against the answer, and grade honestly with a single tap.
- **Local-first.** Everything is stored in the browser via `localStorage`. No account, no backend, no data leaving your machine.

## Design choices

- **Leitner over SM-2.** A full SM-2 scheduler (ease factors, precise day intervals per card) adds complexity that does not pay off for a personal review tool used in short bursts before interviews. Five boxes with fixed intervals are easy to reason about and just as effective at this scale.
- **No backend, for now.** A single user reviewing on one or two devices does not need a server. `localStorage` keeps the app simple to run and deploy; a sync backend can be added later without touching the review logic.
- **No SSR.** This is a local-first, client-only app with nothing to render server-side, so prerendering buys nothing. Every service reads `localStorage` directly in the browser, with no server/client snapshot to keep in sync.
- **Zoneless change detection.** The whole app is built on Signals, so there is no need for `zone.js` to trigger change detection.
- **Custom i18n over Angular's built-in i18n.** Angular's official i18n pipeline is a compile-time, per-locale-build system, which is the wrong tool for a runtime, user-toggled language switch. A small injectable service with a plain dictionary and a `language` signal does the job with far less machinery.
- **Themes are first-class, not hardcoded.** Seeded themes and user-created themes share the exact same data model, so the app never treats "built-in" content as special.

## Tech stack

- [Angular](https://angular.dev) 22, standalone components, Signals, zoneless
- TypeScript
- Tailwind CSS
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3213](http://localhost:3213).

```bash
npm run build   # production build
```

## Project structure

```
src/app/
  app.ts / app.html          Root shell: nav bar + router outlet
  app.routes.ts               Dashboard, review session, and theme management routes
  core/
    types.ts                  Core domain types (Theme, Flashcard)
    leitner.ts                 Spaced-repetition scheduling logic
    app-state.service.ts       Signal-based state, persisted to localStorage
    i18n.service.ts            Language signal, UI string dictionary, FR/EN card text helpers
    content/                   Seeded themes and flashcards (English + French), one file per theme
  components/                 Shared UI building blocks (flip card, theme card, nav bar...)
  pages/                       Dashboard, review session, theme management
```

## Roadmap

- Session summaries and streak tracking across days
- Import/export of a card deck as JSON
- Optional sync backend for reviewing across multiple devices

## License

MIT

---

© 2026 Riadh MNASRI
