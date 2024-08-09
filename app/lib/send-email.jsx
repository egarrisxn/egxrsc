'use server'
import {Resend} from 'resend'

export async function sendEmail(prevState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'egarrisxn@gmail.com',
      to: 'egarrisxn@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from your website contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })
    return {
      error: null,
      success: true,
    }
  } catch (error) {
    console.log(error)
    return {
      error: error.message,
      success: false,
    }
  }
}
