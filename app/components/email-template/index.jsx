import {Html, Heading, Text} from '@react-email/components'

export default function EmailTemplate({name, email, message}) {
  return (
    <Html lang='en'>
      <Heading as='h1'>New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
