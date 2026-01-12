import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header>
      <div className="container">
        <h1><Link to="/">Tyler Wright</Link></h1>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Hello!</Link>
          <Link to="/headshots" className={location.pathname === '/headshots' ? 'active' : ''}>Headshots</Link>
          <Link to="/plays" className={location.pathname === '/plays' ? 'active' : ''}>Plays</Link>
          <Link to="/media" className={location.pathname === '/media' ? 'active' : ''}>Media</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
