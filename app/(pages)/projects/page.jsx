import Link from '../../components/link'
import Socials from '../../components/socials'
import ProjectList from '../../components/projects'
import {getProjects} from '../../lib/get-projects'

export const metadata = {
  title: 'Projects',
  description: 'Projects.',
  alternates: {
    canonical: 'https://egxworld.net/projects',
  },
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <>
      <h3>Some projects _</h3>
      <ProjectList showYears={true} projects={projects} seeMore={false} />
      <p>
        See all{' '}
        <Link external href='https://github.com/egarrisxn'>
          projects
        </Link>
        .
      </p>
      <hr />
      <Socials />
    </>
  )
}
