import {Link} from "react-router-dom"
import '../css/Navbar.css'

function Navigation() {
  return (
    <nav className="navbar">
     <div className="navbar-brand">
        <Link to="/">Application</Link>
     </div>
     <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
     </div>
    </nav>
  )
}

export default Navigation