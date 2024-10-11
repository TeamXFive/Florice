import "../../styles/Catalogo/catalogo.css";

function Catalogo() {
    return (
        <div className="catalogo-container">
            <div className="catalogo-content">
                <div className="card">
                    <div className="titulo">
                        <h2>Triticum aestivum (Trigo Resiliente)</h2>
                    </div>
                    <div className="corpo">
                        <ul className="catalogo-card">
                            <li>
                                Fenótipo: Tolerância à seca, altura média,
                                folhas estreitas.
                            </li>
                            <li>
                                Local: Região semiárida do Nordeste brasileiro.
                            </li>
                            <li>Temperatura média: 28°C</li>
                            <li>Solo: Solo arenoso e pobre em nutrientes.</li>
                            <li>
                                Clima: Semiárido, baixa pluviosidade, altos
                                níveis de radiação solar.
                            </li>
                            <li>
                                Observações: Esta variedade de trigo tem alta
                                resiliência à seca prolongada e consegue
                                completar seu ciclo de vida com pouca água.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="titulo">
                        <h2>Oryza sativa (Arroz Tolerante à Salinidade)</h2>
                    </div>
                    <div className="corpo">
                        <ul className="catalogo-card">
                            <li>
                                Fenótipo: Plantas de porte médio, grãos médios e
                                resistentes ao sal.
                            </li>
                            <li>Local: Delta do Mekong, Vietnã.</li>
                            <li>Temperatura média: 26°C</li>
                            <li>Solo: Solo salino em áreas costeiras.</li>
                            <li>
                                Clima: Tropical úmido, altas taxas de
                                precipitação.
                            </li>
                            <li>
                                Observações: Esse arroz é altamente tolerante a
                                solos salinos e possui boa produtividade em
                                áreas sujeitas à intrusão de água do mar, sendo
                                uma opção estratégica para áreas costeiras
                                afetadas por mudanças climáticas.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="titulo">
                        <h2>Zea mays (Milho Tolerante ao Frio)</h2>
                    </div>
                    <div className="corpo">
                        <ul className="catalogo-card">
                            <li>
                                Fenótipo: Estatura baixa, folhas largas e
                                resistentes a geadas leves.
                            </li>
                            <li>Local: Altiplano Andino, Bolívia.</li>
                            <li>Temperatura média: 12°C</li>
                            <li>Solo: Solo argiloso, rico em minerais.</li>
                            <li>
                                Clima: Frio e seco, com grande variação de
                                temperatura entre o dia e a noite.
                            </li>
                            <li>
                                Observações: Esta variedade de milho é adaptada
                                a climas frios e pode sobreviver a geadas
                                noturnas leves. Seu ciclo de crescimento é mais
                                longo devido às temperaturas baixas, mas é ideal
                                para regiões montanhosas.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogo;
