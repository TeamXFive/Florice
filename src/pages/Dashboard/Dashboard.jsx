import "./Dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import { Places } from "./Places";

export const Dashboard = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h3>Dashboard</h3>
                <ul>
                    <li>
                        <button
                            onClick={() => navigate("/dashboard/catalogue")}
                        >
                            Catalogo
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/places")}>
                            Mapa
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/users")}>
                            Usuários
                        </button>
                    </li>
                </ul>
            </div>

            {params.type === "catalogue" && (
                <div className="catalogue">
                    <div className="content section">
                        <h1>Catalogo</h1>
                    </div>
                </div>
            )}

            {params.type === "places" && <Places />}

            {params.type === "users" && (
                <div className="users">
                    <div className="content section">
                        <h1>Usuários</h1>
                    </div>
                </div>
            )}
        </div>
    );
};
