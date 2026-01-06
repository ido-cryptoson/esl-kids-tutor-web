import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { messages, childId, lessonId } = await request.json()

    const supabase = await createClient()
    
    const { data: child } = await supabase
      .from('children')
      .select('*')
      .eq('id', childId)
      .single()

    if (!child) {
      return NextResponse.json({ error: 'Child not found' }, { status: 404 })
    }

    const { data: lesson } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', lessonId)
      .single()

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }

    const systemPrompt = `You are an enthusiastic, patient English tutor for ${child.name}, a ${child.age}-year-old child learning English as a second language.

Current lesson: "${lesson.title}"
Level: ${lesson.level}
Objectives: ${lesson.objectives?.join(', ')}

Your teaching style:
- Use simple, clear language appropriate for age ${child.age}
- Be encouraging and positive
- Use emojis occasionally to keep it fun
- Ask questions to check understanding
- Correct mistakes gently
- Celebrate progress!
- Keep responses short (2-3 sentences max)
- Use TPR method descriptions (e.g., "Let's wave hello! 👋")

If the child makes a mistake, gently correct it and provide the right answer. Always encourage them to try again!`

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    })

    const assistantMessage = response.content[0].type === 'text' ? response.content[0].text : ''

    return NextResponse.json({
      message: assistantMessage,
      usage: response.usage,
    })
  } catch (error: any) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
