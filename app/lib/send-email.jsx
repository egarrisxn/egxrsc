'use server'
import {Resend} from 'resend'
import EmailTemplate from '../components/email-template'

export async function sendEmail(prevState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Ethan <egarrisxn@gmail.com>',
      to: email,
      subject: 'Form Submission',
      react: EmailTemplate({name, email, message}),
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
