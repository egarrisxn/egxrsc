import styles from './about.module.css'
import Image from 'next/image'
import Socials from '../../components/socials'
import {
  Canva,
  Eslint,
  Git,
  Javascript,
  Mdx,
  Nextjs,
  Nodejs,
  Pnpm,
  Prettier,
  Radixui,
  React,
  Sanity,
  Shadcnui,
  Tailwind,
  Vercel,
  Vscode,
  Webpack,
} from '../../components/icons/tech'

export const metadata = {
  title: 'About',
  description: 'About.',
  alternates: {
    canonical: 'https://egxworld.net/about',
  },
}

const Badge = (props) => {
  return <a {...props} target='_blank' className={styles.badge} />
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
            I thrive on the challenge of making complex systems simple and accessible. My work is
            driven by a deep understanding of both the technical and creative aspects of
            development, ensuring that every project is not only functional but also engaging.
          </p>
          <p>
            I&apos;m constantly exploring new technologies and refining my skills in those I use
            regularly. This commitment to learning keeps my work at the cutting edge of design and
            development.
          </p>
          <p>
            Let&apos;s work together to create something that stands out and brings joy to the
            world.
          </p>
        </section>

        <hr />

        <section>
          <h2>My Tech Stack:</h2>
          <p className={styles.myStack}>
            Building dynamic web applications using{' '}
            <Badge
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              className={styles.badge}
            >
              <Javascript /> JavaScript
            </Badge>
            ,{' '}
            <Badge href='https://nextjs.org' className={styles.badge}>
              <Nextjs /> Next.js
            </Badge>
            , and{' '}
            <Badge href='https://reactjs.com' className={styles.badge}>
              <React /> React
            </Badge>{' '}
            , with{' '}
            <Badge href='https://tailwindcss.com' className={styles.badge}>
              <Tailwind /> Tailwind CSS
            </Badge>{' '}
            ,{' '}
            <Badge href='https://www.radix-ui.com' className={styles.badge}>
              <Radixui /> Radix UI
            </Badge>{' '}
            , and{' '}
            <Badge href='https://ui.shadcn.com' className={styles.badge}>
              <Shadcnui /> shadcn/ui
            </Badge>{' '}
            for crafting accessible UIs.{' '}
            <Badge href='https://www.canva.com' className={styles.badge}>
              <Canva /> Canva
            </Badge>{' '}
            is my go-to for design, while{' '}
            <Badge href='https://sanity.io' className={styles.badge}>
              <Sanity /> Sanity
            </Badge>{' '}
            and{' '}
            <Badge href='https://mdxjs.com' className={styles.badge}>
              <Mdx /> MDX
            </Badge>{' '}
            manage content. I rely on{' '}
            <Badge href='https://nodejs.org' className={styles.badge}>
              <Nodejs /> Node.js
            </Badge>{' '}
            for server-side logic and{' '}
            <Badge href='https://pnpm.io' className={styles.badge}>
              <Pnpm /> pnpm
            </Badge>{' '}
            for package management. My development setup includes{' '}
            <Badge href='https://eslint.org' className={styles.badge}>
              <Eslint /> ESLint
            </Badge>{' '}
            and{' '}
            <Badge href='https://prettier.io' className={styles.badge}>
              <Prettier /> Prettier
            </Badge>{' '}
            for code quality,{' '}
            <Badge href='https://webpack.js.org' className={styles.badge}>
              <Webpack /> Webpack
            </Badge>{' '}
            for bundling, and{' '}
            <Badge href='https://vercel.com/home' className={styles.badge}>
              <Vercel /> Vercel
            </Badge>{' '}
            for deployment.{' '}
            <Badge href='https://www.git-scm.com' className={styles.badge}>
              <Git /> Git
            </Badge>{' '}
            and{' '}
            <Badge href='https://code.visualstudio.comm' className={styles.badge}>
              <Vscode /> VS Code
            </Badge>{' '}
            are central to my version control and coding workflows.
          </p>
          <p>
            On top of that, I am currently sharpening my knowledge on: TypeScript, Svelte, Express,
            PostgreSQL, Jest, Deno, Vite, Netlify, & Figma.
          </p>
        </section>

        <hr />

        <section className={styles.prevStack}>
          <h2>Previously Used Technologies & Tools:</h2>
          <ul>
            <li>
              <span>Languages:</span> TypeScript, HTML5, CSS3
            </li>
            <li>
              <span>Frontend:</span> Vue.js, Angular, Astro, Svelte, Alpine.js, HTMX, jQuery
            </li>
            <li>
              <span>Backend:</span> Hono, Supabase, Express
            </li>
            <li>
              <span>CSS & UI Libraries:</span> daisyUI, React Aria, NextUI, Headless UI, Bootstrap
            </li>
            <li>
              <span>Databases:</span> PostgreSQL, MongoDB, MySQL, GraphQL
            </li>
            <li>
              <span>Testing:</span> Jest
            </li>
            <li>
              <span>Templating Engines:</span> Pug, Handlebars
            </li>
            <li>
              <span>Markup Languages:</span> Markdown
            </li>
            <li>
              <span>Runtime Environments:</span> Deno
            </li>
            <li>
              <span>Package Managers:</span> npm
            </li>
            <li>
              <span>Build Tools:</span> Vite
            </li>
            <li>
              <span>Hosting:</span> Deno, Netlify, Cloudflare, Heroku, GitHub Pages
            </li>
            <li>
              <span>Design Tools:</span> Figma, Adobe Photoshop, Adobe After Effects
            </li>
          </ul>
          <p>
            Lastly, here are a few interests I have for future learning: Python, Go, Rust, Docker,
            Bun, SQLite, Neovim, WebGL, & many more!
          </p>
        </section>
      </article>
      <hr />
      <Socials />
    </>
  )
}
