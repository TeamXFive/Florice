import "./styles/App.css";
import NavBar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Catalogo from "./pages/Catalogo/Catalogo";
import { Mapa } from "./pages/Mapa/Mapa";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
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
                    {/* TODO - Put behind auth wall */}
                    <Route path="/dashboard/:type" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
