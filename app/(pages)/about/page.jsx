import styles from './about.module.css'
import TechStack from '../../components/tech-stack'
import TechList from '../../components/tech-list'
import Socials from '../../components/socials'
import Image from 'next/image'

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
        <section>
          <h2>Who Am I?</h2>
          <p>
            First and foremost, hello! My name is Ethan. I currently reside in the wetlands of
            Florida, tucked away in the Southeastern United States.
          </p>
          <p>
            I specialize in building digital products that are as intuitive as they are innovative.
            My journey into tech started with a rigorous bootcamp, and since then, I&apos;ve been
            dedicated to mastering the tools and frameworks that power the web today.
          </p>
          <p>
            I thrive on the challenge of simplifying complex systems and making them accessible. My
            work is driven by a deep understanding of both the technical and creative aspects of
            development, ensuring that every project is not only functional but also engaging.
          </p>
          <p>
            I&apos;m constantly exploring new technologies and refining my skills in those I use
            regularly. This commitment to learning keeps my work at the cutting edge of design and
            development.
          </p>
        </section>
        <hr />
        <section>
          <h2>My Tech Stack:</h2>
          <TechStack />
          <p>
            I am currently sharpening my knowledge on:
            <br />
            TypeScript, Svelte, Express, PostgreSQL, Jest, Deno, Vite, Netlify, & Figma.
          </p>
        </section>
        <hr />
        <section>
          <h2>Previously Used Technologies & Tools:</h2>
          <TechList />
          <p>
            Interests for Future Learning:
            <br />
            Python, Go, Rust, Docker, Bun, SQLite, Neovim, WebGL, & many more!
          </p>
        </section>
        <hr />
        <section>
          <p>
            Let&apos;s work together to create something that stands out and brings joy to the
            world.
          </p>
        </section>
      </article>
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
