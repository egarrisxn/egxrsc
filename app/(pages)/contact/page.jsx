import Link from '../../components/link'
import ContactForm from '../../components/contact-form'
import Socials from '../../components/socials'

export const metadata = {
  title: 'Contact',
  description: 'Contact.',
  alternates: {
    canonical: 'https://egxworld.net/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <article>
        <h3>Contact me _</h3>
        <p>
          If you have any questions, comments, or interest in working together, go ahead and send
          over a messsage and I&#39;ll get back with you as soon as I can.
        </p>
        <ContactForm />
        <p>
          If forms aren&#39;t your thing, email me directly:{' '}
          <Link external href='mailto:egarrisxn@gmail.com'>
            egarrisxn@gmail.com
          </Link>
          .
        </p>
      </article>
      <hr />
      <Socials />
    </>
  )
}
