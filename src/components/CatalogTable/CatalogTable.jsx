import React, { useState } from 'react';
import '../../styles/CatalogTable/catalogtable.css';

const CatalogTable = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleExpand = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const data = [
        {
            especie: 'Triticum aestivum',
            nome: 'Trigo Resiliente',
            clima: 'Semiárido, baixa pluviosidade',
            detalhes: null,
        },
        {
            especie: 'Oryza sativa',
            nome: 'Arroz tolerante a salinidade',
            clima: 'Tropical úmido, alta precipitação',
            detalhes: (
                <>
                    <p><strong>Fenótipo:</strong> Plantas de porte médio, grãos médios e resistentes ao sal.</p>
                    <p><strong>Local:</strong> Delta do Mekong, Vietnã.</p>
                    <p><strong>Temperatura média:</strong> 26°C</p>
                    <p><strong>Solo:</strong> Solo salino em áreas costeiras.</p>
                    <p><strong>Observações:</strong> Esse arroz é altamente tolerante a solos salinos e possui boa produtividade em áreas sujeitas à intrusão de água do mar, sendo uma opção estratégica para áreas costeiras afetadas por mudanças climáticas.</p>
                </>
            ),
        },
        {
            especie: 'Triticum aestivum',
            nome: 'Trigo Resiliente',
            clima: 'Semiárido, baixa pluviosidade',
            detalhes: null,
        },
        // Repita para os outros itens como necessário
    ];

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <th>Espécie</th>
                <th>Nome</th>
                <th>Clima</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <tr>
                        <td>{item.especie}</td>
                        <td>{item.nome}</td>
                        <td>{item.clima}</td>
                        <td>
                            <button onClick={() => toggleExpand(index)}>
                                {expandedRow === index ? '▲' : '▼'}
                            </button>
                        </td>
                    </tr>
                    {expandedRow === index && item.detalhes && (
                        <tr>
                            <td colSpan="4" style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                                {item.detalhes}
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
};

export default CatalogTable;
