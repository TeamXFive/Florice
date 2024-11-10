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
        if (window.innerWidth <= 768 && isMenuOpen) {
            menuRef.current?.focus();
        }
    }, [isMenuOpen]);

    return (
        <nav className='mainNavBar'>
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
                
                    <li>
                        <Link className="linkItems" to="/">
                            <div className="floricelink">Florice</div>
                        </Link>
                    </li>

                <li>
                    <div className={"headerBorder active"} />
                </li>
                <li>
                    <Link className="linkItems" to="/">
                        home
                        <div
                            className={`menu-border homeBorder ${
                                isHomePage ? "active" : ""
                            }`}
                        />
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/sobre">
                        sobre
                        <div
                            className={`menu-border sobreBorder ${
                                isSobrePage ? "active" : ""
                            }`}
                        ></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/catalogo">
                        catálogo
                        <div
                            className={`menu-border catalogoBorder ${
                                isCatalogoPage ? "active" : ""
                            }`}
                        ></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/mapa">
                        mapa
                        <div
                            className={`menu-border mapaBorder ${
                                isMapaPage ? "active" : ""
                            }`}
                        ></div>
                    </Link>
                </li>
                <li>
                    <Link className="linkItems" to="/login">
                        <div>login</div>
                        <div
                            className={`menu-border loginBorder ${
                                isLoginPage ? "active" : ""
                            }`}
                        ></div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
