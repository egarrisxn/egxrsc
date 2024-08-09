import styles from './textarea.module.css'

export default function TextArea(props) {
  return <textarea className={styles.textarea} {...props} />
}
