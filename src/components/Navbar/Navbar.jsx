import "../../styles/NavBar/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`mainNavBar ${isHomePage && "home"}`}>
            <div className="florice-title">
                <Link className="florice-name" to="/">
                    FLORICE
                </Link>
            </div>

            <span className="divisor" />

            <ul className="ulPages">
                <li>
                    <Link className="linkItems" to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/sobre">
                        sobre
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/catalogo">
                        catálogo
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/mapa">
                        mapa
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/login">
                        login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
