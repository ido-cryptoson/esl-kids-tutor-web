export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Child {
  id: string
  parent_id: string
  name: string
  age: number
  avatar_url: string | null
  current_level: 'PRE-K' | 'LEVEL-1' | 'LEVEL-2' | 'LEVEL-3' | 'LEVEL-4'
  created_at: string
  updated_at: string
}

export interface Lesson {
  id: string
  level: string
  unit_number: number
  lesson_number: number
  title: string
  description: string | null
  objectives: string[] | null
  content: any
  duration_minutes: number
  created_at: string
}

export interface Progress {
  id: string
  child_id: string
  total_xp: number
  current_streak: number
  longest_streak: number
  last_lesson_date: string | null
  lessons_completed: number
  total_time_minutes: number
  created_at: string
  updated_at: string
}

export interface LessonSession {
  id: string
  child_id: string
  lesson_id: string
  started_at: string
  completed_at: string | null
  duration_seconds: number | null
  xp_earned: number
  conversation_log: any
  score: number | null
  feedback: string | null
  created_at: string
}
