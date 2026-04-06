type Props = {
  name: string
  email: string
  message: string
}

export const EmailTemplate = ({ name, email, message }: Props) => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '560px', margin: '0 auto' }}>
    <div style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '16px', marginBottom: '24px' }}>
      <h2 style={{ margin: 0, color: '#1e293b', fontSize: '20px' }}>New Portfolio Message</h2>
    </div>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{ padding: '8px 0', color: '#64748b', fontSize: '14px', width: '80px', verticalAlign: 'top' }}>From</td>
          <td style={{ padding: '8px 0', color: '#1e293b', fontSize: '14px', fontWeight: 600 }}>{name}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px 0', color: '#64748b', fontSize: '14px', verticalAlign: 'top' }}>Email</td>
          <td style={{ padding: '8px 0' }}>
            <a href={`mailto:${email}`} style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>{email}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <p style={{ margin: 0, color: '#334155', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <p style={{ marginTop: '24px', color: '#94a3b8', fontSize: '12px' }}>
      Sent from your portfolio contact form at panthkakadia.vercel.app
    </p>
  </div>
)
