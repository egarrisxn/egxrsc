import styles from './resume.module.css'

export const metadata = {
  title: 'Resume Page',
  description: 'Here is my resume.',
  alternates: {
    canonical: 'https://egxworld.net/resume',
  },
}

export default function ResumePage() {
  return (
    <>
      <header>
        <h1>My resume _</h1>
      </header>
      <p>Standard US Letter Format</p>
      <iframe src='other/EG-Letter-Adobe-2024.pdf' className={styles.iframe}></iframe>
      <i>
        For a smaller dowload file:{' '}
        <a href='other/EG-Letter-PdfLib-2024.pdf' download='EG-Letter-PdfLib-2024.pdf'>
          US Letter Format
        </a>
      </i>
      <br />
      <br />
      <p>Standard A4 Format</p>
      <iframe src='other/EG-A4-Adobe-2024.pdf' className={styles.iframe}></iframe>
      <i>
        For a smaller download file:{' '}
        <a href='other/EG-A4-PdfLib-2024.pdf' download='EG-A4-PdfLib-2024.pdf'>
          A4 Format
        </a>
      </i>
    </>
  )
}
