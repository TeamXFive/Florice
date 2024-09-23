
import { Link } from 'react-router-dom'
import '../../styles/NavBar/navbar.css'

export default function NavBar() {
    return (
        
    <nav className="mainNavBar">

        <div className="florice-title">
            <Link className="florice-name" to="/">FLORICE</Link>
        </div>
        
        <ul className="ulPages">
            <li className="divisor"></li>

            <li>
                <Link className='linkItems' to="/">home</Link>
            </li>
            <li>
                <Link className='linkItems' to="/sobre">sobre</Link>
            </li>
            <li>
                <Link className='linkItems' to="/catalogo">catálogo</Link>
            </li>
            <li>
                <Link className='linkItems' to="/mapa">mapa</Link>
            </li>
            <li>
                <Link className='linkItems' to="/login">login</Link>
            </li>
        </ul>

    </nav>
    )
}