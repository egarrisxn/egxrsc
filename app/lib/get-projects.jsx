import {cache} from 'react'

const Projects = [
  {
    title: 'Unofficial Merchandise',
    description:
      'A fully functional e-commerce store built with users in mind! Leveraging modern web teb technologies like Next.js, Sanity, Stripe, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2024'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  {
    title: 'n00b:dev',
    description:
      'A cutting-edge, server-side rendered blog designed by developers, for developers. Built with the Astro Framework, TypeScript, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2024'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'EG Movies',
    description:
      'An intuitive movie search engine offering everything you would expect from a comprehensive movie database. Built with Angular, TypeScript, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/eg-angular-movies',
    years: ['2024'],
    type: 'project',
    image: '/projects/egmovies.png',
  },
  {
    title: 'WebSanity Builder',
    description:
      'A powerful, user-friendly tool designed to help you create stunning websites effortlessly! Powered by Next.js, Sanity, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    years: ['2024'],
    type: 'project',
    image: '/projects/websanity.png',
  },
  {
    title: 'Dev-Build Resume',
    description:
      'A modern, beautiful, and professional resume building web application using the likes of Next.js, TypeScript, Tailwind CSS, Material-Tailwind, & more.',
    href: 'https://github.com/egarrisxn/devbuild-resume',
    years: ['2024'],
    type: 'project',
    image: '/projects/devbuildresume.png',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The official website for a full-time streamer and content creator, Sway Bae. Created exactly as the client visioned by using Next.js, Sanity, Tailwind CSS, daisyUI, & more.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2023'],
    type: 'project',
    image: '/projects/swaybae.png',
  },
  {
    title: 'EGXBLOG',
    description:
      'My *old* personal blog I created as an attempt to write a little more. Spun up by the new Next.js 14, Sanity, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/egxblog',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxblog.png',
  },
  {
    title: 'EGXWORLD V1',
    description:
      'My first portfolio / website / whatever you would like to call it. Powered by Next.js, Tailwind CSS, shadcn/ui, & more.',
    href: 'https://github.com/egarrisxn/egxworld-v1',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
  {
    title: 'Vanilla Template',
    description:
      'A modern and beautiful portfolio template using only the powers from the trinity: HTML5, CSS3, & JavaScript.',
    href: 'https://github.com/egarrisxn/portfolio-template',
    years: ['2023'],
    type: 'project',
    image: '/projects/vanillatemplate.png',
  },
  {
    title: 'The Tech Forum',
    description:
      'A forum application designed in a CMS style, demonstrating the CRUD principles. This app is built with Express, MySQL, Handlebars, Bootstrap, & more.',
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
