import {ThePostsList} from '@/components/posts-list/thepostslist'
import Socials from '@/components/socials'

export const metadata = {
  title: 'Posts',
  description: 'Posts.',
}

export default async function PostsPage() {
  return (
    <article>
      <h3>Blog posts _</h3>
      <hr />
      <ThePostsList paginate={true} />
      <hr />
      <Socials />
    </article>
  )
}
