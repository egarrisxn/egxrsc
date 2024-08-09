import Link from '@/components/link'
import Form from '@/components/form'
import Socials from '@/components/socials'

export const metadata = {
  title: 'Contact',
  description: 'Contact.',
}

export default function ContactPage() {
  return (
    <article>
      <h3>Contact me _</h3>
      <p>
        If you have any questions, comments, or interest in working together, go ahead and send over
        a messsage and I&#39;ll get back with you as soon as I can.
      </p>
      <p>
        If forms aren&#39;t your thing, email me directly at{' '}
        <Link external href='mailto:egarrisxn@gmail.com'>
          egarrisxn@gmail.com
        </Link>
        .
      </p>
      <Form />
      <Socials />
    </article>
  )
}