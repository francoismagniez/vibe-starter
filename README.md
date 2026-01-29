cat > README.md <<'EOF'
# vibe-starter (Next.js + Bun + Drizzle + PostgreSQL local)

## Requirements
- Fedora (or Linux)
- PostgreSQL running locally (systemd)
- Bun installed

## Setup
```bash
bun install
cp .env.example .env.local
# edit .env.local with your local user/db
bun run db:generate
bun run db:migrate
bun dev