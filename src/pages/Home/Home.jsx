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

            <div className="video-container">
                <h2>Veja mais aqui </h2>
                <iframe
                    src="https://www.youtube.com/embed/S8hX30eonUg"
                    title="Florice MVP - PBL Final"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
                <p>
                    Click aqui caso o vídeo não carregue:{" "}
                    <a href="https://www.youtube.com/watch?v=S8hX30eonUg">
                        https://www.youtube.com/embed/S8hX30eonUg
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Home;
