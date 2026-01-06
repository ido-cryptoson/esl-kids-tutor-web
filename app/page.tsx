import Link from 'next/link'
import { Sparkles, Users, Trophy, BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary-600">
          🎓 ESL Kids Tutor
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Child's <span className="text-primary-600">AI English Tutor</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powered by Claude AI. Personalized, engaging, and effective English learning
            for kids ages 4-12.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition shadow-lg"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-primary-600" />}
            title="AI-Powered Learning"
            description="Personalized lessons adapted to your child's pace and level"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-primary-600" />}
            title="Native-Like Interaction"
            description="Natural conversations with Claude, just like talking to a friend"
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8 text-primary-600" />}
            title="Gamified Experience"
            description="Streaks, XP points, and achievements keep kids motivated"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-primary-600" />}
            title="Structured Curriculum"
            description="CEFR-aligned lessons from PRE-K through advanced levels"
          />
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number={1}
              title="Sign Up & Assess"
              description="Create an account and take a quick placement test to determine your child's level"
            />
            <Step
              number={2}
              title="Learn with Claude"
              description="25-minute interactive lessons with your personal AI tutor"
            />
            <Step
              number={3}
              title="Track Progress"
              description="Monitor growth through detailed parent dashboard and reports"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of parents helping their kids learn English
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Start Your Free Trial
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-gray-600">
        <p>&copy; 2026 ESL Kids Tutor. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
