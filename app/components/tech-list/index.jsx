import styles from './techlist.module.css'

export default function TechList() {
  return (
    <>
      <ul className={styles.techList}>
        <li>
          <span>Languages:</span> TypeScript, HTML5, CSS3
        </li>
        <li>
          <span>Frontend:</span> Angular, Astro, Alpine.js, HTMX, jQuery
        </li>
        <li>
          <span>Backend:</span> Hono, Supabase, Express
        </li>
        <li>
          <span>CSS & UI Libraries:</span> daisyUI, React Aria, NextUI, Material-Tailwind, Bootstrap
        </li>
        <li>
          <span>Databases:</span> MongoDB, GraphQL, MySQL, PostgreSQL
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
    </>
  )
}
