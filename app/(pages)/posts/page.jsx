import {ThePostsList} from '../../components/posts-list/thepostslist/index.jsx'
import Socials from '../../components/socials'

export const metadata = {
  title: 'Posts',
  description: 'Posts.',
  alternates: {
    canonical: 'https://egxworld.net/posts',
  },
}

export default async function PostsPage() {
  return (
    <>
      <header>
        <h3>Blog posts _</h3>
      </header>
      <hr />
      <ThePostsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
