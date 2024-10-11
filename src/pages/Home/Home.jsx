import "../../styles/Home/Home.css";
import HeroImage from "../../assets/images/home/home.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="hero">
                    <img src={HeroImage} alt="Hero" />
                    <button
                        className="btn-catalogue"
                        onClick={() => navigate("/catalogo")}
                    >
                        Conheça o catálogo
                    </button>
                </div>

                <div className="about-container">
                    <p>
                        O Florice conecta bancos de germoplasmas, pesquisadores,
                        agricultores e produtores rurais para garantir que a
                        diversidade genética chegue na sociedade.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
