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
      <iframe
        src='other/EG-Letter-Adobe-2024.pdf'
        title='EG US Letter Resume 2024'
        className={styles.iframe}
      ></iframe>
      <i>
        For a smaller dowload file:{' '}
        <a
          href='other/EG-Letter-PdfLib-2024.pdf'
          download='EG-Letter-PdfLib-2024.pdf'
          aria-label='Download a smaller US Letter version of my resume as a PDF file'
        >
          US Letter Format
        </a>
      </i>
      <br />
      <br />
      <p>Standard A4 Format</p>
      <iframe
        src='other/EG-A4-Adobe-2024.pdf'
        title='EG A4 Resume 2024'
        className={styles.iframe}
      ></iframe>
      <i>
        For a smaller download file:{' '}
        <a
          href='other/EG-A4-PdfLib-2024.pdf'
          download='EG-A4-PdfLib-2024.pdf'
          aria-label='Download a smaller A4 version of my resume as a PDF file'
        >
          A4 Format
        </a>
      </i>
    </>
  )
}
