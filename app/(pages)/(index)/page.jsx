import styles from './page.module.css'
import Image from 'next/image'
import Link from '../../components/link'
import TimeOfDay from '../../components/timer'
import Socials from '../../components/socials'
import ProjectList from '../../components/projects'
import {SpotifyNowPlaying} from '../../components/spotify'
import {ContentList} from '../../components/content-list'
import {getProjects} from '../../lib/get-projects'

const Arrow = () => {
  return (
    <svg width={10} height={10} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  )
}

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
            Resume <Arrow />
          </Link>{' '}
        </p>
        <SpotifyNowPlaying />
      </header>
      <section>
        <div style={{position: 'relative'}}>
          <Image
            src='/design/purplelines.svg'
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
              src='/design/yellowlines.svg'
              alt='Yellow Lines'
              width={80}
              height={130}
              style={{position: 'absolute'}}
            />
            <h2>Posts&</h2>
          </div>
          <div style={{position: 'relative'}}>
            <Image
              src='/design/redlines.svg'
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
    </>
  )
}
