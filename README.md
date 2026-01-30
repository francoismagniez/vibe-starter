# vibe-starter

Next.js 16 + Bun + Drizzle + PostgreSQL starter template

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun-latest-black)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](https://www.typescriptlang.org/)

Local-first starter template: runs entirely on your machine (no cloud services required).

## Prerequisites

- Bun installed (`bun --version`)
- PostgreSQL running locally (Fedora/systemd)
  - This template is configured for **Unix socket** connections on Fedora: `/run/postgresql`

## Quick start

```bash
bun install
cp .env.example .env.local
```

Edit `.env.local` with your `DATABASE_URL` (it is **git-ignored**):

```bash
# Fedora (Unix socket)
DATABASE_URL="postgresql://USER@/DB?host=/run/postgresql"
```

Then initialize the database and start the dev server:

```bash
bun run db:generate
bun run db:migrate
bun dev
```

App will be available on `http://localhost:3000`.

## Database setup

This project uses Drizzle ORM with PostgreSQL.

- **Unix socket on Fedora**: `/run/postgresql`
- **`DATABASE_URL` format**:
  - `postgresql://USER@/DB?host=/run/postgresql`

Example (adjust `USER` and `DB`):

```bash
DATABASE_URL="postgresql://francois@/vibe_starter?host=/run/postgresql"
```

## Available scripts

Run with Bun:

```bash
bun dev
bun run build
bun start
bun run lint
```

Database (Drizzle):

```bash
bun run db:generate
bun run db:migrate
bun run db:studio
```

## Project structure overview

```text
src/
  app/              Next.js App Router (routes, layouts, pages)
  db/               Drizzle config, schema, and migrations
public/             Static assets
```

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Bun (runtime + package manager)
- Drizzle ORM
- PostgreSQL (local, Unix socket on Fedora)