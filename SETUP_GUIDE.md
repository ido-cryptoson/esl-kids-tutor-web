# ESL Kids Tutor - Complete Setup Guide

This guide will walk you through setting up and deploying your AI English tutor application.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works!)
- An Anthropic API key (Claude)
- A GitHub account
- A Vercel account (optional, for deployment)

---

## Step 1: Set Up Supabase Database

### 1.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" and sign in
3. Click "New Project"
4. Fill in:
   - **Name**: `esl-kids-tutor`
   - **Database Password**: (create a strong password and save it)
   - **Region**: Choose closest to you
5. Click "Create new project" (takes ~2 minutes)

### 1.2 Run Database Migrations

1. Once your project is ready, go to the **SQL Editor** (left sidebar)
2. Copy and run the SQL from the database repository in this order:

**First, run:** `migrations/01_initial_schema.sql`
- Creates all tables (profiles, children, lessons, progress, etc.)
- Sets up functions and triggers

**Second, run:** `migrations/02_rls_policies.sql`
- Enables Row Level Security
- Sets up access policies

**Third, run:** `migrations/03_seed_data.sql`
- Adds 15 sample lessons across different levels

3. You should see "Success" messages after each migration

### 1.3 Get Your Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy these values (you'll need them later):
   - `Project URL` → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon/public` key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Step 2: Get Your Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in or create an account
3. Go to **API Keys** in the dashboard
4. Click "Create Key"
5. Give it a name (e.g., "ESL Kids Tutor")
6. Copy the key → This is your `ANTHROPIC_API_KEY`
7. **Important**: Save it now - you won't see it again!

---

## Step 3: Clone and Set Up the Web App

### 3.1 Clone the Repository

```bash
git clone https://github.com/ido-cryptoson/esl-kids-tutor-web.git
cd esl-kids-tutor-web
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Set Up Environment Variables

1. Copy the example env file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and fill in your values:

```env
# From Supabase (Step 1.3)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# From Anthropic (Step 2)
ANTHROPIC_API_KEY=sk-ant-your-key-here

# Local development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3.4 Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## Step 4: Test the Application Locally

### 4.1 Create a Parent Account

1. Click "Get Started" or "Sign Up"
2. Fill in:
   - Full Name
   - Email
   - Password (min 6 characters)
3. Click "Create Account"

### 4.2 Create a Child Profile

1. You'll be redirected to onboarding
2. Enter:
   - Child's name
   - Age (4-12)
3. Click "Continue"

### 4.3 Start a Lesson with Claude

1. On the dashboard, click "Start Learning with Claude 🚀"
2. You'll see Claude's greeting message
3. Type a response and press Enter or click "Send"
4. Claude will respond based on the lesson objectives!

**Test conversation example:**
- Claude: "Hello Emma! 👋 I'm Claude, your English tutor! Are you ready?"
- You: "yes"
- Claude: "Great! Let's start with greetings. Can you say 'hello'?"
- You: "hello"
- Claude: "Wonderful! 🎉 Now let's learn how to say goodbye..."

---

## Step 5: Deploy to Vercel (Production)

### 5.1 Push to GitHub (if you made local changes)

```bash
git add .
git commit -m "Configure environment"
git push origin main
```

### 5.2 Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import `ido-cryptoson/esl-kids-tutor-web`
4. Configure environment variables:
   - Click "Environment Variables"
   - Add each variable from your `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `ANTHROPIC_API_KEY`
     - `NEXT_PUBLIC_APP_URL` → Set to your Vercel URL (e.g., `https://esl-kids-tutor.vercel.app`)
5. Click "Deploy"

Wait 2-3 minutes for deployment to complete!

### 5.3 Update Supabase Redirect URLs

1. Go to your Supabase project
2. Navigate to **Authentication** → **URL Configuration**
3. Add your Vercel URL to **Site URL** and **Redirect URLs**:
   ```
   https://your-app.vercel.app
   https://your-app.vercel.app/**
   ```

---

## Step 6: Verify Production Deployment

1. Visit your Vercel URL
2. Sign up with a new account
3. Create a child profile
4. Start a lesson and chat with Claude
5. Check that messages are being saved and responses are working

---

## Troubleshooting

### Issue: "Invalid API key" error

- **Solution**: Check that your `ANTHROPIC_API_KEY` is correct in Vercel environment variables
- Redeploy after updating environment variables

### Issue: Can't sign up or login

- **Solution**: Verify Supabase credentials are correct
- Check that migrations ran successfully
- Verify redirect URLs are set in Supabase

### Issue: Claude not responding

- **Solution**: Check browser console for errors
- Verify `/api/chat` endpoint is working
- Check that lesson data exists in database (run seed migration)

### Issue: Database errors

- **Solution**: Re-run migrations in correct order
- Check RLS policies are enabled
- Verify your Supabase project is active

---

## What's Next?

### MVP Features Included ✅

- Email authentication
- Parent dashboard with child profile
- 15 lessons across 3 levels (PRE-K, LEVEL-1, LEVEL-2)
- Real-time chat with Claude AI tutor
- Progress tracking (XP, streaks, lessons completed)
- Responsive design

### Suggested Enhancements 🚀

1. **Add speech recognition** - Let kids speak instead of type
2. **Add more lessons** - Create content for LEVEL-3 and LEVEL-4
3. **Gamification** - Add badges, achievements, leaderboards
4. **Parent reports** - Weekly/monthly progress emails
5. **Lesson history** - Show past conversations
6. **Multiple children** - Support for siblings
7. **Payments** - Integrate Stripe for subscriptions

---

## Support

For issues or questions:
- Check the [GitHub Issues](https://github.com/ido-cryptoson/esl-kids-tutor-web/issues)
- Review Supabase docs: [supabase.com/docs](https://supabase.com/docs)
- Review Anthropic docs: [docs.anthropic.com](https://docs.anthropic.com)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   Next.js App                    │
│  (Vercel - Frontend + API Routes)               │
│                                                  │
│  Pages:                                          │
│  • Landing page                                  │
│  • Login/Signup                                  │
│  • Dashboard (parent view)                       │
│  • Learning interface (child + Claude chat)      │
│                                                  │
│  API Routes:                                     │
│  • /api/chat → Claude API integration            │
└─────────────────────────────────────────────────┘
                    ↓↑
┌─────────────────────────────────────────────────┐
│                  Supabase                        │
│  (Backend + Database)                            │
│                                                  │
│  Tables:                                         │
│  • profiles, children, lessons                   │
│  • lesson_sessions, progress                     │
│  • achievements, subscriptions                   │
│                                                  │
│  Features:                                       │
│  • Authentication (email/password)               │
│  • Row Level Security (RLS)                      │
│  • Real-time subscriptions                       │
└─────────────────────────────────────────────────┘
                    ↓↑
┌─────────────────────────────────────────────────┐
│              Claude API (Anthropic)              │
│                                                  │
│  Model: claude-sonnet-4-20250514                 │
│  • Personalized tutoring for each child          │
│  • Age-appropriate language                      │
│  • Gentle error correction                       │
│  • TPR method integration                        │
└─────────────────────────────────────────────────┘
```

Good luck with your ESL Kids Tutor! 🎓✨
