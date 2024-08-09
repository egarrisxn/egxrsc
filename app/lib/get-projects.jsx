import {cache} from 'react'

const Projects = [
  {
    title: 'Unofficial Merchandise',
    description:
      'A fully functional ecommerce web store configured with Next.js, Sanity, Stripe, & more.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'WebSanity Builder',
    description:
      'An easy-to-use CMS powered website builder powered by Next.js, Sanity, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'n00b:dev',
    description:
      'A server-side rendered blog utilizing the Astro framework, Typescript, & Tailwind CSS.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'EG Movies',
    description:
      'An intuitive movie database application powered by Angular, Typescript, & Tailwind CSS.',
    href: 'https://github.com/egarrisxn/eg-angular-movies',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Dev-Build Resume',
    description:
      'A beautiful resume builder using the likes of Next.js, Typescript, Tailwind CSS, & Material-Tailwind.',
    href: 'https://github.com/egarrisxn/devbuild-resume',
    years: ['2024'],
    type: 'project',
  },
  {
    title: '(PEHN) User Management',
    description: 'A minimalist CRUD application using resources like Express, HTMX, Pug, & more.',
    href: 'https://github.com/egarrisxn/pehn-user-management',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The official website for streamer and content creator, Sway Bae. Using Next.js, Tailwind CSS, DaisyUI, & more.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'EGXWORLD v1',
    description: 'My *old* personal portfolio powered by Next.js, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/egxworld',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'EGXBLOG v1',
    description: 'My *old* personal blog powered by Next.js, Sanity, Tailwind CSS, & shandcn/ui.',
    href: 'https://github.com/egarrisxn/egxblog',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'Vanilla Portfolio',
    description: 'A modern and beautiful portfolio template using only HTML5, CSS3, & JavaScript.',
    href: 'https://github.com/egarrisxn/portfolio-template',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'The MVC Tech Forum',
    description: 'A CMS inspired forum application using Express, MySql, Handlebars, & Bootstrap.',
    href: 'https://github.com/egarrisxn/mvc-tech-forum',
    years: ['2023'],
    type: 'project',
  },
]

export const getProjects = cache(async () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('No GITHUB_TOKEN provided. Generate a personal use token on GitHub.')
  }

  const projects = await Promise.all(
    Projects.map(async (proj) => {
      const split = proj.href?.split('/')
      if (!split || split[2] !== 'github.com') {
        return proj
      }

      return proj
    }),
  )

  return projects
})
