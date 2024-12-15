import './Header.css';

interface HeaderProps {
  title: string,
  children: React.ReactNode
}

export const Header = ({
  title,
  children,
}: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {children}
    </header>
  )
}
