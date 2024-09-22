
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="mainNavBar">
            <Link to="/" className="florice-title">
                Florice
            </Link>

            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/sobre">sobre</Link>
                </li>
                <li>
                    <Link to="/catalogo">catálogo</Link>
                </li>
                <li>
                    <Link to="/mapa">mapa</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>

        </nav>
    )
}