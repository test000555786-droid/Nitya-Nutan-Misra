import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, subject, message } = body

    // Basic validation
    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@drnityanutanmisra.com',
    //   to: 'contact@drnityanutanmisra.com',
    //   subject: `[Website Enquiry] ${subject} — from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // })

    console.log('Contact form submission:', { name, phone, email, subject, message })

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
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
