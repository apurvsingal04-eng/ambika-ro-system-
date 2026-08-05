# AMBIKA RO SYSTEM

A marketing/product website for Ambika RO System — a water purification company offering domestic RO purifiers, industrial RO plants, DM plants, and softeners.

## Stack

- **Frontend** (`artifacts/ambika-ro-system`): React + Vite + Tailwind CSS v4 + shadcn/ui + Framer Motion + Wouter routing
- **Backend** (`artifacts/api-server`): Express 5 + Drizzle ORM + Pino logging
- **Monorepo**: pnpm workspaces

## Running the project

Both services are managed by Replit workflows and start automatically:

| Service | Command | Preview |
|---------|---------|---------|
| Frontend (web) | `pnpm --filter @workspace/ambika-ro-system run dev` | `/` |
| API Server | `pnpm --filter @workspace/api-server run dev` | `/api` |

To install dependencies: `pnpm install` from the project root.

## Project structure

```
artifacts/
  ambika-ro-system/   # React frontend
    src/
      pages/home.tsx  # Main landing page
      components/     # UI components (shadcn/ui)
  api-server/         # Express API backend
    src/
      app.ts          # Express app setup
      routes/         # API routes
      lib/            # Utilities (logger, db)
lib/                  # Shared workspace libraries
attached_assets/      # Product and brand images
```

## User preferences

<!-- Add user preferences here as they are expressed -->
