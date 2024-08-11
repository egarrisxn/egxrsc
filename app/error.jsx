'use client'

export default function Error({error, reset}) {
  return (
    <article>
      <h1>Oh no! Something went wrong.</h1>
      <button onClick={reset}>Try again</button>
      <pre>{error.message}</pre>
    </article>
  )
}
