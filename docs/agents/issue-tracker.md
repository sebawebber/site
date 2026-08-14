# Issue tracker: GitHub

Issues and specifications for this repository live in GitHub Issues. Use the
`gh` CLI for all operations.

## Conventions

- **Create an issue:** `gh issue create --title "..." --body "..."`.
- **Read an issue:** `gh issue view <number> --comments`, including labels.
- **List issues:** `gh issue list --state open --json number,title,body,labels,comments` with appropriate filters.
- **Comment:** `gh issue comment <number> --body "..."`.
- **Apply or remove labels:** `gh issue edit <number> --add-label "..."` /
  `--remove-label "..."`.
- **Close:** `gh issue close <number> --comment "..."`.

Infer the repository from the Git remote; `gh` does this automatically inside
this clone.

## Pull requests as a triage surface

**PRs as a request surface: no.** Change this to `yes` only when external PRs
should enter the triage queue.

## When a skill requests publication or lookup

- **Publish to the tracker:** create a GitHub Issue.
- **Fetch a ticket:** run `gh issue view <number> --comments`.
