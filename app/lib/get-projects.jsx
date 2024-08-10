import {cache} from 'react'

const Projects = [
  {
    title: 'Unofficial Merchandise',
    description:
      'A fully functional e-commerce web store configured with Next.js, Sanity, Stripe, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2024'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  {
    title: 'WebSanity Builder',
    description:
      'An easy-to-use CMS powered website builder powered by Next.js, Sanity, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    years: ['2024'],
    type: 'project',
    image: '/projects/websanity.png',
  },
  {
    title: 'n00b:dev',
    description:
      'A server-side rendered blog utilizing the Astro framework, Typescript, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2024'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'EG Movies',
    description:
      'An intuitive movie database application powered by Angular, Typescript, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/eg-angular-movies',
    years: ['2024'],
    type: 'project',
    image: '/projects/egmovies.png',
  },
  {
    title: 'Dev-Build Resume',
    description:
      'A beautiful resume builder using the likes of Next.js, Typescript, Tailwind CSS, Material-Tailwind, & more.',
    href: 'https://github.com/egarrisxn/devbuild-resume',
    years: ['2024'],
    type: 'project',
    image: '/projects/devbuildresume.png',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The official website for streamer and content creator, Sway Bae. Using Next.js, Tailwind CSS, daisyUI, & more.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2023'],
    type: 'project',
    image: '/projects/swaybae.png',
  },
  {
    title: 'EGXWORLD V1',
    description: 'My *old* personal portfolio powered by Next.js, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/egxworld-v1',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
  {
    title: 'EGXBLOG',
    description:
      'My *old* personal blog powered by Next.js, Sanity, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/egxblog',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxblog.png',
  },
  {
    title: 'Vanilla Template',
    description: 'A modern and beautiful portfolio template using only HTML, CSS, & JavaScript.',
    href: 'https://github.com/egarrisxn/portfolio-template',
    years: ['2023'],
    type: 'project',
    image: '/projects/vanillatemplate.png',
  },
  {
    title: 'The Tech Forum',
    description:
      'A CMS inspired forum application using Express, MySQL, Handlebars, Bootstrap, & more.',
    href: 'https://github.com/egarrisxn/mvc-tech-forum',
    years: ['2023'],
    type: 'project',
    image: '/projects/mvctechforum.png',
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
