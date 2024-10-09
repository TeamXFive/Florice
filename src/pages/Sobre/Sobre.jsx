import '../../styles/Sobre/Sobre.css'
import NavBar from '../../components/Navbar/Navbar';

function Sobre() {
    return (
        <div className="sobre-container">
            <div className='nav-bar'>

            <NavBar />
            </div>
            <section className='container-low'>
                <div className='container-conteudo'>
                <div className='foto-container'>
                    <div className='detalhe-box'>
                    </div>
                    <div className='foto-1'></div>
                    <div className='foto-2'></div>
                </div>
                <div className='texto-container'>
                    <div className='texto-conteudo'>
                O Florice é um projeto que visa facilitar a catalogação online de bancos de germoplasmas,
                 lugares pensados para a proteção desses germoplasmas, isso porque em um banco de germoplasma são armazenados
                  materiais genéticos de plantas estrategicamente selecionadas, mirando na escolha de genes que sobrevivem
                   à situações intensas (provocadas, por exemplo, pelas crises climáticas). Assim, o Florice
                    se torna uma fonte direta para pesquisadores, agricultores e produtores rurais que se asseguram que a 
                    diversidade gênica chegue na sociedade.
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre;