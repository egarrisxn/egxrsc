import styles from './about.module.css'
import Image from 'next/image'
import Link from '../../components/link'
import TechStack from '../../components/tech-stack'
import TechList from '../../components/tech-list'
import Socials from '../../components/socials'
import {Arrow} from '../../components/icons/other'

const currentTech = [
  {name: 'TypeScript', url: 'https://www.typescriptlang.org/'},
  {name: 'Svelte', url: 'https://svelte.dev/'},
  {name: 'Express', url: 'https://expressjs.com/'},
  {name: 'PostgreSQL', url: 'https://www.postgresql.org/'},
  {name: 'Jest', url: 'https://jestjs.io/'},
  {name: 'Deno', url: 'https://deno.land/'},
  {name: 'Figma', url: 'https://www.figma.com/'},
]

const futureTech = [
  {name: 'Python', url: 'https://www.python.org/'},
  {name: 'Rust', url: 'https://www.rust-lang.org/'},
  {name: 'SQLite', url: 'https://www.sqlite.org/'},
  {name: 'Docker', url: 'https://www.docker.com/'},
  {name: 'WebGL', url: 'https://www.khronos.org/webgl/'},
]

export const metadata = {
  title: 'About',
  description: 'About.',
  alternates: {
    canonical: 'https://egxworld.net/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <header className={styles.header}>
        <Image
          src='/images/myavatar.png'
          alt='My Avatar'
          width={100}
          height={100}
          quality={100}
          className={styles.avatar}
        />
        <p>
          <span className={styles.name}>Ethan G.</span>
          <br />
          <span className={styles.title}>Developer. Designer.</span>
        </p>
      </header>
      <hr />
      <article>
        <h2>Who Am I?</h2>
        <p>
          First and foremost, hello! My name is Ethan. Currently, I live in the the Southeastern
          region of the United States, more specifically the wetlands of Central Florida.
        </p>
        <p>
          I specialize in building digital products that are as intuitive as they are innovative and
          dedicated to mastering the tools and frameworks that power the web today. I thrive on the
          challenge of simplifying complex systems and making them accessible. My work is driven by
          a deep understanding of both the technical and creative aspects of development, ensuring
          that every project is not only functional but also engaging.
        </p>
        <p>
          I&apos;m constantly exploring new technologies and refining my skills in those I use
          regularly. This commitment to learning keeps my work at the cutting edge of design and
          development.
        </p>
        <p>Let&apos;s work together and create something out of this world! ✨</p>
        <hr />
        <h2>My Tech Stack:</h2>
        <TechStack />
        <p className={styles.tech}>
          {` Currently sharpening my knowledge on these: `}
          {currentTech.map((current) => (
            <Link key={current.name} href={current.url} external={true} className={styles.techLink}>
              {current.name},
            </Link>
          ))}
          {` & more! `}
        </p>
        <hr />
        <h2>Previously Used Technologies & Tools:</h2>
        <TechList />
        <p className={styles.tech}>
          {` Interests for Future Learning: `}
          {futureTech.map((future) => (
            <Link key={future.name} href={future.url} external={true} className={styles.techLink}>
              {future.name},
            </Link>
          ))}
          {` & so many more! `}
        </p>
        <hr />
        <p>
          {' '}
          A glipse at the{' '}
          <Link external href='https://egxworld.vercel.app'>
            past <Arrow />
          </Link>
        </p>
      </article>
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
