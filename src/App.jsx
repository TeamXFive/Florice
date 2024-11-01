import "./styles/App.css";
import NavBar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Catalogo from "./pages/Catalogo/Catalogo";
import Mapa from "./pages/Mapa/Mapa";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

function App() {
    const lookerContainer = useRef();

    const path = useLocation().pathname;

    useEffect(() => {
        const ref = document.querySelector(".looker-container");
        if (ref) {
            lookerContainer.current = ref;
        }
    }, [path]);

    return (
        <div className="container-app">
            <NavBar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/mapa" element={<Mapa />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>
            {createPortal(
                <iframe
                    className="looker-iframe embed-iframe"
                    src="https://lookerstudio.google.com/embed/reporting/54a3d92e-94f3-42e5-b2c9-3aa450a63b5a/page/jLkEE"
                    allowfullscreen
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                ></iframe>,
                lookerContainer.current || document.body
            )}
        </div>
    );
}

export default App;
