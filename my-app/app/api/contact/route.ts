import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '../../contact/email-template'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, message } = body

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: ['delivered@resend.dev'],
      subject: `Portfolio Contact: ${name}`,
      react: EmailTemplate({ name, email, message }),
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
