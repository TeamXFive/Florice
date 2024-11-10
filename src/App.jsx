import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Mapa } from "./pages/Mapa/Mapa";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalogo from "./pages/Catalogo/Catalogo";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NavBar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/Signup";
import Sobre from "./pages/Sobre/Sobre";
import { useSetAtom } from "jotai";
import { userAtom } from "./atoms/user";

function App() {
    const navigate = useNavigate();
    const setUserAtom = useSetAtom(userAtom);
    const handleLogout = () => {
        setUserAtom(null);
        navigate("/");
    };
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

                    <Route
                        path="/logout"
                        Component={() => {
                            handleLogout();
                        }}
                    />
                </Routes>
            </main>
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default App;
