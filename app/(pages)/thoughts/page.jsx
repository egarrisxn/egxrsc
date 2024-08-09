import {TheThoughtsList} from '@/components/thoughts-list/thethoughtsList'
import Socials from '@/components/socials'

export const metadata = {
  title: 'Thoughts',
  description: 'Thoughts.',
}

export default async function ThoughtsPage() {
  return (
    <article>
      <h3>Random thoughts _</h3>
      <hr />
      <TheThoughtsList paginate={true} />
      <hr />
      <Socials />
    </article>
  )
}
