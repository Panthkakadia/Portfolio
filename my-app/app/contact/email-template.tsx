type Props = {
  name: string
  email: string
  message: string
}

export const EmailTemplate = ({ name, email, message }: Props) => (
  <div>
    <h2>New Contact Message</h2>
    <p><b>Name:</b> {name}</p>
    <p><b>Email:</b> {email}</p>
    <p>{message}</p>
  </div>
)
