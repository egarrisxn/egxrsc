'use client'
import styles from './contactform.module.css'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {sendEmail} from '../../lib/send-email'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../form'

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const {handleSubmit} = form

  function onSubmit(data) {
    sendEmail(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  className={styles.input}
                  placeholder='Jane Doe'
                  aria-label='Name input'
                  type='text'
                  id='name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <input className={styles.input} placeholder='your@email.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({field}) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  className={styles.textarea}
                  placeholder='Hit me with your best shot!'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type='submit' className={styles.button}>
          Send
        </button>
      </form>
    </Form>
  )
}

// 'use client'
// import styles from './contactform.module.css'
// import {useEffect} from 'react'
// import {useFormState} from 'react-dom'
// import {sendEmail} from '../../lib/send-email'
// import input from '../input'
// import TextArea from '../textarea'

// export default function Form() {
//   const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
//     error: null,
//     success: false,
//   })
//   useEffect(() => {
//     if (sendEmailState.success) {
//       alert('Email sent!')
//     }
//     if (sendEmailState.error) {
//       alert('Error sending email!')
//     }
//   }, [sendEmailState])
//   return (
//     <form className={styles.form} action={sendEmailAction}>
//       <label htmlFor='name'>Name</label>
//       <input placeholder='Jane Doe' aria-label='Name input' type='text' id='name' name='name' />
//       <label htmlFor='email'>Email</label>
//       <input
//         placeholder='user@email.com'
//         aria-label='Email input'
//         type='email'
//         id='email'
//         name='email'
//       />
//       <label htmlFor='message'>Message</label>
//       <TextArea
//         placeholder='Your words go here..'
//         aria-label='Message input'
//         id='message'
//         name='message'
//         cols={30}
//         rows={10}
//       ></TextArea>
//       <button className={styles.button} type='submit'>
//         Send
//       </button>
//     </form>
//   )
// }
