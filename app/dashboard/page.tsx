import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Trophy, Calendar, Flame } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: children } = await supabase
    .from('children')
    .select('*, progress(*)')
    .eq('parent_id', user.id)

  const child = children?.[0]
  if (!child) redirect('/onboarding')

  const progress = child.progress?.[0]

  const handleSignOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">🎓 ESL Kids Tutor</div>
          <form action={handleSignOut}>
            <button>Sign Out</button>
          </form>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-gray-600 mb-8">Let's continue {child.name}'s learning journey</p>
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold">{child.name}</h2>
          <p className="text-gray-600 mb-6">{child.age} years old • {child.current_level}</p>
          <Link
            href={`/learn/${child.id}`}
            className="inline-block px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700"
          >
            Start Learning 🚀
          </Link>
        </div>
      </main>
    </div>
  )
}
