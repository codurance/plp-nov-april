# plp-nov-april

Personal learning path, Nov–April. Each project lives in its own top-level
directory and is fully self-contained — its own `package.json`, dependencies,
TypeScript config and tests.

## Projects

| Project | Description |
| --- | --- |
| [`fizzbuzz/`](./fizzbuzz) | FizzBuzz kata |

## Working on a project

There is no root `package.json` — always `cd` into the project first:

```bash
cd fizzbuzz
npm install
npm test
```

See each project's own README for its full command list.

## Adding a new project

```bash
mkdir my-kata && cd my-kata
npm init -y
```

Then add its dependencies, configs and tests. CI picks it up automatically —
the workflow discovers every directory containing a `package.json`, so there is
nothing to register.

A new project is expected to provide these npm scripts, which is what CI runs:

| Script | Purpose |
| --- | --- |
| `lint` | Static checks |
| `typecheck` | Type-check without emitting |
| `test` | Run the suite once and exit |

Copying `fizzbuzz/`'s config files is the quickest way to start.

## CI

[`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs on every push and
on PRs to `main`. It builds a matrix over the discovered projects and runs
lint, type-check and test in each, in parallel. `fail-fast` is off, so one project
breaking does not hide results for the others.
