import { Link } from 'react-router-dom'

interface RegisterLinkProps {
  text: string;
  linkText: string;
  to: string
}

export const RegisterLink = ({text, linkText, to} : RegisterLinkProps) => {
  return (
    <div className="register-link">
      <p>{text} <Link to={to}>{linkText}</Link></p>
    </div>
  )
}
