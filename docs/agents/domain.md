# Domain documentation

How engineering skills should consume this repository's domain documentation.

## Before exploring

- Read the root `CONTEXT.md`.
- Read ADRs in `docs/adr/` that affect the relevant area.

If either path does not exist yet, proceed silently. The domain-modeling skill
creates glossaries and ADRs only when a term or decision is actually resolved.

## Structure

This is a single-context repository:

```text
/
├── CONTEXT.md
├── docs/
│   └── adr/
└── src/
```

## Vocabulary

Use the terms defined in `CONTEXT.md` in issue titles, proposals, hypotheses,
and tests. If a needed concept is absent, record that gap for a domain-modeling
session rather than introducing ambiguous synonyms.

## ADR conflicts

If a proposal conflicts with an existing ADR, state the conflict explicitly
rather than silently replacing it.
