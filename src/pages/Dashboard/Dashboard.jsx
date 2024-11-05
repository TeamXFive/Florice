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
                            Catalogue
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/places")}>
                            Places
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/dashboard/users")}>
                            Users
                        </button>
                    </li>
                </ul>
            </div>

            {params.type === "catalogue" && (
                <div className="catalogue">
                    <div className="content section">
                        <h1>Catalogue</h1>
                    </div>
                </div>
            )}

            {params.type === "places" && <Places />}

            {params.type === "users" && (
                <div className="users">
                    <div className="content section">
                        <h1>Users</h1>
                    </div>
                </div>
            )}
        </div>
    );
};
