import "../../styles/NavBar/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isSobrePage = location.pathname === "/sobre"
    const isCatalogoPage = location.pathname === "/catalogo"
    const isMapaPage = location.pathname === "/mapa"
    const isLoginPage = location.pathname === "/login"
    
    
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
                        <div className={isSobrePage ? "sobreBorder" : ""}></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/catalogo">
                        catálogo
                        <div className={isCatalogoPage ? "catalogoBorder" : ""}></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/mapa">
                        mapa
                        <div className={isMapaPage ? "mapaBorder" : ""}></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/login">
                        <div>login</div>
                        <div className={isLoginPage ? "loginBorder" : ""}></div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
