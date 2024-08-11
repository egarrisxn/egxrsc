import {TheThoughtsList} from '../../components/thoughts-list/thethoughtslist/index.jsx'
import Socials from '../../components/socials'

export const metadata = {
  title: 'Thoughts',
  description: 'Thoughts.',
  alternates: {
    canonical: 'https://egxworld.net/thoughts',
  },
}

export default async function ThoughtsPage() {
  return (
    <>
      <header>
        <h3>Random thoughts _</h3>
      </header>
      <hr />
      <TheThoughtsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
