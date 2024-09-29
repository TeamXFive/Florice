import "../../styles/Home/Home.css";
import HeroImage from "../../assets/images/home/home.jpg";
import NavBar from "../../components/Navbar/Navbar";

function Home() {
    return (
        <div className="home-container">
            <NavBar />
            <div className="home-content">
                <div className="hero">
                    <img src={HeroImage} alt="Hero" />
                    <button className="btn-catalogue">Conheça o catálogo</button>
                </div>

                <div className="about-container">
                    <p>
                        O Florice conecta bancos de germoplasmas, pesquisadores,
                        agricultores e produtores rurais para garantir que a
                        diversidade gênica chegue na sociedade.
                    </p>
                </div>
            </div>    
        </div>
    );
}

export default Home;
