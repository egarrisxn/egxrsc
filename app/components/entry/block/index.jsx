import styles from './block.module.css'
import Link from '../../link'

export default function BlockEntry(props) {
  if ('skeleton' in props) {
    return <li className={styles.skeleton} />
  }
  const {title, description, type, href, date, views, isThirdParty} = props

  return (
    <li className={styles.item}>
      <Link
        href={href}
        title={description || title}
        className={styles.link}
        underline={false}
        external={isThirdParty}
      >
        {Boolean(type || date) ? (
          <div style={{display: 'flex', gap: 'var(--gap-quarter)'}}>
            {Boolean(date) && (
              <div className={styles.wrapper}>
                {date && (
                  <span className={styles.date}>
                    {date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                )}
              </div>
            )}{' '}
            {type ? (
              <span style={{color: 'var(--gray)'}}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            ) : (
              <div aria-hidden />
            )}
          </div>
        ) : null}

        <h4 className={`${styles.title}`}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        {isThirdParty && <span className={styles.thirdParty}>{new URL(href).hostname}</span>}
      </Link>
    </li>
  )
}
