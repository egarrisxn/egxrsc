import styles from './techstack.module.css'
import {TechBadge} from '../tech-badge'
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
  Tailwindcss,
  Vercel,
  Vscode,
  Webpack,
} from '../icons/tech'

export default function TechStack(props) {
  return (
    <>
      <p className={styles.myStack} {...props}>
        {` Building dynamic web applications using `}
        <TechBadge
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          label='JavaScript'
          icon={<Javascript />}
        >
          JavaScript
        </TechBadge>
        {`, `}
        <TechBadge href='https://nextjs.org' label='Next.js' icon={<Nextjs />}>
          Next.js
        </TechBadge>
        {`, and `}
        <TechBadge href='https://reactjs.com' label='React' icon={<React />}>
          React
        </TechBadge>
        {`, with `}
        <TechBadge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />}>
          Tailwind CSS
        </TechBadge>
        {`, `}
        <TechBadge href='https://www.radix-ui.com' label='Radix UI' icon={<Radixui />}>
          Radix UI
        </TechBadge>
        {`, and `}
        <TechBadge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />}>
          Shadcn/ui
        </TechBadge>
        {` for crafting accessible UIs. `}
        <TechBadge href='https://www.canva.com' label='Canva' icon={<Canva />}>
          Canva
        </TechBadge>
        {` is my go-to for design, while `}
        <TechBadge href='https://sanity.io' label='Sanity' icon={<Sanity />}>
          Sanity
        </TechBadge>
        {` and `}
        <TechBadge href='https://mdxjs.com' label='MDX' icon={<Mdx />}>
          MDX
        </TechBadge>
        {` manage content. I rely on `}
        <TechBadge href='https://nodejs.org' label='Node.js' icon={<Nodejs />}>
          Node.js
        </TechBadge>
        {` for server-side logic and `}
        <TechBadge href='https://pnpm.io' label='pnpm' icon={<Pnpm />}>
          PNPM
        </TechBadge>
        {` for package management. My development setup includes `}
        <TechBadge href='https://eslint.org' label='ESLint' icon={<Eslint />}>
          ESLint
        </TechBadge>
        {` and `}
        <TechBadge href='https://prettier.io' label='Prettier' icon={<Prettier />}>
          Prettier
        </TechBadge>
        {` for code quality, `}
        <TechBadge href='https://webpack.js.org' label='Webpack' icon={<Webpack />}>
          Webpack
        </TechBadge>
        {` for bundling, and `}
        <TechBadge href='https://vercel.com/home' label='Vercel' icon={<Vercel />}>
          Vercel
        </TechBadge>
        {`  for deployment. `}
        <TechBadge href='https://www.git-scm.com' label='Git' icon={<Git />}>
          Git
        </TechBadge>
        {` and `}
        <TechBadge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />}>
          VS Code
        </TechBadge>
        {` are central to my version control and coding workflows.`}
      </p>
    </>
  )
}
