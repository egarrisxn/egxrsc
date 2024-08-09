import styles from './about.module.css'
import Image from 'next/image'
import Socials from '../../components/socials'

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
      <div className={styles.header}>
        <Image
          src='/myavatar.png'
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
      </div>
      <hr />
      <article>
        <p>
          I specialize in building digital products that are as intuitive as they are innovative. My
          journey into tech started with a rigorous bootcamp, and since then, I&#39;ve been
          dedicated to mastering the tools and frameworks that power the web today.
        </p>
        <p>
          I thrive on the challenge of making complex systems simple and accessible. My work is
          driven by a deep understanding of both the technical and creative aspects of development,
          ensuring that every project is not only functional but also engaging.
        </p>
        <p>
          I&#39;m constantly exploring new technologies and refining my skills in those I use
          regularly, including Next.js, React, Sanity, & Tailwind CSS. This commitment to learning
          keeps my work at the cutting edge of design and development.
        </p>
        <p>
          Let&#39;s work together to create something that stands out and brings joy to the world.
        </p>
        <hr />
        <Socials />
      </article>
    </>
  )
}
