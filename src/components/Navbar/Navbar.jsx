import "../../styles/NavBar/navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu.svg?react";

export default function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isSobrePage = location.pathname === "/sobre";
    const isCatalogoPage = location.pathname === "/catalogo";
    const isMapaPage = location.pathname === "/mapa";
    const isLoginPage = location.pathname === "/login";

    const menuRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        menuRef.current?.focus();
    }, [isMenuOpen]);

    return (
        <nav className={`mainNavBar ${isHomePage && "home"}`}>
            <div className="florice-title">
                <Link className="florice-name" to="/">
                    FLORICE
                </Link>
            </div>

            <button
                className="menu-button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <MenuIcon />
            </button>

            <span className="divisor" />

            <ul
                ref={menuRef}
                className={`ulPages ${isMenuOpen ? "open" : "closed"}`}
                onBlur={() => setIsMenuOpen(false)}
                tabIndex={-1}
            >
                {!isHomePage && (
                    <li>
                        <Link className="linkItems" to="/">
                            <div className="floricelink">Florice</div>
                        </Link>
                    </li>
                )}
                <li>
                    <div className={!isHomePage ? "headerBorder" : ""}></div>
                </li>
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
                        <div
                            className={isCatalogoPage ? "catalogoBorder" : ""}
                        ></div>
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
