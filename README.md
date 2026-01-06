# ESL Kids Tutor - Web App

AI-powered English tutor for kids (ages 4-12) using Claude API.

## Features

- 🎯 AI Tutoring powered by Claude
- 👨‍👩‍👧 Parent dashboard with progress tracking
- 🎮 Gamified learning with streaks & XP
- 📚 Structured curriculum (PRE-K through Level 4)
- 🔐 Secure authentication via Supabase

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **AI:** Claude API (Anthropic)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase account and project
- An Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ido-cryptoson/esl-kids-tutor-web.git
cd esl-kids-tutor-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your actual keys
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Database Setup

See the [esl-kids-tutor-db](https://github.com/ido-cryptoson/esl-kids-tutor-db) repository for database migrations.

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## License

MIT
