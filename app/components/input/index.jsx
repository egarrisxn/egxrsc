import * as React from 'react'
import clsx from 'clsx'
import styles from './input.module.css'

const Input = React.forwardRef(({className, ...props}, ref) => {
  return <input type='text' className={clsx(styles['input'], className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export {Input}

// "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",

// import styles from './input.module.css'

// export default function Input(props) {
//   return <input type='text' className={styles.input} {...props} />
// }
