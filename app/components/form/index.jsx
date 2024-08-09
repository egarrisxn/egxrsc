'use client'
import styles from './form.module.css'
import {useEffect} from 'react'
import {useFormState} from 'react-dom'
import {sendEmail} from '../../lib/send-email'
import Input from '../input'
import TextArea from '../textarea'

export default function Form() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  })
  useEffect(() => {
    if (sendEmailState.success) {
      alert('Email sent!')
    }
    if (sendEmailState.error) {
      alert('Error sending email!')
    }
  }, [sendEmailState])
  return (
    <form className={styles.form} action={sendEmailAction}>
      <label htmlFor='name'>Name</label>
      <Input
        placeholder='Your name here'
        aria-label='Name input'
        type='text'
        id='name'
        name='name'
      />
      <label htmlFor='email'>Email</label>
      <Input
        placeholder='user@email.com'
        aria-label='Email input'
        type='email'
        id='email'
        name='email'
      />
      <label htmlFor='message'>Message</label>
      <TextArea name='message' id='message' cols={30} rows={10}></TextArea>
      <button className={styles.button} type='submit'>
        Send
      </button>
    </form>
  )
}
