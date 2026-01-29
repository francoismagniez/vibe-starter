# Project Rules (must follow)

## Stack
- Next.js App Router in `src/app`
- TypeScript strict
- Bun for package manager/runtime
- Tailwind + shadcn/ui (preferred UI)
- Drizzle ORM + PostgreSQL local via `DATABASE_URL`
- Prefer Server Actions for server logic (no REST unless requested)

## Conventions
- Keep changes small and scoped
- No new dependencies without asking
- Avoid `any` unless justified
- Follow existing file structure; do not invent random folders

## Safety
- Never print/commit secrets (.env.local, API keys)
- Only run safe local commands when needed (bun, bunx, git, psql)
