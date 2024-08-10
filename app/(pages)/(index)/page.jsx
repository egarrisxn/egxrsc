import styles from './page.module.css'
import Image from 'next/image'
import Link from '../../components/link'
import TimeOfDay from '../../components/timer'
import Socials from '../../components/socials'
import ProjectList from '../../components/projects'
import {SpotifyNowPlaying} from '../../components/spotify'
import {ContentList} from '../../components/content-list'
import {getProjects} from '../../lib/get-projects'

const PROJECT_COUNT = 4

export default async function HomePage() {
  const projects = await getProjects()
  return (
    <>
      <header>
        <TimeOfDay />
        <p>
          <Link href='/about'>about</Link> | <Link href='/projects'>projects</Link> |{' '}
          <Link href='/posts'>posts</Link> | <Link href='/thoughts'>thoughts</Link> |{' '}
          <Link href='/contact'>contact </Link>
        </p>
        <p>
          Full Stack Developer & Digital Product Designer with a passion for learning and growth.
          Constantly challenging myself to step out of my comfort zone and tackle new challenges.{' '}
          <Link href='/about'>Learn more</Link>.
        </p>
        <p>
          Available for work //{' '}
          <Link external href='https://devbuild-resume.vercel.app/example-resume'>
            Resume
          </Link>{' '}
        </p>
        <SpotifyNowPlaying />
      </header>
      <section>
        <div style={{position: 'relative'}}>
          <Image
            src='/purplelines.svg'
            alt='Purple Lines'
            width={110}
            height={75}
            style={{position: 'absolute'}}
          />
          <h2>Projects</h2>
        </div>
        <ProjectList showYears={true} projects={projects.slice(0, PROJECT_COUNT)} seeMore={true} />
      </section>
      <section>
        <div className={styles.postnotes}>
          <div style={{position: 'relative'}}>
            <Image
              src='/yellowlines.svg'
              alt='Yellow Lines'
              width={80}
              height={130}
              style={{position: 'absolute'}}
            />
            <h2>Posts&</h2>
          </div>
          <div style={{position: 'relative'}}>
            <Image
              src='/redlines.svg'
              alt='Red Lines'
              width={125}
              height={130}
              style={{position: 'absolute'}}
            />
            <h2>Thoughts</h2>
          </div>
        </div>
        <ContentList />
      </section>
      <hr />
      <Socials />
      {/* <footer className={styles.footer}>
        <Socials />
      </footer> */}
    </>
  )
}
