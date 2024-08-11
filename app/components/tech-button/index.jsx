export function TechButton({href, label, className, children}) {
  return (
    <a href={href} aria-label={label} target='_blank' rel='noopener noreferrer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.2em'
        height='1.2em'
        viewBox='0 0 24 24'
        className={className}
      >
        {children}
      </svg>
    </a>
  )
}
