# MissionReady

Spaced-repetition flashcards for freelance tech mission interview prep.

MissionReady helps you walk into a technical interview sharp: review architecture, cloud, data platform, language, and domain-specific questions on a schedule that adapts to what you actually remember, instead of re-reading the same notes over and over.

## Why this exists

Freelance tech leads get evaluated on a wide, uneven surface: cloud infra, architecture patterns, testing discipline, a couple of JVM languages, and sometimes client-specific domain knowledge (risk, compliance...). Cramming the night before an interview does not stick. MissionReady applies the Leitner spaced-repetition method to that specific problem: short, frequent review sessions where cards you know well come back less often, and cards you get wrong resurface immediately.

## Features

- **Spaced repetition engine.** A 5-box Leitner system: answer a card correctly and it moves up a box with a longer interval before its next review; miss it and it drops straight back to box 1.
- **Seeded content.** Ships with about 145 flashcards across 12 themes: AWS, Clean Architecture, Hexagonal Architecture, Domain-Driven Design, TDD, Azure, Kubernetes, Kafka, Java, Kotlin, Counterparty Risk, and AI tooling (Copilot, Claude, and friends).
- **Custom themes and cards.** Add your own themes and flashcards for a specific client, mission, or technology on top of the seeded set.
- **Dashboard at a glance.** Every theme shows how many cards are due today, how many exist in total, and a mastery score.
- **Review sessions.** Flip a card, check yourself against the answer, and grade honestly with a single tap.
- **Local-first.** Everything is stored in the browser via `localStorage`. No account, no backend, no data leaving your machine.

## Design choices

- **Leitner over SM-2.** A full SM-2 scheduler (ease factors, precise day intervals per card) adds complexity that does not pay off for a personal review tool used in short bursts before interviews. Five boxes with fixed intervals are easy to reason about and just as effective at this scale.
- **No backend, for now.** A single user reviewing on one or two devices does not need a server. `localStorage` keeps the app simple to run and deploy; a sync backend can be added later without touching the review logic.
- **Themes are first-class, not hardcoded.** Seeded themes and user-created themes share the exact same data model, so the app never treats "built-in" content as special.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- Tailwind CSS
- Framer Motion for the flip-card and transition animations
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3213](http://localhost:3213).

```bash
npm run build   # production build
npm run lint    # lint the codebase
```

## Project structure

```
app/                 Routes: dashboard, review sessions, theme management
components/          UI building blocks (flip card, theme card, nav bar...)
lib/
  types.ts           Core domain types (Theme, Flashcard)
  leitner.ts          Spaced-repetition scheduling logic
  storage.ts          localStorage-backed state store
  content/            Seeded themes and flashcards, one file per theme
```

## Roadmap

- Session summaries and streak tracking across days
- Import/export of a card deck as JSON
- Optional sync backend for reviewing across multiple devices

## License

MIT
