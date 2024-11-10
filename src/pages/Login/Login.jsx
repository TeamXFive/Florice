import { useAtom } from "jotai";
import "../../styles/Login/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userAtom } from "../../atoms/user";

function Login() {
    const navigate = useNavigate();
    const [user, setUserAtom] = useAtom(userAtom);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        fetch("http://localhost:8000/api/login", options)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    throw new Error(response.error);
                } else {
                    setUserAtom(response);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            });
    };

    useEffect(() => {
        if (user) {
            navigate("/dashboard/places");
        }
    });

    return (
        <div className="login-container">
            <form className="login-content" onSubmit={handleFormSubmit}>
                <img
                    src="src\assets\images\Login\flower-login.png"
                    alt=""
                    className="flower-icon"
                />

                <p className="login-name">Login</p>

                <div className="input-login-container">
                    <div className="input-box-login">
                        <img
                            className="email-icon"
                            src="src\assets\images\Login\email.png"
                            alt=""
                        />
                        <input
                            className="input-style-login"
                            type="text"
                            id="emailLogin"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Usuário ou E-Mail"
                        />
                    </div>

                    <div className="input-box-login">
                        <img
                            className="password-icons"
                            src="src\assets\images\Login\password.png"
                            alt=""
                        />
                        <input
                            className="input-style-login"
                            type="password"
                            id="passwordLogin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="senha"
                        />
                    </div>
                </div>

                <div className="register-text-container">
                    <p className="register-text">
                        Se ainda não tem uma conta,{" "}
                        <Link to="/signup" className="clickHere">
                            clique aqui
                        </Link>{" "}
                        para fazer o seu cadastro.
                    </p>
                </div>

                <div className="buttons">
                    <button type="submit" className="enterButton">
                        Entrar
                    </button>
                </div>

                <div className="orSignup">
                    <p>
                        ou<br></br>entre com suas redes
                    </p>
                </div>

                <div className="socialMediasIcon">
                    <img
                        className="socialMediaImg"
                        src="src\assets\images\Login\linkedin.png"
                        alt=""
                    />
                    <img
                        className="socialMediaImg"
                        src="src\assets\images\Login\facebook.png"
                        alt=""
                    />
                    <img
                        className="socialMediaImg"
                        src="src\assets\images\Login\google.png"
                        alt=""
                    />
                </div>
            </form>
        </div>
    );
}

export default Login;
