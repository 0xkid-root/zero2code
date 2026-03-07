import { NextRequest, NextResponse } from 'next/server'

// Define the contact form schema
interface ContactFormData {
  name: string
  email: string
  phone?: string
  course: string
  message?: string
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number (basic validation)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  return !phone || phoneRegex.test(phone)
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = (await request.json()) as ContactFormData

    // Validate required fields
    if (!body.name || !body.email || !body.course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate phone if provided
    if (body.phone && !isValidPhone(body.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      course: body.course.trim(),
      message: body.message?.trim().substring(0, 1000) || '',
      timestamp: new Date().toISOString(),
    }

    // TODO: Implement your email service integration here
    // Example: Send email via Resend, SendGrid, or Nodemailer
    // Example: Send to database (Supabase, MongoDB, etc.)

    console.log('Form submission received:', sanitizedData)

    // For now, return success (replace with actual implementation)
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. We will contact you soon.',
        data: sanitizedData,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Add CORS headers if needed
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
