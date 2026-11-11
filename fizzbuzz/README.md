# FizzBuzz

FizzBuzz kata. TypeScript, tested with [Vitest](https://vitest.dev/), linted
with ESLint.

Part of the [plp-nov-april](../README.md) repo — every command below is run
from this directory, not the repo root.

## Setup

```bash
cd fizzbuzz
npm install
```

Requires Node.js 24+ (the project targets ES2025).

## Running tests

Run the whole suite once and exit — this is what CI runs:

```bash
npm test
```

Run in watch mode, re-running affected tests as you save:

```bash
npm run test:watch
```

Press `q` to quit watch mode, or `a` to re-run all tests.

Run once with a coverage report:

```bash
npm run test:coverage
```

To run a single file, or tests whose name matches a pattern:

```bash
npm test -- fizzbuzz          # only files matching "fizzbuzz"
npm test -- -t "FizzBuzz"     # only tests whose name matches
```

## Other commands

| Command | What it does |
| --- | --- |
| `npm run lint` | Check the codebase with ESLint |
| `npm run lint:fix` | Check and auto-fix what it can |
| `npm run typecheck` | Type-check with `tsc` (emits nothing) |

## Layout

```
src/
  fizzbuzz.test.ts   tests
```

All code lives in `src/`, with tests next to the code they cover, named
`*.test.ts`.

There is no build step — Vitest and `tsc` read the TypeScript in `src/`
directly, and nothing is compiled to disk.
